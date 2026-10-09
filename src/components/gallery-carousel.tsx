import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const galleryPhotos = [
  {
    src: "/images/barbershop/ambiente-sinuca.jpg",
    alt: "Ambiente da Preto Barbearia com mesa de sinuca, tijolos aparentes e decoração automotiva.",
    title: "Um espaço para ficar à vontade",
    description: "Sinuca, boa conversa e um ambiente com personalidade.",
  },
  {
    src: "/images/barbershop/fachada.jpg",
    alt: "Fachada da Preto Barbearia no Centro de Luís Eduardo Magalhães.",
    title: "A Preto fica no Centro",
    description: "Passe para conhecer o espaço e falar com a equipe.",
  },
  {
    src: "/images/barbershop/detalhes-decoracao.jpg",
    alt: "Parede de tijolos com quadros de carros clássicos e iluminação acolhedora.",
    title: "Detalhes do ambiente",
    description: "Referências clássicas e luz quente fazem parte do espaço.",
  },
  {
    src: "/images/barbershop/parede-classicos.jpg",
    alt: "Decoração da barbearia com carros clássicos, engrenagens e parede de tijolos.",
    title: "Um estilo próprio",
    description: "Cada detalhe acompanha a identidade da Preto Barbearia.",
  },
];

export function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!isPlaying || isHovered || isFocused) return;

    const interval = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % galleryPhotos.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPlaying, isHovered, isFocused]);

  const showPrevious = () => setActiveIndex(index => (index - 1 + galleryPhotos.length) % galleryPhotos.length);
  const showNext = () => setActiveIndex(index => (index + 1) % galleryPhotos.length);

  return (
    <div
      className="gallery-carousel"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Fotos do ambiente da Preto Barbearia"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
      }}
    >
      <div className="gallery-window">
        <div className="gallery-track" style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}>
          {galleryPhotos.map((photo, index) => (
            <figure className="gallery-slide" key={photo.src} aria-hidden={index !== activeIndex}>
              <img src={photo.src} alt={photo.alt} loading={index === 0 ? "eager" : "lazy"} />
              <figcaption className="gallery-caption">
                <span className="eyebrow">PRETO BARBEARIA · LEM</span>
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <button className="gallery-arrow gallery-previous" type="button" onClick={showPrevious} aria-label="Foto anterior"><ArrowLeft /></button>
        <button className="gallery-arrow gallery-next" type="button" onClick={showNext} aria-label="Próxima foto"><ArrowRight /></button>
      </div>
      <div className="gallery-controls">
        <div className="gallery-pagination" role="group" aria-label="Escolher foto">
          {galleryPhotos.map((photo, index) => (
            <button
              className={`gallery-dot${index === activeIndex ? " is-active" : ""}`}
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Mostrar foto ${index + 1}: ${photo.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <span className="gallery-count" aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(galleryPhotos.length).padStart(2, "0")}</span>
        <button className="gallery-play" type="button" onClick={() => setIsPlaying(value => !value)} aria-label={isPlaying ? "Pausar troca automática" : "Retomar troca automática"}>
          {isPlaying ? <Pause size={15} /> : <Play size={15} />}
          <span>{isPlaying ? "Pausar" : "Reproduzir"}</span>
        </button>
      </div>
    </div>
  );
}
