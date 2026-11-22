/* Cases reais de contas operadas pela WAVY, um número e uma frase cada.
   Os números vêm da linha de total do Gerenciador de Anúncios da Meta.
   Os clientes aparecem por segmento, sem nome. */

const cases: [string, string, string][] = [
  ["7,76x", "de ROAS", "Curso de estética em São Paulo: R$ 12,5 mil em anúncios viraram R$ 97,3 mil em vendas em seis meses."],
  ["−86%", "no custo por venda", "Evento com venda de ingressos: cada venda passou a custar R$ 44, contra R$ 321 antes."],
  ["10,21x", "de ROAS", "Clínica de estética em Florianópolis: R$ 394 em anúncios viraram R$ 4 mil em vendas numa campanha."],
  ["−59%", "no custo por venda", "Editora de livros: cada venda passou a custar R$ 29,50, contra R$ 72 no mês anterior."],
];

export function Cases() {
  return (
    <div className="cases">
      <ul className="cases-grid">
        {cases.map(([big, label, text]) => (
          <li key={text}>
            <p className="case-big"><b>{big}</b><span>{label}</span></p>
            <p className="case-text">{text}</p>
          </li>
        ))}
      </ul>
      <p className="cases-note">Números do Gerenciador de Anúncios da Meta, em contas operadas pela WAVY.</p>
    </div>
  );
}
