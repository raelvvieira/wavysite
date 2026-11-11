const WHATSAPP = "https://wa.me/555193228992?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20WAVY.";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Logo() {
  return <a className="logo" href="#top" aria-label="WAVY — início"><img src="/assets/wavy-logo.webp" alt="WAVY" width={480} height={138} /></a>;
}

function Button({ children, secondary = false, href = "#como-funciona" }: { children: React.ReactNode; secondary?: boolean; href?: string }) {
  return <a className={secondary ? "button secondary" : "button branded-button"} href={secondary ? href : WHATSAPP} target={secondary ? undefined : "_blank"} rel="noreferrer">{!secondary&&<span className="button-mark"><img src="/assets/wavy-button-mark.jpg" alt="" width={64} height={64}/></span>}<span className="button-label">{children}</span>{secondary&&<Arrow />}</a>;
}

function Header() {
  return <header className="header"><Logo /><nav aria-label="Navegação principal"><a href="#como-funciona">Como funciona</a><a href="#pilares">O que entregamos</a><a href="#resultados">Resultados</a><a href="#faq">Perguntas</a><a className="nav-cta" href="/crm">Conhecer o CRM <span>↗</span></a></nav><details className="mobile-menu"><summary aria-label="Abrir menu"><span /><span /></summary><div><a href="#como-funciona">Como funciona</a><a href="#pilares">O que entregamos</a><a href="#resultados">Resultados</a><a href="#faq">Perguntas</a><a href="/crm">CRM</a></div></details></header>;
}

const stages = [
  ["01", "Tráfego pago", "Anúncios, artes e roteiros"],
  ["02", "Rastreamento", "Do clique até a venda"],
  ["03", "Site", "Páginas feitas para converter"],
  ["04", "CRM", "Atendimento e playbook de vendas"],
];

function GrowthLoop() {
  return <div className="loop-wrap"><div className="loop-orbit"><span className="loop-core">WAVY<br/><b>GROWTH</b><br/>SYSTEM<small>O sistema aprende e melhora<br/>a cada ciclo.</small></span><i className="orbit-dot" /></div><div className="loop-list">{stages.map(([n,t,s])=><div className="loop-item" key={n}><span>{n}</span><div><b>{t}</b><small>{s}</small></div></div>)}</div></div>;
}

function RevenueDiagnostic() {
  return <div className="conversion-flow standalone four-steps"><article className="conversion-card ads"><div><small>01 / AQUISIÇÃO</small><b>Anúncios</b></div><strong>363</strong><span>Leads gerados pelas campanhas</span></article><div className="conversion-path"><i/><span>LEAD</span></div><article className="conversion-card conversations"><div><small>02 / CONTATO</small><b>Conversas<br/>iniciadas</b></div><strong>98%</strong><span>Oportunidades que iniciaram contato</span></article><div className="conversion-path second"><i/><span>LEAD</span></div><article className="conversion-card appointments"><div><small>03 / GARGALO</small><b>Agendamentos</b></div><strong>30%</strong><span>Conversas que avançaram para uma reunião</span><aside><i>✦</i><p><b>Sugestão</b>Deixe dois horários para o lead escolher.</p></aside></article><div className="conversion-path third"><i/><span>LEAD</span></div><article className="conversion-card sales"><div><small>04 / RESULTADO</small><b>Vendas</b></div><strong>5%</strong><span>Oportunidades convertidas em clientes</span></article></div>;
}

const partnerLogos = [
  ["abpr.webp","ABPR"],["deni-haut.webp","Deni Haut"],["heiner-hofmann.webp","Heiner Hofmann"],["jrg.webp","JRG Empreendimentos"],
  ["kitesurf.webp","Kitesurf Adventure"],["loane-tomello.webp","Loane Tomello"],["mauro-kwitko.webp","Dr. Mauro Kwitko"],["nubeauty.webp","NuBeauty"]
];

function PartnerMarquee(){const logos=[...partnerLogos,...partnerLogos];return <section className="partner-marquee" aria-label="Empresas parceiras"><div className="partner-track">{logos.map(([file,name],i)=><div className="partner-logo" key={`${file}-${i}`} aria-hidden={i>=partnerLogos.length}><img src={`/assets/partners/${file}`} alt={i<partnerLogos.length?name:""} loading="lazy" decoding="async"/></div>)}</div></section>}

const pillars = [
  {n:"01",t:"Tráfego pago",tag:"AQUISIÇÃO",desc:"Campanhas no Meta Ads e no Google Ads, com artes e roteiros feitos pelo mesmo time. O objetivo é oportunidade com intenção de compra, não volume de cliques.",chips:["Mídia paga","Artes","Roteiros","Testes"]},
  {n:"02",t:"Rastreamento",tag:"DADOS CONECTADOS",desc:"Eventos configurados para ligar clique, lead, oportunidade e receita. É o que permite saber qual anúncio trouxe a venda, e não só o lead.",chips:["Eventos","UTMs","APIs","Atribuição"]},
  {n:"03",t:"Site e landing pages",tag:"DESENVOLVIMENTO WEB",desc:"Páginas e sistemas construídos para comunicar o valor da sua oferta e tirar atrito do caminho até o contato.",chips:["Sites","Landing pages","Sistemas","UX"]},
  {n:"04",t:"CRM e processo comercial",tag:"GESTÃO COMERCIAL",desc:"Funil organizado, WhatsApp e Instagram no mesmo lugar e um playbook de vendas para o seu time transformar interesse em venda.",chips:["CRM","Playbook","WhatsApp","Conversão"]},
];

function PillarVisual({index}:{index:number}) {
  if(index===0) return <div className="mini-ui traffic-ui"><div className="traffic-top"><span>CAMPANHA / ATIVA</span><b>● DISTRIBUINDO</b></div><div className="creative-stack"><i>AD 01</i><i>AD 02</i><i>AD 03</i></div><div className="traffic-route"><span/><span/><span/></div><div className="traffic-result"><small>OPORTUNIDADES</small><b>184</b><em>↑ 18%</em></div></div>;
  if(index===1) return <div className="mini-ui events"><span>LeadCreated</span><span>CRMQualified</span><span>SaleAttributed</span><i>DATA CONNECTED</i></div>;
  if(index===2) return <div className="mini-ui funnel"><span>128</span><span>74</span><span>31</span><span>12</span></div>;
  return <div className="mini-ui crm-board"><div><span>LEADS</span><i>Mariana A.</i><i>Roberto M.</i><i>Clínica Vitta</i></div><div><span>NEGOCIAÇÃO</span><i>Studio Uno</i><i>Lucas F.</i></div><div><span>FECHAMENTO</span><i>Grupo Prime</i></div></div>;
}

function AIFlow(){return <div className="ai-console"><div className="console-bar"><span>WAVY INTELLIGENCE</span><span className="online">● ANALISANDO</span></div><div className="console-body"><div className="creative-preview"><span>CREATIVE / 04</span><div className="creative-art"><i>Performance<br/>começa depois<br/>do clique.</i></div><small>VARIAÇÃO GERADA</small></div><div className="funnel-preview"><span>FUNNEL / LIVE</span>{[92,68,41,24].map((v,i)=><div className="funnel-row" key={v}><small>{["Leads","Contato","Oportunidade","Venda"][i]}</small><i style={{width:`${v}%`}}/><b>{v}</b></div>)}<div className="alert">⚡ Perda acima do padrão no primeiro contato</div></div><div className="message-preview"><span>SALES MESSAGE / SUGGESTION</span><div className="chat">Olá, Ana. Vi que você pediu uma análise da operação. Posso te fazer duas perguntas rápidas para entender o cenário?</div><button>USAR MENSAGEM ↗</button></div></div><div className="insight-strip"><b>INSIGHT 07</b><span>Priorizar criativo B + reduzir tempo de resposta para &lt; 5 min</span><i>IMPACTO ESTIMADO ↑</i></div></div>}

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
  ["Como eu acompanho os resultados?", "Pelo WAVY Dashboard, que reúne Meta Ads, Google Ads e os dados da operação comercial em uma só visão: quanto foi investido, o que gerou resultado e onde estão as oportunidades de melhoria."],
  ["Para que tipo de empresa a WAVY é indicada?", "Para empresas que vendem por atendimento, como clínicas, imobiliárias, educação e serviços, e que já anunciam ou querem anunciar, mas não enxergam com clareza o que vira venda."],
  ["Como começa?", "Por uma conversa de diagnóstico. Você conta como funcionam hoje sua captação e seu atendimento, e mostramos onde estão os gargalos e o que a operação incluiria no seu caso."],
];

function Footer() {
  return <footer className="footer section-shell">
    <div className="footer-brand"><Logo/><p>Performance conectada à operação comercial.</p><span>Belo Horizonte — MG</span><span>CNPJ 46.975.244/0001-90</span><nav className="footer-brand-legal" aria-label="Documentos e produtos"><a href="/crm">WAVY CRM</a><a href="/dashboard">WAVY Dashboard</a><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></nav></div>
    <div><small>NAVEGAÇÃO</small><a href="#como-funciona">Como funciona</a><a href="#pilares">O que entregamos</a><a href="#resultados">Resultados</a><a href="#faq">Perguntas</a></div>
    <div><small>CONTATO</small><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp <Arrow/></a><a className="instagram-link" href="https://www.instagram.com/wavy.mkt/" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="instagram-dot"/></svg>Instagram</a><a href="mailto:contato@wavymarketing.com.br">contato@wavymarketing.com.br</a></div>
    <p className="copyright">© 2026 WAVY MARKETING — BELO HORIZONTE, MG</p>
  </footer>;
}

export default function Home() {
  return <main id="top"><Header />
    <section className="hero hero-cinematic section-shell"><picture><source type="image/avif" srcSet="/assets/hero-attention-crowd-768.avif 768w, /assets/hero-attention-crowd-1280.avif 1280w, /assets/hero-attention-crowd-1831.avif 1831w" sizes="100vw"/><source type="image/webp" srcSet="/assets/hero-attention-crowd-768.webp 768w, /assets/hero-attention-crowd-1280.webp 1280w, /assets/hero-attention-crowd-1831.webp 1831w" sizes="100vw"/><img className="hero-background" src="/assets/hero-attention-crowd-1280.webp" width={1831} height={859} fetchPriority="high" decoding="async" alt="Profissional em destaque entre uma multidão, representando a atenção do cliente ideal"/></picture><div className="hero-glow"/><div className="hero-copy"><h1>Do anúncio à venda. <em className="gradient-text">Uma única operação.</em></h1><p className="lead-copy">A WAVY reúne tráfego pago, rastreamento, site e CRM em um só sistema, com um time responsável pelo caminho inteiro e um dashboard que mostra o que virou venda.</p><div className="actions"><Button>Agendar diagnóstico</Button><Button secondary>Ver como funciona</Button></div><ul className="hero-includes" aria-label="O que está incluído"><li>Tráfego pago</li><li>Rastreamento</li><li>Site</li><li>CRM</li><li>Dashboard</li></ul></div></section>

    <PartnerMarquee/>

    <section className="problem section-shell" id="problema"><span className="eyebrow"><i/>O PROBLEMA</span><h2>Hoje são vários fornecedores.<br/><em className="gradient-text">E nenhum responde pela venda.</em></h2><p>Anúncio gera clique. O que gera venda é o caminho depois dele: a página, o rastreamento, o atendimento. Quando cada parte fica com um fornecedor diferente, ninguém enxerga o caminho inteiro.</p><Comparison/></section>

    <section className="system-section section-shell" id="sistema"><div className="section-copy"><h2>Quatro frentes.<br/><em className="gradient-text">Um time só.</em></h2><p>Tráfego pago, rastreamento, site e CRM funcionam como um ciclo: o que aprendemos no atendimento volta para o anúncio, e cada rodada fica mais eficiente que a anterior.</p><Button>Agendar diagnóstico</Button></div><GrowthLoop/></section>

    <section className="steps-section section-shell" id="como-funciona"><div className="section-heading"><span className="eyebrow"><i/>COMO FUNCIONA</span><h2>Como a operação<br/><em className="gradient-text">roda na prática.</em></h2></div><ol className="steps">{steps.map(([n,t,d])=><li key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></li>)}</ol></section>

    <section className="journey-section section-shell"><div className="section-heading"><span className="eyebrow"><i/>EXEMPLO DE DIAGNÓSTICO</span><h2>Saber quantas oportunidades foram geradas é o básico. <em className="gradient-text">Mas e saber por que algumas não converteram?</em></h2><p>Com a operação conectada, dá para ver qual anúncio trouxe a melhor oportunidade, como ela foi atendida, onde o interesse esfriou e o que precisa mudar para vender mais.</p></div><RevenueDiagnostic/><p className="illustrative-note">Números ilustrativos, para mostrar como o diagnóstico é apresentado.</p></section>

    <section className="dashboard-teaser section-shell"><div><span className="eyebrow"><i/>WAVY DASHBOARD</span><h2>O que virou venda,<br/><em className="gradient-text">na sua tela.</em></h2><p>Reunimos os dados do Meta Ads, Google Ads e da operação comercial em um dashboard organizado para você entender onde investe, o que gera resultado e onde estão as oportunidades de melhoria.</p><a className="dashboard-link" href="/dashboard">Conhecer o WAVY Dashboard <Arrow/></a></div><div className="dashboard-teaser-ui" aria-hidden="true"><header><span>VISÃO GERAL</span><b>ÚLTIMOS 30 DIAS</b></header><div className="dashboard-kpis"><article><small>INVESTIMENTO</small><strong>R$ 18,4 mil</strong><em>+12,8%</em></article><article><small>CONVERSÕES</small><strong>363</strong><em>+18,2%</em></article><article><small>CPA</small><strong>R$ 50,69</strong><em className="down">−9,4%</em></article></div><div className="dashboard-chart"><i/><i/><i/><i/><i/><i/><i/><i/></div><footer><span>Meta Ads</span><span>Google Ads</span><b>Dados conectados</b></footer></div></section>

    <section className="pillars section-shell" id="pilares"><div className="section-heading"><span className="eyebrow"><i/>O QUE ENTREGAMOS</span><h2>Tudo o que fica entre<br/><em className="gradient-text">o anúncio e a venda.</em></h2></div><div className="pillar-list">{pillars.map((p,i)=><article className="pillar" key={p.n}><div className="pillar-number">{p.n}</div><div className="pillar-copy"><small>{p.tag}</small><h3>{p.t}</h3><p>{p.desc}</p><div className="chips">{p.chips.map(c=><span key={c}>{c}</span>)}</div></div><PillarVisual index={i}/></article>)}</div></section>

    <section className="recognition section-shell"><div className="recognition-grid"><h2><span>Se isso acontece na sua empresa,</span> o problema não é falta de leads.<br/><em className="gradient-text">É o que acontece depois do clique.</em></h2><div className="pain-list"><p>Você investe mais em tráfego, mas as vendas não crescem na mesma proporção.</p><p>Recebe relatórios cheios de cliques e alcance, mas ainda não sabe o que realmente trouxe dinheiro.</p><p>Percebe que bons leads estão chegando, mas muitos somem antes de falar com alguém.</p><p>O comercial culpa a qualidade dos leads. O marketing culpa o atendimento. E você continua sem uma resposta clara.</p></div></div><div className="recognition-turn"><h3>Quando marketing e vendas operam juntos, sua empresa vende mais. <em className="gradient-text">É essa conexão que construímos com você.</em></h3></div><Button>Agendar diagnóstico</Button></section>

    <section className="proof section-shell" id="resultados"><h2>Parcerias reais,<br/><em className="gradient-text">resultados comprovados.</em></h2><div className="testimonial-grid"><article className="testimonial-card"><blockquote>“Antes, investíamos em anúncios sem enxergar com clareza o que realmente virava venda. A WAVY conectou o marketing ao nosso processo comercial e hoje conseguimos tomar decisões com muito mais segurança.”</blockquote><div><b>Dr. Loan Tomiello</b><small>Dentista e Mentor</small></div></article><article className="testimonial-card"><blockquote>“O trabalho foi muito além do tráfego pago. A equipe entendeu como atendíamos os leads, encontrou pontos que faziam oportunidades esfriarem e nos ajudou a organizar um processo mais eficiente.”</blockquote><div><b>Giovani</b><small>JRG Empreendimentos Imobiliários</small></div></article><article className="testimonial-card"><blockquote>“Passamos a entender melhor a origem das oportunidades e o que precisava ser melhorado em cada etapa do funil. Hoje marketing e vendas trabalham com a mesma visão.”</blockquote><div><b>Heiner Hofmann</b><small>CEO Heiner Academy</small></div></article></div></section>

    <section className="faq section-shell" id="faq"><div className="faq-heading"><span className="eyebrow"><i/>PERGUNTAS FREQUENTES</span><h2>Antes de conversar,<br/><em className="gradient-text">o que costumam perguntar.</em></h2></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<i aria-hidden="true"/></summary><p>{a}</p></details>)}</div></section>

    <section className="word-motion" aria-label="Performance e crescimento"><div>PERFORMANCE</div><div>CRESCIMENTO</div></section>

    <section className="final-cta section-shell"><h2><span>O mercado não espera.</span>Um time, uma operação,<br/><em>do anúncio à venda.</em></h2><Button>Agendar diagnóstico</Button></section>

    <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a WAVY pelo WhatsApp"><img src="/assets/whatsapp-float.webp" alt="" width={62} height={62}/></a>
    <Footer/>
  </main>;
}
