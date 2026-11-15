import type { Metadata } from "next";
import { BrandIcon } from "../brand-icons";
import { IslandHeader, SiteFooter } from "../chrome";

/* Dados do evento. Tudo o que muda de uma edição para outra fica aqui. */
const EVENT = {
  date: "Toda quinta-feira",
  time: "19h",
  format: "Online e ao vivo",
  price: "Gratuito",
  groupUrl: "https://chat.whatsapp.com/G7dJIRMSQ9ZEtc0KxD6L70",
};

export const metadata: Metadata = {
  title: "Live gratuita: tráfego, CRM e IA para escalar com previsibilidade | WAVY",
  description: "Toda quinta, às 19h: como rastrear cada real do tráfego pago com um sistema só, que une tráfego pelas regras do Andromeda, CRM inteligente e atendimento com IA.",
};

function Join({ children = "Entrar no grupo do WhatsApp" }: { children?: React.ReactNode }) {
  return <a className="wa-button" href={EVENT.groupUrl} target="_blank" rel="noreferrer"><BrandIcon name="whatsapp"/><span>{children}</span></a>;
}

const facts = [
  ["Quando", EVENT.date],
  ["Horário", EVENT.time],
  ["Formato", EVENT.format],
  ["Participação", EVENT.price],
];

const GoogleAds = () => <svg className="gads" viewBox="0 0 24 24" aria-hidden="true"><rect x="11.2" y="1.5" width="6.6" height="20" rx="3.3" transform="rotate(-30 14.5 11.5)" fill="#4285f4"/><rect x="6.2" y="1.5" width="6.6" height="20" rx="3.3" transform="rotate(30 9.5 11.5)" fill="#fbbc04"/><circle cx="5.3" cy="18.3" r="3.3" fill="#34a853"/></svg>;

/* Um cliente de exemplo, do clique à venda. Os valores são ilustrativos. */
const flow: { tag: string; title: string; chip: string; scene: React.ReactNode }[] = [
  { tag: "ANÚNCIO", title: "Ana clica no anúncio", chip: "Meta Ads · criativo 03",
    scene: <div className="wb-ads"><i><BrandIcon name="meta"/></i><i><GoogleAds/></i></div> },
  { tag: "ATENDIMENTO COM IA", title: "A IA responde em 8\u00a0s", chip: "Lead qualificado",
    scene: <div className="wb-chat"><p className="in">Oi! Como funciona?</p><p className="out"><b>✦ IA</b>Oi, Ana! Te explico agora.</p></div> },
  { tag: "CRM", title: "O card anda sozinho no funil", chip: "Reunião · qui, 14h",
    scene: <div className="wb-kanban"><div><small>Novo</small><u/></div><div><small>Reunião</small><u/></div><div><small>Ganho</small></div><span className="wb-card">Ana</span></div> },
  { tag: "VENDA", title: "Ana fecha", chip: "R$ 1.306",
    scene: <div className="wb-sale"><i>✓</i></div> },
  { tag: "RESULTADO", title: "A venda volta para o anúncio", chip: "Escalar o criativo 03",
    scene: <div className="wb-metrics"><div><small>CAC</small><b>R$ 149,73</b></div><div><small>ROAS</small><b>8,7x</b></div></div> },
];

const pillars = [
  ["Tráfego pelas regras do Andromeda", "Como o Meta distribui anúncios hoje, a matriz de ângulos por etapa do funil e o volume de criativos que o sistema pede."],
  ["CRM inteligente", "Cada conversa no funil, com a nota do lead, o próximo passo e o dinheiro parado em cada etapa."],
  ["Atendimento com IA", "Resposta em segundos, qualificação de cada lead e recuperação de quem parou de responder."],
];

const fitYes = [
  "Você já trocou de gestor de tráfego e nunca viu a prova do resultado.",
  "Você já investe em tráfego pago.",
  "Você vende conversando com o cliente, pelo WhatsApp ou pelo Instagram.",
  "Seu time demora para responder e você sabe que perde venda por isso.",
  "Você quer aumentar a verba, mas não sabe dizer o que está funcionando.",
];
const fitNo = [
  "Você procura um truque de anúncio para vender amanhã.",
  "Você não pretende mudar nada no seu atendimento.",
  "Você quer só assistir, sem aplicar.",
];

const stats = [
  ["+10x", "de ROAS em negócios que saíram do zero"],
  ["+R$ 200 mil", "por mês no e-commerce"],
  ["+4 anos", "como estrategista digital"],
];

const quotes = [
  ["“Antes, investíamos em anúncios sem enxergar com clareza o que realmente virava venda. A WAVY conectou o marketing ao nosso processo comercial e hoje conseguimos tomar decisões com muito mais segurança.”", "Dr. Loan Tomiello", "Dentista e Mentor"],
  ["“O trabalho foi muito além do tráfego pago. A equipe entendeu como atendíamos os leads, encontrou pontos que faziam oportunidades esfriarem e nos ajudou a organizar um processo mais eficiente.”", "Giovani", "JRG Empreendimentos Imobiliários"],
  ["“Passamos a entender melhor a origem das oportunidades e o que precisava ser melhorado em cada etapa do funil. Hoje marketing e vendas trabalham com a mesma visão.”", "Heiner Hofmann", "CEO Heiner Academy"],
];

const navLinks = [
  { href: "#fluxo", label: "Como funciona" },
  { href: "#conteudo", label: "O que você vai ver" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#prova", label: "Resultados" },
];

export default function WebinarPage() {
  return <main className="webinar-page" id="top">
    <IslandHeader home="/" links={navLinks} cta={{ href: EVENT.groupUrl, label: "Entrar no grupo", external: true, whatsapp: true }} />

    <section className="wb-hero section-shell"><span className="wb-badge"><i/>LIVE GRATUITA · TODA QUINTA, 19H</span><h1>A estratégia de tráfego, CRM e atendimento com IA <em className="gradient-text">que já levou negócios a mais de 10x de ROAS.</em></h1><p className="lead-copy">Ao vivo, eu mostro como rastrear cada real investido com um sistema só: tráfego pelas regras do Andromeda, CRM inteligente e atendimento com IA. Você vê seu CAC e seu ROAS e investe no que dá mais retorno.</p><div className="wb-actions"><Join/></div><dl className="wb-facts">{facts.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></section>

    <section className="wb-flow-section section-shell" id="fluxo"><div className="wb-heading"><h2>Um cliente, <em className="gradient-text">do clique à venda.</em></h2><p>Hoje o anúncio fica num lugar, a conversa em outro e a venda num terceiro. Na live, você vê os três ligados.</p></div>
      <ol className="wb-flow" aria-label="Exemplo do caminho de um cliente: anúncio, atendimento com IA, CRM, venda e resultado">{flow.map((f,i)=><li key={f.tag} className={`n${i+1}`}><div className="wb-node"><div className="wb-scene" aria-hidden="true">{f.scene}</div><small>{f.tag}</small><b>{f.title}</b><span className="wb-chip">{f.chip}</span></div></li>)}</ol>
      <p className="wb-loop"><i aria-hidden="true">↻</i>Com a venda ligada ao anúncio, você sabe qual criativo escalar.</p><p className="wb-note">Exemplo ilustrativo.</p></section>

    <section className="wb-take section-shell" id="conteudo"><div className="wb-heading"><h2>O que você vai ver <em className="gradient-text">desenhado ao vivo.</em></h2><p>Primeiro, as 7 dores de quem investe em tráfego e o que cada uma custa. Depois, os três pilares que resolvem.</p></div><ol className="wb-take-grid">{pillars.map(([t,d],i)=><li key={t}><span aria-hidden="true">{i+1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol></section>

    <section className="wb-fit section-shell" id="para-quem"><div className="wb-heading"><h2>Essa live <em className="gradient-text">não é para todo mundo.</em></h2></div><div className="wb-fit-grid"><article className="yes"><small>É PARA VOCÊ SE</small><ul>{fitYes.map(t=><li key={t}><i aria-hidden="true">✓</i>{t}</li>)}</ul></article><article className="no"><small>NÃO É PARA VOCÊ SE</small><ul>{fitNo.map(t=><li key={t}><i aria-hidden="true">×</i>{t}</li>)}</ul></article></div></section>

    <section className="wb-proof section-shell" id="prova"><div className="wb-heading"><h2>Não é teoria. <em className="gradient-text">É o que roda na operação.</em></h2></div><div className="wb-host"><img src="/assets/founder.webp" alt="Rael Vieira" width={1000} height={1000} loading="lazy" decoding="async"/><div><small>QUEM APRESENTA</small><b>Rael Vieira, estrategista digital da WAVY</b><dl>{stats.map(([n,d])=><div key={n}><dt>{n}</dt><dd>{d}</dd></div>)}</dl></div></div><div className="wb-quotes">{quotes.map(([q,n,r])=><figure key={n}><blockquote>{q}</blockquote><figcaption><b>{n}</b><span>{r}</span></figcaption></figure>)}</div><div className="wb-actions"><Join/></div></section>

    <section className="final-cta section-shell"><h2><span>{EVENT.date} · {EVENT.time} · {EVENT.price}</span>Chega de anunciar <em className="gradient-text">no escuro.</em></h2><Join>Quero participar da live</Join></section>

    <SiteFooter links={navLinks} whatsapp={EVENT.groupUrl}/>
  </main>;
}
