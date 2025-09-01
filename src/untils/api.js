import axios from "axios";
import { parseCookies } from "nookies";

// Base URL
axios.defaults.baseURL = "https://api.nipponimperial.com"; // debug
axios.defaults.withCredentials = true;

// Interceptor
axios.interceptors.request.use(
  (config) => {
    const { token } = parseCookies();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Axios interceptor failed:", error);
  }
);

// API Prefixes

// Auth section
const PAYMENTS_API_PREFIX = "/api";

// Concierge section
const ACCOMMODATION_API_PREFIX = "/api/concierge/accommodation";
const RESTAURANT_API_PREFIX = "/api/concierge/restaurant";
const LUXURY_TRANSPORT_API_PREFIX = "/api/concierge/luxury-transport";
const CURATED_DAY_API_PREFIX = "/api/concierge/curated-day";

// ===== Payments API =====
export const paymentsApi = {
  postCheckout: (requestId) =>
    axios.post(`${PAYMENTS_API_PREFIX}/${requestId}/payments/checkout`),
  getCancel: (requestId) =>
    axios.get(`${PAYMENTS_API_PREFIX}/${requestId}/payments/cancel`),
  postIntent: (requestId) =>
    axios.post(`${PAYMENTS_API_PREFIX}/${requestId}/payments/intent`),
  getLink: (requestId) =>
    axios.get(`${PAYMENTS_API_PREFIX}/${requestId}/payments/link`),
};

// ===== Accommodation Api =====
export const accommodationApi = {
  getAccommodationList: () => axios.get(`${ACCOMMODATION_API_PREFIX}`),
  postAccommodation: (data) => axios.post(`${ACCOMMODATION_API_PREFIX}`, data),
  getAccommodationById: (requestId) =>
    axios.get(`${ACCOMMODATION_API_PREFIX}/${requestId}`),
  putAccommodation: (requestId) =>
    axios.put(`${ACCOMMODATION_API_PREFIX}/${requestId}/quote`),
};

// ===== Restaurant Api =====
export const restaurantApi = {
  getRestaurantList: () => axios.get(`${RESTAURANT_API_PREFIX}`),
  postRestaurant: (data) => axios.post(`${RESTAURANT_API_PREFIX}`, data),
  getRestaurantById: (requestId) =>
    axios.get(`${RESTAURANT_API_PREFIX}/${requestId}`),
  putRestaurant: (requestId) =>
    axios.put(`${RESTAURANT_API_PREFIX}/${requestId}/quote`),
};

// ===== Luxury Transport Api =====
export const luxuryTransportApi = {
  getLuxuryTransportList: () => axios.get(`${LUXURY_TRANSPORT_API_PREFIX}`),
  postLuxuryTransport: (data) =>
    axios.post(`${LUXURY_TRANSPORT_API_PREFIX}`, data),
  getLuxuryTransportById: (requestId) =>
    axios.get(`${LUXURY_TRANSPORT_API_PREFIX}/${requestId}`),
  putLuxuryTransport: (requestId) =>
    axios.put(`${LUXURY_TRANSPORT_API_PREFIX}/${requestId}/quote`),
};

// ===== Curated Day Api =====
export const curatedDayApi = {
  getCuratedDayList: () => axios.get(`${CURATED_DAY_API_PREFIX}`),
  postCuratedDay: (data) => axios.post(`${CURATED_DAY_API_PREFIX}`, data),
  getCuratedDayById: (requestId) =>
    axios.get(`${CURATED_DAY_API_PREFIX}/${requestId}`),
  putCuratedDay: (requestId) =>
    axios.put(`${CURATED_DAY_API_PREFIX}/${requestId}/quote`),
};
