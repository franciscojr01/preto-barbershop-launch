// Confirm the business details here before the commercial preview is published.
export const business = {
  name: "PRETO BARBEARIA",
  city: "Luís Eduardo Magalhães",
  state: "Bahia",
  address: "Avenida Juscelino Kubitscheck, 1619, Centro",
  postalCode: "47850-000",
  instagramUrl: "https://www.instagram.com/pretobarbearia.lem/",
  whatsappNumber: "557799674609",
  googleReviewsUrl: "", // Exact Google business profile URL, pending confirmation.
  reviewCount: 42,
  openingHours: "",
  services: [
    { id: "corte", name: "Corte masculino", description: "Seu estilo, em cada detalhe.", icon: "scissors" },
    { id: "barba", name: "Barba", description: "Cuidado que completa o visual.", icon: "razor" },
    { id: "combo", name: "Corte e barba", description: "Uma combinação com presença.", icon: "combo" },
    { id: "acabamento", name: "Acabamento e finalização", description: "Os detalhes fazem a diferença.", icon: "sparkles" },
  ],
};

export function getWhatsAppUrl(number: string): string | null {
  const digits = number.replace(/\D/g, "");
  if (!/^55\d{10,11}$/.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent("Olá! Gostaria de agendar um horário na Preto Barbearia. Quais horários estão disponíveis?")}`;
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${business.name}, ${business.address}, ${business.city}, ${business.state}, ${business.postalCode}`)}`;