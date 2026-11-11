/* Mockups do produto, reconstruídos em HTML/CSS a partir das telas reais do
   WAVY CRM. Todos os nomes, valores e conversas são fictícios. */

const nav = ["Dashboard", "Anúncios", "Funis de Vendas", "Agenda", "Conversas", "Agentes de IA", "Contatos", "Campanhas", "Automações"];

function Sidebar({ active }: { active: string }) {
  return (
    <aside className="crm-side">
      <div className="crm-brand"><img src="/assets/wavy-crm-logo.png" alt="" width={390} height={64} /></div>
      <ul>
        {nav.map((n) => (
          <li key={n} className={n === active ? "on" : undefined}><i />{n}{n === "Conversas" && <b>12</b>}</li>
        ))}
      </ul>
      <div className="crm-user"><span>SE</span><div><b>Sua empresa</b><small>Admin</small></div></div>
    </aside>
  );
}

export function CrmFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="crm-stage" role="img" aria-label={label}>
      <div className="crm-frame"><div className="crm" aria-hidden="true">{children}</div></div>
    </div>
  );
}

const kpis = [
  ["FATURAMENTO", "R$ 48.320", "+18%", "#10b981"],
  ["NEGÓCIOS GANHOS", "37", "+9", "#3b82f6"],
  ["TICKET MÉDIO", "R$ 1.306", "+6%", "#8b5cf6"],
  ["TAXA DE CONVERSÃO", "23%", "+4 pts", "#06b6d4"],
  ["NOVOS LEADS", "161", "+27%", "#f59e0b"],
];
const adKpis = [
  ["INVESTIDO EM ANÚNCIOS", "R$ 5.540", "#f97316"],
  ["RETORNO GERAL", "8,7x", "#10b981"],
  ["CUSTO POR VENDA", "R$ 149,73", "#e11d48"],
  ["RECEITA VINDA DE ANÚNCIOS", "R$ 41.870", "#14b8a6"],
];
const bars = [22, 35, 28, 48, 40, 62, 44, 70, 55, 82, 60, 74, 90, 68];
const funnelNow = [["Novo lead", 100, "63"], ["Conversa inicial", 78, "49"], ["Qualificação", 62, "39"], ["Reunião", 34, "21"], ["Negociação", 19, "12"]];

export function CrmDashboard() {
  return (
    <>
      <Sidebar active="Dashboard" />
      <div className="crm-main">
        <div className="crm-head"><div><h4>Dashboard</h4><small>Últimos 30 dias, comparado com os 30 anteriores</small></div><div className="crm-pills"><span>7 dias</span><span className="on">30 dias</span><span>90 dias</span></div></div>
        <div className="crm-kpis five">{kpis.map(([l, v, d, c]) => <div key={l} style={{ borderLeftColor: c }}><small>{l}</small><b>{v}</b><em>↗ {d}</em></div>)}</div>
        <p className="crm-label">Anúncios no resultado do negócio</p>
        <div className="crm-kpis four">{adKpis.map(([l, v, c]) => <div key={l} style={{ borderLeftColor: c }}><small>{l}</small><b>{v}</b></div>)}</div>
        <div className="crm-split">
          <div className="crm-card"><div className="crm-card-head"><b>Receita por dia</b><div className="crm-pills small"><span className="on">Receita</span><span>Negócios</span><span>Leads</span></div></div><div className="crm-bars">{bars.map((h, i) => <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }} />)}</div></div>
          <div className="crm-card"><div className="crm-card-head"><b>Funil agora</b></div>{funnelNow.map(([l, w, n]) => <div className="crm-funnel-row" key={l}><span>{l}</span><i><u style={{ width: `${w}%` }} /></i><b>{n}</b></div>)}</div>
        </div>
      </div>
    </>
  );
}

const columns: [string, string, [string, string, string, string, string][]][] = [
  ["Primeiro contato", "32", [["Mariana A.", "#22b8cf", "89", "Enviar a proposta e confirmar o recebimento.", "12/09"], ["Carlos T.", "#8b5cf6", "84", "Confirmar a call de amanhã às 9h.", "13/09"], ["Luana P.", "#ef4444", "81", "Responder a dúvida sobre formas de pagamento.", "13/09"]]],
  ["Qualificação", "62", [["Roberta M.", "#10b981", "96", "Oferecer os dois horários de avaliação.", "14/09"], ["Júlio V.", "#6366f1", "92", "Enviar os casos do mesmo segmento.", "14/09"]]],
  ["Reunião", "21", [["Clínica Vitta", "#f59e0b", "94", "Enviar o contrato após a visita.", "15/09"], ["Studio Uno", "#ec4899", "93", "Confirmar presença na reunião de quinta.", "16/09"]]],
  ["Negociação", "34", [["Grupo Prime", "#3b82f6", "96", "Confirmar o pagamento e a assinatura.", "16/09"], ["Lucas F.", "#14b8a6", "88", "Retomar a conversa sobre o plano anual.", "17/09"]]],
];

export function CrmKanban() {
  return (
    <>
      <Sidebar active="Funis de Vendas" />
      <div className="crm-main">
        <div className="crm-head"><div><h4>Funil Central</h4><small>149 negócios em aberto</small></div><div className="crm-stats"><div><b className="ok">R$ 48.320</b><small>Ganhos · 37</small></div><div><b className="hot">R$ 119.900</b><small>Em aberto · 149</small></div></div></div>
        <div className="crm-toolbar"><span className="crm-search">Buscar por nome, telefone, email…</span><span className="crm-chip">Filtros</span><span className="crm-chip is-ai">✦ Nota da IA</span></div>
        <div className="crm-kb">
          {columns.map(([title, count, cards], ci) => (
            <div className="crm-col" key={title}>
              <div className="crm-col-head"><i />{title}<small>{count}</small></div>
              {cards.map(([name, color, score, next, date], i) => (
                <div className={ci === 1 && i === 0 ? "crm-deal fresh" : "crm-deal"} key={name}>
                  <div className="crm-deal-top"><span style={{ background: color }}>{name[0]}</span><b>{name}</b><em>✦ {score}</em></div>
                  <p><u>Próximo passo:</u> {next}</p>
                  <small>◷ {date}</small>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const convs = [
  ["Ana Ribeiro", "wa", "Quinta, 14h", "agora", "#22b8cf", true],
  ["Studio Uno", "ig", "Vocês atendem aos sábados?", "2 min", "#ec4899", false],
  ["Carlos T.", "wa", "Pode me mandar a proposta?", "9 min", "#8b5cf6", false],
  ["Roberta M.", "wa", "Fechado, obrigada!", "21 min", "#10b981", false],
  ["Júlio V.", "ig", "Vi o anúncio de vocês", "1 h", "#6366f1", false],
] as const;

export function CrmInbox() {
  return (
    <>
      <Sidebar active="Conversas" />
      <div className="crm-main inbox">
        <div className="crm-list">
          <span className="crm-search">Buscar conversas…</span>
          <div className="crm-list-head"><b>Ativas</b><small>128 conversas</small></div>
          {convs.map(([name, ch, last, time, color, on]) => (
            <div className={on ? "crm-conv on" : "crm-conv"} key={name}><span style={{ background: color }}>{name[0]}<i className={`ch-${ch}`} /></span><div><b>{name}</b><small>{last}</small></div><em>{time}</em></div>
          ))}
        </div>
        <div className="crm-chat">
          <div className="crm-chat-head"><span style={{ background: "#22b8cf" }}>A</span><div><b>Ana Ribeiro</b><small><i />Atendimento em aberto · WhatsApp</small></div><span className="crm-btn">Concluir</span></div>
          <div className="crm-thread">
            <p className="in">Oi! Vi o anúncio de vocês. Como funciona a avaliação?</p>
            <p className="out"><b>✦ Agente de IA</b>Oi, Ana! A avaliação dura 30 minutos. Você pensa em começar quando?</p>
            <p className="in">Queria começar ainda este mês</p>
            <p className="out"><b>✦ Agente de IA</b>Perfeito. Tenho quinta às 14h ou sexta às 10h. Qual fica melhor?</p>
            <p className="in">Quinta, 14h</p>
            <p className="typing"><i /><i /><i /></p>
          </div>
          <div className="crm-composer">Digite sua mensagem…</div>
        </div>
        <div className="crm-detail">
          <div className="crm-detail-top"><span style={{ background: "#22b8cf" }}>A</span><b>Ana Ribeiro</b><small>WhatsApp · origem: Meta Ads</small></div>
          <div><small>ATENDENTE</small><b>✦ Agente de IA</b></div>
          <div><small>SITUAÇÃO</small><b><i className="dot" />Aberta</b></div>
          <div><small>FUNIL</small><b>Qualificação</b></div>
          <div><small>NOTA DA IA</small><b className="score">94</b></div>
          <div><small>PRÓXIMO PASSO</small><p>Confirmar a avaliação de quinta, 14h.</p></div>
        </div>
      </div>
    </>
  );
}

export function PhoneChat() {
  return (
    <div className="phone-stage" role="img" aria-label="Simulação de conversa no WhatsApp em que o agente de IA atende um lead, tira dúvidas e agenda uma avaliação">
      <div className="phone-chip chip-ai" aria-hidden="true"><i>✦</i><div><small>AGENTE DE IA</small><b>Respondendo no WhatsApp</b></div><span className="wave"><u /><u /><u /><u /></span></div>
      <div className="phone" aria-hidden="true">
        <div className="phone-notch" />
        <div className="phone-bar"><span>21:47</span><span className="phone-status"><i /><i /><i /></span></div>
        <div className="wa-head"><span>S</span><div><b>Studio Uno</b><small>online</small></div></div>
        <div className="wa-thread">
          <p className="me m1">Oi! Vi o anúncio de vocês. Como funciona a avaliação?<small>21:47</small></p>
          <p className="them m2">Oi, Ana! 👋 A avaliação dura 30 minutos. Você pensa em começar quando?<small>21:47</small></p>
          <p className="me m3">Queria começar ainda este mês<small>21:48</small></p>
          <p className="them m4">Perfeito. Tenho quinta às 14h ou sexta às 10h. Qual fica melhor?<small>21:48</small></p>
          <p className="me m5">Quinta, 14h<small>21:49</small></p>
          <p className="them m6">Agendado ✅ Quinta, 14h. Te envio um lembrete na véspera.<small>21:49</small></p>
        </div>
        <div className="wa-input"><span>Mensagem</span><i /></div>
      </div>
      <div className="phone-chip chip-deal" aria-hidden="true"><i>✓</i><div><small>NO CRM</small><b>Avaliação agendada · qui, 14h</b></div></div>
      <div className="phone-chip chip-score" aria-hidden="true"><div><small>NOTA DA IA</small><b>94</b></div><div><small>FUNIL</small><b>Qualificação → Reunião</b></div></div>
    </div>
  );
}
