const ROUTES = {
  HOME: "/",
  STORY: "/imperial-story",
  CONCIERGE: "/concierge",
  SERVICES: "/services",
  PARTNERSHIP: "/partnership",

  // Concierge Services
  ACCOMMODATION: "/concierge/accommodation-reservations",
  RESTAURANT: "/concierge/restaurant",
  LUXURY: "/concierge/luxury-transportation",
  ARRANGEMENT: "/concierge/special-arrangements",
  CURATED: "/concierge/curated-day",
  EXCLUSIVE: "/concierge/exclusive-experience",
  TRAVEL: "/concierge/travel-consultation",

  // Services
  PRIVATE_CHAUFFEUR: "/services/private-chauffeur",
  AIRPORT_TRANSFERS: "/services/airport-transfers",
  PRIVATE_DAY_TOUR: "services/private-day-tours",
  SIGNATURE_TOURS: "/services/signature-multi-day-tours",

  // Services Private Day Tours Services
  TOKYO: "/services/private-day-tours/tokyo",
  ESCAPE: "/services/private-day-tours/mt-fuji-escape",
  NIKKO: "/services/private-day-tours/nikko",
  KAMAKURA: "/services/private-day-tours/kamakura",

  // PAYMENT_INTENT: "/payment-intent/:requestId",
  // PAYMENT_CANCELED: "/payment-canceled",
  // PAYMENT_SUCCESS: "/payment-success",
  // BOOKING: "/booking", 
  NOT_FOUND: "*",
};

export default ROUTES;
