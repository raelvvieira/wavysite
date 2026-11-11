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
    "Um gestor de tráfego ou uma agência",
    "Um designer para as artes",
    "Uma ferramenta de atendimento para WhatsApp e Instagram",
    "Um CRM à parte",
    "E alguém para montar o relatório no fim do mês",
  ],
  wavy: [
    "Um serviço só, com tudo isso dentro",
    "Um contrato",
    "Um time que responde pelo resultado, do anúncio à venda",
  ],
};

const deliveries = [
  ["01", "Tráfego pago", "Campanhas no Meta Ads e no Google Ads, do planejamento ao ajuste de cada semana.", "M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z"],
  ["02", "Criativos", "Artes e roteiros feitos pelo nosso time, trocados conforme o resultado pede.", "M4 5h16v14H4zM4 15l4.5-4.5 4 4L15 12l5 5M9 9.5h.01"],
  ["03", "Atendimento omnichannel", "WhatsApp e Instagram na mesma caixa de entrada, com o histórico de cada cliente.", "M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z"],
  ["04", "CRM com IA", "Um agente que atende e qualifica, e um funil que mostra em quem focar.", "M5 4h4v14H5zM10.5 4h4v9h-4zM16 4h3.5v6H16z"],
  ["05", "Dashboard", "Quanto você investiu, quanto voltou e quanto custou cada venda, na sua tela.", "M3 5h18v11H3zM8 20h8M12 16v4"],
];

function Comparison() {
  return <div className="compare"><article className="compare-col"><small>DO JEITO COMUM</small><ul>{comparison.common.map(t=><li key={t}><i aria-hidden="true">×</i>{t}</li>)}</ul></article><article className="compare-col wavy"><small>COM A WAVY</small><ul>{comparison.wavy.map(t=><li key={t}><i aria-hidden="true">✓</i>{t}</li>)}</ul><p className="compare-close">Você contrata uma vez, fala com um time só e sabe de quem cobrar.</p></article></div>;
}

const steps = [
  ["01", "Diagnóstico", "A gente olha seus anúncios, seu atendimento e seus números para achar onde as vendas estão escapando."],
  ["02", "Estrutura", "Deixamos o rastreamento, a página e o funil do CRM prontos antes de colocar dinheiro em anúncio."],
  ["03", "Campanhas no ar", "Criamos as artes, os roteiros e os anúncios para falar com quem quer comprar de verdade."],
  ["04", "Atendimento", "O cliente cai no CRM, a IA responde na hora e o seu time segue um roteiro de vendas claro."],
  ["05", "Ajuste", "A gente acompanha o que virou venda e mexe no anúncio, na página ou na abordagem."],
];

const faqs = [
  ["Preciso contratar outra agência para as artes ou para o site?", "Não precisa. Artes, roteiros e páginas já estão dentro do serviço. A ideia é justamente você ter um time só para cobrar."],
  ["Vocês cuidam só do marketing ou do comercial também?", "Dos dois. A gente organiza o funil e o roteiro de vendas no CRM e acompanha onde os clientes estão esfriando, para o seu time aproveitar melhor o que o tráfego traz."],
  ["A IA atende sozinha? E se o cliente quiser falar com uma pessoa?", "Ela responde, tira dúvidas, qualifica e agenda. Tudo fica registrado no CRM, e qualquer pessoa do seu time pode assumir a conversa na hora que quiser."],
  ["Como eu acompanho os resultados?", "Pelo dashboard. Ele junta Meta Ads, Google Ads e os dados do seu comercial e mostra quanto você investiu, o que deu retorno e onde dá para melhorar."],
  ["Para que tipo de empresa a WAVY serve?", "Para quem vende conversando com o cliente: clínicas, imobiliárias, cursos, prestadores de serviço. Faz mais sentido para quem já anuncia, ou quer começar, e ainda não sabe dizer o que vira venda."],
  ["Como a gente começa?", "Com uma conversa. Você conta como os clientes chegam e como são atendidos hoje, e a gente mostra onde está o gargalo e o que faria no seu caso."],
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
    <section className="hero-product section-shell"><span className="eyebrow"><i/>TRÁFEGO · CRM · AGENTE DE IA</span><h1>Escalamos suas vendas com <span className="rotator"><em className="gradient-text">tráfego pago</em><em className="gradient-text">CRM omnichannel</em><em className="gradient-text">atendimento com IA</em></span></h1><p className="lead-copy">Somos uma agência de marketing de performance que acompanha o seu processo comercial inteiro, do anúncio ao fechamento, com decisões baseadas em dados e IA no atendimento.</p><div className="actions"><Button>Agendar diagnóstico</Button></div><div className="hero-stage"><div className="float-card left" aria-hidden="true"><i>✦</i><div><small>AGENTE DE IA</small><b>Respondeu no WhatsApp em 8 s</b></div></div><div className="float-card right" aria-hidden="true"><i>✓</i><div><small>NO FUNIL</small><b>Reunião agendada · Nota da IA 96</b></div></div><CrmFrame label="Tela do WAVY CRM: dashboard com faturamento, retorno dos anúncios e funil de vendas" priority><CrmDashboard/></CrmFrame></div></section>

    <PartnerMarquee/>

    <section className="problem section-shell" id="problema"><h2>Você não precisa pagar por 5 serviços diferentes <em className="gradient-text">sem nenhum deles responder pelo seu crescimento.</em></h2><Comparison/></section>

    <section className="deliveries section-shell" id="servico"><div className="section-heading"><h2>Tudo o que você precisa para vender,<br/><em className="gradient-text">num serviço só.</em></h2><p>Não são cinco produtos vendidos em pacote. As cinco partes já vêm ligadas entre si, e você não precisa fazer uma conversar com a outra.</p></div><ol className="delivery-grid">{deliveries.map(([n,t,d,icon])=><li key={n}><span aria-hidden="true">{n}</span><i aria-hidden="true"><svg viewBox="0 0 24 24"><path d={icon}/></svg></i><h3>{t}</h3><p>{d}</p></li>)}</ol></section>

    <section className="platform section-shell" id="plataforma"><span className="eyebrow"><i/>A PLATAFORMA</span><h2>Seu WhatsApp, seu Instagram, seu funil e seus anúncios. <em className="gradient-text">Tudo na mesma tela.</em></h2><p className="platform-intro">É no WAVY CRM que tudo acontece. Seu time atende, acompanha cada negócio e vê quanto os anúncios estão trazendo, sem ficar pulando de uma ferramenta para outra.</p><div className="platform-tabs"><input type="radio" name="platform-tab" id="tab-conversas" defaultChecked/><input type="radio" name="platform-tab" id="tab-funil"/><input type="radio" name="platform-tab" id="tab-dashboard"/><div className="tab-bar"><label htmlFor="tab-conversas">Conversas</label><label htmlFor="tab-funil">Funil de vendas</label><label htmlFor="tab-dashboard">Dashboard</label></div>
      <div className="tab-panel panel-conversas"><CrmFrame label="Tela de conversas do WAVY CRM, com WhatsApp e Instagram na mesma caixa de entrada e o agente de IA respondendo"><CrmInbox/></CrmFrame><div className="tab-caption"><p><b>Todas as conversas num lugar só.</b> WhatsApp e Instagram chegam na mesma caixa de entrada, com a IA respondendo e o histórico do cliente ali do lado.</p><a href="/crm">Conhecer o WAVY CRM <Arrow/></a></div></div>
      <div className="tab-panel panel-funil"><CrmFrame label="Tela de funil de vendas do WAVY CRM, com nota da IA e próximo passo em cada negócio"><CrmKanban/></CrmFrame><div className="tab-caption"><p><b>Você sabe em quem focar.</b> A IA dá uma nota para cada negócio e já sugere o próximo passo, para ninguém ficar esquecido no funil.</p><a href="/crm">Conhecer o WAVY CRM <Arrow/></a></div></div>
      <div className="tab-panel panel-dashboard"><CrmFrame label="Dashboard do WAVY CRM com faturamento, retorno geral e custo por venda dos anúncios"><CrmDashboard/></CrmFrame><div className="tab-caption"><p><b>O que o anúncio trouxe de verdade.</b> Quanto você investiu, quanto voltou e quanto custou cada venda. Nada de relatório só com clique e alcance.</p><a href="/dashboard">Conhecer o WAVY Dashboard <Arrow/></a></div></div>
    </div></section>

    <section className="ai-section section-shell" id="ia"><div><span className="eyebrow"><i/>IA DE ATENDIMENTO</span><h2>A IA <span className="rotator"><em className="gradient-text">atende.</em><em className="gradient-text">qualifica.</em><em className="gradient-text">agenda.</em></span>Seu time fecha.</h2><p>Seu cliente manda mensagem às 21h47 e é atendido na hora. O agente de IA tira as dúvidas, entende o que a pessoa procura e já deixa a reunião marcada. Seu time entra para fechar.</p><ul className="ai-points"><li><b>Responde na hora</b><span>Às três da tarde ou às onze da noite, no WhatsApp e no Instagram. O cliente não esfria esperando alguém ficar livre.</span></li><li><b>Dá nota para cada lead</b><span>Você bate o olho e sabe quem está mais perto de comprar.</span></li><li><b>Sugere o próximo passo</b><span>Para cada negócio, o CRM mostra o que fazer agora.</span></li><li><b>Você continua no controle</b><span>Quando quiser, alguém do seu time assume a conversa.</span></li></ul><Button>Agendar diagnóstico</Button></div><PhoneChat/></section>

    <section className="steps-section section-shell" id="como-funciona"><div className="section-heading"><span className="eyebrow"><i/>COMO FUNCIONA</span><h2>Como a gente trabalha,<br/><em className="gradient-text">do primeiro dia à venda.</em></h2></div><ol className="steps">{steps.map(([n,t,d])=><li key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></li>)}</ol></section>

    <section className="founder section-shell"><div className="founder-photo"><img src="/assets/founder.webp" alt="Rael Vieira, da WAVY" width={1000} height={1000} loading="lazy" decoding="async"/></div><div className="founder-copy"><span className="eyebrow"><i/>QUEM ESTÁ POR TRÁS</span><h2>Prazer, <em className="gradient-text">Rael Vieira.</em></h2><p>Sou estrategista digital há mais de 4 anos e sempre fui apaixonado por vendas. Já fui gerente comercial em grandes empresas de tecnologia no Brasil e faturei mais de R$ 200 mil por mês no e-commerce.</p><p>Já ajudei negócios a sair do zero e passar de 10 vezes de retorno sobre o investimento em anúncios. Vivo do marketing digital, escalando produtos e serviços para mim e para os meus clientes.</p><dl className="founder-stats"><div><dt>+4 anos</dt><dd>como estrategista digital</dd></div><div><dt>+R$ 200 mil</dt><dd>por mês no e-commerce</dd></div><div><dt>+10x</dt><dd>de ROAS em negócios que saíram do zero</dd></div></dl><div className="founder-sign"><b>Rael Vieira</b><small>Estrategista digital · WAVY</small></div></div></section>

    <section className="proof section-shell" id="resultados"><h2>Quem já trabalha<br/><em className="gradient-text">com a gente.</em></h2><div className="testimonial-grid"><article className="testimonial-card"><blockquote>“Antes, investíamos em anúncios sem enxergar com clareza o que realmente virava venda. A WAVY conectou o marketing ao nosso processo comercial e hoje conseguimos tomar decisões com muito mais segurança.”</blockquote><div><b>Dr. Loan Tomiello</b><small>Dentista e Mentor</small></div></article><article className="testimonial-card"><blockquote>“O trabalho foi muito além do tráfego pago. A equipe entendeu como atendíamos os leads, encontrou pontos que faziam oportunidades esfriarem e nos ajudou a organizar um processo mais eficiente.”</blockquote><div><b>Giovani</b><small>JRG Empreendimentos Imobiliários</small></div></article><article className="testimonial-card"><blockquote>“Passamos a entender melhor a origem das oportunidades e o que precisava ser melhorado em cada etapa do funil. Hoje marketing e vendas trabalham com a mesma visão.”</blockquote><div><b>Heiner Hofmann</b><small>CEO Heiner Academy</small></div></article></div></section>

    <section className="faq section-shell" id="faq"><div className="faq-heading"><span className="eyebrow"><i/>PERGUNTAS FREQUENTES</span><h2>Antes da conversa,<br/><em className="gradient-text">as dúvidas de sempre.</em></h2></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<i aria-hidden="true"/></summary><p>{a}</p></details>)}</div></section>

    <section className="final-cta section-shell"><h2><span>O próximo passo é uma conversa.</span>Vamos escalar <span className="rotator"><em className="gradient-text">seu tráfego?</em><em className="gradient-text">seu atendimento?</em><em className="gradient-text">suas vendas?</em></span></h2><Button>Agendar diagnóstico</Button></section>

    <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a WAVY pelo WhatsApp"><img src="/assets/whatsapp-float.webp" alt="" width={62} height={62}/></a>
    <Footer/>
  </main>;
}
