# Preto Barbearia

Site institucional da Preto Barbearia, em Luís Eduardo Magalhães, Bahia. A página apresenta os serviços, avaliações públicas, trabalhos recentes do Instagram, localização e canais de agendamento.

## Onde personalizar

Os dados editáveis do negócio ficam centralizados em [`src/lib/business.ts`](src/lib/business.ts):

- **Endereço e cidade:** atualize `address`, `city`, `state` e `postalCode`.
- **Contato:** `telephone` é o telefone exibido nos dados locais; `whatsappNumber` controla os botões de agendamento.
- **Serviços:** edite `name`, `description`, `price` e `whatsappMessage`. Para exibir um preço, use por exemplo `price: "R$ 45"`; deixe `price: ""` até confirmar o valor.
- **Horários:** preencha `openingHours` com os dias e horários confirmados. Vazio, o site orienta o visitante a consultar pelo WhatsApp.
- **Instagram:** troque os links na lista `instagramPosts` para escolher quais duas publicações aparecem na página. Cada URL deve ser de uma publicação pública.
- **Avaliações:** `reviewRating`, `reviewCount`, `googleReviewsUrl` e `reviewQuotes` controlam nota, quantidade, link e trechos exibidos. Mantenha os números atualizados e use apenas avaliações públicas reais.

As imagens principais do espaço estão configuradas em `src/routes/index.tsx` (`heroImage` e `detailsImage`). A marca usada no cabeçalho e rodapé está em `src/assets/uploads/6901.png`. Substitua esses arquivos/links somente por imagens autorizadas da barbearia.

## Rodar localmente

```sh
npm install
npm run dev
```

Para gerar a versão de produção:

```sh
npm run build
```

O projeto usa Vite e Nitro com saída `cloudflare-module`, configurada em `vite.config.ts`.
