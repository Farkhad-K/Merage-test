// Pages and components
import Navigation from "./components/Navigation";
import MainRouter from "./router/MainRouter";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <MainRouter />
      <Footer />
    </>
  );
}

export default App;
