/* Cases reais de contas operadas pela WAVY. Os números vêm do Gerenciador de Anúncios
   da Meta (linha de total de cada print). Os clientes aparecem por segmento, sem nome. */

type Case = {
  segment: string;
  big: string;
  bigLabel: string;
  rows: [string, string][];
  period: string;
  prints: { src: string; w: number; h: number; label: string }[];
};

const cases: Case[] = [
  {
    segment: "Curso presencial de estética · São Paulo",
    big: "7,76x",
    bigLabel: "de ROAS em seis meses",
    rows: [["Investido em anúncios", "R$ 12.538,66"], ["Faturamento atribuído", "R$ 97.317,48"], ["Vendas", "47"], ["Custo por venda", "R$ 266,78"]],
    period: "Abril a setembro de 2026",
    prints: [{ src: "/assets/cases/curso.webp", w: 1474, h: 269, label: "Campanhas no período" }],
  },
  {
    segment: "Evento com venda de ingressos",
    big: "−86%",
    bigLabel: "no custo por venda",
    rows: [["Custo por venda", "R$ 321,25 → R$ 43,92"], ["Ingressos vendidos", "4 → 18"], ["ROAS", "0,96x → 7,79x"]],
    period: "Junho a setembro, comparado com setembro e outubro de 2026",
    prints: [
      { src: "/assets/cases/evento-antes.webp", w: 1326, h: 202, label: "Antes" },
      { src: "/assets/cases/evento-depois.webp", w: 1326, h: 158, label: "Depois" },
    ],
  },
  {
    segment: "Clínica de estética · Florianópolis",
    big: "10,21x",
    bigLabel: "de ROAS na campanha Black Estética",
    rows: [["Investido na campanha", "R$ 393,69"], ["Faturamento atribuído", "R$ 4.019,00"], ["Vendas", "4"], ["Custo por venda", "R$ 98,42"]],
    period: "Campanha de novembro de 2026",
    prints: [{ src: "/assets/cases/clinica.webp", w: 1326, h: 245, label: "Campanhas da conta" }],
  },
  {
    segment: "Editora · venda de livros pelo site",
    big: "−59%",
    bigLabel: "no custo por venda, de um mês para o outro",
    rows: [["Custo por venda", "R$ 72,19 → R$ 29,50"], ["Vendas no mês", "15 → 57"], ["ROAS", "1,28x → 3,53x"]],
    period: "Agosto comparado com setembro de 2024",
    prints: [],
  },
];

export function Cases() {
  return (
    <div className="cases">
      <ul className="cases-grid">
        {cases.map((c) => (
          <li key={c.segment}>
            <small>{c.segment}</small>
            <p className="case-big"><b>{c.big}</b><span>{c.bigLabel}</span></p>
            <dl>{c.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
            <p className="case-period">{c.period}</p>
            {c.prints.length > 0 && (
              <details>
                <summary>Ver no gerenciador de anúncios</summary>
                {c.prints.map((p) => (
                  <figure key={p.src}>
                    <figcaption>{p.label}</figcaption>
                    <div><img src={p.src} width={p.w} height={p.h} loading="lazy" decoding="async" alt={`Print do Gerenciador de Anúncios da Meta: ${c.segment}, ${p.label.toLowerCase()}`} /></div>
                  </figure>
                ))}
              </details>
            )}
          </li>
        ))}
      </ul>
      <p className="cases-note">Números do Gerenciador de Anúncios da Meta. O valor de vendas é o que a Meta atribui aos anúncios. Cada negócio tem o seu resultado, e estes são exemplos de contas operadas pela WAVY.</p>
    </div>
  );
}
