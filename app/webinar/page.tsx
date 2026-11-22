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
  title: "Aula gratuita: o sistema de tráfego, CRM e IA que já passou de 10x de ROAS | WAVY",
  description: "Aula ao vivo e gratuita, quinta-feira às 12h: aprenda o sistema que combina tráfego, CRM inteligente e atendimento com IA e que já levou negócios que anunciam a mais de 10x de ROAS.",
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

const myths = [
  ["Tráfego é tudo igual.", "Quem pensa assim troca de gestor de tempos em tempos e recomeça do zero a cada troca. O resultado só muda quando existe um sistema montado em volta do anúncio, seja quem for o gestor."],
  ["Campanha boa é a que entrega mais mensagem.", "Uma campanha pode entregar muita mensagem e pouca venda. Campanha otimizada é a que entrega mais venda, e ela só aprende isso quando recebe de volta a informação de quem comprou."],
  ["O dado de venda fica no comercial.", "Se a venda não volta para o gerenciador de anúncios, a campanha nunca descobre quem é o seu cliente ideal e continua procurando gente que clica em vez de gente que compra."],
];

const answers = [
  ["Por que trocar de gestor não resolve", "As 7 dores de quem investe em tráfego, o que cada uma custa e o que precisa existir em volta do anúncio."],
  ["A matriz de ângulos e criativos", "Como o Meta distribui anúncios hoje e quantos criativos, de quais ângulos, você precisa para cada etapa do funil."],
  ["O atendimento com IA, por dentro", "Como a IA responde no WhatsApp, dá nota para cada lead e recupera quem parou de responder. Eu abro o sistema ao vivo."],
  ["Como devolver as vendas para os anúncios", "O caminho para o Meta e o Google Ads receberem quem comprou e passarem a buscar gente parecida com o seu cliente ideal."],
  ["Como ler o seu ROAS de verdade", "Onde olhar para saber o retorno por canal, por anúncio e por criativo, e decidir o que pausar e o que escalar."],
];

const navLinks = [
  { href: "#problema", label: "O problema" },
  { href: "#crencas", label: "As 3 crenças" },
  { href: "#conteudo", label: "O que você aprende" },
  { href: "#prova", label: "Quem apresenta" },
];

export default function WebinarPage() {
  return <main className="webinar-page" id="top">
    <IslandHeader home="/" links={navLinks} cta={{ href: EVENT.groupUrl, label: "Entrar no grupo", external: true, whatsapp: true }} />

    <section className="wb-hero section-shell"><span className="wb-badge"><i/>AULA GRATUITA · AO VIVO · QUINTA, 12H</span><h1>Aprenda o sistema de <mark>tráfego</mark>, <mark>CRM inteligente</mark> e <mark>atendimento com IA</mark> <em className="gradient-text">que já levou negócios que anunciam a mais de 10x de ROAS.</em></h1><p className="lead-copy">Em uma aula ao vivo, eu desenho na sua frente o sistema que faz a campanha aprender com cada venda. Você sai sabendo o que mudar na sua operação para investir com segurança e escalar o que dá retorno.</p><div className="wb-actions"><Join/></div><dl className="wb-facts">{facts.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><figure className="wb-hero-map"><img src="/assets/mapa-live-branco.webp" width={1200} height={723} decoding="async" alt="Visão geral do quadro da aula, com nove blocos desenhados à mão."/><figcaption>O mapa da aula, que eu desenho ao vivo, bloco por bloco.</figcaption></figure></section>

    <section className="wb-part wb-light section-shell" id="problema"><div className="wb-prose"><span className="wb-kicker">PARTE I · O PROBLEMA</span><h2>Você já trocou de gestor mais de uma vez <em className="gradient-text">e a prova dos resultados nunca veio.</em></h2><p>Você contratou um gestor de tráfego. Ele prometeu resultado. Passaram três meses e você recebeu relatório de clique, de alcance e de lead. Quando perguntou quanto daquilo virou venda, <b>ninguém soube dizer</b>.</p><p>Aí você trocou de gestor e a história se repetiu.</p><p>O problema nunca foi a pessoa, porque o gestor trabalha sem enxergar a venda e você paga sem enxergar o retorno. <b>Os dois ficam no escuro.</b></p><p>Enquanto isso, o lead espera horas por uma resposta, a venda do começo do mês desce na lista do WhatsApp até sumir e ninguém sabe quanto dinheiro está parado em cada etapa.</p><p className="wb-punch">Tudo isso tem a mesma causa, que é a falta de rastreabilidade.</p></div></section>

    <section className="wb-proof section-shell" id="prova"><div className="wb-heading"><span className="wb-kicker center">NA PRÁTICA</span><h2>Esse sistema já roda na operação <em className="gradient-text">de quem trabalha com a gente.</em></h2></div><Cases/><div className="wb-host"><img src="/assets/founder.webp" alt="Rael Vieira" width={1000} height={1000} loading="lazy" decoding="async"/><div><small>QUEM APRESENTA</small><b>Rael Vieira, estrategista digital da WAVY</b><dl>{stats.map(([n,d])=><div key={n}><dt>{n}</dt><dd>{d}</dd></div>)}</dl></div></div><div className="wb-quotes">{quotes.map(([q,n,r])=><figure key={n}><blockquote>{q}</blockquote><figcaption><b>{n}</b><span>{r}</span></figcaption></figure>)}</div><div className="wb-actions"><Join/></div></section>

    <section className="wb-part wb-light section-shell" id="mudanca"><div className="wb-prose"><span className="wb-kicker">PARTE II · O QUE MUDOU</span><h2>O Meta mudou a forma de entregar anúncios <em className="gradient-text">e a maioria das operações continua no jeito antigo.</em></h2><p>Antes, o trabalho do gestor era escolher o público. Hoje o Meta usa um sistema chamado Andromeda, que encontra o público sozinho, lendo o seu criativo. <b>O criativo virou a segmentação.</b></p><p>Por isso o sistema pede variedade: vários ângulos para cada etapa do funil, e vários criativos para cada ângulo. Com IA na produção, dá para fazer esse volume sem triplicar o time.</p></div><div className="wb-shift"><article><small>ANTES</small><ul>{shifts.before.map(t=><li key={t}>{t}</li>)}</ul></article><i aria-hidden="true">→</i><article className="now"><small>HOJE</small><ul>{shifts.now.map(t=><li key={t}>{t}</li>)}</ul></article></div><div className="wb-prose"><p>O resultado é mais gente chamando no WhatsApp, por um custo menor. E um problema novo: <b>o que fazer com tanta mensagem chegando.</b></p></div></section>

    <section className="wb-part section-shell" id="crencas"><div className="wb-prose"><span className="wb-kicker">PARTE III · TRÊS CRENÇAS QUE CUSTAM CARO</span><h2>Três ideias erradas que fazem um negócio <em className="gradient-text">anunciar por anos sem sair do lugar.</em></h2><p>Quase todo mundo repete as três, e cada uma delas custa dinheiro todo mês.</p></div><ol className="wb-myths">{myths.map(([m,t],i)=><li key={m}><small>CRENÇA {i+1}</small><h3>“{m}”</h3><span>A VERDADE</span><p>{t}</p></li>)}</ol></section>

    <section className="wb-part wb-light section-shell" id="virada"><div className="wb-prose"><span className="wb-kicker">PARTE IV · A VIRADA</span><h2>Quando você enxerga qual anúncio virou venda, <em className="gradient-text">escalar deixa de ser aposta.</em></h2><p>Imagine abrir o painel na segunda-feira e saber qual anúncio pagou as contas da semana, sem precisar esperar o relatório do fim do mês.</p><p>Para chegar aí, você precisa ligar três peças que hoje vivem separadas, cada uma com um fornecedor diferente.</p></div><ol className="wb-take-grid">{pillars.map(([t,d],i)=><li key={t}><span aria-hidden="true">{i+1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol><div className="wb-prose"><p>Quando a venda acontece, o CRM registra e devolve para o Meta e para o Google Ads, e a campanha passa a otimizar por compra em vez de mensagem.</p><p className="wb-punch">É daí que sai o seu ROAS real por canal, por anúncio e por criativo.</p></div></section>

    <section className="wb-part wb-fit section-shell" id="para-quem"><div className="wb-prose"><span className="wb-kicker">PARTE V · PARA QUEM É</span><h2>Essa aula <em className="gradient-text">não é para todo mundo.</em></h2></div><div className="wb-fit-grid"><article className="yes"><small>É PARA VOCÊ SE</small><ul>{fitYes.map(t=><li key={t}><i aria-hidden="true">✓</i>{t}</li>)}</ul></article><article className="no"><small>NÃO É PARA VOCÊ SE</small><ul>{fitNo.map(t=><li key={t}><i aria-hidden="true">×</i>{t}</li>)}</ul></article></div><div className="wb-actions"><Join/></div><p className="wb-under">{EVENT.date} · {EVENT.time} · ao vivo · {EVENT.price.toLowerCase()}</p></section>

    <section className="wb-part wb-light section-shell" id="conteudo"><div className="wb-prose"><span className="wb-kicker">PARTE VI · O QUE VOCÊ APRENDE</span><h2>Você sai da aula <em className="gradient-text">sabendo cinco coisas.</em></h2><p>Cada ponto é um bloco do quadro, que eu desenho na sua frente durante a aula.</p></div><ol className="wb-answers">{answers.map(([t,d],i)=><li key={t}><span aria-hidden="true">{String(i+1).padStart(2,"0")}</span><div><h3>{t}</h3><p>{d}</p></div></li>)}</ol><div className="wb-actions"><Join/></div></section>

    <section className="final-cta section-shell"><h2><span>{EVENT.date} · {EVENT.time} · {EVENT.price}</span>Na quinta eu te mostro como <em className="gradient-text">parar de anunciar no escuro.</em></h2><Join>Quero assistir à aula</Join></section>

    <SiteFooter links={navLinks} whatsapp={EVENT.groupUrl}/>
  </main>;
}
