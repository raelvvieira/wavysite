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

const GoogleAds = () => <svg className="gads" viewBox="0 0 24 24" aria-hidden="true"><rect x="11.2" y="1.5" width="6.6" height="20" rx="3.3" transform="rotate(-30 14.5 11.5)" fill="#4285f4"/><rect x="6.2" y="1.5" width="6.6" height="20" rx="3.3" transform="rotate(30 9.5 11.5)" fill="#fbbc04"/><circle cx="5.3" cy="18.3" r="3.3" fill="#34a853"/></svg>;

/* Um cliente de exemplo, do clique à venda. Os valores são ilustrativos. */
const flow: { tag: string; title: string; chip: string; scene: React.ReactNode }[] = [
  { tag: "ANÚNCIO", title: "Ana clica no anúncio", chip: "Meta Ads · criativo 03",
    scene: <div className="wb-ads"><i><BrandIcon name="meta"/></i><i><GoogleAds/></i></div> },
  { tag: "ATENDIMENTO COM IA", title: "A IA responde em 8\u00a0s", chip: "Lead qualificado",
    scene: <div className="wb-chat"><p className="in">Oi! Como funciona?</p><p className="out"><b>✦ IA</b>Oi, Ana! Te explico agora.</p></div> },
  { tag: "CRM", title: "O card anda sozinho no funil", chip: "Reunião · qui, 14h",
    scene: <div className="wb-kanban"><div><small>Novo</small><u/></div><div><small>Reunião</small><u/></div><div><small>Ganho</small></div><span className="wb-card">Ana</span></div> },
  { tag: "VENDA", title: "Ana fecha", chip: "R$ 1.306",
    scene: <div className="wb-sale"><i>✓</i></div> },
  { tag: "RESULTADO", title: "A venda volta para o anúncio", chip: "Escalar o criativo 03",
    scene: <div className="wb-metrics"><div><small>CAC</small><b>R$ 149,73</b></div><div><small>ROAS</small><b>8,7x</b></div></div> },
];

const takeaways = [
  ["Seu custo por cliente", "Quanto custa trazer cada cliente, contando a venda e não só o lead."],
  ["O retorno de cada anúncio", "Qual canal, qual anúncio e qual criativo devolvem o dinheiro investido."],
  ["O sistema para replicar", "Como ligar anúncio, IA no WhatsApp e CRM no seu negócio."],
];

const navLinks = [
  { href: "#fluxo", label: "Como funciona" },
  { href: "#conteudo", label: "O que você leva" },
];

export default function WebinarPage() {
  return <main className="webinar-page" id="top">
    <IslandHeader home="/" links={navLinks} cta={{ href: EVENT.groupUrl, label: "Entrar no grupo", external: true, whatsapp: true }} />

    <section className="wb-hero section-shell"><span className="wb-badge"><i/>LIVE GRATUITA · TODA QUINTA, 19H</span><h1>Chega de rodar tráfego pago <em className="gradient-text">sem saber quanto custa cada cliente.</em></h1><p className="lead-copy">Ao vivo, eu mostro o sistema que liga anúncio, IA no WhatsApp e CRM, para você escalar sabendo o que volta.</p><div className="wb-actions"><Join/></div><dl className="wb-facts">{facts.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></section>

    <section className="wb-flow-section section-shell" id="fluxo"><div className="wb-heading"><h2>Um cliente, <em className="gradient-text">do clique à venda.</em></h2><p>É este caminho que você vai ver montado ao vivo.</p></div>
      <ol className="wb-flow" aria-label="Exemplo do caminho de um cliente: anúncio, atendimento com IA, CRM, venda e resultado">{flow.map((f,i)=><li key={f.tag} className={`n${i+1}`}><div className="wb-node"><div className="wb-scene" aria-hidden="true">{f.scene}</div><small>{f.tag}</small><b>{f.title}</b><span className="wb-chip">{f.chip}</span></div></li>)}</ol>
      <p className="wb-loop"><i aria-hidden="true">↻</i>Com a venda ligada ao anúncio, você sabe qual criativo escalar.</p><p className="wb-note">Exemplo ilustrativo.</p></section>

    <section className="wb-take section-shell" id="conteudo"><div className="wb-heading"><h2>Você sai da live <em className="gradient-text">sabendo três coisas.</em></h2></div><ol className="wb-take-grid">{takeaways.map(([t,d],i)=><li key={t}><span aria-hidden="true">{i+1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
      <div className="wb-host"><img src="/assets/founder.webp" alt="Rael Vieira" width={1000} height={1000} loading="lazy" decoding="async"/><p><b>Com Rael Vieira,</b> estrategista digital da WAVY. Já ajudou negócios a sair do zero e passar de 10x de retorno sobre o investimento em anúncios.</p></div></section>

    <section className="final-cta section-shell"><h2><span>{EVENT.date} · {EVENT.time} · {EVENT.price}</span>Chega de anunciar <em className="gradient-text">no escuro.</em></h2><Join>Quero participar da live</Join></section>

    <SiteFooter links={navLinks} whatsapp={EVENT.groupUrl}/>
  </main>;
}
