import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Instagram, MapPin, Menu, MessageCircle, Scissors, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brand, ServiceIcon, WhatsAppButton } from "@/components/barbershop";
import { GalleryCarousel } from "@/components/gallery-carousel";
import { business, getWhatsAppUrl, mapsEmbedUrl, mapsUrl } from "@/lib/business";

const heroImage = "https://preto-barbershop-launch.lovable.app/__l5e/assets-v1/4454bf1c-109d-46b4-9de0-77b717f3ace7/preto-ambiente.png";
const detailsImage = "https://preto-barbershop-launch.lovable.app/__l5e/assets-v1/59122f3e-b568-48b2-a384-2cf064525d2e/preto-espaco.png";
const title = "Preto Barbearia | Luís Eduardo Magalhães";
const description = "Conheça a Preto Barbearia em Luís Eduardo Magalhães. Veja o espaço, acompanhe os trabalhos e consulte a equipe sobre serviços e agendamento.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BarberShop",
        name: "Preto Barbearia",
        telephone: business.telephone,
        address: { "@type": "PostalAddress", streetAddress: business.address, addressLocality: business.city, addressRegion: "BA", postalCode: business.postalCode, addressCountry: "BR" },
        sameAs: [business.instagramUrl],
      }),
    }],
  }),
});

const navigation = [
  { id: "inicio", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "avaliacoes", label: "Avaliações" },
  { id: "instagram", label: "Instagram" },
  { id: "contato", label: "Como chegar" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const selectSection = () => setMenuOpen(false);
  const generalWhatsAppUrl = getWhatsAppUrl(business.whatsappNumber);

  return <>
    <header className="site-header">
      <div className="site-container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Menu principal">
          {navigation.map(item => <a className="nav-link" key={item.id} href={`#${item.id}`}>{item.label}</a>)}
        </nav>
        <div className="header-cta"><WhatsAppButton label="Agendar horário" compact /></div>
        <Button className="mobile-menu-button" variant="ghost" size="icon" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Menu celular">{navigation.map(item => <a className="nav-link" key={item.id} href={`#${item.id}`} onClick={selectSection}>{item.label}</a>)}</nav>}
    </header>

    <main>
      <section id="inicio" className="hero" aria-label="Preto Barbearia">
        <img className="hero-image" src={heroImage} alt="Interior da Preto Barbearia em Luís Eduardo Magalhães" width={1337} height={1020} fetchPriority="high" />
        <div className="site-container hero-content reveal-in">
          <p className="eyebrow">PRETO BARBEARIA · CENTRO DE LEM</p>
          <h1>Seu estilo,<br /><span>bem cuidado.</span></h1>
          <p className="hero-copy">Um espaço para cuidar do visual no Centro de Luís Eduardo Magalhães. Fale com a equipe para conhecer as opções de atendimento.</p>
          <div className="hero-actions"><WhatsAppButton label="Agendar pelo WhatsApp" /><a className="text-link" href="#servicos">Ver serviços <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="site-container hero-bottom"><span className="hero-location"><MapPin size={14} /> Luís Eduardo Magalhães, Bahia</span><a className="hero-scroll" href="#servicos"><span>VER SERVIÇOS</span></a></div>
      </section>

      <section id="servicos" className="section services-section">
        <div className="site-container">
          <div className="section-heading"><div><p className="eyebrow">SERVIÇOS</p><h2>Escolha o que você precisa.</h2></div><p className="section-intro">Consulte valores e disponibilidade diretamente com a barbearia.</p></div>
          <div className="services-grid">
            {business.services.map(service => <article className="service-card" key={service.id}>
              <div className="service-top"><ServiceIcon kind={service.icon} /></div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price || "Consulte o valor"}</div>
              <a className="service-bottom" href={getWhatsAppUrl(business.whatsappNumber, service.whatsappMessage) ?? business.instagramUrl} target="_blank" rel="noopener noreferrer">Consultar e agendar <ArrowUpRight size={16} /></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="site-container about-layout">
          <figure className="about-photo"><img src={detailsImage} alt="Espaço da Preto Barbearia" width={628} height={1020} loading="lazy" /></figure>
          <div className="about-copy"><p className="eyebrow">A BARBEARIA</p><h2>Um espaço para cuidar do visual.</h2><p>A Preto Barbearia fica no Centro de Luís Eduardo Magalhães. Consulte os serviços disponíveis e fale diretamente com a equipe para combinar seu horário.</p><a className="text-link about-link" href="#contato">Ver endereço e contato <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="site-container">
          <div className="section-heading gallery-heading"><div><p className="eyebrow">O AMBIENTE</p><h2>Conheça a Preto.</h2></div><p className="section-intro">Da sinuca à fachada, um pouco do espaço e da identidade da barbearia.</p></div>
          <GalleryCarousel />
        </div>
      </section>

      <section id="avaliacoes" className="section reviews-section">
        <div className="site-container">
          <div className="section-kicker"><span>Avaliações no Google</span><span>Preto Barbearia · LEM</span></div>
          <div className="rating-summary"><span className="rating-value">{business.reviewRating.toLocaleString("pt-BR")}</span><div><div className="rating-stars" aria-label={`${business.reviewRating} de 5 estrelas`}>★★★★★</div><p>{business.reviewCount} avaliações</p></div></div>
          <div className="review-quotes">{business.reviewQuotes.map(review => <figure className="review-quote" key={review.author}><div className="rating-stars" aria-label="5 de 5 estrelas">★★★★★</div><blockquote>“{review.text}”</blockquote><figcaption>{review.author} · Google</figcaption></figure>)}</div>
          <a className="review-link" href={business.googleReviewsUrl} target="_blank" rel="noopener noreferrer">Ver avaliações no Google <ArrowUpRight size={16} /></a>
          <p className="review-note">Nota e quantidade consultadas no Perfil da Empresa; podem mudar.</p>
        </div>
      </section>

      <section id="instagram" className="section instagram-section">
        <div className="site-container">
          <div className="section-heading instagram-heading"><div><p className="eyebrow">INSTAGRAM</p><h2>Perfil e trabalhos da Preto.</h2></div><a className="instagram-profile-link" href={business.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={18} /> @pretobarbearia.lem <ArrowUpRight size={16} /></a></div>
          <div className="instagram-profile-preview"><iframe title="Prévia do perfil e feed público da Preto Barbearia no Instagram" src={business.instagramEmbedUrl} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div>
          <p className="instagram-note">Prévia do perfil e das publicações públicas. O feed pode mudar conforme novas fotos forem publicadas.</p>
        </div>
      </section>

      <section id="contato" className="section contact-section">
        <div className="site-container">
          <div className="section-kicker"><span>Como chegar</span><span>Luís Eduardo Magalhães · BA</span></div>
          <div className="contact-layout">
            <div className="contact-address"><h2>Encontre a Preto.</h2></div>
            <div className="contact-details"><div className="contact-channel"><span className="channel-label">Agendamento</span><WhatsAppButton label="Falar pelo WhatsApp" compact /></div><a className="instagram-channel" href={business.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={22} /><span><span className="channel-label">Instagram</span><span className="channel-name">@pretobarbearia.lem</span></span><ArrowUpRight size={20} /></a><div className="contact-hours"><Clock size={18} /><div><h3>Horário de funcionamento</h3><p>{business.openingHours || "Consulte os horários pelo WhatsApp."}</p></div></div></div>
          </div>
          <div className="map-frame"><iframe title="Mapa da Preto Barbearia no Google Maps" src={mapsEmbedUrl} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
          <div className="map-caption"><MapPin size={15} /><p><span>{business.address}</span><span>{business.city}, {business.state} · CEP {business.postalCode}</span></p><a href={mapsUrl} target="_blank" rel="noopener noreferrer">Abrir rota <ArrowUpRight size={14} /></a></div>
        </div>
      </section>
    </main>

    <footer className="site-footer"><div className="site-container"><div className="footer-top"><Brand footer /><p className="footer-location">Luís Eduardo Magalhães, Bahia.</p><div className="social-links"><a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Preto Barbearia" title="Instagram"><Instagram size={18} /></a><a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Localização no Google Maps" title="Google Maps"><MapPin size={18} /></a>{generalWhatsAppUrl && <a href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer" aria-label="Contato pelo WhatsApp" title="WhatsApp"><MessageCircle size={18} /></a>}</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Preto Barbearia. Todos os direitos reservados.</span><span>Centro · Luís Eduardo Magalhães, BA</span></div></div></footer>
  </>;
}
