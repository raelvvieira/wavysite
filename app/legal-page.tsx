import type { ReactNode } from "react";

export type LegalDocument = { eyebrow: string; title: string; intro: string[]; sections: { title: string; paragraphs: string[] }[] };

export function LegalPage({ document }: { document: LegalDocument }) {
  return <main className="legal-page">
    <header className="legal-header section-shell"><a className="legal-logo" href="/" aria-label="WAVY — página inicial"><img src="/assets/wavy-logo.png" alt="WAVY" /></a><a className="back-home" href="/"><span aria-hidden="true">←</span> Voltar para a Home</a></header>
    <section className="legal-hero section-shell"><p>{document.eyebrow}</p><h1>{document.title}</h1></section>
    <article className="legal-content section-shell">
      <div className="legal-intro">{document.intro.map((text, i) => <p key={i}>{renderLinks(text)}</p>)}</div>
      {document.sections.map((section, index) => <section className="legal-section" key={section.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{section.title}</h2>{section.paragraphs.map((text, i) => renderParagraph(text, i))}</div></section>)}
    </article>
    <footer className="legal-footer section-shell"><div><a className="legal-logo" href="/"><img src="/assets/wavy-logo.png" alt="WAVY" /></a><p>Performance conectada à operação comercial.</p></div><nav aria-label="Links jurídicos"><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></nav><p>© 2026 WAVY MARKETING</p></footer>
  </main>;
}

function renderParagraph(text: string, key: number) {
  if (text.startsWith("• ")) return <ul className="legal-list" key={key}>{text.split("\n").map((item) => <li key={item}>{renderLinks(item.replace(/^• /, ""))}</li>)}</ul>;
  return <p key={key}>{renderLinks(text)}</p>;
}

function renderLinks(text: string): ReactNode {
  const parts = text.split(/(contato@wavymarketing\.com\.br|Política de Privacidade da WAVY)/g);
  return parts.map((part, i) => part === "contato@wavymarketing.com.br" ? <a href="mailto:contato@wavymarketing.com.br" key={i}>{part}</a> : part === "Política de Privacidade da WAVY" ? <a href="/politica-de-privacidade" key={i}>{part}</a> : part);
}
