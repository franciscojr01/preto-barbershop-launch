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
    {
      id: "corte",
      name: "Corte masculino",
      description: "Seu estilo, em cada detalhe.",
      icon: "scissors",
      whatsappUrl: "https://wa.me/557799674609?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20corte%20masculino%20na%20Preto%20Barbearia.%20Quais%20hor%C3%A1rios%20est%C3%A3o%20dispon%C3%ADveis%3F",
    },
    {
      id: "barba",
      name: "Barba",
      description: "Cuidado que completa o visual.",
      icon: "razor",
      whatsappUrl: "https://wa.me/557799674609?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20de%20barba%20na%20Preto%20Barbearia.%20Quais%20hor%C3%A1rios%20est%C3%A3o%20dispon%C3%ADveis%3F",
    },
    {
      id: "combo",
      name: "Corte e barba",
      description: "Uma combinação com presença.",
      icon: "combo",
      whatsappUrl: "https://wa.me/557799674609?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20corte%20e%20barba%20na%20Preto%20Barbearia.%20Quais%20hor%C3%A1rios%20est%C3%A3o%20dispon%C3%ADveis%3F",
    },
    {
      id: "acabamento",
      name: "Acabamento",
      description: "Os detalhes fazem a diferença.",
      icon: "sparkles",
      whatsappUrl: "https://wa.me/557799674609?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20acabamento%20na%20Preto%20Barbearia.%20Quais%20hor%C3%A1rios%20est%C3%A3o%20dispon%C3%ADveis%3F",
    },
    {
      id: "finalizacao",
      name: "Finalização",
      description: "Seu visual pronto para qualquer ocasião.",
      icon: "sparkles",
      whatsappUrl: "https://wa.me/557799674609?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20finaliza%C3%A7%C3%A3o%20na%20Preto%20Barbearia.%20Quais%20hor%C3%A1rios%20est%C3%A3o%20dispon%C3%ADveis%3F",
    },
  ],
};

export function getWhatsAppUrl(number: string): string | null {
  const digits = number.replace(/\D/g, "");
  if (!/^55\d{10,11}$/.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent("Olá! Gostaria de agendar um horário na Preto Barbearia. Quais horários estão disponíveis?")}`;
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${business.name}, ${business.address}, ${business.city}, ${business.state}, ${business.postalCode}`)}`;