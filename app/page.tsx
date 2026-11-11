import { CrmDashboard, CrmFrame, CrmInbox, CrmKanban, PhoneChat } from "./mockups";

const WHATSAPP = "https://wa.me/555193228992?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20WAVY.";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Logo() {
  return <a className="logo" href="#top" aria-label="WAVY — início"><img src="/assets/wavy-logo.webp" alt="WAVY" width={480} height={138} /></a>;
}

function Button({ children, secondary = false, href = "#como-funciona" }: { children: React.ReactNode; secondary?: boolean; href?: string }) {
  return <a className={secondary ? "button secondary" : "button branded-button"} href={secondary ? href : WHATSAPP} target={secondary ? undefined : "_blank"} rel="noreferrer">{!secondary&&<span className="button-mark"><img src="/assets/wavy-button-mark.jpg" alt="" width={64} height={64}/></span>}<span className="button-label">{children}</span>{secondary&&<Arrow />}</a>;
}

function Header() {
  return <header className="header"><Logo /><nav aria-label="Navegação principal"><a href="#plataforma">Plataforma</a><a href="#ia">IA de atendimento</a><a href="#como-funciona">Como funciona</a><a href="#resultados">Resultados</a><a href="#faq">Perguntas</a><a className="nav-cta" href="/crm">Conhecer o CRM <span>↗</span></a></nav><details className="mobile-menu"><summary aria-label="Abrir menu"><span /><span /></summary><div><a href="#plataforma">Plataforma</a><a href="#ia">IA de atendimento</a><a href="#como-funciona">Como funciona</a><a href="#resultados">Resultados</a><a href="#faq">Perguntas</a><a href="/crm">CRM</a></div></details></header>;
}

const partnerLogos = [
  ["abpr.webp","ABPR"],["deni-haut.webp","Deni Haut"],["heiner-hofmann.webp","Heiner Hofmann"],["jrg.webp","JRG Empreendimentos"],
  ["kitesurf.webp","Kitesurf Adventure"],["loane-tomello.webp","Loane Tomello"],["mauro-kwitko.webp","Dr. Mauro Kwitko"],["nubeauty.webp","NuBeauty"]
];

function PartnerMarquee(){const logos=[...partnerLogos,...partnerLogos];return <section className="partner-marquee" aria-label="Empresas parceiras"><div className="partner-track">{logos.map(([file,name],i)=><div className="partner-logo" key={`${file}-${i}`} aria-hidden={i>=partnerLogos.length}><img src={`/assets/partners/${file}`} alt={i<partnerLogos.length?name:""} loading="lazy" decoding="async"/></div>)}</div></section>}


const comparison = {
  common: [
    "Uma agência para os anúncios, outro parceiro para o site e uma ferramenta solta para atender.",
    "Relatório de cliques, impressões e alcance.",
    "O lead chega no WhatsApp e ninguém sabe de qual anúncio ele veio.",
    "Cada parte cuida do próprio número. Ninguém olha para a venda.",
  ],
  wavy: [
    "Um time cuida de anúncio, rastreamento, site e CRM.",
    "Dashboard com investimento, leads e vendas na mesma tela.",
    "Cada oportunidade é acompanhada do clique até o fechamento.",
    "Um responsável pelo caminho inteiro e ajustes a cada ciclo.",
  ],
};

function Comparison() {
  return <div className="compare"><article className="compare-col"><small>DO JEITO COMUM</small><ul>{comparison.common.map(t=><li key={t}><i aria-hidden="true">×</i>{t}</li>)}</ul></article><article className="compare-col wavy"><small>COM A WAVY</small><ul>{comparison.wavy.map(t=><li key={t}><i aria-hidden="true">✓</i>{t}</li>)}</ul></article></div>;
}

const steps = [
  ["01", "Diagnóstico", "Analisamos seus anúncios, seu atendimento e seus dados atuais para encontrar onde as vendas estão se perdendo."],
  ["02", "Estrutura", "Configuramos o rastreamento, ajustamos o site ou a landing page e organizamos o funil no CRM."],
  ["03", "Campanhas no ar", "Criamos artes, roteiros e anúncios voltados para quem tem intenção real de compra."],
  ["04", "Atendimento conectado", "Os leads entram no CRM e seu time atende com um playbook de vendas claro."],
  ["05", "Leitura e ajuste", "Acompanhamos os números no dashboard e ajustamos anúncio, página e abordagem a partir do que virou venda."],
];

const faqs = [
  ["Preciso contratar outra agência para artes ou site?", "Não. Artes, roteiros, landing pages e sites fazem parte das frentes da WAVY. A ideia é justamente ter um time só respondendo pelo caminho até a venda."],
  ["Vocês cuidam só do marketing ou também do comercial?", "Dos dois. Organizamos o funil e o playbook de vendas no CRM e acompanhamos onde as oportunidades esfriam, para o seu time aproveitar melhor os leads que o tráfego gera."],
  ["A IA atende sozinha? E se o lead quiser falar com uma pessoa?", "O agente de IA responde, tira dúvidas, qualifica e agenda dentro do WAVY CRM. A conversa fica registrada e o seu time pode assumir o atendimento quando quiser."],
  ["Como eu acompanho os resultados?", "Pelo WAVY Dashboard, que reúne Meta Ads, Google Ads e os dados da operação comercial em uma só visão: quanto foi investido, o que gerou resultado e onde estão as oportunidades de melhoria."],
  ["Para que tipo de empresa a WAVY é indicada?", "Para empresas que vendem por atendimento, como clínicas, imobiliárias, educação e serviços, e que já anunciam ou querem anunciar, mas não enxergam com clareza o que vira venda."],
  ["Como começa?", "Por uma conversa de diagnóstico. Você conta como funcionam hoje sua captação e seu atendimento, e mostramos onde estão os gargalos e o que a operação incluiria no seu caso."],
];

function Footer() {
  return <footer className="footer section-shell">
    <div className="footer-brand"><Logo/><p>Performance conectada à operação comercial.</p><span>Belo Horizonte — MG</span><span>CNPJ 46.975.244/0001-90</span><nav className="footer-brand-legal" aria-label="Documentos e produtos"><a href="/crm">WAVY CRM</a><a href="/dashboard">WAVY Dashboard</a><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></nav></div>
    <div><small>NAVEGAÇÃO</small><a href="#plataforma">Plataforma</a><a href="#ia">IA de atendimento</a><a href="#como-funciona">Como funciona</a><a href="#resultados">Resultados</a><a href="#faq">Perguntas</a></div>
    <div><small>CONTATO</small><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp <Arrow/></a><a className="instagram-link" href="https://www.instagram.com/wavy.mkt/" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="instagram-dot"/></svg>Instagram</a><a href="mailto:contato@wavymarketing.com.br">contato@wavymarketing.com.br</a></div>
    <p className="copyright">© 2026 WAVY MARKETING — BELO HORIZONTE, MG</p>
  </footer>;
}

export default function Home() {
  return <main id="top"><Header />
    <section className="hero-product section-shell"><span className="eyebrow"><i/>TRÁFEGO · CRM · AGENTE DE IA</span><h1>Escalamos suas vendas com <span className="rotator"><em className="gradient-text">tráfego pago</em><em className="gradient-text">CRM omnichannel</em><em className="gradient-text">atendimento com IA</em></span></h1><p className="lead-copy">Somos uma agência de marketing de performance que acompanha o seu processo comercial inteiro, do anúncio ao fechamento, com decisões baseadas em dados e IA no atendimento.</p><div className="actions"><Button>Agendar diagnóstico</Button></div><div className="hero-stage"><div className="float-card left" aria-hidden="true"><i>✦</i><div><small>AGENTE DE IA</small><b>Respondeu no WhatsApp em 8 s</b></div></div><div className="float-card right" aria-hidden="true"><i>✓</i><div><small>NO FUNIL</small><b>Reunião agendada · Nota da IA 96</b></div></div><CrmFrame label="Tela do WAVY CRM: dashboard com faturamento, retorno dos anúncios e funil de vendas"><CrmDashboard/></CrmFrame></div></section>

    <PartnerMarquee/>

    <section className="problem section-shell" id="problema"><span className="eyebrow"><i/>O PROBLEMA</span><h2>Hoje são vários fornecedores.<br/><em className="gradient-text">E nenhum responde pela venda.</em></h2><p>Uma agência anuncia, outra faz o site e o atendimento fica numa ferramenta à parte. Quando a venda não vem, ninguém sabe dizer onde ela se perdeu.</p><Comparison/></section>

    <section className="platform section-shell" id="plataforma"><span className="eyebrow"><i/>A PLATAFORMA</span><h2>WhatsApp, Instagram, funil e anúncios. <em className="gradient-text">Na mesma tela.</em></h2><p className="platform-intro">O WAVY CRM é onde a operação acontece. Seu time atende, acompanha cada negócio e vê o retorno dos anúncios sem trocar de ferramenta.</p><div className="platform-tabs"><input type="radio" name="platform-tab" id="tab-conversas" defaultChecked/><input type="radio" name="platform-tab" id="tab-funil"/><input type="radio" name="platform-tab" id="tab-dashboard"/><div className="tab-bar"><label htmlFor="tab-conversas">Conversas</label><label htmlFor="tab-funil">Funil de vendas</label><label htmlFor="tab-dashboard">Dashboard</label></div>
      <div className="tab-panel panel-conversas"><CrmFrame label="Tela de conversas do WAVY CRM, com WhatsApp e Instagram na mesma caixa de entrada e o agente de IA respondendo"><CrmInbox/></CrmFrame><div className="tab-caption"><p><b>Caixa de entrada omnichannel.</b> WhatsApp e Instagram no mesmo lugar, com o agente de IA respondendo e o histórico de cada contato ao lado.</p><a href="/crm">Conhecer o WAVY CRM <Arrow/></a></div></div>
      <div className="tab-panel panel-funil"><CrmFrame label="Tela de funil de vendas do WAVY CRM, com nota da IA e próximo passo em cada negócio"><CrmKanban/></CrmFrame><div className="tab-caption"><p><b>Funil com nota da IA.</b> Cada negócio recebe uma nota e um próximo passo sugerido, para o time saber em quem focar primeiro.</p><a href="/crm">Conhecer o WAVY CRM <Arrow/></a></div></div>
      <div className="tab-panel panel-dashboard"><CrmFrame label="Dashboard do WAVY CRM com faturamento, retorno geral e custo por venda dos anúncios"><CrmDashboard/></CrmFrame><div className="tab-caption"><p><b>Anúncios no resultado do negócio.</b> Investimento, retorno e custo por venda ao lado do faturamento, e não só cliques e alcance.</p><a href="/dashboard">Conhecer o WAVY Dashboard <Arrow/></a></div></div>
    </div></section>

    <section className="ai-section section-shell" id="ia"><div><span className="eyebrow"><i/>IA DE ATENDIMENTO</span><h2>A IA <span className="rotator"><em className="gradient-text">atende.</em><em className="gradient-text">qualifica.</em><em className="gradient-text">agenda.</em></span>Seu time fecha.</h2><p>No WAVY CRM, um agente de IA responde seus leads no WhatsApp e no Instagram em segundos, inclusive fora do horário comercial, e entrega a conversa pronta para o seu time.</p><ul className="ai-points"><li><b>Resposta imediata</b><span>O lead é atendido na hora em que demonstra interesse, não no dia seguinte.</span></li><li><b>Nota da IA</b><span>Cada oportunidade recebe uma nota, para o time priorizar quem está mais perto de comprar.</span></li><li><b>Próximo passo</b><span>O CRM sugere o que fazer em cada negócio para a venda não esfriar.</span></li><li><b>Você no controle</b><span>Seu time assume a conversa quando quiser.</span></li></ul><Button>Agendar diagnóstico</Button></div><PhoneChat/></section>

    <section className="steps-section section-shell" id="como-funciona"><div className="section-heading"><span className="eyebrow"><i/>COMO FUNCIONA</span><h2>Do diagnóstico à venda,<br/><em className="gradient-text">em cinco etapas.</em></h2></div><ol className="steps">{steps.map(([n,t,d])=><li key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></li>)}</ol></section>

    <section className="founder section-shell"><div className="founder-photo"><img src="/assets/founder.webp" alt="Rael Vieira, da WAVY" width={1000} height={1000} loading="lazy" decoding="async"/></div><div className="founder-copy"><span className="eyebrow"><i/>QUEM ESTÁ POR TRÁS</span><h2>Prazer, <em className="gradient-text">Rael Vieira.</em></h2><p>Sou estrategista digital há mais de 4 anos e sempre fui apaixonado por vendas. Já fui gerente comercial em grandes empresas de tecnologia no Brasil e faturei mais de R$ 200 mil por mês no e-commerce.</p><p>Já ajudei negócios a sair do zero e passar de 10 vezes de retorno sobre o investimento em anúncios. Vivo do marketing digital, escalando produtos e serviços para mim e para os meus clientes.</p><dl className="founder-stats"><div><dt>+4 anos</dt><dd>como estrategista digital</dd></div><div><dt>+R$ 200 mil</dt><dd>por mês no e-commerce</dd></div><div><dt>+10x</dt><dd>de ROAS em negócios que saíram do zero</dd></div></dl><div className="founder-sign"><b>Rael Vieira</b><small>Estrategista digital · WAVY</small></div></div></section>

    <section className="proof section-shell" id="resultados"><h2>Parcerias reais,<br/><em className="gradient-text">resultados comprovados.</em></h2><div className="testimonial-grid"><article className="testimonial-card"><blockquote>“Antes, investíamos em anúncios sem enxergar com clareza o que realmente virava venda. A WAVY conectou o marketing ao nosso processo comercial e hoje conseguimos tomar decisões com muito mais segurança.”</blockquote><div><b>Dr. Loan Tomiello</b><small>Dentista e Mentor</small></div></article><article className="testimonial-card"><blockquote>“O trabalho foi muito além do tráfego pago. A equipe entendeu como atendíamos os leads, encontrou pontos que faziam oportunidades esfriarem e nos ajudou a organizar um processo mais eficiente.”</blockquote><div><b>Giovani</b><small>JRG Empreendimentos Imobiliários</small></div></article><article className="testimonial-card"><blockquote>“Passamos a entender melhor a origem das oportunidades e o que precisava ser melhorado em cada etapa do funil. Hoje marketing e vendas trabalham com a mesma visão.”</blockquote><div><b>Heiner Hofmann</b><small>CEO Heiner Academy</small></div></article></div></section>

    <section className="faq section-shell" id="faq"><div className="faq-heading"><span className="eyebrow"><i/>PERGUNTAS FREQUENTES</span><h2>Antes de conversar,<br/><em className="gradient-text">o que costumam perguntar.</em></h2></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<i aria-hidden="true"/></summary><p>{a}</p></details>)}</div></section>

    <section className="final-cta section-shell"><h2><span>O próximo passo é uma conversa.</span>Vamos escalar <span className="rotator"><em className="gradient-text">seu tráfego?</em><em className="gradient-text">seu atendimento?</em><em className="gradient-text">suas vendas?</em></span></h2><Button>Agendar diagnóstico</Button></section>

    <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a WAVY pelo WhatsApp"><img src="/assets/whatsapp-float.webp" alt="" width={62} height={62}/></a>
    <Footer/>
  </main>;
}
