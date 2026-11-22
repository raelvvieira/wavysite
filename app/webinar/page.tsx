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

const pillars = [
  ["Tráfego", "Anúncios feitos do jeito que o Meta distribui hoje, com vários ângulos e criativos."],
  ["CRM inteligente", "Cada conversa vira um card no funil, com nota e próximo passo."],
  ["Atendimento com IA", "Resposta em segundos, a qualquer hora, e recuperação de quem sumiu."],
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

export default function WebinarPage() {
  return <main className="lv" id="top">
    <IslandHeader home="/" links={navLinks} cta={{ href: EVENT.groupUrl, label: "Entrar no grupo", external: true, whatsapp: true }} />

    <section className="lv-hero"><div className="lv-wrap lv-hero-grid"><div><span className="lv-tag live"><i/>Aula gratuita · ao vivo · quinta, 12h</span><h1>Aprenda o Método ROAS Previsível, que une o seu tráfego, CRM e atendimento com IA e pode levar o seu negócio a <em>até 10x de ROAS.</em></h1><p>Em uma aula ao vivo, eu desenho o método que liga cada venda ao anúncio que a trouxe, para você saber quanto cada real investido devolve.</p><Join/><small>Gratuito. Você recebe o link da aula pelo grupo.</small></div><figure><img src="/assets/mapa-metodo.webp" width={1200} height={723} decoding="async" alt="Visão geral do quadro da aula, com nove blocos desenhados à mão."/><figcaption><img src="/assets/founder.webp" width={1000} height={1000} alt="" decoding="async"/><span><b>Com Rael Vieira</b>Estrategista digital da WAVY</span></figcaption></figure></div></section>

    <section className="lv-sec light"><div className="lv-wrap"><span className="lv-tag">Se identificou?</span><h2>Você investe em tráfego e ainda <em>não sabe o que volta?</em></h2><ul className="lv-pains">{pains.map(t=><li key={t}>“{t}”</li>)}</ul><p className="lv-line">Tudo isso tem a mesma causa, que é a falta de rastreabilidade.</p></div></section>

    <section className="lv-sec" id="resultados"><div className="lv-wrap wide"><span className="lv-tag">Na prática</span><h2>Resultados de quem roda o <em>Método ROAS Previsível.</em></h2><Cases note="Prints do Gerenciador de Anúncios da Meta, de contas que rodam o Método ROAS Previsível. Toque em um print para ampliar."/></div></section>

    <section className="lv-sec accent" id="sistema"><div className="lv-wrap"><h2>O Método ROAS Previsível tem três peças.</h2><ol className="lv-pillars">{pillars.map(([t,d],i)=><li key={t}><span aria-hidden="true">{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{d}</p></li>)}</ol><p className="lv-line">Cada venda é rastreada até o anúncio e volta para o Meta e para o Google Ads, e a campanha passa a buscar quem compra.</p></div></section>

    <section className="lv-sec light"><div className="lv-wrap"><span className="lv-tag">Três crenças que custam caro</span><h2>O que faz um negócio anunciar por anos <em>sem sair do lugar.</em></h2><ul className="lv-myths">{myths.map(([m,t])=><li key={m}><s>“{m}”</s><p>{t}</p></li>)}</ul></div></section>

    <section className="lv-sec" id="conteudo"><div className="lv-wrap narrow"><span className="lv-tag">O que você aprende</span><h2>Você sai da aula <em>sabendo cinco coisas.</em></h2><ol className="lv-learn">{learn.map((t,i)=><li key={t}><span aria-hidden="true">{i+1}</span>{t}</li>)}</ol></div></section>

    <section className="lv-sec light"><div className="lv-wrap narrow"><span className="lv-tag">Para quem é</span><h2>Essa aula <em>é para você?</em></h2><ul className="lv-fit">{fitYes.map(t=><li key={t} className="yes"><i aria-hidden="true">✓</i>{t}</li>)}{fitNo.map(t=><li key={t} className="no"><i aria-hidden="true">✕</i>{t}</li>)}</ul></div></section>

    <section className="lv-sec lv-final"><div className="lv-wrap narrow"><h2>Na quinta, às 12h, eu te mostro o <em>Método ROAS Previsível.</em></h2><Join>Quero assistir à aula</Join><small>{EVENT.format} · {EVENT.price}</small></div></section>

    <SiteFooter links={navLinks} whatsapp={EVENT.groupUrl}/>
  </main>;
}
