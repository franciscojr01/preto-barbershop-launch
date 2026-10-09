import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, MapPin, Menu, X, Scissors, Sparkles, HeartHandshake, Armchair, ShieldCheck, Instagram, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand, ServiceIcon, WhatsAppButton } from "@/components/barbershop";
import { business, mapsUrl } from "@/lib/business";

// Keep the exact original Lovable uploads while their binary files are not in GitHub.
const heroImage = "https://preto-barbershop-launch.lovable.app/__l5e/assets-v1/4454bf1c-109d-46b4-9de0-77b717f3ace7/preto-ambiente.png";
const detailsImage = "https://preto-barbershop-launch.lovable.app/__l5e/assets-v1/59122f3e-b568-48b2-a384-2cf064525d2e/preto-espaco.png";

const title = "Preto Barbearia | Luís Eduardo Magalhães";
const description = "Conheça a Preto Barbearia em Luís Eduardo Magalhães, BA. Consulte os serviços, veja avaliações e entre em contato.";
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: "/" }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "HairSalon", name: "Preto Barbearia", address: { "@type": "PostalAddress", streetAddress: business.address, addressLocality: business.city, addressRegion: "BA", postalCode: business.postalCode, addressCountry: "BR" }, sameAs: [business.instagramUrl] }) }],
  }),
});

const navigation = [{ id: "inicio", label: "Início" }, { id: "servicos", label: "Serviços" }, { id: "sobre", label: "Sobre" }, { id: "avaliacoes", label: "Avaliações" }, { id: "contato", label: "Contato" }];
const differences = [
  { icon: HeartHandshake, title: "Atendimento atencioso", text: "Um olhar atento para você e para o seu estilo." },
  { icon: Armchair, title: "Ambiente agradável", text: "Um momento de cuidado na sua rotina." },
  { icon: ShieldCheck, title: "Profissionalismo e cuidado", text: "Atenção ao que importa: cada detalhe." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const selectSection = (id: string) => { setActive(id); setMenuOpen(false); };
  return <>
    <header className="site-header"><div className="site-container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Menu principal">{navigation.map(item => <a className={`nav-link ${active === item.id ? "active" : ""}`} key={item.id} href={`#${item.id}`} onClick={() => selectSection(item.id)}>{item.label}</a>)}</nav>
      <div className="header-cta"><WhatsAppButton label="Agendar horário" compact /></div>
      <Button className="mobile-menu-button" variant="ghost" size="icon" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
    </div>{menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Menu celular">{navigation.map(item => <a className="nav-link" key={item.id} href={`#${item.id}`} onClick={() => selectSection(item.id)}>{item.label}</a>)}</nav>}</header>
    <main>
      <section id="inicio" className="hero" aria-label="Preto Barbearia">
        <img className="hero-image" src={heroImage} alt="Ambiente original da Preto Barbearia" width={1337} height={1020} fetchPriority="high" />
        <div className="site-container hero-content reveal-in">
          <p className="eyebrow">PRETO BARBEARIA · LUÍS EDUARDO MAGALHÃES</p>
          <h1>Seu estilo.<br /><span>Sua presença.</span></h1>
          <p className="hero-copy">Um espaço dedicado ao cuidado masculino, com atenção aos detalhes e uma experiência que vai além do corte.</p>
          <div className="hero-actions"><WhatsAppButton /><a className="text-link" href="#sobre" onClick={() => selectSection("sobre")}>Conheça a barbearia <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="site-container hero-bottom"><span className="hero-location"><MapPin size={14} /> Luís Eduardo Magalhães, Bahia</span><a className="hero-scroll" href="#servicos" aria-label="Explorar serviços"><span>EXPLORE</span><ArrowDown size={18} /></a></div>
        <span className="hero-caption">Foto do espaço da Preto Barbearia.</span>
      </section>
      <div className="signature-strip"><div className="site-container signature-inner"><p className="signature-name">Presença começa no cuidado.</p><span className="signature-item"><Scissors /> Estilo & personalidade</span><span className="signature-item"><Armchair /> Seu momento de cuidado</span><span className="signature-item"><Sparkles /> Atenção aos detalhes</span></div></div>
      <section id="servicos" className="section"><div className="site-container">
        <div className="section-heading"><div><p className="eyebrow">O SEU VISUAL, DO SEU JEITO</p><h2>Serviços com personalidade.</h2></div><p className="section-intro">Do corte ao acabamento, o cuidado com o seu visual está nos detalhes.</p></div>
        <div className="services-grid">{business.services.map((service,index) => <article className="service-card" key={service.id}><div className="service-top"><ServiceIcon kind={service.icon} /><span className="service-number">0{index + 1}</span></div><h3>{service.name}</h3><p>{service.description}</p><a className="service-bottom" href="#contato">Consultar serviço <ArrowUpRight size={16} /></a></article>)}</div>
        <p className="service-note">Categorias sujeitas à confirmação. Consulte os serviços oferecidos diretamente com a barbearia.</p>
      </div></section>
      <section id="sobre" className="section about-section"><div className="site-container about-layout">
        <figure className="about-photo"><img src={detailsImage} alt="Espaço original da Preto Barbearia" width={628} height={1020} loading="lazy" /><figcaption>Foto do espaço da Preto Barbearia.</figcaption></figure>
        <div className="about-copy"><p className="eyebrow">ESSÊNCIA PRETO</p><h2>Mais do que<br />uma barbearia.</h2><p>Um espaço para cuidar do visual, valorizar seu estilo e aproveitar uma experiência de atendimento feita com atenção aos detalhes.</p><p>Seu momento de pausa. Seu cuidado. Sua presença.</p><div className="about-signature"><Scissors size={27} strokeWidth={1.2} /><div>PRETO BARBEARIA<span>Luís Eduardo Magalhães · Bahia</span></div></div></div>
      </div></section>
      <section className="section differences"><div className="site-container difference-layout"><div><p className="eyebrow">O QUE NOS MOVE</p><h2>Cuidado em<br />cada detalhe.</h2></div><div className="difference-grid">{differences.map(item => <div className="difference-item" key={item.title}><item.icon /><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></div></section>
      <section id="avaliacoes" className="section reviews-section"><div className="site-container">
        <div className="section-kicker"><span>Avaliações</span><span>Preto · LEM</span></div>
        <div className="reviews-layout">
          <div className="review-summary"><div className="review-count">{business.reviewCount}</div><div className="review-source"><span className="google-g" aria-hidden="true">G</span><span>avaliações no Google</span></div></div>
          <div className="reviews-copy"><h2>A experiência<br />de quem conhece.</h2><p>A opinião de quem já sentou na nossa cadeira.<br />Direto no Google, sem filtro.</p>{business.googleReviewsUrl ? <Button asChild variant="editorial" className="review-link"><a href={business.googleReviewsUrl} target="_blank" rel="noopener noreferrer">Ver avaliações no Google <ArrowUpRight /></a></Button> : <Button variant="editorial" className="review-link" onClick={() => setReviewsOpen(true)}>Ver avaliações no Google <ArrowUpRight /></Button>}</div>
        </div>
        <div className="reviews-footnote"><span>Opiniões de clientes</span><p>Contagem da ficha consultada; pode mudar.</p></div>
      </div></section>
      <section id="contato" className="section contact-section"><div className="site-container">
        <div className="section-kicker"><span>Contato & localização</span><span>Luís Eduardo Magalhães · BA</span></div>
        <div className="contact-layout">
          <div className="contact-address"><h2>Encontre a Preto.</h2><div className="address-block"><MapPin size={22} /><div><p className="street-address">{business.address}</p><p className="address-city">{business.city}, {business.state}<br />CEP {business.postalCode}</p></div></div><Button asChild variant="editorial" className="directions-link"><a href={mapsUrl} target="_blank" rel="noopener noreferrer">Traçar rota no Google Maps <ArrowUpRight /></a></Button></div>
          <div className="contact-details"><div className="contact-channel"><span className="channel-label">Agendamento & dúvidas</span><WhatsAppButton label="Falar pelo WhatsApp" compact /></div><Button asChild variant="ghost" className="instagram-channel"><a href={business.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={23} /><span><span className="channel-label">Instagram</span><span className="channel-name">@pretobarbearia.lem</span></span><ArrowUpRight size={22} /></a></Button><div className="contact-hours"><Clock size={18} /><div><h3>Horário de funcionamento</h3><p>{business.openingHours || "Consulte os horários pelo Instagram."}</p></div></div></div>
        </div>
      </div></section>
    </main>
    <footer className="site-footer"><div className="site-container"><div className="footer-top"><Brand footer /><p className="footer-location">Luís Eduardo Magalhães, Bahia.</p><div className="social-links"><a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Preto Barbearia" title="Instagram"><Instagram size={18} /></a><a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Localização no Google Maps" title="Google Maps"><MapPin size={18} /></a><WhatsAppButton floating label="Contato pelo WhatsApp" /></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Preto Barbearia. Todos os direitos reservados.</span><span>Estilo. Cuidado. Presença.</span></div></div></footer>
    <WhatsAppButton floating label="Agendar pelo WhatsApp" />
    {reviewsOpen && <div className="modal-backdrop" onClick={() => setReviewsOpen(false)}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="reviews-title" onClick={e => e.stopPropagation()} onKeyDown={e => { if (e.key === "Escape") setReviewsOpen(false); }}><Button variant="ghost" size="icon" className="modal-close" aria-label="Fechar" onClick={() => setReviewsOpen(false)} autoFocus><X /></Button><Star className="text-primary" size={32} /><h2 id="reviews-title">Avaliações reais.</h2><p>O link exato da ficha do Google está aguardando confirmação. Você pode procurar a Preto Barbearia no Google Maps.</p><Button asChild variant="brand"><a href={mapsUrl} target="_blank" rel="noopener noreferrer">Buscar no Google Maps <ArrowUpRight /></a></Button></section></div>}
  </>;
}

