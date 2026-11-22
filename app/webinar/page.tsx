import type { Metadata } from "next";
import { BrandIcon } from "../brand-icons";
import { Cases } from "../cases";
import { IslandHeader, SiteFooter } from "../chrome";

/* Dados do evento. Tudo o que muda de uma edição para outra fica aqui. */
const EVENT = {
  date: "Quinta-feira",
  time: "12h",
  format: "Online e ao vivo",
  price: "Gratuito",
  groupUrl: "https://chat.whatsapp.com/G7dJIRMSQ9ZEtc0KxD6L70",
};

export const metadata: Metadata = {
  title: "Aula gratuita: Método ROAS Previsível, com tráfego, CRM e IA | WAVY",
  description: "Aula ao vivo e gratuita, quinta-feira às 12h: aprenda o Método ROAS Previsível, que une tráfego, CRM e atendimento com IA para você saber quanto cada anúncio devolve.",
};

function Join({ children = "Entrar no grupo do WhatsApp" }: { children?: React.ReactNode }) {
  return <a className="wa-button" href={EVENT.groupUrl} target="_blank" rel="noreferrer"><BrandIcon name="whatsapp"/><span>{children}</span></a>;
}

const pains = [
  "Já troquei de gestor mais de uma vez e nunca vi a prova do resultado.",
  "Recebo relatório de clique e de lead, mas ninguém me diz quanto virou venda.",
  "Aumento a verba e as vendas não sobem junto.",
  "Meu time demora para responder e o lead esfria.",
  "Tem venda parada no WhatsApp que ninguém lembra de cobrar.",
  "Não sei qual anúncio trouxe o cliente que pagou.",
];


const myths = [
  ["Tráfego é tudo igual.", "O resultado muda quando existe um sistema em volta do anúncio, seja quem for o gestor."],
  ["Campanha boa é a que entrega mais mensagem.", "Campanha otimizada é a que entrega mais venda."],
  ["O dado de venda fica no comercial.", "A venda precisa voltar para o gerenciador, para a campanha buscar quem compra."],
];

const fitYes = [
  "Você já investe em tráfego pago.",
  "Você vende conversando com o cliente, pelo WhatsApp ou pelo Instagram.",
  "Você quer aumentar a verba sabendo o que está funcionando.",
];
const fitNo = [
  "Você procura um truque de anúncio para vender amanhã.",
  "Você quer só assistir, sem aplicar.",
];

const learn = [
  "Por que trocar de gestor não resolve",
  "A matriz de ângulos e criativos",
  "O atendimento com IA, por dentro",
  "Como devolver as vendas para os anúncios",
  "Como ler o seu ROAS por canal, anúncio e criativo",
];

const navLinks = [
  { href: "#resultados", label: "Resultados" },
  { href: "#sistema", label: "O método" },
  { href: "#conteudo", label: "O que você aprende" },
];

function GoogleAds() {
  return <svg viewBox="0 0 24 24"><rect x="11.2" y="1.5" width="6.6" height="20" rx="3.3" transform="rotate(-30 14.5 11.5)" fill="#4285f4"/><rect x="6.2" y="1.5" width="6.6" height="20" rx="3.3" transform="rotate(30 9.5 11.5)" fill="#fbbc04"/><circle cx="5.3" cy="18.3" r="3.3" fill="#34a853"/></svg>;
}

export default function WebinarPage() {
  return <main className="lv" id="top">
    <IslandHeader home="/" links={navLinks} cta={{ href: EVENT.groupUrl, label: "Entrar no grupo", external: true, whatsapp: true }} />

    <section className="lv-hero"><div className="lv-wrap lv-hero-grid"><div><span className="lv-tag live"><i/>Aula gratuita · ao vivo · quinta, 12h</span><h1>Aprenda o <mark>Método ROAS Previsível</mark>, que une o seu tráfego, CRM e atendimento com IA e pode levar o seu negócio a <em>até 10x de ROAS.</em></h1><p>Em uma aula ao vivo, eu desenho o método que liga cada venda ao anúncio que a trouxe, para você saber quanto cada real investido devolve.</p><Join/><small>Gratuito. Você recebe o link da aula pelo grupo.</small></div><figure className="lv-duo"><div className="lv-board"><img src="/assets/mapa-metodo.webp" width={1200} height={723} decoding="async" alt="Visão geral do quadro da aula, com nove blocos desenhados à mão."/></div><img className="lv-person" src="/assets/rael-aula.webp" width={720} height={743} decoding="async" fetchPriority="high" alt="Rael Vieira sorrindo, de camiseta preta"/><figcaption><b>Rael Vieira</b>Estrategista digital da WAVY</figcaption><div className="lv-chip meta" aria-hidden="true"><i><BrandIcon name="meta"/></i><div><small>META ADS</small><b>Você atingiu ROAS de 10,5x</b><em>↗ nesta campanha</em></div></div><div className="lv-chip google" aria-hidden="true"><i><GoogleAds/></i><div><small>GOOGLE ADS</small><b>120 novos leads pelo site</b><em>↗ nos últimos 30 dias</em></div></div></figure></div></section>

    <section className="lv-sec light"><div className="lv-wrap"><span className="lv-tag">Se identificou?</span><h2>Você investe em tráfego e ainda <em>não sabe quanto $$ volta?</em></h2><ul className="lv-pains">{pains.map(t=><li key={t}>“{t}”</li>)}</ul><p className="lv-line">Tudo isso tem a mesma causa, que é a falta de rastreabilidade.</p></div></section>

    <section className="lv-sec" id="resultados"><div className="lv-wrap wide"><span className="lv-tag">Na prática</span><h2>Resultados de quem roda o <em>Método ROAS Previsível.</em></h2><Cases note="Prints do Gerenciador de Anúncios da Meta, de contas que rodam o Método ROAS Previsível. Toque em um print para ampliar."/></div></section>

    <section className="lv-sec light white" id="sistema"><div className="lv-wrap wide"><span className="lv-tag">O que você viu no anúncio</span><h2>O sistema que eu mostrei no anúncio funciona assim, <em>do clique até a venda.</em></h2>
      <ol className="lv-flow">
        <li><div className="fl-v fl-ad" aria-hidden="true"><div><span className="fl-ico meta"><BrandIcon name="meta"/></span><span className="fl-ico"><GoogleAds/></span></div><span className="fl-pill"><i/>Lead novo · origem: Meta Ads</span></div><small>01 · Rastreio</small><h3>O lead chega com a origem registrada</h3><p>Você sabe de qual campanha, anúncio e criativo cada contato veio.</p></li>
        <li><div className="fl-v fl-chat" aria-hidden="true"><p className="in">Como funciona a avaliação?</p><p className="out"><b>✦ IA</b>Oi, Ana! Te explico agora.</p></div><small>02 · Atendimento com IA</small><h3>A IA responde no WhatsApp na hora</h3><p>Ela aprende com as suas conversas e atende no tom da sua empresa, para nenhum lead ficar sem resposta.</p></li>
        <li><div className="fl-v fl-kb" aria-hidden="true"><div><u/><u/></div><div><u/></div><div><u/></div><b>✦ 94</b></div><small>03 · CRM inteligente</small><h3>O CRM se organiza sozinho</h3><p>Cada oportunidade ganha uma nota e a conversa avança no funil conforme o atendimento acontece.</p></li>
        <li><div className="fl-v fl-won" aria-hidden="true"><span className="fl-pill ok">✓ Venda ganha · R$ 2.300</span><span className="fl-pill"><span className="fl-ico meta sm"><BrandIcon name="meta"/></span>↗ enviada ao Meta Ads</span></div><small>04 · Venda</small><h3>A venda volta para a campanha</h3><p>O ganho é enviado ao Meta Ads e ao Google Ads, que passam a buscar quem compra.</p></li>
      </ol>
      <div className="lv-loop" aria-hidden="true"><span>Anúncio</span><i/><span>Venda</span></div>
      <p className="lv-line">Na aula eu abro cada uma dessas etapas e mostro como colocar na sua operação.</p></div></section>

    <section className="lv-sec light"><div className="lv-wrap"><span className="lv-tag">Três crenças que custam caro</span><h2>O que faz um negócio anunciar por anos <em>sem sair do lugar.</em></h2><ul className="lv-myths">{myths.map(([m,t])=><li key={m}><s>“{m}”</s><p>{t}</p></li>)}</ul></div></section>

    <section className="lv-sec" id="conteudo"><div className="lv-wrap narrow"><span className="lv-tag">O que você aprende</span><h2>Você sai da aula <em>sabendo cinco coisas.</em></h2><ol className="lv-learn">{learn.map((t,i)=><li key={t}><span aria-hidden="true">{i+1}</span>{t}</li>)}</ol></div></section>

    <section className="lv-sec light"><div className="lv-wrap narrow"><span className="lv-tag">Para quem é</span><h2>Essa aula <em>é para você?</em></h2><ul className="lv-fit">{fitYes.map(t=><li key={t} className="yes"><i aria-hidden="true">✓</i>{t}</li>)}{fitNo.map(t=><li key={t} className="no"><i aria-hidden="true">✕</i>{t}</li>)}</ul></div></section>

    <section className="lv-sec lv-final"><div className="lv-wrap narrow"><h2>Na quinta, às 12h, eu te mostro o <em>Método ROAS Previsível.</em></h2><Join>Quero assistir à aula</Join><small>{EVENT.format} · {EVENT.price}</small></div></section>

    <SiteFooter links={navLinks} whatsapp={EVENT.groupUrl}/>
  </main>;
}
