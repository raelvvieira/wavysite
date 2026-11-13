import type { Metadata } from "next";
import { BrandIcon } from "../brand-icons";
import { IslandHeader, SiteFooter } from "../chrome";
import { CrmDashboard, CrmFrame, PhoneChat } from "../mockups";

/* Dados do evento. Tudo o que muda de uma edição para outra fica aqui. */
const EVENT = {
  date: "Toda quinta-feira",
  time: "19h",
  format: "Online e ao vivo",
  price: "Gratuito",
  /* Enquanto o link do grupo não existe, o botão abre uma conversa com a WAVY. */
  groupUrl: "https://wa.me/555193228992?text=Ol%C3%A1%21%20Quero%20participar%20da%20live%20sobre%20a%20nova%20era%20do%20tr%C3%A1fego%20pago.",
};

export const metadata: Metadata = {
  title: "Live gratuita: a nova era do tráfego pago | WAVY",
  description: "Como tráfego pago, CRM e atendimento com IA no WhatsApp fecham o ciclo para escalar com previsibilidade. Entre no grupo e assista ao vivo.",
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

const usual = ["Campanha no ar", "Lead chega no WhatsApp", "Alguém responde quando dá"];
const cycle = [
  ["Tráfego pago", "O anúncio certo traz o cliente certo."],
  ["IA no WhatsApp", "Ele é atendido e qualificado na hora."],
  ["CRM", "Cada conversa vira um negócio no funil."],
  ["Métricas", "Você vê o que voltou e reinveste no que funciona."],
];

const agenda = [
  ["01", "TRÁFEGO", "A nova era do tráfego pago", "O que mudou no Meta Ads e no Google Ads, e por que só anunciar não fecha mais a conta."],
  ["02", "ATENDIMENTO", "IA no WhatsApp", "Como um agente de IA responde, qualifica e agenda sem deixar o cliente esfriar."],
  ["03", "CRM", "Todo lead dentro de um funil", "Como organizar WhatsApp e Instagram num lugar só e saber em que pé está cada negócio."],
  ["04", "DADOS", "ROI por canal, anúncio e criativo", "Como enxergar o retorno de cada real investido, até o nível do criativo."],
  ["05", "DADOS", "Seu custo de aquisição de cliente", "Como calcular o CAC de verdade, com a venda e não só com o lead."],
  ["06", "ESCALA", "Previsibilidade para crescer", "Como juntar as peças num ciclo que você consegue repetir e aumentar."],
];

const audience = [
  ["Você já anuncia", "Investe em tráfego, recebe leads e não sabe dizer quais anúncios viraram venda."],
  ["Você vende pelo WhatsApp", "Seu time atende na mão, demora para responder e perde cliente no meio do caminho."],
  ["Você quer escalar", "Quer aumentar a verba com segurança, sabendo quanto custa trazer cada cliente."],
];

const faqs = [
  ["Quando acontece?", "Toda quinta-feira, às 19h, ao vivo. Se você não puder nesta semana, é só continuar no grupo e assistir na próxima."],
  ["Como eu participo?", "Você entra no grupo do WhatsApp pelo botão desta página. É por lá que enviamos o link da live e os avisos."],
  ["Preciso já anunciar para aproveitar?", "Não. Quem já anuncia vai sair com ajustes para fazer. Quem ainda não anuncia vai entender como começar do jeito certo."],
  ["Vou precisar contratar alguma ferramenta?", "Não para assistir. Na live mostramos o WAVY CRM funcionando, mas os conceitos servem para qualquer operação."],
  ["O grupo vai ficar mandando mensagem o tempo todo?", "Não. O grupo serve para os avisos da live. Você pode sair quando quiser."],
];

const navLinks = [
  { href: "#conteudo", label: "O que você vai ver" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#quem", label: "Quem apresenta" },
  { href: "#faq", label: "Perguntas" },
];

export default function WebinarPage() {
  return <main className="webinar-page" id="top">
    <IslandHeader home="/" links={navLinks} cta={{ href: EVENT.groupUrl, label: "Entrar no grupo", external: true, whatsapp: true }} />

    <section className="hero-product wb-hero section-shell"><span className="wb-badge"><i/>LIVE GRATUITA · TODA QUINTA, 19H</span><h1>A nova era do tráfego pago fecha o ciclo com <span className="rotator"><em className="gradient-text">CRM</em><em className="gradient-text">IA no WhatsApp</em><em className="gradient-text">métricas de verdade</em></span></h1><p className="lead-copy">Uma aula ao vivo para mostrar como anúncio, CRM e atendimento com inteligência artificial trabalham juntos para você escalar com previsibilidade, sabendo o retorno de cada canal, de cada anúncio e de cada criativo.</p><dl className="wb-facts">{facts.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><div className="actions"><Join/></div><p className="hero-fineprint">Você entra no grupo e recebe o link da live por lá.</p>
      <div className="hero-stage"><div className="float-card ads meta" aria-hidden="true"><i><BrandIcon name="meta"/></i><div><small>META ADS</small><b>ROAS de 10,5x neste criativo</b><em>↗ o melhor da campanha</em></div></div><div className="float-card left" aria-hidden="true"><i>✦</i><div><small>CUSTO DE AQUISIÇÃO</small><b>R$ 149,73 por cliente</b></div></div><div className="float-card right" aria-hidden="true"><i>✓</i><div><small>AGENTE DE IA</small><b>Respondeu no WhatsApp em 8 s</b></div></div><CrmFrame label="Dashboard do WAVY CRM com faturamento, retorno dos anúncios e custo por venda" priority><CrmDashboard/></CrmFrame></div></section>

    <section className="wb-cycle section-shell"><div className="section-heading"><h2>Anunciar é só o começo. <em className="gradient-text">A venda acontece depois.</em></h2><p>A maioria das operações para no lead. O dinheiro está no que acontece dali em diante, e é esse pedaço que quase ninguém mede.</p></div><div className="wb-compare"><article className="wb-usual"><small>COMO A MAIORIA FAZ</small><ol>{usual.map(t=><li key={t}>{t}</li>)}</ol><p>O processo para aqui. Ninguém sabe o que virou venda.</p></article><article className="wb-full"><small>O CICLO COMPLETO</small><ol>{cycle.map(([t,d],i)=><li key={t}><span>{String(i+1).padStart(2,"0")}</span><div><b>{t}</b><p>{d}</p></div></li>)}</ol><p className="wb-loop"><i aria-hidden="true">↻</i>E o ciclo recomeça, com mais informação a cada volta.</p></article></div></section>

    <section className="wb-agenda section-shell" id="conteudo"><div className="section-heading"><span className="eyebrow"><i/>O QUE VOCÊ VAI VER NA LIVE</span><h2>Seis blocos,<br/><em className="gradient-text">do anúncio ao resultado.</em></h2></div><ol className="wb-agenda-grid">{agenda.map(([n,tag,t,d])=><li key={n}><span aria-hidden="true">{n}</span><small>{tag}</small><h3>{t}</h3><p>{d}</p></li>)}</ol><div className="wb-cta-row"><Join/></div></section>

    <section className="ai-section wb-demo section-shell"><div><span className="eyebrow"><i/>AO VIVO, NA TELA</span><h2>Você vai ver <em className="gradient-text">o sistema funcionando.</em></h2><p>Nada de slide com teoria. A gente abre o gerenciador de anúncios, o CRM e o WhatsApp e mostra o caminho de um cliente, do clique até a venda.</p><ul className="ai-points"><li><b>O anúncio</b><span>Como ler uma campanha e decidir o que pausar e o que escalar.</span></li><li><b>A conversa</b><span>A IA atendendo um lead no WhatsApp e marcando a reunião.</span></li><li><b>O número</b><span>O dashboard mostrando retorno e custo por venda de cada canal.</span></li></ul></div><PhoneChat/></section>

    <section className="wb-audience section-shell" id="para-quem"><div className="section-heading"><span className="eyebrow"><i/>PARA QUEM É</span><h2>Essa live é para você <em className="gradient-text">se alguma destas é a sua situação.</em></h2></div><div className="wb-audience-grid">{audience.map(([t,d],i)=><article key={t}><span aria-hidden="true">{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="founder section-shell" id="quem"><div className="founder-photo"><img src="/assets/founder.webp" alt="Rael Vieira, da WAVY" width={1000} height={1000} loading="lazy" decoding="async"/></div><div className="founder-copy"><span className="eyebrow"><i/>QUEM APRESENTA</span><h2>Rael Vieira, <em className="gradient-text">estrategista digital.</em></h2><p>Trabalho com marketing digital há mais de 4 anos e sempre fui apaixonado por vendas. Já fui gerente comercial em grandes empresas de tecnologia no Brasil e faturei mais de R$ 200 mil por mês no e-commerce.</p><p>Já ajudei negócios a sair do zero e passar de 10 vezes de retorno sobre o investimento em anúncios. Na live, mostro o método que uso na WAVY.</p><dl className="founder-stats"><div><dt>+4 anos</dt><dd>como estrategista digital</dd></div><div><dt>+R$ 200 mil</dt><dd>por mês no e-commerce</dd></div><div><dt>+10x</dt><dd>de ROAS em negócios que saíram do zero</dd></div></dl></div></section>

    <section className="faq section-shell" id="faq"><div className="faq-heading"><span className="eyebrow"><i/>PERGUNTAS FREQUENTES</span><h2>Antes de entrar,<br/><em className="gradient-text">as dúvidas de sempre.</em></h2></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<i aria-hidden="true"/></summary><p>{a}</p></details>)}</div></section>

    <section className="final-cta section-shell"><h2><span>{EVENT.date} · {EVENT.time} · {EVENT.price}</span>Garanta seu lugar <em className="gradient-text">na live.</em></h2><Join/></section>

    <a className="whatsapp-float" href={EVENT.groupUrl} target="_blank" rel="noreferrer" aria-label="Entrar no grupo da live pelo WhatsApp"><img src="/assets/whatsapp-float.webp" alt="" width={62} height={62}/></a>
    <SiteFooter links={navLinks} whatsapp={EVENT.groupUrl}/>
  </main>;
}
