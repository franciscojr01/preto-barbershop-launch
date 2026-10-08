import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, MapPin, Menu, X, Scissors, Sparkles, HeartHandshake, Armchair, ShieldCheck, Instagram, Clock, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand, ServiceIcon, WhatsAppButton } from "@/components/barbershop";
import { business, mapsUrl } from "@/lib/business";
import heroImage from "@/assets/barbershop-interior.jpg";
import detailsImage from "@/assets/barber-details.jpg";

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
        <img className="hero-image" src={heroImage} alt="Imagem ilustrativa de um ambiente de barbearia com cadeiras de couro e iluminação acolhedora" width={1920} height={1024} fetchPriority="high" />
        <div className="site-container hero-content reveal-in">
          <p className="eyebrow">PRETO BARBEARIA · LUÍS EDUARDO MAGALHÃES</p>
          <h1>Seu estilo.<br /><span>Sua presença.</span></h1>
          <p className="hero-copy">Um espaço dedicado ao cuidado masculino, com atenção aos detalhes e uma experiência que vai além do corte.</p>
          <div className="hero-actions"><WhatsAppButton /><a className="text-link" href="#sobre" onClick={() => selectSection("sobre")}>Conheça a barbearia <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="site-container hero-bottom"><span className="hero-location"><MapPin size={14} /> Luís Eduardo Magalhães, Bahia</span><a className="hero-scroll" href="#servicos" aria-label="Explorar serviços"><span>EXPLORE</span><ArrowDown size={18} /></a></div>
        <span className="hero-caption">Imagem ilustrativa · não representa o estabelecimento</span>
      </section>
      <div className="signature-strip"><div className="site-container signature-inner"><p className="signature-name">Presença começa no cuidado.</p><span className="signature-item"><Scissors /> Estilo & personalidade</span><span className="signature-item"><Armchair /> Seu momento de cuidado</span><span className="signature-item"><Sparkles /> Atenção aos detalhes</span></div></div>
      <section id="servicos" className="section"><div className="site-container">
        <div className="section-heading"><div><p className="eyebrow">O SEU VISUAL, DO SEU JEITO</p><h2>Serviços com personalidade.</h2></div><p className="section-intro">Do corte ao acabamento, o cuidado com o seu visual está nos detalhes.</p></div>
        <div className="services-grid">{business.services.map((service,index) => <article className="service-card" key={service.id}><div className="service-top"><ServiceIcon kind={service.icon} /><span className="service-number">0{index + 1}</span></div><h3>{service.name}</h3><p>{service.description}</p><a className="service-bottom" href="#contato">Consultar serviço <ArrowUpRight size={16} /></a></article>)}</div>
        <p className="service-note">Categorias sujeitas à confirmação. Consulte os serviços oferecidos diretamente com a barbearia.</p>
      </div></section>
      <section id="sobre" className="section about-section"><div className="site-container about-layout">
        <figure className="about-photo"><img src={detailsImage} alt="Imagem ilustrativa de tesoura, máquina de corte, escova e toalha sobre uma bancada" width={1024} height={1280} loading="lazy" /><figcaption>Imagem ilustrativa. As fotos reais da barbearia serão adicionadas em breve.</figcaption></figure>
        <div className="about-copy"><p className="eyebrow">ESSÊNCIA PRETO</p><h2>Mais do que<br />uma barbearia.</h2><p>Um espaço para cuidar do visual, valorizar seu estilo e aproveitar uma experiência de atendimento feita com atenção aos detalhes.</p><p>Seu momento de pausa. Seu cuidado. Sua presença.</p><div className="about-signature"><Scissors size={27} strokeWidth={1.2} /><div>PRETO BARBEARIA<span>Luís Eduardo Magalhães · Bahia</span></div></div></div>
      </div></section>
      <section className="section differences"><div className="site-container difference-layout"><div><p className="eyebrow">O QUE NOS MOVE</p><h2>Cuidado em<br />cada detalhe.</h2></div><div className="difference-grid">{differences.map(item => <div className="difference-item" key={item.title}><item.icon /><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></div></section>
      <section id="avaliacoes" className="section reviews-section"><div className="site-container reviews-layout">
        <div className="reviews-copy"><p className="eyebrow">CONFIANÇA QUE SE CONSTRÓI</p><h2>A experiência<br />de quem conhece.</h2><p>Quem passa pela cadeira tem uma história para contar. Conheça as avaliações da Preto Barbearia no Google.</p>{business.googleReviewsUrl ? <Button asChild variant="editorial"><a href={business.googleReviewsUrl} target="_blank" rel="noopener noreferrer">Ver avaliações no Google <ArrowUpRight /></a></Button> : <Button variant="editorial" onClick={() => setReviewsOpen(true)}>Ver avaliações no Google <ArrowUpRight /></Button>}</div>
        <div className="review-summary"><div className="google-label"><span className="google-g" aria-hidden="true">G</span><span>Avaliações no Google</span></div><div className="review-count">{business.reviewCount}<span>avaliações</span></div><p>Quantidade registrada na ficha consultada.<br />Esse número pode mudar.</p><div className="review-placeholder"><MessageCircle size={15} /><span>Comentários e notas reais serão adicionados após confirmação.</span></div></div>
      </div></section>
      <section id="contato" className="section"><div className="site-container contact-layout"><div><p className="eyebrow">SEU PRÓXIMO MOMENTO DE CUIDADO</p><h2>Venha conhecer a<br />Preto Barbearia.</h2><p className="contact-location-line">No Centro de Luís Eduardo Magalhães.<br />Um espaço para o seu estilo.</p><div className="contact-actions"><WhatsAppButton label="Falar pelo WhatsApp" compact /><Button asChild variant="editorial"><a href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={17} /> Como chegar <ArrowUpRight /></a></Button></div></div>
      <div className="contact-details"><div className="detail-row"><MapPin /><div><h3>Onde estamos</h3><p>{business.address}<br />{business.city}, {business.state}<br />CEP {business.postalCode}</p><a href={mapsUrl} target="_blank" rel="noopener noreferrer">Abrir no Google Maps <ArrowUpRight size={13} /></a></div></div><div className="detail-row"><Clock /><div><h3>Horário de funcionamento</h3><p>{business.openingHours || "Horários a confirmar com a barbearia."}</p></div></div><div className="detail-row"><Instagram /><div><h3>Acompanhe a Preto</h3><a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">@pretobarbearia.lem <ArrowUpRight size={13} /></a></div></div></div>
      </div></section>
    </main>
    <footer className="site-footer"><div className="site-container"><div className="footer-top"><Brand footer /><p className="footer-location">Luís Eduardo Magalhães, Bahia.</p><div className="social-links"><a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Preto Barbearia" title="Instagram"><Instagram size={18} /></a><a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Localização no Google Maps" title="Google Maps"><MapPin size={18} /></a><WhatsAppButton floating label="Contato pelo WhatsApp" /></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Preto Barbearia. Todos os direitos reservados.</span><span>Estilo. Cuidado. Presença.</span></div></div></footer>
    <WhatsAppButton floating label="Agendar pelo WhatsApp" />
    {reviewsOpen && <div className="modal-backdrop" onClick={() => setReviewsOpen(false)}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="reviews-title" onClick={e => e.stopPropagation()} onKeyDown={e => { if (e.key === "Escape") setReviewsOpen(false); }}><Button variant="ghost" size="icon" className="modal-close" aria-label="Fechar" onClick={() => setReviewsOpen(false)} autoFocus><X /></Button><Star className="text-primary" size={32} /><h2 id="reviews-title">Avaliações reais.</h2><p>O link exato da ficha do Google está aguardando confirmação. Você pode procurar a Preto Barbearia no Google Maps.</p><Button asChild variant="brand"><a href={mapsUrl} target="_blank" rel="noopener noreferrer">Buscar no Google Maps <ArrowUpRight /></a></Button></section></div>}
  </>;
}
