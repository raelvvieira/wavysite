const WHATSAPP = "https://wa.me/555193228992?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20WAVY.";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Logo() {
  return <a className="logo" href="#top" aria-label="WAVY — início"><img src="/assets/wavy-logo.png" alt="WAVY" /></a>;
}

function Button({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return <a className={secondary ? "button secondary" : "button branded-button"} href={secondary ? "#sistema" : WHATSAPP} target={secondary ? undefined : "_blank"} rel="noreferrer">{!secondary&&<span className="button-mark"><img src="/assets/wavy-button-mark.jpg" alt=""/></span>}<span className="button-label">{children}</span>{secondary&&<Arrow />}</a>;
}

function Header() {
  return <header className="header"><Logo /><nav aria-label="Navegação principal"><a href="#problema">Como funciona</a><a href="#sistema">Growth System</a><a href="#pilares">Soluções</a><a href="#resultados">Resultados</a></nav><details className="mobile-menu"><summary aria-label="Abrir menu"><span /><span /></summary><div><a href="#problema">Como funciona</a><a href="#sistema">Growth System</a><a href="#pilares">Soluções</a><a href="#resultados">Resultados</a></div></details></header>;
}

function HeroVisual() {
  return <div className="hero-visual"><img src="/assets/hero-wavy.png" alt="Movimento abstrato em luz laranja representando crescimento"/><div className="hero-result"><small>OPERAÇÃO CONECTADA</small><b>Mais clareza para vender mais.</b><span>Tráfego + Trackeamento + Funil de vendas</span></div></div>;
}

const stages = [
  ["01", "Tráfego pago", "Anúncios, artes e roteiros", "Geramos oportunidades com intenção real, não apenas volume."],
  ["02", "Trackeamento", "Rastreamento avançado de eventos", "Conectamos clique, lead, oportunidade e receita."],
  ["03", "Desenvolvimento web", "Sites e sistemas", "Criamos experiências digitais completas para o seu cliente."],
  ["04", "CRM", "Gestão comercial e playbook de vendas", "Organizamos o caminho que transforma interesse em venda."],
];

function GrowthLoop() {
  return <div className="loop-wrap"><div className="loop-orbit"><span className="loop-core">WAVY<br/><b>GROWTH</b><br/>SYSTEM<small>O sistema aprende e melhora<br/>a cada ciclo.</small></span><i className="orbit-dot" /></div><div className="loop-list">{stages.map(([n,t,s])=><div className="loop-item" key={n}><span>{n}</span><div><b>{t}</b><small>{s}</small></div></div>)}</div></div>;
}

function RevenueDiagnostic() {
  return <div className="conversion-flow standalone four-steps"><article className="conversion-card ads"><div><small>01 / AQUISIÇÃO</small><b>Anúncios</b></div><strong>363</strong><span>Leads gerados pelas campanhas</span></article><div className="conversion-path"><i/><span>LEAD</span></div><article className="conversion-card conversations"><div><small>02 / CONTATO</small><b>Conversas<br/>iniciadas</b></div><strong>98%</strong><span>Oportunidades que iniciaram contato</span></article><div className="conversion-path second"><i/><span>LEAD</span></div><article className="conversion-card appointments"><div><small>03 / GARGALO</small><b>Agendamentos</b></div><strong>30%</strong><span>Conversas que avançaram para uma reunião</span><aside><i>✦</i><p><b>Sugestão</b>Deixe dois horários para o lead escolher.</p></aside></article><div className="conversion-path third"><i/><span>LEAD</span></div><article className="conversion-card sales"><div><small>04 / RESULTADO</small><b>Vendas</b></div><strong>5%</strong><span>Oportunidades convertidas em clientes</span></article></div>;
}

function SalesFunnel() {
  return <div className="sales-funnel"><div className="funnel-scene"><div className="funnel-layer layer-1"><span>01</span><b>Anúncio</b><small>Atenção</small></div><div className="funnel-layer layer-2"><span>02</span><b>Lead</b><small>Interesse</small></div><div className="funnel-layer layer-3"><span>03</span><b>Atendimento</b><small>Percepção de valor</small></div><div className="funnel-layer layer-4"><span>04</span><b>Venda</b><small>Conversão</small></div><i className="funnel-signal"/></div></div>;
}

const partnerLogos = [
  ["abpr.png","ABPR"],["deni-haut.png","Deni Haut"],["heiner-hofmann.png","Heiner Hofmann"],["jrg.png","JRG Empreendimentos"],
  ["kitesurf.png","Kitesurf Adventure"],["loane-tomello.png","Loane Tomello"],["mauro-kwitko.png","Dr. Mauro Kwitko"],["nubeauty.png","NuBeauty"]
];

function PartnerMarquee(){const logos=[...partnerLogos,...partnerLogos];return <section className="partner-marquee" aria-label="Empresas parceiras"><div className="partner-track">{logos.map(([file,name],i)=><div className="partner-logo" key={`${file}-${i}`} aria-hidden={i>=partnerLogos.length}><img src={`/assets/partners/${file}`} alt={i<partnerLogos.length?name:""}/></div>)}</div></section>}

const pillars = [
  {n:"01",t:"Tráfego pago",tag:"AQUISIÇÃO",desc:"Anúncios, artes e roteiros que geram oportunidades com intenção real, não apenas volume.",chips:["Mídia paga","Artes","Roteiros","Testes"]},
  {n:"02",t:"Trackeamento",tag:"RASTREAMENTO AVANÇADO",desc:"Eventos e dados conectados para acompanhar o caminho entre clique, lead, oportunidade e receita.",chips:["Eventos","UTMs","APIs","Atribuição"]},
  {n:"03",t:"Desenvolvimento web",tag:"SITES E SISTEMAS",desc:"Experiências digitais completas, construídas para comunicar valor e facilitar a conversão do seu cliente.",chips:["Sites","Landing pages","Sistemas","UX"]},
  {n:"04",t:"CRM",tag:"GESTÃO COMERCIAL",desc:"Funil, playbook de vendas e otimização para organizar o caminho que transforma interesse em venda.",chips:["CRM","Playbook","WhatsApp","Conversão"]},
];

function PillarVisual({index}:{index:number}) {
  if(index===0) return <div className="mini-ui traffic-ui"><div className="traffic-top"><span>CAMPANHA / ATIVA</span><b>● DISTRIBUINDO</b></div><div className="creative-stack"><i>AD 01</i><i>AD 02</i><i>AD 03</i></div><div className="traffic-route"><span/><span/><span/></div><div className="traffic-result"><small>OPORTUNIDADES</small><b>184</b><em>↑ 18%</em></div></div>;
  if(index===1) return <div className="mini-ui events"><span>LeadCreated</span><span>CRMQualified</span><span>SaleAttributed</span><i>DATA CONNECTED</i></div>;
  if(index===2) return <div className="mini-ui funnel"><span>128</span><span>74</span><span>31</span><span>12</span></div>;
  return <div className="mini-ui crm-board"><div><span>LEADS</span><i>Mariana A.</i><i>Roberto M.</i><i>Clínica Vitta</i></div><div><span>NEGOCIAÇÃO</span><i>Studio Uno</i><i>Lucas F.</i></div><div><span>FECHAMENTO</span><i>Grupo Prime</i></div></div>;
}

function AIFlow(){return <div className="ai-console"><div className="console-bar"><span>WAVY INTELLIGENCE</span><span className="online">● ANALISANDO</span></div><div className="console-body"><div className="creative-preview"><span>CREATIVE / 04</span><div className="creative-art"><i>Performance<br/>começa depois<br/>do clique.</i></div><small>VARIAÇÃO GERADA</small></div><div className="funnel-preview"><span>FUNNEL / LIVE</span>{[92,68,41,24].map((v,i)=><div className="funnel-row" key={v}><small>{["Leads","Contato","Oportunidade","Venda"][i]}</small><i style={{width:`${v}%`}}/><b>{v}</b></div>)}<div className="alert">⚡ Perda acima do padrão no primeiro contato</div></div><div className="message-preview"><span>SALES MESSAGE / SUGGESTION</span><div className="chat">Olá, Ana. Vi que você pediu uma análise da operação. Posso te fazer duas perguntas rápidas para entender o cenário?</div><button>USAR MENSAGEM ↗</button></div></div><div className="insight-strip"><b>INSIGHT 07</b><span>Priorizar criativo B + reduzir tempo de resposta para &lt; 5 min</span><i>IMPACTO ESTIMADO ↑</i></div></div>}

function Footer() {
  return <footer className="footer section-shell">
    <div className="footer-brand"><Logo/><p>Performance conectada à operação comercial.</p><span>Belo Horizonte — MG</span><span>CNPJ 46.975.244/0001-90</span><nav className="footer-brand-legal" aria-label="Documentos e produtos"><a href="/dashboard">WAVY Dashboard</a><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></nav></div>
    <div><small>NAVEGAÇÃO</small><a href="#problema">Como funciona</a><a href="#sistema">Growth System</a><a href="#pilares">Soluções</a><a href="#resultados">Resultados</a></div>
    <div><small>CONTATO</small><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp <Arrow/></a><a className="instagram-link" href="https://www.instagram.com/wavy.mkt/" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="instagram-dot"/></svg>Instagram</a><a href="mailto:contato@wavymarketing.com.br">contato@wavymarketing.com.br</a></div>
    <p className="copyright">© 2026 WAVY MARKETING — BELO HORIZONTE, MG</p>
  </footer>;
}

export default function Home() {
  return <main id="top"><Header />
    <section className="hero hero-cinematic section-shell"><img className="hero-background" src="/assets/hero-attention-crowd.png" alt="Profissional em destaque entre uma multidão, representando a atenção do cliente ideal"/><div className="hero-glow"/><div className="hero-copy"><h1>Marketing Digital que converte <em className="gradient-text">atenção em vendas.</em></h1><p className="lead-copy">Unimos tráfego pago, trackeamento avançado e otimização do funil de vendas para atrair o que há de mais valioso no mercado: a atenção do seu cliente ideal.</p><div className="actions"><Button>Agende uma reunião</Button></div></div></section>

    <PartnerMarquee/>

    <section className="problem section-shell" id="problema"><h2>Anúncios geram interesse e cliques.<br/>Mas é o caminho construído depois disso que <em className="gradient-text">gera vendas.</em></h2><p>Assessoramos todo o seu funil de vendas, do anúncio até a conversão. Otimizamos a experiência dentro do seu fluxo comercial para o cliente enxergar mais valor na sua entrega e saber que você é a escolha certa para ele.</p><SalesFunnel/></section>

    <section className="system-section section-shell" id="sistema"><div className="section-copy"><h2>Mais do que simplesmente <em className="gradient-text">anunciar.</em></h2><p>Conectamos quatro frentes que normalmente trabalham separadas: tráfego pago, trackeamento avançado, desenvolvimento web e gestão comercial.</p><Button>Agende uma reunião</Button></div><GrowthLoop/></section>

    <section className="journey-section section-shell"><div className="section-heading"><h2>Saber quantas oportunidades foram geradas é o básico. <em className="gradient-text">Mas e saber por que algumas não converteram?</em></h2><p>Com nossa abordagem, sabemos qual anúncio trouxe a melhor oportunidade, como ela foi atendida, onde o interesse esfriou e o que precisa mudar na sua estratégia para vender mais.</p></div><RevenueDiagnostic/></section>

    <section className="dashboard-teaser section-shell"><div><span className="eyebrow"><i/>WAVY DASHBOARD</span><h2>Tráfego e vendas.<br/><em className="gradient-text">Na mesma visão.</em></h2><p>Reunimos os dados do Meta Ads, Google Ads e da operação comercial em um dashboard organizado para você entender onde investe, o que gera resultado e onde estão as oportunidades de melhoria.</p><a className="dashboard-link" href="/dashboard">Conhecer o WAVY Dashboard <Arrow/></a></div><div className="dashboard-teaser-ui" aria-hidden="true"><header><span>VISÃO GERAL</span><b>ÚLTIMOS 30 DIAS</b></header><div className="dashboard-kpis"><article><small>INVESTIMENTO</small><strong>R$ 18,4 mil</strong><em>+12,8%</em></article><article><small>CONVERSÕES</small><strong>363</strong><em>+18,2%</em></article><article><small>CPA</small><strong>R$ 50,69</strong><em className="down">−9,4%</em></article></div><div className="dashboard-chart"><i/><i/><i/><i/><i/><i/><i/><i/></div><footer><span>Meta Ads</span><span>Google Ads</span><b>Dados conectados</b></footer></div></section>

    <section className="pillars section-shell" id="pilares"><div className="section-heading"><h2>Quatro frentes trabalhando<br/><em className="gradient-text">para você vender mais.</em></h2></div><div className="pillar-list">{pillars.map((p,i)=><article className="pillar" key={p.n}><div className="pillar-number">{p.n}</div><div className="pillar-copy"><small>{p.tag}</small><h3>{p.t}</h3><p>{p.desc}</p><div className="chips">{p.chips.map(c=><span key={c}>{c}</span>)}</div></div><PillarVisual index={i}/></article>)}</div></section>

    <section className="recognition section-shell"><div className="recognition-grid"><h2><span>Se isso acontece na sua empresa,</span> talvez o problema não seja falta de leads.<br/><em className="gradient-text">Seja falta de estratégia digital.</em></h2><div className="pain-list"><p>Você investe mais em tráfego, mas as vendas não crescem na mesma proporção.</p><p>Recebe relatórios cheios de cliques e alcance, mas ainda não sabe o que realmente trouxe dinheiro.</p><p>Percebe que bons leads estão chegando, mas muitos somem antes de falar com alguém.</p><p>O comercial culpa a qualidade dos leads. O marketing culpa o atendimento. E você continua sem uma resposta clara.</p></div></div><div className="recognition-turn"><h3>Quando marketing e vendas operam juntos, sua empresa vende mais. <em className="gradient-text">É essa conexão que construímos com você.</em></h3></div><Button>Agende uma reunião</Button></section>

    <section className="proof section-shell" id="resultados"><h2>Parcerias reais,<br/><em className="gradient-text">resultados comprovados.</em></h2><div className="testimonial-grid"><article className="testimonial-card"><blockquote>“Antes, investíamos em anúncios sem enxergar com clareza o que realmente virava venda. A WAVY conectou o marketing ao nosso processo comercial e hoje conseguimos tomar decisões com muito mais segurança.”</blockquote><div><b>Dr. Loan Tomiello</b><small>Dentista e Mentor</small></div></article><article className="testimonial-card"><blockquote>“O trabalho foi muito além do tráfego pago. A equipe entendeu como atendíamos os leads, encontrou pontos que faziam oportunidades esfriarem e nos ajudou a organizar um processo mais eficiente.”</blockquote><div><b>Giovani</b><small>JRG Empreendimentos Imobiliários</small></div></article><article className="testimonial-card"><blockquote>“Passamos a entender melhor a origem das oportunidades e o que precisava ser melhorado em cada etapa do funil. Hoje marketing e vendas trabalham com a mesma visão.”</blockquote><div><b>Heiner Hofmann</b><small>CEO Heiner Academy</small></div></article></div></section>

    <section className="word-motion" aria-label="Performance e crescimento"><div>PERFORMANCE</div><div>CRESCIMENTO</div></section>

    <section className="final-cta section-shell"><h2><span>O mercado não espera.</span>Cresça com previsibilidade<br/>e com quem <em>conhece o caminho.</em></h2><Button>Agende uma reunião</Button></section>

    <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a WAVY pelo WhatsApp"><img src="/assets/whatsapp-float.webp" alt=""/></a>
    <Footer/>
  </main>;
}
