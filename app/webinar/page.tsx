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
  title: "Live gratuita: tráfego pago com previsibilidade | WAVY",
  description: "Toda quinta, às 19h: o sistema que junta anúncio, IA no WhatsApp e CRM para você saber quanto custa cada cliente e escalar com previsibilidade.",
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

const pains = [
  "Você aumenta a verba e a venda não sobe junto.",
  "O relatório mostra clique e lead. Venda, nunca.",
  "O lead chama no WhatsApp e espera horas por uma resposta.",
  "Ninguém sabe dizer qual anúncio trouxe o cliente que pagou.",
];

const method = [
  ["01", "Atrair", "Tráfego pago", "Anúncios no Meta Ads e no Google Ads feitos para trazer quem quer comprar, não curioso."],
  ["02", "Atender", "IA no WhatsApp", "Um agente de IA responde na hora, tira as dúvidas e separa quem está pronto de quem só está olhando."],
  ["03", "Organizar", "CRM", "Cada conversa entra no funil sozinha, com a etapa, o histórico e o próximo passo."],
  ["04", "Medir", "Dashboard", "Você vê quanto investiu, quanto voltou e quanto custou cada cliente, por canal, por anúncio e por criativo."],
];

const agenda = [
  ["01", "Seu custo de aquisição", "Como calcular quanto custa trazer um cliente, contando a venda e não só o lead."],
  ["02", "Retorno por anúncio", "Como descobrir qual canal, qual anúncio e qual criativo devolvem o dinheiro investido."],
  ["03", "Leads qualificados por IA", "Como um agente de IA atende no WhatsApp e entrega para o seu time só quem está pronto."],
  ["04", "CRM que se organiza sozinho", "Como cada conversa vira um negócio no funil sem ninguém preencher planilha."],
  ["05", "O que pausar e o que escalar", "Como ler os números e decidir onde colocar mais verba com segurança."],
  ["06", "O passo a passo para replicar", "Como montar esse mesmo sistema no seu negócio, uma peça de cada vez."],
];

const audience = [
  ["Você já anuncia", "Investe em tráfego, recebe leads e não sabe dizer quais anúncios viraram venda."],
  ["Você vende pelo WhatsApp", "Seu time atende na mão, demora para responder e perde cliente no meio do caminho."],
  ["Você quer escalar", "Quer aumentar a verba com segurança, sabendo quanto custa trazer cada cliente."],
];

const faqs = [
  ["Quando acontece?", "Toda quinta-feira, às 19h, ao vivo. Se você não puder nesta semana, é só continuar no grupo e assistir na próxima."],
  ["Como eu participo?", "Você entra no grupo do WhatsApp pelo botão desta página. É por lá que enviamos o link da live e os avisos."],
  ["Isso serve para o meu negócio?", "Serve para quem vende conversando com o cliente: clínica, imobiliária, curso, prestador de serviço, loja que atende pelo WhatsApp. O sistema é o mesmo; o que muda é a oferta."],
  ["Preciso já anunciar para aproveitar?", "Não. Quem já anuncia sai com ajustes para fazer na mesma semana. Quem ainda não anuncia aprende a começar medindo desde o primeiro real."],
  ["Vou precisar contratar alguma ferramenta?", "Não para assistir. Na live mostramos o WAVY CRM funcionando, mas a lógica serve para qualquer operação."],
  ["O grupo vai ficar mandando mensagem o tempo todo?", "Não. O grupo serve para os avisos da live. Você pode sair quando quiser."],
];

const navLinks = [
  { href: "#sistema", label: "O sistema" },
  { href: "#conteudo", label: "O que você vai ver" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#faq", label: "Perguntas" },
];

export default function WebinarPage() {
  return <main className="webinar-page" id="top">
    <IslandHeader home="/" links={navLinks} cta={{ href: EVENT.groupUrl, label: "Entrar no grupo", external: true, whatsapp: true }} />

    <section className="hero-product wb-hero section-shell"><span className="wb-badge"><i/>LIVE GRATUITA · TODA QUINTA, 19H</span><h1>Chega de rodar tráfego pago <em className="gradient-text">sem saber quanto custa cada cliente.</em></h1><p className="lead-copy">Toda quinta, às 19h, eu mostro ao vivo o sistema que junta anúncio, IA no WhatsApp e CRM numa estratégia só. Você sai sabendo seu custo de aquisição, o retorno de cada anúncio e como escalar com previsibilidade.</p><dl className="wb-facts">{facts.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><div className="actions"><Join/></div><p className="hero-fineprint">Você entra no grupo e recebe o link da live por lá.</p>
      <div className="hero-stage"><div className="float-card ads meta" aria-hidden="true"><i><BrandIcon name="meta"/></i><div><small>META ADS</small><b>ROAS de 10,5x neste criativo</b><em>↗ o melhor da campanha</em></div></div><div className="float-card left" aria-hidden="true"><i>✦</i><div><small>CUSTO DE AQUISIÇÃO</small><b>R$ 149,73 por cliente</b></div></div><div className="float-card right" aria-hidden="true"><i>✓</i><div><small>AGENTE DE IA</small><b>Respondeu no WhatsApp em 8 s</b></div></div><CrmFrame label="Dashboard do WAVY CRM com faturamento, retorno dos anúncios e custo por venda" priority><CrmDashboard/></CrmFrame></div></section>

    <section className="wb-pain section-shell"><div className="section-heading"><h2>Você sabe quanto gastou. <em className="gradient-text">Não sabe quanto voltou.</em></h2><p>Se o seu tráfego funciona assim, o problema não está no anúncio. Está em tudo o que acontece depois dele, e que ninguém está medindo.</p></div><ul className="wb-pains">{pains.map(t=><li key={t}><i aria-hidden="true">×</i>{t}</li>)}</ul></section>

    <section className="wb-method section-shell" id="sistema"><div className="section-heading"><span className="eyebrow"><i/>O SISTEMA</span><h2>Quatro etapas. <em className="gradient-text">Uma estratégia só.</em></h2><p>Não são quatro ferramentas soltas. Cada etapa entrega para a seguinte, e a última devolve informação para a primeira.</p></div><ol className="wb-steps">{method.map(([n,verb,what,d])=><li key={n}><span>{n}</span><h3>{verb}</h3><small>{what}</small><p>{d}</p></li>)}</ol>
      <div className="wb-calc"><div><small>PENSA COMIGO</small><h3>Com a venda ligada ao anúncio, a conta fica simples.</h3><p>É essa conta que quase ninguém consegue fazer hoje, porque o anúncio está num lugar e a venda em outro.</p></div><dl><div><dt>Investido em anúncios</dt><dd>R$ 5.540</dd></div><div><dt>Clientes que fecharam</dt><dd>37</dd></div><div className="result"><dt>Custo por cliente</dt><dd>R$ 149,73</dd></div><div className="result"><dt>Retorno sobre o investimento</dt><dd>8,7x</dd></div></dl><p className="wb-calc-note">Exemplo ilustrativo, com os mesmos números da tela acima.</p></div></section>

    <section className="wb-agenda section-shell" id="conteudo"><div className="section-heading"><span className="eyebrow"><i/>O QUE VOCÊ LEVA DA LIVE</span><h2>Você sai sabendo<br/><em className="gradient-text">fazer estas seis coisas.</em></h2></div><ol className="wb-agenda-grid">{agenda.map(([n,t,d])=><li key={n}><span aria-hidden="true">{n}</span><h3>{t}</h3><p>{d}</p></li>)}</ol><div className="wb-cta-row"><Join/></div></section>

    <section className="ai-section wb-demo section-shell"><div><span className="eyebrow"><i/>AO VIVO, NA TELA</span><h2>Sem slide. <em className="gradient-text">Eu abro as telas e mostro.</em></h2><p>Gerenciador de anúncios, WhatsApp e CRM abertos, ao vivo. Você acompanha um cliente do clique até a venda e vê onde cada número aparece.</p><ul className="ai-points"><li><b>O anúncio</b><span>Como ler uma campanha e decidir o que pausar e o que escalar.</span></li><li><b>A conversa</b><span>A IA atendendo um lead no WhatsApp e marcando a reunião.</span></li><li><b>O número</b><span>O dashboard mostrando retorno e custo por venda de cada canal.</span></li></ul></div><PhoneChat/></section>

    <section className="wb-audience section-shell" id="para-quem"><div className="section-heading"><span className="eyebrow"><i/>PARA QUEM É</span><h2>É para você, <em className="gradient-text">se você se viu em alguma destas.</em></h2></div><div className="wb-audience-grid">{audience.map(([t,d],i)=><article key={t}><span aria-hidden="true">{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="founder section-shell" id="quem"><div className="founder-photo"><img src="/assets/founder.webp" alt="Rael Vieira, da WAVY" width={1000} height={1000} loading="lazy" decoding="async"/></div><div className="founder-copy"><span className="eyebrow"><i/>QUEM APRESENTA</span><h2>Rael Vieira, <em className="gradient-text">estrategista digital.</em></h2><p>Trabalho com marketing digital há mais de 4 anos e sempre fui apaixonado por vendas. Já fui gerente comercial em grandes empresas de tecnologia no Brasil e faturei mais de R$ 200 mil por mês no e-commerce.</p><p>Já ajudei negócios a sair do zero e passar de 10 vezes de retorno sobre o investimento em anúncios. Na live, mostro o método que uso na WAVY.</p><dl className="founder-stats"><div><dt>+4 anos</dt><dd>como estrategista digital</dd></div><div><dt>+R$ 200 mil</dt><dd>por mês no e-commerce</dd></div><div><dt>+10x</dt><dd>de ROAS em negócios que saíram do zero</dd></div></dl></div></section>

    <section className="faq section-shell" id="faq"><div className="faq-heading"><span className="eyebrow"><i/>PERGUNTAS FREQUENTES</span><h2>Antes de entrar,<br/><em className="gradient-text">as dúvidas de sempre.</em></h2></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<i aria-hidden="true"/></summary><p>{a}</p></details>)}</div></section>

    <section className="final-cta section-shell"><h2><span>{EVENT.date} · {EVENT.time} · {EVENT.price}</span>Chega de anunciar <em className="gradient-text">no escuro.</em></h2><Join>Quero participar da live</Join></section>

    <a className="whatsapp-float" href={EVENT.groupUrl} target="_blank" rel="noreferrer" aria-label="Entrar no grupo da live pelo WhatsApp"><img src="/assets/whatsapp-float.webp" alt="" width={62} height={62}/></a>
    <SiteFooter links={navLinks} whatsapp={EVENT.groupUrl}/>
  </main>;
}
