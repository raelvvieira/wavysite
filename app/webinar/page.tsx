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
  { href: "#mapa", label: "O mapa" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#prova", label: "Resultados" },
];

export default function WebinarPage() {
  return <main className="webinar-page" id="top">
    <IslandHeader home="/" links={navLinks} cta={{ href: EVENT.groupUrl, label: "Entrar no grupo", external: true, whatsapp: true }} />

    <section className="wb-hero section-shell"><span className="wb-badge"><i/>LIVE GRATUITA · TODA QUINTA, 19H</span><h1>A estratégia de tráfego +{"\u00a0"}CRM +{"\u00a0"}atendimento com IA <em className="gradient-text">que já levou negócios a mais de 10x de ROAS.</em></h1><p className="lead-copy">Ao vivo, eu mostro como rastrear cada real investido com um sistema só: tráfego pelas regras do Andromeda, CRM inteligente e atendimento com IA. Você vê seu CAC e seu ROAS e investe no que dá mais retorno.</p><div className="wb-actions"><Join/></div><dl className="wb-facts">{facts.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></section>

    <section className="wb-map wb-light section-shell" id="mapa"><div className="wb-heading"><h2>O mapa da solução, <em className="gradient-text">do começo ao fim.</em></h2><p>É este o quadro que eu desenho ao vivo, bloco por bloco. Na live, você entende cada parte dele.</p></div><div className="wb-map-frame"><img src="/assets/mapa-da-live.webp" width={1200} height={723} loading="lazy" decoding="async" alt="Visão geral do quadro-negro da live, com nove blocos desenhados a giz."/></div></section>

    <section className="wb-take section-shell" id="conteudo"><div className="wb-heading"><h2>O que você vai ver <em className="gradient-text">desenhado ao vivo.</em></h2><p>Primeiro, as 7 dores de quem investe em tráfego e o que cada uma custa. Depois, os três pilares que resolvem.</p></div><ol className="wb-take-grid">{pillars.map(([t,d],i)=><li key={t}><span aria-hidden="true">{i+1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol></section>

    <section className="wb-fit wb-light section-shell" id="para-quem"><div className="wb-heading"><h2>Essa live <em className="gradient-text">não é para todo mundo.</em></h2></div><div className="wb-fit-grid"><article className="yes"><small>É PARA VOCÊ SE</small><ul>{fitYes.map(t=><li key={t}><i aria-hidden="true">✓</i>{t}</li>)}</ul></article><article className="no"><small>NÃO É PARA VOCÊ SE</small><ul>{fitNo.map(t=><li key={t}><i aria-hidden="true">×</i>{t}</li>)}</ul></article></div></section>

    <section className="wb-proof section-shell" id="prova"><div className="wb-heading"><h2>Não é teoria. <em className="gradient-text">É o que roda na operação.</em></h2></div><div className="wb-host"><img src="/assets/founder.webp" alt="Rael Vieira" width={1000} height={1000} loading="lazy" decoding="async"/><div><small>QUEM APRESENTA</small><b>Rael Vieira, estrategista digital da WAVY</b><dl>{stats.map(([n,d])=><div key={n}><dt>{n}</dt><dd>{d}</dd></div>)}</dl></div></div><div className="wb-quotes">{quotes.map(([q,n,r])=><figure key={n}><blockquote>{q}</blockquote><figcaption><b>{n}</b><span>{r}</span></figcaption></figure>)}</div><div className="wb-actions"><Join/></div></section>

    <section className="final-cta section-shell"><h2><span>{EVENT.date} · {EVENT.time} · {EVENT.price}</span>Chega de anunciar <em className="gradient-text">no escuro.</em></h2><Join>Quero participar da live</Join></section>

    <SiteFooter links={navLinks} whatsapp={EVENT.groupUrl}/>
  </main>;
}
