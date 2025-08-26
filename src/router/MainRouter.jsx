// Libraries
import { Route, Routes } from "react-router";

import ROUTES from "./routes";

// Imported pages
import Home from "../pages/home/Home";
import ImperialStoryPage from "../pages/imperialStory/ImperialStoryPage";
import ConciergePage from "../pages/concierge/ConciergePage";
import PrivateChauffeurPage from "../pages/servicesPage/PrivateChauffeurPage";

// Concierge Services
import AccommodationReservationsPage from "../pages/conciergeServices/accommodationReservations/AccommodationReservationsPage";
import LuxuryTransportPage from "../pages/conciergeServices/luxuryTransport/LuxuryTransportPage";
import ExclusivePage from "../pages/conciergeServices/ExclusiveExperience/ExclusivePage";
import CuratedDay from "../pages/conciergeServices/curatedDay/CuratedDay";

// Services
import MtFujiEscapePage from "../pages/Services/mtFujiEscape/MtFujiEscapePage";
import SignatureMultiDayToursPage from "../pages/Services/signatureMultiDayTours/SignatureMultiDayToursPage";
import KamakuraHeritageTripPage from "../pages/Services/kamakuraHeritageDayTrip/KamakuraHeritageTripPage";
import TokyoCity from "../pages/Services/tokyo/TokyoCity";
import PartnershipPage from "../pages/partnership/PartnershipPage";


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
      <Route path={ROUTES.LUXURY} element={<LuxuryTransportPage />} />
      <Route path={ROUTES.CURATED} element={<CuratedDay />} />
      <Route path={ROUTES.EXCLUSIVE} element={<ExclusivePage />} />

      {/* Services */}
      <Route path={ROUTES.SERVICES} element={<PrivateChauffeurPage />} />

      {/*  */}
      <Route path={ROUTES.ESCAPE} element={<MtFujiEscapePage />} />
      <Route
        path={ROUTES.SIGNATURE_TOURS}
        element={<SignatureMultiDayToursPage />}
      />
      <Route path={ROUTES.KAMAKURA} element={<KamakuraHeritageTripPage />} />
      <Route path={ROUTES.TOKYO} element={<TokyoCity />} />

      <Route path={ROUTES.PARTNERSHIP} element={<PartnershipPage />} />
    </Routes>
  );
};

export default MainRouter;
