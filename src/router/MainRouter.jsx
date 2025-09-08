// Libraries
import { Route, Routes } from "react-router";

import ROUTES from "./routes";

// Imported pages
import Home from "../pages/home/Home";
import ImperialStoryPage from "../pages/imperialStory/ImperialStoryPage";
import ConciergePage from "../pages/concierge/ConciergePage";
import PrivateChauffeurPage from "../pages/servicesPage/PrivateChauffeurPage";
import PartnershipPage from "../pages/partnership/PartnershipPage";

// Concierge Services
import AccommodationReservationsPage from "../pages/conciergeServices/accommodationReservations/AccommodationReservationsPage";
import RestaurantPage from "../pages/conciergeServices/restaurantBookings/RestaurantPage";
import LuxuryTransportPage from "../pages/conciergeServices/luxuryTransport/LuxuryTransportPage";
import GuideArrangementsPage from "../pages/conciergeServices/guideArrangements/GuideArrangementsPage";
import ExclusivePage from "../pages/conciergeServices/ExclusiveExperience/ExclusivePage";
import CuratedDay from "../pages/conciergeServices/curatedDay/CuratedDay";
import TravelConsultationPage from "../pages/conciergeServices/travelConsultation/TravelConsultationPage";

// Services
import PrivateChauffeurServicesPage from "../pages/Services/privateChauffeur/PrivateChauffeurPage";
import AirportTransfersPage from "../pages/Services/airportTransfers/AirportTransfersPage";
import PrivateDayToursPage from "../pages/Services/privateDayTours/PrivateDayToursPage";
import SignatureMultiDayToursPage from "../pages/Services/signatureMultiDayTours/SignatureMultiDayToursPage";
import MtFujiEscapePage from "../pages/Services/mtFujiEscape/MtFujiEscapePage";
import KamakuraHeritageTripPage from "../pages/Services/kamakuraHeritageDayTrip/KamakuraHeritageTripPage";
import TokyoCity from "../pages/Services/tokyo/TokyoCity";
import NikkoPage from "../pages/Services/nikko/NikkoPage";

// // Payments
// import PaymentIntent from "../pages/auth/PaymentIntent";
// import PaymentCanceled from "../pages/auth/PaymentCanceled";
// import PaymentSuccess from "../pages/auth/PaymentSuccess";

const MainRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.STORY} element={<ImperialStoryPage />} />

      {/* Concierge */}
      <Route path={ROUTES.CONCIERGE} element={<ConciergePage />} />

      {/* Concierge Services */}
      <Route
        path={ROUTES.ACCOMMODATION}
        element={<AccommodationReservationsPage />}
      />
      <Route path={ROUTES.RESTAURANT} element={<RestaurantPage />} />
      <Route path={ROUTES.LUXURY} element={<LuxuryTransportPage />} />
      <Route path={ROUTES.ARRANGEMENT} element={<GuideArrangementsPage />} />
      <Route path={ROUTES.CURATED} element={<CuratedDay />} />
      <Route path={ROUTES.EXCLUSIVE} element={<ExclusivePage />} />
      <Route path={ROUTES.TRAVEL} element={<TravelConsultationPage />} />

      {/* Services */}
      <Route path={ROUTES.SERVICES} element={<PrivateChauffeurPage />} />

      {/*  */}
      <Route
        path={ROUTES.PRIVATE_CHAUFFEUR}
        element={<PrivateChauffeurServicesPage />}
      />
      <Route
        path={ROUTES.AIRPORT_TRANSFERS}
        element={<AirportTransfersPage />}
      />
      <Route path={ROUTES.PRIVATE_DAY_TOUR} element={<PrivateDayToursPage />} />
      <Route
        path={ROUTES.SIGNATURE_TOURS}
        element={<SignatureMultiDayToursPage />}
      />
      <Route path={ROUTES.ESCAPE} element={<MtFujiEscapePage />} />
      <Route path={ROUTES.KAMAKURA} element={<KamakuraHeritageTripPage />} />
      <Route path={ROUTES.NIKKO} element={<NikkoPage />} />
      <Route path={ROUTES.TOKYO} element={<TokyoCity />} />

      <Route path={ROUTES.PARTNERSHIP} element={<PartnershipPage />} />
    </Routes>
  );
};

export default MainRouter;
