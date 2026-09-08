import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WAVY Dashboard | Gestão de Tráfego e Vendas",
  description: "Conheça o WAVY Dashboard: dados de Meta Ads, Google Ads e vendas organizados em uma única visão.",
};

const metrics = [
  ["Investimento", "Acompanhe quanto foi investido no período selecionado."],
  ["Impressões e alcance", "Entenda a distribuição e a exposição das campanhas."],
  ["Cliques e CTR", "Veja quantas interações seus anúncios geraram."],
  ["CPC, CPM e CPA", "Visualize os custos de entrega, cliques e resultados."],
  ["Conversões", "Acompanhe leads, compras e outras ações configuradas."],
  ["CAC e vendas", "Relacione mídia aos resultados comerciais disponíveis."],
  ["Comparação por período", "Analise 7, 14 ou 30 dias e intervalos personalizados."],
  ["Campanhas", "Consulte a visão geral ou o resultado individual de cada campanha."],
];

const googleUses = ["Identificar as contas de anúncios disponíveis", "Permitir a seleção da conta que será conectada", "Consultar nome e informações básicas da conta", "Importar métricas da conta e das campanhas", "Apresentar investimento, impressões, cliques, conversões, CTR, CPC e CPM", "Atualizar periodicamente os relatórios da equipe e do cliente"];

export default function DashboardPage() {
  return <main className="dashboard-page">
    <header className="dashboard-header section-shell"><a href="/" className="dashboard-logo"><img src="/assets/wavy-logo.png" alt="WAVY"/></a><nav><a href="#recursos">Recursos</a><a href="#integracoes">Integrações</a><a href="#seguranca">Segurança</a></nav><a className="dashboard-access" href="mailto:contato@wavymarketing.com.br?subject=Acesso%20ao%20WAVY%20Dashboard">Acessar dashboard <span>↗</span></a></header>

    <section className="dashboard-hero section-shell"><div className="dashboard-hero-copy"><span className="dashboard-kicker">DASHBOARD DE GESTÃO DE TRÁFEGO E VENDAS</span><h1>Seus dados de tráfego e vendas <em>organizados em um só lugar.</em></h1><p>Uma plataforma desenvolvida pela WAVY para acompanhar anúncios, indicadores comerciais e entender com clareza como o investimento em marketing contribui para o negócio.</p><div><a className="dashboard-primary" href="mailto:contato@wavymarketing.com.br?subject=Acesso%20ao%20WAVY%20Dashboard">Acessar o dashboard <span>↗</span></a><a className="dashboard-secondary" href="#visao-geral">Conhecer a plataforma ↓</a></div><small>Plataforma desenvolvida e operada pela WAVY Marketing.</small></div><DashboardMockup/></section>

    <section className="dashboard-intro section-shell" id="visao-geral"><span>01 / VISÃO GERAL</span><div><h2>Mais clareza para tomar <em>decisões melhores.</em></h2><p>O WAVY Dashboard reúne informações de mídia e vendas em uma interface prática e intuitiva. Clientes e equipe WAVY podem comparar períodos e identificar quais campanhas contribuem para oportunidades e vendas.</p><div className="audience-cards"><article><b>Equipe WAVY</b><p>Acompanha as contas conectadas e utiliza os dados na gestão das campanhas.</p></article><article><b>Clientes WAVY</b><p>Acessam somente os dados da própria empresa e das contas que autorizaram.</p></article></div></div></section>

    <section className="dashboard-metrics section-shell" id="recursos"><header><span>02 / INDICADORES</span><h2>O que você precisa acompanhar.<br/><em>Sem relatórios complicados.</em></h2></header><div>{metrics.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="metric-note"><b>Sobre o CAC:</b> indicador calculado pela WAVY a partir do investimento e das informações comerciais disponíveis; não é fornecido diretamente pelo Google Ads.</p></section>

    <section className="integration-section section-shell" id="integracoes"><div className="integration-heading"><span>03 / INTEGRAÇÕES</span><h2>Meta Ads e Google Ads.<br/><em>Uma única visão.</em></h2><p>As contas publicitárias são conectadas somente com autorização. Cada cliente visualiza exclusivamente as informações vinculadas à sua empresa.</p></div><div className="platform-cards"><article><div className="platform-icon meta">∞</div><small>FACEBOOK + INSTAGRAM</small><h3>Meta Ads</h3><p>Acompanhamento do desempenho das campanhas e dos resultados configurados.</p></article><article><div className="platform-icon google">G</div><small>CONTA + CAMPANHAS</small><h3>Google Ads</h3><p>Dados de conta, campanhas, conversões e métricas de desempenho.</p></article></div></section>

    <section className="google-flow section-shell"><div><span>04 / GOOGLE ADS</span><h2>Uma conexão transparente, iniciada por você.</h2><p>O usuário responsável é direcionado à tela oficial de consentimento do Google, onde consulta as permissões solicitadas antes de autorizar o acesso.</p><ol><li><i>1</i><div><b>Autorização</b><small>Consentimento no ambiente oficial do Google</small></div></li><li><i>2</i><div><b>Seleção da conta</b><small>O usuário escolhe a conta que deseja conectar</small></div></li><li><i>3</i><div><b>Dados organizados</b><small>As métricas são apresentadas no dashboard</small></div></li></ol></div><div className="google-use-card"><span>APÓS A AUTORIZAÇÃO</span><h3>A Google Ads API é utilizada para:</h3><ul>{googleUses.map(item=><li key={item}><i>✓</i>{item}</li>)}</ul></div></section>

    <section className="readonly-section section-shell"><div><span>SOMENTE VISUALIZAÇÃO</span><h2>A integração atual é exclusivamente para consultar e apresentar dados.</h2></div><p>Na versão atual, o WAVY Dashboard <b>não cria, edita, pausa ou exclui campanhas</b> do Google Ads. Qualquer recurso futuro será comunicado com transparência e submetido às autorizações necessárias antes de ser disponibilizado.</p></section>

    <section className="security-section section-shell" id="seguranca"><header><span>05 / SEGURANÇA E CONTROLE</span><h2>Sua empresa e seus dados <em>permanecem sob seu controle.</em></h2></header><div className="security-grid">{[["Autorização explícita","A conexão acontece somente pelo fluxo OAuth oficial do Google."],["Acesso segregado","Cada cliente visualiza apenas os dados vinculados à sua empresa."],["Ambiente protegido","Tokens são processados e armazenados no servidor, sem exposição no navegador."],["Revogação a qualquer momento","O usuário pode revogar o acesso nas configurações da Conta Google ou solicitar a desconexão."],["Sem venda de dados","Informações importadas não são vendidas nem usadas para publicidade de terceiros."],["Finalidade limitada","O acesso se restringe às funções descritas nesta página e na Política de Privacidade."]].map(([t,p])=><article key={t}><i>✓</i><h3>{t}</h3><p>{p}</p></article>)}</div></section>

    <section className="about-dashboard section-shell"><span>06 / SOBRE A WAVY</span><div><h2>Marketing, dados e inteligência comercial <em>trabalhando juntos.</em></h2><p>A WAVY é uma agência de gestão de tráfego e inteligência comercial que conecta mídia, tecnologia e processos de vendas. O WAVY Dashboard faz parte dessa estrutura e proporciona mais transparência, organização e agilidade na gestão dos investimentos em marketing.</p><a href="mailto:contato@wavymarketing.com.br?subject=Conhecer%20o%20WAVY%20Dashboard">Falar com a WAVY <span>↗</span></a></div></section>

    <footer className="dashboard-footer section-shell"><div><a href="/" className="dashboard-logo"><img src="/assets/wavy-logo.png" alt="WAVY"/></a><p>HYPA E-COM NEGÓCIOS DIGITAIS LTDA<br/>CNPJ 46.975.244/0001-90</p><a href="mailto:contato@wavymarketing.com.br">contato@wavymarketing.com.br</a></div><nav><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a><a href="mailto:contato@wavymarketing.com.br?subject=Solicitação%20de%20exclusão%20de%20dados">Solicitação de exclusão de dados</a><a href="mailto:contato@wavymarketing.com.br?subject=Acesso%20ao%20WAVY%20Dashboard">Acessar o Dashboard</a></nav><p>© 2026 WAVY MARKETING</p></footer>
  </main>;
}

function DashboardMockup(){return <div className="dashboard-product-ui" aria-label="Prévia ilustrativa do WAVY Dashboard"><header><b>WAVY <em>DASHBOARD</em></b><span>VISÃO GERAL</span><i>RV</i></header><div className="product-body"><aside><span>Visão geral</span><span>Campanhas</span><span>Conversões</span><span>Integrações</span></aside><section><div className="product-title"><div><small>PERFORMANCE</small><b>Visão geral</b></div><span>Últimos 30 dias⌄</span></div><div className="product-kpis"><article><small>INVESTIMENTO</small><b>R$ 18.420</b><em>+12,8%</em></article><article><small>CONVERSÕES</small><b>363</b><em>+18,2%</em></article><article><small>CAC</small><b>R$ 164</b><em>−8,3%</em></article></div><div className="product-chart"><div><span>RESULTADOS POR DIA</span><b>Meta Ads&nbsp;&nbsp; Google Ads</b></div><section>{[42,58,46,76,64,87,70,94,78,91,68,98].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</section></div></section></div></div>}
