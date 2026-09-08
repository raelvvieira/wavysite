import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WAVY CRM | Instagram Direct e WhatsApp em uma só caixa de entrada",
  description: "CRM da WAVY para atendimento e vendas: Instagram Direct e WhatsApp Business Platform em um único chat, funil kanban, gestão de contatos, automações e disparos por modelo de mensagem aprovado pela Meta.",
};

const features = [
  ["Caixa de entrada única", "Instagram Direct e WhatsApp na mesma tela. Sua equipe deixa de alternar entre aplicativos para responder."],
  ["WhatsApp Business Platform", "Conexão pela API oficial da Meta, com o número da sua empresa e histórico preservado."],
  ["Instagram Direct", "As mensagens do seu perfil profissional chegam na mesma caixa, com o contexto de quem já falou com você."],
  ["Modelos de mensagem", "Modelos submetidos à aprovação da Meta, prontos para iniciar conversas fora da janela de atendimento."],
  ["Disparos por modelo", "Envio para contatos que autorizaram receber mensagens, usando apenas modelos aprovados."],
  ["Funil kanban", "Cada conversa vira um card. Você arrasta entre as etapas e enxerga o funil inteiro de uma vez."],
  ["Gestão de contatos", "Cadastro organizado com o histórico das conversas e o estágio de cada oportunidade."],
  ["Automações", "Regras que encaminham, classificam e respondem sem depender de alguém lembrar de fazer."],
];

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

export default function CrmPage() {
  return <main className="dashboard-page">
    <header className="dashboard-header section-shell"><a href="/" className="dashboard-logo"><img src="/assets/wavy-logo.png" alt="WAVY"/></a><nav><a href="#recursos">Recursos</a><a href="#canais">Canais</a><a href="#consentimento">Consentimento</a><a href="#seguranca">Segurança</a></nav><a className="dashboard-access" href="mailto:contato@wavymarketing.com.br?subject=Conhecer%20o%20WAVY%20CRM">Falar com a WAVY <span>↗</span></a></header>

    <section className="dashboard-hero section-shell"><div className="dashboard-hero-copy"><span className="dashboard-kicker">CRM DE ATENDIMENTO E VENDAS</span><h1>Instagram e WhatsApp <em>na mesma conversa.</em></h1><p>Toda mensagem que chega da sua empresa em um só lugar, organizada em funil, com o histórico de quem já falou com você. Sua equipe responde mais rápido e para de perder oportunidade no meio do caminho.</p><div><a className="dashboard-primary" href="mailto:contato@wavymarketing.com.br?subject=Conhecer%20o%20WAVY%20CRM">Falar com a WAVY <span>↗</span></a><a className="dashboard-secondary" href="#visao-geral">Conhecer o CRM ↓</a></div><small>Plataforma desenvolvida e operada pela WAVY Marketing.</small></div><CrmMockup/></section>

    <section className="dashboard-intro section-shell" id="visao-geral"><span>01 / VISÃO GERAL</span><div><h2>O lead respondeu. <em>Mas em qual aplicativo?</em></h2><p>Quando o atendimento acontece espalhado entre o Direct do Instagram e o WhatsApp, ninguém sabe ao certo quem já foi respondido, o que foi combinado e em que pé está cada negociação. O WAVY CRM reúne os dois canais em uma caixa de entrada única e transforma cada conversa em uma oportunidade visível dentro do funil.</p><div className="audience-cards"><article><b>Equipe comercial</b><p>Responde os dois canais na mesma tela, com o histórico do contato à mão e a etapa do funil sempre atualizada.</p></article><article><b>Gestão</b><p>Enxerga quantas oportunidades entraram, quais avançaram e onde as conversas estão parando.</p></article></div></div></section>

    <section className="dashboard-metrics section-shell" id="recursos"><header><span>02 / RECURSOS</span><h2>Atendimento e funil.<br/><em>No mesmo lugar.</em></h2></header><div>{features.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="metric-note"><b>Sobre os disparos:</b> mensagens iniciadas pela empresa utilizam modelos previamente aprovados pela Meta e são enviadas somente a contatos que autorizaram o recebimento.</p></section>

    <section className="integration-section section-shell" id="canais"><div className="integration-heading"><span>03 / CANAIS CONECTADOS</span><h2>WhatsApp e Instagram.<br/><em>Uma única caixa de entrada.</em></h2><p>As contas são conectadas somente com autorização da sua empresa. Cada cliente visualiza exclusivamente as conversas vinculadas às contas que conectou.</p></div><div className="platform-cards"><article><div className="platform-icon whatsapp">✆</div><small>API OFICIAL DA META</small><h3>WhatsApp Business Platform</h3><p>Recebimento e resposta das mensagens, modelos aprovados e envio para contatos que autorizaram.</p></article><article><div className="platform-icon instagram">◎</div><small>PERFIL PROFISSIONAL</small><h3>Instagram Direct</h3><p>As mensagens recebidas no Direct chegam na mesma caixa, com o histórico do contato.</p></article></div></section>

    <section className="crm-flow section-shell" id="consentimento"><div><span>04 / CONEXÃO E PERMISSÕES</span><h2>Uma conexão transparente, iniciada por você.</h2><p>O responsável pela empresa é direcionado ao ambiente oficial da Meta, onde consulta as permissões solicitadas antes de autorizar o acesso. Nenhuma conta é conectada sem esse consentimento.</p><ol>{flowSteps.map(([title,text],i)=><li key={title}><i>{i+1}</i><div><b>{title}</b><small>{text}</small></div></li>)}</ol></div><div className="crm-use-card"><span>APÓS A AUTORIZAÇÃO</span><h3>As APIs da Meta são utilizadas para:</h3><ul>{apiUses.map(item=><li key={item}><i>✓</i>{item}</li>)}</ul></div></section>

    <section className="readonly-section section-shell"><div><span>CONSENTIMENTO E OPT-IN</span><h2>Sua empresa só envia mensagem para quem autorizou receber.</h2></div><p>Conversas iniciadas pelo cliente são respondidas livremente dentro da janela de 24 horas. Fora dela, o contato só é retomado com <b>modelo de mensagem aprovado pela Meta</b> e apenas para quem deu consentimento. Pedidos de descadastro são respeitados e o contato deixa de receber novos envios.</p></section>

    <section className="security-section section-shell" id="seguranca"><header><span>05 / SEGURANÇA E CONTROLE</span><h2>Suas conversas e seus contatos <em>permanecem sob seu controle.</em></h2></header><div className="security-grid">{security.map(([t,p])=><article key={t}><i>✓</i><h3>{t}</h3><p>{p}</p></article>)}</div></section>

    <section className="about-dashboard section-shell"><span>06 / SOBRE A WAVY</span><div><h2>Marketing, dados e inteligência comercial <em>trabalhando juntos.</em></h2><p>A WAVY é uma agência de gestão de tráfego e inteligência comercial que conecta mídia, tecnologia e processos de vendas. O WAVY CRM faz parte dessa estrutura: o anúncio gera a conversa, e a conversa passa a ser atendida, organizada e acompanhada até virar venda.</p><a href="mailto:contato@wavymarketing.com.br?subject=Conhecer%20o%20WAVY%20CRM">Falar com a WAVY <span>↗</span></a></div></section>

    <footer className="dashboard-footer section-shell"><div><a href="/" className="dashboard-logo"><img src="/assets/wavy-logo.png" alt="WAVY"/></a><p>HYPA E-COM NEGÓCIOS DIGITAIS LTDA<br/>CNPJ 46.975.244/0001-90</p><a href="mailto:contato@wavymarketing.com.br">contato@wavymarketing.com.br</a></div><nav><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a><a href="mailto:contato@wavymarketing.com.br?subject=Solicitação%20de%20exclusão%20de%20dados">Solicitação de exclusão de dados</a><a href="/dashboard">WAVY Dashboard</a></nav><p>© 2026 WAVY MARKETING</p></footer>
  </main>;
}

function CrmMockup(){
  const chats = [["AC","Ana Carolina","Perfeito, pode me mandar a proposta?","wa"],["RM","Rafael Mendes","Vi o anúncio de vocês no Instagram","ig"],["JS","Juliana Souza","Consigo falar hoje às 15h","wa"],["PL","Pedro Lima","Qual o prazo de implantação?","ig"]];
  const columns = [["NOVOS",3],["EM CONTATO",5],["REUNIÃO",2],["FECHADO",4]];
  return <div className="dashboard-product-ui crm-product-ui" aria-label="Prévia ilustrativa do WAVY CRM">
    <header><b>WAVY <em>CRM</em></b><span>CAIXA DE ENTRADA</span><i>RV</i></header>
    <div className="product-body"><aside><span>Conversas</span><span>Funil</span><span>Contatos</span><span>Automações</span><span>Modelos</span></aside>
      <section>
        <div className="product-title"><div><small>ATENDIMENTO</small><b>Caixa de entrada</b></div><span>Todos os canais⌄</span></div>
        <div className="crm-inbox">{chats.map(([ini,nome,msg,canal])=><article key={nome}><i>{ini}</i><div><b>{nome}</b><small>{msg}</small></div><em className={canal}>{canal==="wa"?"WhatsApp":"Direct"}</em></article>)}</div>
        <div className="crm-kanban">{columns.map(([nome,qtd])=><div key={nome}><span>{nome}<b>{qtd}</b></span><u/><u/></div>)}</div>
      </section>
    </div>
  </div>;
}
