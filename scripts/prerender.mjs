#!/usr/bin/env node
// Gera hostinger-files/ — a pasta estática que a Hostinger publica.
//
// O `vinext build` produz os assets em dist/client/, mas não os index.html das
// páginas: ele compila um Worker que renderiza o HTML sob demanda, e a
// hospedagem não executa Worker. Este script sobe o servidor de produção,
// salva o HTML de cada rota e monta a pasta final.
//
// Uso: npm run build:static

import { spawn } from "node:child_process";
import { cp, mkdir, readdir, rm, writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const appDir = join(root, "app");
const distClient = join(root, "dist", "client");
const outDir = join(root, "hostinger-files");
const htaccess = join(outDir, ".htaccess");
const port = Number(process.env.PRERENDER_PORT ?? 3000);
const origin = `http://127.0.0.1:${port}`;

// Cada app/**/page.tsx é uma rota. Descobrir em vez de manter uma lista evita
// que uma página nova seja publicada sem o seu HTML.
async function findRoutes(dir = appDir, prefix = "") {
  const routes = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith("_") || entry.name.startsWith("(")) continue;
      routes.push(...(await findRoutes(join(dir, entry.name), `${prefix}/${entry.name}`)));
    } else if (entry.name === "page.tsx" || entry.name === "page.jsx") {
      routes.push(prefix === "" ? "/" : prefix);
    }
  }
  return routes.sort();
}

function run(command, args, options = {}) {
  return new Promise((ok, fail) => {
    const child = spawn(command, args, { cwd: root, stdio: "inherit", ...options });
    child.on("error", fail);
    child.on("exit", (code) => (code === 0 ? ok() : fail(new Error(`${command} ${args.join(" ")} saiu com código ${code}`))));
  });
}

async function waitForServer(timeoutMs = 90_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(origin, { signal: AbortSignal.timeout(3000) });
      if (response.ok) return;
    } catch {
      // servidor ainda subindo
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`o servidor não respondeu em ${origin} dentro do tempo limite`);
}

async function main() {
  const routes = await findRoutes();
  if (routes.length === 0) throw new Error("nenhuma rota encontrada em app/");
  console.log(`Rotas encontradas: ${routes.join(", ")}`);

  console.log("\n[1/4] build");
  await run("npm", ["run", "build"]);
  if (!existsSync(distClient)) throw new Error("dist/client não foi gerado pelo build");

  console.log("\n[2/4] subindo o servidor de produção");
  // `npm run start` cria um neto (vinext). Matar só o npm deixa o neto vivo
  // segurando os descritores herdados, o que trava quem estiver lendo a saída
  // deste script. Por isso: grupo de processos próprio, encerrado inteiro.
  const server = spawn("npm", ["run", "start"], {
    cwd: root,
    stdio: "ignore",
    detached: true,
    env: { ...process.env, PORT: String(port) },
  });
  let stopped = false;
  const stop = () => {
    if (stopped) return;
    stopped = true;
    try { process.kill(-server.pid, "SIGTERM"); } catch { /* já encerrado */ }
  };
  process.on("exit", stop);
  process.on("SIGINT", () => { stop(); process.exit(130); });

  try {
    await waitForServer();

    console.log("\n[3/4] montando hostinger-files/");
    // O .htaccess é escrito à mão e não sai do build: preservar entre execuções.
    const rules = existsSync(htaccess) ? await readFile(htaccess) : null;
    if (!rules) throw new Error("hostinger-files/.htaccess não encontrado — ele não é gerado pelo build e não pode ser perdido");
    await rm(outDir, { recursive: true, force: true });
    await mkdir(outDir, { recursive: true });
    await cp(distClient, outDir, { recursive: true });
    await writeFile(htaccess, rules);

    console.log("\n[4/4] pré-renderizando");
    for (const route of routes) {
      const response = await fetch(`${origin}${route}`);
      if (!response.ok) throw new Error(`${route} respondeu ${response.status}`);
      const html = await response.text();
      if (html.includes("/workspace/")) throw new Error(`${route} contém caminho da máquina de build (/workspace/) — apague .vinext/ e rode de novo`);
      const file = join(outDir, route === "/" ? "index.html" : `${route.slice(1)}/index.html`);
      await mkdir(dirname(file), { recursive: true });
      await writeFile(file, html);
      console.log(`  ${route.padEnd(28)} ${String(html.length).padStart(7)} bytes`);
    }

    // Toda referência a /assets/... precisa existir na pasta publicada, senão o
    // site sobe com CSS, fonte ou imagem quebrada e nada acusa o erro.
    const pages = routes.map((r) => join(outDir, r === "/" ? "index.html" : `${r.slice(1)}/index.html`));
    const referenced = new Set();
    for (const page of pages) {
      for (const match of (await readFile(page, "utf8")).matchAll(/\/assets\/[^"'()\\\s]+/g)) referenced.add(match[0]);
    }
    const missing = [...referenced].filter((asset) => !existsSync(join(outDir, asset)));
    if (missing.length > 0) throw new Error(`assets referenciados mas ausentes:\n  ${missing.join("\n  ")}`);

    console.log(`\nOK — ${routes.length} rotas, ${referenced.size} assets conferidos.`);
    console.log("Confira o resultado, faça commit de hostinger-files/ e publique na Hostinger.");
  } finally {
    stop();
  }
}

main().catch((error) => {
  console.error(`\nFalhou: ${error.message}`);
  process.exit(1);
});
