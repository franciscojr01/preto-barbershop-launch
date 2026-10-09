// Edite os dados comerciais desta página neste arquivo. Confirme preços e horários com a barbearia.
export const business = {
  name: "PRETO BARBEARIA",
  city: "Luís Eduardo Magalhães",
  state: "Bahia",
  address: "Avenida Juscelino Kubitscheck, 1619, Centro",
  postalCode: "47850-000",
  telephone: "557799674609",
  // WhatsApp público informado no Google Maps e no Instagram do negócio.
  whatsappNumber: "5577999244016",
  instagramUrl: "https://www.instagram.com/pretobarbearia.lem/",
  // Links de publicações públicas; troque os URLs pelos posts que quiser destacar.
  instagramPosts: [
    { url: "https://www.instagram.com/p/Dd4NcySlhlp/" },
    { url: "https://www.instagram.com/p/DdwtCfVGOsC/" },
  ],
  googleReviewsUrl: "https://share.google/Ai5wROOYxEVsJKeaP",
  reviewRating: 4.9,
  reviewCount: 42,
  // Exemplo de formato: "Ter a sáb · 09h às 19h". Deixe vazio até confirmar.
  openingHours: "",
  // Preencha price após confirmar com a barbearia; exemplo: "R$ 45".
  services: [
    {
      id: "corte",
      name: "Corte masculino",
      description: "Corte alinhado ao estilo que você escolher.",
      price: "",
      icon: "scissors",
      whatsappMessage: "Olá! Gostaria de agendar um corte masculino na Preto Barbearia. Quais horários estão disponíveis?",
    },
    {
      id: "barba",
      name: "Barba",
      description: "Acabamento e cuidado para a barba.",
      price: "",
      icon: "razor",
      whatsappMessage: "Olá! Gostaria de agendar um serviço de barba na Preto Barbearia. Quais horários estão disponíveis?",
    },
    {
      id: "combo",
      name: "Corte e barba",
      description: "Corte masculino e barba no mesmo atendimento.",
      price: "",
      icon: "combo",
      whatsappMessage: "Olá! Gostaria de agendar corte e barba na Preto Barbearia. Quais horários estão disponíveis?",
    },
    {
      id: "acabamento",
      name: "Acabamento",
      description: "Refino do corte nos detalhes.",
      price: "",
      icon: "sparkles",
      whatsappMessage: "Olá! Gostaria de agendar um acabamento na Preto Barbearia. Quais horários estão disponíveis?",
    },
    {
      id: "finalizacao",
      name: "Finalização",
      description: "Finalização do visual após o corte.",
      price: "",
      icon: "sparkles",
      whatsappMessage: "Olá! Gostaria de agendar uma finalização na Preto Barbearia. Quais horários estão disponíveis?",
    },
  ],
  // Trechos de avaliações públicas já usadas na prévia. Atualize com autorização e revisão do negócio.
  reviewQuotes: [
    { author: "Rony Rodrigues", text: "A barbearia fica em um local de fácil acesso, sempre corto o meu cabelo com o Júnior profissional excepcional. Super recomendo, principalmente para quem preza qualidade e atendimento com um preço justo." },
    { author: "Na Estrada com Valner Silva", text: "Ambiente muito bonito, confortável, e atendimento personalizado!" },
  ],
};

export function getWhatsAppUrl(number: string, message = "Olá! Gostaria de agendar um horário na Preto Barbearia. Quais horários estão disponíveis?"): string | null {
  const digits = number.replace(/\D/g, "");
  if (!/^55\d{10,11}$/.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

const addressQuery = `${business.name}, ${business.address}, ${business.city}, ${business.state}, ${business.postalCode}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(addressQuery)}&output=embed`;
