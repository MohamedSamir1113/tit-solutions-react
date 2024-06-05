import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
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
            <Route path="services" element={<Services />} />
            <Route path="services-details" element={<ServicesDetails />} />
            <Route path="d-edge" element={<DEdge />} />
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
