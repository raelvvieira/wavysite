/* Cases reais de contas operadas pela WAVY: um número, uma frase e o print do
   Gerenciador de Anúncios da Meta que comprova. Os clientes aparecem por segmento,
   sem nome, e os prints estão recortados na tabela de números. */

type Print = { src: string; w: number; h: number; label?: string };
const cases: { big: string; label: string; text: string; prints: Print[] }[] = [
  { big: "7,76x", label: "de ROAS", text: "Curso de estética em São Paulo: R$ 12,5 mil em anúncios viraram R$ 97,3 mil em vendas em seis meses.",
    prints: [{ src: "/assets/cases/curso.webp", w: 1474, h: 269 }] },
  { big: "−86%", label: "no custo por venda", text: "Evento com venda de ingressos: cada venda passou a custar R$ 44, contra R$ 321 antes.",
    prints: [{ src: "/assets/cases/evento-antes.webp", w: 1326, h: 202, label: "Antes" }, { src: "/assets/cases/evento-depois.webp", w: 1326, h: 158, label: "Depois" }] },
  { big: "10,21x", label: "de ROAS", text: "Clínica de estética em Florianópolis: R$ 394 em anúncios viraram R$ 4 mil em vendas numa campanha.",
    prints: [{ src: "/assets/cases/clinica.webp", w: 1326, h: 245 }] },
  { big: "−59%", label: "no custo por venda", text: "Editora de livros: cada venda passou a custar R$ 29,50, contra R$ 72 no mês anterior.",
    prints: [{ src: "/assets/cases/livros-antes.webp", w: 1326, h: 186, label: "Antes" }, { src: "/assets/cases/livros-depois.webp", w: 1326, h: 222, label: "Depois" }] },
];

export function Cases() {
  return (
    <div className="cases">
      <ul className="cases-grid">
        {cases.map((c) => (
          <li key={c.text}>
            <div className="case-head"><p className="case-big"><b>{c.big}</b><span>{c.label}</span></p><p className="case-text">{c.text}</p></div>
            <div className="case-proof">
              {c.prints.map((p) => (
                <figure key={p.src}>
                  {p.label && <figcaption>{p.label}</figcaption>}
                  <a href={p.src} target="_blank" rel="noreferrer" aria-label="Abrir o print em tamanho real"><img src={p.src} width={p.w} height={p.h} loading="lazy" decoding="async" alt={`Print do Gerenciador de Anúncios da Meta. ${c.text}`} /></a>
                </figure>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <p className="cases-note">Prints do Gerenciador de Anúncios da Meta, em contas operadas pela WAVY. Toque em um print para ver em tamanho real.</p>
    </div>
  );
}
