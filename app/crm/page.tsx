import type { Metadata } from "next";
import { BrandIcon } from "../brand-icons";
import { CRM_URL, IslandHeader, SiteFooter } from "../chrome";
import { CrmDashboard, CrmFrame, CrmInbox, CrmKanban, CrmScreen, PhoneChat } from "../mockups";

export const metadata: Metadata = {
  title: "WAVY CRM | Instagram Direct e WhatsApp em uma só caixa de entrada",
  description: "CRM da WAVY para atendimento e vendas: Instagram Direct e WhatsApp Business Platform em um único chat, funil kanban, gestão de contatos, automações e disparos por modelo de mensagem aprovado pela Meta.",
};


const WHATSAPP = "https://wa.me/555193228992?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20o%20WAVY%20CRM.";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Talk({ children }: { children: React.ReactNode }) {
  return <a className="button branded-button" href={WHATSAPP} target="_blank" rel="noreferrer"><span className="button-mark"><img src="/assets/wavy-button-mark.jpg" alt="" width={64} height={64}/></span><span className="button-label">{children}</span></a>;
}

type Delivery = { n: string; title: string; what: string; includes: [string, string][]; replaces: string; caption: string; note?: React.ReactNode };

const deliveries: Delivery[] = [
  { n: "01", title: "Caixa de entrada única", what: "Instagram Direct e WhatsApp na mesma tela. Seu time para de pular de um aplicativo para outro para responder.",
    includes: [
      ["WhatsApp Business Platform", "Conexão pela API oficial da Meta, com o número da sua empresa e histórico preservado."],
      ["Instagram Direct", "As mensagens do seu perfil profissional chegam na mesma caixa, com o contexto de quem já falou com você."],
      ["Múltiplos atendentes", "Cada conversa tem um responsável. A equipe inteira trabalha na mesma caixa sem duplicar atendimento."],
      ["Notas internas", "Registre o contexto da negociação na própria conversa. Visível para a equipe, nunca para o contato."],
      ["Respostas rápidas", "Mensagens que se repetem viram atalho, com a redação certa sempre à mão."],
    ],
    replaces: "O WhatsApp no celular de cada vendedor e o Direct aberto em outra aba.", caption: "Conversas de WhatsApp e Instagram na mesma lista, com os dados do contato ao lado." },
  { n: "02", title: "Funil de vendas", what: "Cada conversa vira um card. Você arrasta entre as etapas e enxerga o funil inteiro de uma vez.",
    includes: [
      ["Funil kanban", "As etapas do seu processo comercial, com o valor em aberto e o que já foi ganho."],
      ["Gestão de contatos", "Cadastro organizado com o histórico das conversas e o estágio de cada oportunidade."],
      ["Tags e segmentação", "Classifique contatos por interesse, origem ou estágio e encontre depois quem você precisa."],
      ["Nota da IA e próximo passo", "Cada negócio recebe uma nota e uma sugestão do que fazer em seguida."],
    ],
    replaces: "A planilha de leads que ninguém atualiza.", caption: "Cada negócio com a nota da IA e o próximo passo sugerido." },
  { n: "03", title: "Agente de IA e automações", what: "O primeiro atendimento acontece na hora, mesmo fora do horário. A IA qualifica e encaminha para a pessoa certa.",
    includes: [
      ["Chatbot", "Primeiro atendimento automático que qualifica e encaminha para a pessoa certa."],
      ["Automações", "Regras que encaminham, classificam e respondem sem depender de alguém lembrar de fazer."],
      ["Controle humano", "Um atendente pode assumir a conversa quando quiser."],
    ],
    replaces: "O cliente esperando resposta até alguém ficar livre.", caption: "O cliente chama no WhatsApp e a conversa já entra no funil." },
  { n: "04", title: "Modelos e disparos", what: "Para retomar o contato com quem já falou com você, do jeito que a Meta permite.",
    includes: [
      ["Modelos de mensagem", "Modelos submetidos à aprovação da Meta, prontos para iniciar conversas fora da janela de atendimento."],
      ["Disparos por modelo", "Envio para contatos que autorizaram receber mensagens, usando apenas modelos aprovados."],
    ],
    replaces: "Listas de transmissão enviadas na mão, uma por uma.", caption: "Um modelo de mensagem aprovado, pronto para envio.",
    note: <><b>Sobre os disparos:</b> mensagens iniciadas pela empresa utilizam modelos previamente aprovados pela Meta e são enviadas somente a contatos que autorizaram o recebimento.</> },
  { n: "05", title: "Dashboard e relatórios", what: "O que entrou, o que avançou e o que virou venda, sem montar relatório.",
    includes: [
      ["Relatórios de atendimento", "Volume de conversas, tempo de resposta e conversão por etapa do funil."],
      ["Anúncios no resultado do negócio", "Investimento, retorno e custo por venda ao lado do faturamento."],
    ],
    replaces: "O relatório montado na mão no fim do mês.", caption: "Faturamento, retorno dos anúncios e funil na mesma tela." },
];

function TemplateMock() {
  return <div className="tpl-stage" role="img" aria-label="Exemplo de modelo de mensagem aprovado pela Meta, com botões de resposta">
    <div className="tpl-card" aria-hidden="true">
      <header><div><small>MODELO DE MENSAGEM</small><b>lembrete_avaliacao</b></div><span>● Aprovado pela Meta</span></header>
      <div className="tpl-bubble"><p>Oi, <i>{"{{nome}}"}</i>! Passando para lembrar da sua avaliação amanhã, às <i>{"{{horário}}"}</i>. Posso confirmar?</p><div><span>Confirmar</span><span>Remarcar</span></div></div>
      <footer><span>Enviar para</span><b>Contatos que autorizaram · 128</b></footer>
    </div>
  </div>;
}

const flowSteps = [
  ["Autorização", "A conexão começa no ambiente oficial da Meta"],
  ["Seleção da conta", "Você escolhe o número e o perfil que serão conectados"],
  ["Conversas centralizadas", "As mensagens passam a chegar na caixa única"],
];

const apiUses = [
  "Receber as mensagens enviadas pelos clientes à sua empresa",
  "Responder dentro da janela de atendimento de 24 horas",
  "Enviar modelos de mensagem aprovados para contatos que autorizaram",
  "Submeter modelos de mensagem à aprovação da Meta",
  "Consultar o número e o perfil conectados pela sua empresa",
  "Organizar contatos, conversas e o estágio de cada oportunidade",
];

const security = [
  ["Autorização explícita", "A conexão acontece somente pelo fluxo oficial da Meta, iniciado por você."],
  ["Acesso segregado", "Cada empresa visualiza apenas as conversas e os contatos da própria conta."],
  ["Ambiente protegido", "Tokens são processados e armazenados no servidor, sem exposição no navegador."],
  ["Revogação a qualquer momento", "Você pode desconectar a conta nas configurações da Meta ou solicitar a desconexão à WAVY."],
  ["Sem venda de dados", "As conversas e os contatos não são vendidos nem usados para publicidade de terceiros."],
  ["Finalidade limitada", "O acesso se restringe às funções descritas nesta página e na Política de Privacidade."],
];

const navLinks = [
  { href: "#recursos", label: "Recursos" },
  { href: "#canais", label: "Canais" },
  { href: "#seguranca", label: "Segurança" },
  { href: "/", label: "Site da WAVY" },
];

export default function CrmPage() {
  const visuals = [
    <CrmScreen key="inbox" label="Tela de conversas do WAVY CRM, com WhatsApp e Instagram na mesma caixa de entrada"><CrmInbox/></CrmScreen>,
    <CrmFrame key="funil" label="Tela de funil de vendas do WAVY CRM, com nota da IA e próximo passo em cada negócio"><CrmKanban/></CrmFrame>,
    <PhoneChat key="ia"/>,
    <TemplateMock key="tpl"/>,
    <CrmScreen key="dash" label="Dashboard do WAVY CRM com faturamento, retorno dos anúncios e funil de vendas"><CrmDashboard/></CrmScreen>,
  ];
  return <main className="dashboard-page crm-page" id="top">
    <IslandHeader home="/" links={navLinks} cta={{ href: CRM_URL, label: "Acessar o CRM" }} />

    <section className="hero-product section-shell"><span className="eyebrow"><i/>WAVY CRM · ATENDIMENTO E VENDAS</span><h1>O CRM que <span className="rotator"><em className="gradient-text">atende no WhatsApp</em><em className="gradient-text">responde no Direct</em><em className="gradient-text">organiza seu funil</em></span></h1><p className="lead-copy">Toda mensagem que chega na sua empresa num lugar só, organizada em funil e com o histórico de quem já falou com você. Seu time responde mais rápido e para de perder venda no meio do caminho.</p><div className="actions"><Talk>Falar com a WAVY</Talk><a className="button secondary" href={CRM_URL}>Acessar o CRM <Arrow/></a></div><p className="hero-fineprint">Plataforma desenvolvida e operada pela WAVY Marketing.</p><div className="hero-stage"><div className="float-card left" aria-hidden="true"><i>✦</i><div><small>WHATSAPP E INSTAGRAM</small><b>Na mesma caixa de entrada</b></div></div><div className="float-card right" aria-hidden="true"><i>✓</i><div><small>NO FUNIL</small><b>Cada conversa vira um negócio</b></div></div><CrmFrame label="Tela de conversas do WAVY CRM, com WhatsApp e Instagram na mesma caixa de entrada" priority><CrmInbox/></CrmFrame></div></section>

    <section className="crm-why section-shell" id="visao-geral"><div className="section-heading"><h2>O cliente respondeu. <em className="gradient-text">Mas em qual aplicativo?</em></h2><p>Quando o atendimento acontece espalhado entre o Direct do Instagram e o WhatsApp, ninguém sabe ao certo quem já foi respondido, o que foi combinado e em que pé está cada negociação. O WAVY CRM reúne os dois canais em uma caixa de entrada única e transforma cada conversa em uma oportunidade visível dentro do funil.</p></div><div className="crm-audience"><article><small>PARA A</small><h3>Equipe comercial</h3><p>Responde os dois canais na mesma tela, com o histórico do contato à mão e a etapa do funil sempre atualizada.</p></article><article><small>PARA A</small><h3>Gestão</h3><p>Enxerga quantas oportunidades entraram, quais avançaram e onde as conversas estão parando.</p></article></div></section>

    <section className="crm-deliveries section-shell" id="recursos"><div className="section-heading"><span className="eyebrow"><i/>O QUE ESTÁ INCLUÍDO</span><h2>O sistema,<br/><em className="gradient-text">parte por parte.</em></h2></div>
      {deliveries.map((d,i)=><article className={i%2?"crm-row flip":"crm-row"} key={d.n}>
        <div className="crm-row-copy"><span className="crm-row-num">{d.n}</span><h3>{d.title}</h3><p className="crm-row-what">{d.what}</p><small className="crm-row-label">INCLUI</small><ul>{d.includes.map(([t,x])=><li key={t}><i aria-hidden="true">✓</i><div><b>{t}</b><span>{x}</span></div></li>)}</ul><p className="crm-row-replaces"><small>SUBSTITUI</small>{d.replaces}</p>{d.note&&<p className="crm-row-note">{d.note}</p>}</div>
        <figure className={i===2||i===3?"crm-row-visual compact":i===1?"crm-row-visual wide":"crm-row-visual"}>{visuals[i]}<figcaption>{d.caption} <span>Tela ilustrativa, com dados fictícios.</span></figcaption></figure>
      </article>)}
    </section>

    <section className="integration-section section-shell" id="canais"><div className="integration-heading"><span>CANAIS CONECTADOS</span><h2>WhatsApp e Instagram.<br/><em className="gradient-text">Uma única caixa de entrada.</em></h2><p>As contas são conectadas somente com autorização da sua empresa. Cada cliente visualiza exclusivamente as conversas vinculadas às contas que conectou.</p></div><div className="platform-cards"><article><div className="platform-icon whatsapp"><BrandIcon name="whatsapp"/></div><small>API OFICIAL DA META</small><h3>WhatsApp Business Platform</h3><p>Recebimento e resposta das mensagens, modelos aprovados e envio para contatos que autorizaram.</p></article><article><div className="platform-icon instagram"><BrandIcon name="instagram"/></div><small>PERFIL PROFISSIONAL</small><h3>Instagram Direct</h3><p>As mensagens recebidas no Direct chegam na mesma caixa, com o histórico do contato.</p></article></div></section>

    <section className="crm-flow section-shell" id="consentimento"><div><span>CONEXÃO E PERMISSÕES</span><h2>Uma conexão transparente, iniciada por você.</h2><p>O responsável pela empresa é direcionado ao ambiente oficial da Meta, onde consulta as permissões solicitadas antes de autorizar o acesso. Nenhuma conta é conectada sem esse consentimento.</p><ol>{flowSteps.map(([title,text],i)=><li key={title}><i>{i+1}</i><div><b>{title}</b><small>{text}</small></div></li>)}</ol></div><div className="crm-use-card"><span>APÓS A AUTORIZAÇÃO</span><h3>As APIs da Meta são utilizadas para:</h3><ul>{apiUses.map(item=><li key={item}><i>✓</i>{item}</li>)}</ul></div></section>

    <section className="readonly-section section-shell"><div><span>CONSENTIMENTO E OPT-IN</span><h2>Sua empresa só envia mensagem para quem autorizou receber.</h2></div><p>Conversas iniciadas pelo cliente são respondidas livremente dentro da janela de 24 horas. Fora dela, o contato só é retomado com <b>modelo de mensagem aprovado pela Meta</b> e apenas para quem deu consentimento. Pedidos de descadastro são respeitados e o contato deixa de receber novos envios.</p></section>

    <section className="security-section section-shell" id="seguranca"><header><span>SEGURANÇA E CONTROLE</span><h2>Suas conversas e seus contatos <em className="gradient-text">permanecem sob seu controle.</em></h2></header><div className="security-grid">{security.map(([t,p])=><article key={t}><i>✓</i><h3>{t}</h3><p>{p}</p></article>)}</div></section>

    <section className="about-dashboard section-shell"><span>SOBRE A WAVY</span><div><h2>Marketing, dados e inteligência comercial <em className="gradient-text">trabalhando juntos.</em></h2><p>A WAVY é uma agência de gestão de tráfego e inteligência comercial que conecta mídia, tecnologia e processos de vendas. O WAVY CRM faz parte dessa estrutura: o anúncio gera a conversa, e a conversa passa a ser atendida, organizada e acompanhada até virar venda.</p><a href="mailto:contato@wavymarketing.com.br?subject=Conhecer%20o%20WAVY%20CRM">Falar com a WAVY <span>↗</span></a></div></section>

    <section className="final-cta section-shell"><h2><span>O próximo passo é uma conversa.</span>Quer ver o CRM <em className="gradient-text">rodando na sua operação?</em></h2><div className="actions"><Talk>Falar com a WAVY</Talk><a className="button secondary" href={CRM_URL}>Acessar o CRM <Arrow/></a></div></section>

    <SiteFooter links={navLinks} whatsapp={WHATSAPP}/>
  </main>;
}
