/* Cabeçalho em ilha e rodapé compartilhados pela home e pela página do CRM. */

export const WHATSAPP_HOME = "https://wa.me/555193228992?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20WAVY.";
export const CRM_URL = "https://crm.wavymarketing.com.br/login";

type NavLink = { href: string; label: string };

export function IslandHeader({ home, links, cta }: { home: string; links: NavLink[]; cta: NavLink & { external?: boolean } }) {
  const ctaProps = cta.external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <header className="island">
      <a className="island-logo" href={home} aria-label="WAVY — início"><img src="/assets/wavy-logo.webp" alt="WAVY" width={480} height={138} /></a>
      <nav aria-label="Navegação principal">{links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}</nav>
      <a className="island-cta" href={cta.href} {...ctaProps}>{cta.label} <span aria-hidden="true">↗</span></a>
      <details className="island-menu">
        <summary aria-label="Abrir menu"><span /><span /></summary>
        <div>{links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}<a className="island-menu-cta" href={cta.href} {...ctaProps}>{cta.label} <span aria-hidden="true">↗</span></a></div>
      </details>
    </header>
  );
}

export function SiteFooter({ links, whatsapp = WHATSAPP_HOME }: { links: NavLink[]; whatsapp?: string }) {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner section-shell">
        <div className="sf-top">
          <div className="sf-brand">
            <a href="/" aria-label="WAVY — página inicial"><img src="/assets/wavy-logo.webp" alt="WAVY" width={480} height={138} loading="lazy" /></a>
            <p>Tráfego pago, CRM omnichannel e atendimento com IA, num serviço só.</p>
            <a className="sf-talk" href={whatsapp} target="_blank" rel="noreferrer">Falar no WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
          <nav aria-label="Seções da página"><small>Nesta página</small>{links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}</nav>
          <nav aria-label="Produtos"><small>Produtos</small><a href="/crm">WAVY CRM</a><a href="/dashboard">WAVY Dashboard</a><a href={CRM_URL}>Acessar o CRM</a></nav>
          <div className="sf-contact"><small>Contato</small><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://www.instagram.com/wavy.mkt/" target="_blank" rel="noreferrer">Instagram</a><a href="mailto:contato@wavymarketing.com.br">contato@wavymarketing.com.br</a></div>
        </div>
        <div className="sf-bottom">
          <p>HYPA E-COM NEGÓCIOS DIGITAIS LTDA · CNPJ 46.975.244/0001-90 · Belo Horizonte — MG</p>
          <nav aria-label="Documentos"><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a><a href="/politica-de-privacidade#solicitacao-de-exclusao-de-dados">Solicitação de exclusão de dados</a></nav>
          <p>© 2026 WAVY Marketing</p>
        </div>
      </div>
      <img className="sf-word" src="/assets/wavy-logo.png" alt="" width={2048} height={587} loading="lazy" decoding="async" aria-hidden="true" />
    </footer>
  );
}
