import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop.jsx";
// import "react-nivo-slider/dist/index.css";
import "./App.css";
// import "react-tabs/style/react-tabs.css";
// import "react-fancybox/lib/fancybox.css";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Solutions from "./pages/Solutions.jsx";
import Services from "./pages/Services.jsx";
import DEdge from "./pages/DEdge.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import OurClients from "./pages/OurClients.jsx";
import News from "./pages/News.jsx";
import NewsDetails from "./pages/NewsDetails.jsx";
import ServicesDetails from "./pages/ServicesDetails.jsx";
import WebsiteDevelopment from "./pages/WebsiteDevelopment.jsx";
import HotelandResorts from "./pages/HotelandResorts.jsx";
import TravelandTours from "./pages/TravelandTours.jsx";
import NileCruises from "./pages/NileCruises.jsx";
import GeneralPurposes from "./pages/GeneralPurposes.jsx";
import SearchEngineMarketing from "./pages/SearchEngineMarketing.jsx";
import SocialMediaMarketing from "./pages/SocialMediaMarketing.jsx";
import SocialMediaManagement from "./pages/SocialMediaManagement.jsx";
import HotelECommerce from "./pages/HotelECommerce.jsx";
import SearchEngineOptimization from "./pages/SearchEngineOptimization.jsx";
import EmailMarketing from "./pages/EmailMarketing.jsx";
import Reporting from "./pages/Reporting.jsx";
import HospitalityPhotography from "./pages/HospitalityPhotography.jsx";
import AsksuiteHotelChatbot from "./pages/AsksuiteHotelChatbot.jsx";
import TheHotelsNetwork from "./pages/TheHotelsNetwork.jsx";
import CentralReservationSystem from "./pages/CentralReservationSystem.jsx";
import GuestManagement from "./pages/GuestManagement.jsx";
import DataIntelligence from "./pages/DataIntelligence.jsx";
import BookingEngine from "./pages/BookingEngine.jsx";
import WebCheckInSolution from "./pages/WebCheckInSolution.jsx";
import AttractionDEdge from "./pages/AttractionDEdge.jsx";
import SynXis from "./pages/SynXis.jsx";
import NileCruiseBookingEngine from "./pages/NileCruiseBookingEngine.jsx";
import GoogleAds from "./pages/GoogleAds.jsx";
import BingAds from "./pages/BingAds.jsx";
import YandexAds from "./pages/YandexAds.jsx";
import FacebookAds from "./pages/FacebookAds.jsx";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchHotels());
  // }, [dispatch]);
  // useEffect(() => {

  //   const currentUrl = new URL(window.location.href);

  //   if (!currentUrl.pathname.includes("/en")) {

  //     window.location.href = `${currentUrl.origin}/en${currentUrl.pathname}${currentUrl.search}`;
  //   }
  // }, []);

  // const [cliced, setCliced] = useState(true);
  // const toggleLanguage = () => {
  //   let currentUrl = window.location.href;

  //   if (currentUrl.includes("/en")) {
  //     currentUrl = currentUrl.replace("/en", "/ar");
  //     setCliced(false);
  //   } else if (currentUrl.includes("/ar")) {
  //     currentUrl = currentUrl.replace("/ar", "/en");
  //     setCliced(true);
  //   }

  //   window.history.pushState({ path: currentUrl }, "", currentUrl);

  //   document.body.style.direction =
  //     document.body.style.direction === "rtl" ? "ltr" : "rtl";
  // };

  return (
    <>
      <Router basename="/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="solutions" element={<Solutions />} />
            
            <Route path="website-development" element={<WebsiteDevelopment />} />
            <Route path="hotels-resorts" element={<HotelandResorts />} />
            <Route path="travel-tours" element={<TravelandTours />} />
            <Route path="nile-cruises" element={<NileCruises />} />
            <Route path="general-purposes" element={<GeneralPurposes />} />
            
            <Route path="booking-engine" element={<BookingEngine/>} />
            <Route path="attraction-d-edge" element={<AttractionDEdge/>} />
            <Route path="SynXis" element={<SynXis/>} />
            <Route path="nile-cruise-booking-engine" element={<NileCruiseBookingEngine/>} />

            
            <Route path="web-check-in-solution" element={<WebCheckInSolution/>} />


            <Route path="services" element={<Services />} />

            <Route path="search-engine-marketing" element={<SearchEngineMarketing />} />
            <Route path="google-ads" element={<GoogleAds/>} />
            <Route path="bing-ads" element={<BingAds/>} />
            <Route path="yandex-ads" element={<YandexAds/>} />

            <Route path="social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="facebook-ads" element={<FacebookAds/>} />


            <Route path="social-media-management" element={<SocialMediaManagement/>} />
            <Route path="hotel-e-commerce" element={<HotelECommerce/>} />
            <Route path="search-engine-optimization" element={<SearchEngineOptimization/>} />
            <Route path="email-marketing" element={<EmailMarketing/>} />
            <Route path="reporting" element={<Reporting/>} />
            <Route path="hospitality-photography" element={<HospitalityPhotography/>} />
            <Route path="asksuite-hotel-chatbot" element={<AsksuiteHotelChatbot/>} />
          <Route path="the-hotels-network" element={<TheHotelsNetwork/>} />

            <Route path="services-details" element={<ServicesDetails />} />
            
            <Route path="d-edge" element={<DEdge />} />
            <Route path="central-reservation-system" element={<CentralReservationSystem/>} />
            <Route path="guest-management" element={<GuestManagement/>} />
            <Route path="data-intelligence" element={<DataIntelligence/>} />


            <Route path="about-us" element={<AboutUs />} />
            <Route path="clients" element={<OurClients />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="news" element={<News />} />
            <Route path="news-details" element={<NewsDetails />} />
            <Route path="contact-us" element={<ContactUs />} />

            <Route
              path="*"
              element={
                <section
                  style={{
                    backgroundColor: "#1E398D",
                    padding: "200px 0 100px",
                  }}
                >
                  <h1 className="text-center text-light">Page Not Found</h1>
                </section>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
