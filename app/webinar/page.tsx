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

const shifts = {
  before: ["O gestor escolhe o público", "Três anúncios parecidos", "A campanha otimiza por mensagem"],
  now: ["O criativo encontra o público", "Vários ângulos para cada etapa do funil", "A campanha otimiza por venda"],
};

const answers = [
  ["Onde o seu dinheiro está escapando", "As 7 dores de quem investe em tráfego e o que cada uma custa."],
  ["Como o Meta distribui anúncios hoje", "O Andromeda, a matriz de ângulos e o volume de criativos que o sistema pede."],
  ["O CRM e a IA funcionando", "Eu abro o sistema ao vivo: o card andando sozinho no funil, a nota de cada lead e a recuperação de quem parou de responder."],
  ["Como a venda volta para o anúncio", "O ciclo que mostra o ROAS real e ensina a campanha a buscar quem compra."],
];

const navLinks = [
  { href: "#problema", label: "O problema" },
  { href: "#virada", label: "A virada" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#prova", label: "Quem apresenta" },
];

export default function WebinarPage() {
  return <main className="webinar-page" id="top">
    <IslandHeader home="/" links={navLinks} cta={{ href: EVENT.groupUrl, label: "Entrar no grupo", external: true, whatsapp: true }} />

    <section className="wb-hero section-shell"><span className="wb-badge"><i/>LIVE GRATUITA · TODA QUINTA, 19H</span><h1>A estratégia de tráfego +{"\u00a0"}CRM +{"\u00a0"}atendimento com IA <em className="gradient-text">que já levou negócios a mais de 10x de ROAS.</em></h1><p className="lead-copy">Ao vivo, eu mostro como rastrear cada real investido com um sistema só: tráfego pelas regras do Andromeda, CRM inteligente e atendimento com IA. Você vê seu CAC e seu ROAS e investe no que dá mais retorno.</p><div className="wb-actions"><Join/></div><dl className="wb-facts">{facts.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><figure className="wb-hero-map"><img src="/assets/mapa-live-mini.webp" width={1200} height={723} decoding="async" alt="Visão geral do quadro-negro da live, com nove blocos desenhados a giz."/><figcaption>O mapa que eu desenho ao vivo, bloco por bloco.</figcaption></figure></section>

    <section className="wb-part wb-light section-shell" id="problema"><div className="wb-prose"><span className="wb-kicker">PARTE I · O PROBLEMA</span><h2>Você já trocou de gestor. <em className="gradient-text">A prova do resultado nunca veio.</em></h2><p>Você contratou um gestor de tráfego. Ele prometeu resultado. Passaram três meses e você recebeu relatório de clique, de alcance e de lead. Quando perguntou quanto daquilo virou venda, <b>ninguém soube dizer</b>.</p><p>Aí você trocou de gestor. E a história se repetiu.</p><p>O problema nunca foi a pessoa. O gestor trabalha sem enxergar a venda, e você paga sem enxergar o retorno. <b>Os dois estão no escuro.</b></p><p>Enquanto isso, o lead espera horas por uma resposta. A venda do começo do mês desce na lista do WhatsApp e some. E ninguém sabe quanto dinheiro está parado em cada etapa.</p><p className="wb-punch">Nada disso é problema de anúncio. É falta de rastreabilidade.</p></div></section>

    <section className="wb-part section-shell" id="mudanca"><div className="wb-prose"><span className="wb-kicker">PARTE II · O QUE MUDOU</span><h2>O jeito de anunciar mudou. <em className="gradient-text">A operação da maioria, não.</em></h2><p>Antes, o trabalho do gestor era escolher o público. Hoje o Meta usa um sistema chamado Andromeda, que encontra o público sozinho, lendo o seu criativo. <b>O criativo virou a segmentação.</b></p><p>Por isso o sistema pede variedade: vários ângulos para cada etapa do funil, e vários criativos para cada ângulo. Com IA na produção, dá para fazer esse volume sem triplicar o time.</p></div><div className="wb-shift"><article><small>ANTES</small><ul>{shifts.before.map(t=><li key={t}>{t}</li>)}</ul></article><i aria-hidden="true">→</i><article className="now"><small>HOJE</small><ul>{shifts.now.map(t=><li key={t}>{t}</li>)}</ul></article></div><div className="wb-prose"><p>O resultado é mais gente chamando no WhatsApp, por um custo menor. E um problema novo: <b>o que fazer com tanta mensagem chegando.</b></p></div></section>

    <section className="wb-part wb-light section-shell" id="virada"><div className="wb-prose"><span className="wb-kicker">PARTE III · A VIRADA</span><h2>Anunciar mais não resolve. <em className="gradient-text">Enxergar a venda resolve.</em></h2><p>A virada é ligar três peças que hoje vivem separadas, cada uma com um fornecedor diferente.</p></div><ol className="wb-take-grid">{pillars.map(([t,d],i)=><li key={t}><span aria-hidden="true">{i+1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol><div className="wb-prose"><p>Quando a venda acontece, o CRM registra e devolve para o Meta e para o Google Ads. A campanha para de otimizar por mensagem e passa a otimizar por compra.</p><p className="wb-punch">É daí que sai o seu ROAS real, por canal, por anúncio e por criativo.</p></div></section>

    <section className="wb-part wb-fit section-shell" id="para-quem"><div className="wb-prose"><span className="wb-kicker">PARTE IV · PARA QUEM É</span><h2>Essa live <em className="gradient-text">não é para todo mundo.</em></h2></div><div className="wb-fit-grid"><article className="yes"><small>É PARA VOCÊ SE</small><ul>{fitYes.map(t=><li key={t}><i aria-hidden="true">✓</i>{t}</li>)}</ul></article><article className="no"><small>NÃO É PARA VOCÊ SE</small><ul>{fitNo.map(t=><li key={t}><i aria-hidden="true">×</i>{t}</li>)}</ul></article></div><div className="wb-actions"><Join/></div><p className="wb-under">{EVENT.date} · {EVENT.time} · ao vivo · {EVENT.price.toLowerCase()}</p></section>

    <section className="wb-part wb-light section-shell" id="conteudo"><div className="wb-prose"><span className="wb-kicker">PARTE V · O QUE VOCÊ VAI VER</span><h2>Quatro blocos, <em className="gradient-text">desenhados na sua frente.</em></h2></div><ol className="wb-answers">{answers.map(([t,d],i)=><li key={t}><span aria-hidden="true">{String(i+1).padStart(2,"0")}</span><div><h3>{t}</h3><p>{d}</p></div></li>)}</ol></section>

    <section className="wb-proof section-shell" id="prova"><div className="wb-heading"><span className="wb-kicker center">NA PRÁTICA</span><h2>Não é teoria. <em className="gradient-text">É o que roda na operação.</em></h2></div><div className="wb-host"><img src="/assets/founder.webp" alt="Rael Vieira" width={1000} height={1000} loading="lazy" decoding="async"/><div><small>QUEM APRESENTA</small><b>Rael Vieira, estrategista digital da WAVY</b><dl>{stats.map(([n,d])=><div key={n}><dt>{n}</dt><dd>{d}</dd></div>)}</dl></div></div><div className="wb-quotes">{quotes.map(([q,n,r])=><figure key={n}><blockquote>{q}</blockquote><figcaption><b>{n}</b><span>{r}</span></figcaption></figure>)}</div><div className="wb-actions"><Join/></div></section>

    <section className="final-cta section-shell"><h2><span>{EVENT.date} · {EVENT.time} · {EVENT.price}</span>Chega de anunciar <em className="gradient-text">no escuro.</em></h2><Join>Quero participar da live</Join></section>

    <SiteFooter links={navLinks} whatsapp={EVENT.groupUrl}/>
  </main>;
}
