import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

import GooglePremierPartner from "./pages/GooglePremierPartner.jsx";
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
import InstagramAds from "./pages/InstagramAds.jsx";
import SnapchatAds from "./pages/SnapchatAds.jsx";
import VKAds from "./pages/VKAds.jsx";
import LinkedInAds from "./pages/LinkedInAds.jsx";
import SocialMediaStrategy from "./pages/SocialMediaStrategy.jsx";
import SocialMediaPosting from "./pages/SocialMediaPosting.jsx";
import SocialMediaGraphics from "./pages/SocialMediaGraphics.jsx";
import ECommerceConsultancy from "./pages/ECommerceConsultancy.jsx";
import ECommerceManagement from "./pages/ECommerceManagement.jsx";
import ConstantContact from "./pages/ConstantContact.jsx";
import ManageEmailMarketing from "./pages/ManageEmailMarketing.jsx";
import GoogleAnalyticsImplementation from "./pages/GoogleAnalyticsImplementation.jsx";
import DigitalMarketingReporting from "./pages/DigitalMarketingReporting.jsx";
import Website360Reporting from "./pages/Website360Reporting.jsx";
import BookingEngineForHotel from "./pages/BookingEngineForHotel.jsx";
import ChannelManager from "./pages/ChannelManager.jsx";
import CentralInventory from "./pages/CentralInventory.jsx";
import GDSHotelSolutions from "./pages/GDSHotelSolutions.jsx";
import HotelCRM from "./pages/HotelCRM.jsx";
import GuestLoyalty from "./pages/GuestLoyalty.jsx";
import GuestFeedback from "./pages/GuestFeedback.jsx";
import PriceMonitoring from "./pages/PriceMonitoring.jsx";
import PriceRecommendation from "./pages/PriceRecommendation.jsx";
import PerformanceAnalysis from "./pages/PerformanceAnalysis.jsx";
import DigitalMarketingHotels from "./pages/DigitalMarketingHotels.jsx";
import TravelAgencies from "./pages/TravelAgencies.jsx";
import DubaiHotelShow from "./pages/DubaiHotelShow.jsx";
import RiyadhTravelFair from "./pages/RiyadhTravelFair.jsx";
import ATMDubai from "./pages/ATMDubai.jsx";
import Travco from "./pages/Travco.jsx";
import CleoPark from "./pages/CleoPark.jsx";
import Duetto from "./pages/Duetto.jsx";
import Berlin from "./pages/Berlin.jsx";
import ChrismarTravel from "./pages/ChrismarTravel.jsx";
import TawilaIsland from "./pages/TawilaIsland.jsx";
import ArabianTravelMarket from "./pages/ArabianTravelMarket.jsx";
import PartookKwentra from "./pages/PartookKwentra.jsx";
import KashierPaymentSolutions from "./pages/KashierPaymentSolutions.jsx";
import GooglePremierPartner2023 from "./pages/GooglePremierPartner2023.jsx";
import UtopiaBeachHotels from "./pages/UtopiaBeachHotels.jsx";
import SliceandDice from "./pages/SliceandDice.jsx";
import RegalHeightsHotel from "./pages/RegalHeightsHotel.jsx";
import RegalHotelWebsite from "./pages/RegalHotelWebsite.jsx";
import SteigenbergerHotel from "./pages/SteigenbergerHotel.jsx";
import DivingWorldSharm from "./pages/DivingWorldSharm.jsx";
import SavoySharm from "./pages/SavoySharm.jsx";
import CrystalInnHotel from "./pages/CrystalInnHotel.jsx";

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

  const blogPosts = [
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/dubai-show-Website-banner.jpg",
      date: "2",
      month: "JUNE",
      year: "2024",
      title: "We're Heading Back to Dubai for The Hotel Show",
      description: `We are thrilled to announce our participation in The Hotel Show in Dubai, the ultimate hub for the hospitality industry! This premier event is`,
      linkPath: "/dubai-hotel-show",
      colorClass: "",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/RIYADH-WEBSITE.jpg",
      date: "25",
      month: "MAY",
      year: "2024",
      title:
        "T.I.T Solutions Announces Participation in Riyadh Travel Fair 2024",
      description: `T.I.T Solutions is pleased to announce that our Managing Director, Dr. Mohamed Taha, will participate in the Riyadh Travel Fair, the premier tourism event in Saudi Arabia, from May 27 to 29, 2024.We are eager`,
      linkPath: "/riyadh-travel-fair-2024",
      colorClass: "color2",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/ATM-Website-banner.jpg",
      date: "4",
      month: "MAY",
      year: "2024",
      title:
        "Glad to Attend ATM Dubai 2024: Connecting with Industry Leaders and Forging New Partnerships",
      description: `We are delighted to announce our participation in the prestigious Arabian Travel Market (ATM) 2024, set to take place in Dubai from May 6th to May 9th.

This significant event will witness the presence`,
      linkPath: "/atm-dubai-2024",
      colorClass: "color3",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news/google-w-tit-website.jpg",
      date: "16",
      month: "APR",
      year: "2024",
      title: "Google Premier Partner 2024",
      description:
        "T.I.T Solutions, a leading innovator in digital marketing strategies, has been honored once again as a Google Premier Partner for the year 2024. This consecutive recognition underscores the company's unwavering commitment to excellence, following its previous acknowledgment as a Google Premier Partner in 2023.",
      linkPath: "/google-premier-partner-2024",
      colorClass: "",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news/WS-Travco-Launch.png",
      date: "2",
      month: "APR",
      year: "2024",
      title: "T.I.T Solutions and Travco Group Launches A New Website",
      description:
        "T.I.T Solutions is taking pride in announcing the launch of the new website for Travco Group. The new website is designed to provide a cutting-edge and dynamic user experience. With a wide range of features and functionalities that cater to the diverse needs of the users.",
      linkPath: "/travco-group",
      colorClass: "color2",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news/WS-Cleopark-Launch.jpg",
      date: "1",
      month: "APR",
      year: "2024",
      title:
        "T.I.T Solutions & Cleopark, owned By Sharm Dreams Holding, Shape a Digital Path to Adventure!",
      description:
        "T.I.T Solutions has launched the first-of-a-kind website for a water park for Cleopark, the premier water park in Sharm El Sheikh. Cleopark is owned by Sharm Dreams Holding and operated by The Jaz Hotel Group.",
      linkPath: "/cleopark-owned-by-sharm",
      colorClass: "color3",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news/duetto-website.jpg",
      date: "5",
      month: "Mar",
      year: "2024",
      title: `Driving Innovation In Profit Optimization:
                        T.I.T.Solutions Partners with Duetto Software to
                        Transform Hospitality field.`,
      description: ` Exciting news! We have partnered with Duetto Software to
                      revolutionize revenue management for hotels and resorts.
                      With Duetto's cutting-edge technology, we are confident
                      that we can deliver unparalleled value to our clients in
                      the hospitality sector.`,
      linkPath: "/partners-with-duetto-software",
      colorClass: "",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news/Lets-meet-in-Berlin.jpg",
      date: "3",
      month: "Mar",
      year: "2024",
      title: `Let's meet in Berlin!`,
      description: ` We are delighted to announce that our Managing Director,
                      Dr. Mohamed Taha, will attend the renowned ITB Berlin
                      Conference. This provides us with an excellent opportunity
                      to explore potential partnerships, discuss industry
                      trends, and showcase how T.I.T Solutions' team is changing
                      the game in travel experiences.`,
      linkPath: "/let-s-meet-in-berlin!",
      colorClass: "color2",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news/chrismar-Website-banner-3.jpg",
      date: "15",
      month: "JAN",
      year: "2024",
      title: `Discover Chrismar Travel's Updated Online Presence,
                        Crafted by T.I.T Solutions!`,
      description: `  We are thrilled to share the exciting introduction of
                      Chrismar Travel website. The new website promises to be an
                      engaging gateway for travel enthusiasts, offering a
                      seamless exploration of Chrismar's world of captivating
                      destinations and experiences.`,
      linkPath: "/discover-chrismar-travel",
      colorClass: "color3",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/TawilaIsland.jpg",
      date: "1",
      month: "JAN",
      year: "2024",
      title: "Tawila Island Flourishes with the Launch of Its New Website!",
      description: `We are delighted to unveil the all-new Tawila Island website...`,
      linkPath: "/tawila-island",
      colorClass: "",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/Participating.jpg",
      date: "1",
      month: "MAY",
      year: "2023",
      title:
        "Participating in the 30th Edition of the Arabian Travel Market (ATM)",
      description: `T.I.T Solutions agency is participating in the 30th edition of Arabian Travel Market (ATM) between 1-4 May in Dubai, where we are ready to explore `,
      linkPath: "/participating-in-the-arabian-travel-market-atm",
      colorClass: "color2",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/TechHospitality.jpg",
      date: "14",
      month: "MAR",
      year: "2023",
      title:
        "T.I.T Solutions Partook Kwentra's Tech Hospitality for IT Leaders Workshop",
      description: `T.I.T Solutions partook in Kwentra's "Tech Hospitality for IT Leaders" workshop for their latest initiative for hospitality technology professionals.Our managing director Dr. Mohamed Taha  `,
      linkPath: "/partook-kwentra",
      colorClass: "color3",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news-kashir.jpg",
      date: "7",
      month: "MAR",
      year: "2023",
      title: "T.I.T. Solutions partnering with Kashier Payment Solutions",
      description: `Cairo, Egypt, March 5th, 2023 – Kashier Payment and TIT Solutions are proud to announce their strategic partnership to drive e-commerce growth in the hospitality sector in Egypt.Kashier Payment Solutions`,
      linkPath: "/news-kashir",
      colorClass: "",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/google2023.jpg",
      date: "21",
      month: "FEB",
      year: "2023",
      title: "T.I.T. Solutions is recognized as a 2023 Google Premier Partner",
      description: `As a Google Premier Partner and by being in the top selected 3% of partners in the region, T.I.T.Solutions continues its mission of introducing digital marketing best practices to the hospitality industry and turning them into a success story.`,
      linkPath: "/google-premier-2023",
      colorClass: "color2",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/newsutopia.jpg",
      date: "19",
      month: "FEB",
      year: "2023",
      title: "Introducing the new Utopia Beach Hotels",
      description: `We are proud to announce the Utopia Beach Hotels' new website launch.It is now live and waiting for the endless number of guests’ bookings.`,
      linkPath: "/utopia-beach-hotels",
      colorClass: "color3",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news-slice.jpg",
      date: "2",
      month: "FEB",
      year: "2023",
      title: "Slice and Dice Egypt Website Launched by T.I.T Solutions",
      description: `With honor and pleasure, we are sharing with you our new Website project launch for Slice and Dice Egypt`,
      linkPath: "/slice-and-dice-egypt",
      colorClass: "",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news-regal.jpg",
      date: "31",
      month: "JAN",
      year: "2023",
      title: "Regal Heights Hotel received Traveller Review Award",
      description: `We are proud to announce that our respected client Regal Heights Hotel has received from Booking.com a Traveller Review Award with a rating of 8.9/10.`,
      linkPath: "/regal-heights-hotel",
      colorClass: "color2",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news-regalnew.jpg",
      date: "15",
      month: "JAN",
      year: "2023",
      title: "Regal Heights Hotel El Alamein Website Launched by T.I.T Solutions",
      description: `With honor and pleasure, we are sharing with you our new Website project launch for Regal Heights Hotel El Alamein`,
      linkPath: "/regal-hotel-website",
      colorClass: "color3",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news-tahrir.jpg",
      date: "11",
      month: "DEC",
      year: "2022",
      title: "Steigenberger Hotel El Tahrir Cairo",
      description: `Congratulations to our respected partner Steigenberger Hotel El Tahrir Cairo, on receiving the Agoda 2022 Gold Circle Award with review ratings of 9 on Agoda.`,
      linkPath: "/steigenberger-hotel-website",
      colorClass: "",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news-diving.jpg",
      date: "8",
      month: "DEC",
      year: "2022",
      title: "Diving World Sharm's website is now live",
      description: `We're proudly announcing that Diving World Sharm's website is now live and ready to be discovered by wonderful people far and wide!`,
      linkPath: "/diving-world-sharm",
      colorClass: "color2",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news-savoy.jpg",
      date: "6",
      month: "DEC",
      year: "2022",
      title: "launch of Asksuite at our prestigious partner Savoy Group Sharm El Sheikh",
      description: `We are thrilled to announce the launch of Asksuite at our prestigious partner Savoy Group Sharm El Sheikh website and social media channels.`,
      linkPath: "/savoy-sharm",
      colorClass: "color3",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      imageSrc: "assets/images/news-crystal.jpg",
      date: "1",
      month: "DEC",
      year: "2022",
      title: "Crystal Inn Hotel El Alamein Website Launched by T.I.T Solutions",
      description: `With honor and pleasure, we are sharing with you our new Website project launch for Crystal Inn Hotel El Alamein`,
      linkPath: "/crystal-inn-hotel",
      colorClass: "",
    },
    
  ];

  
  return (
    <>
      <Router basename="/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home blogPosts={blogPosts}/>} />
            <Route path="solutions" element={<Solutions />} />

            <Route
              path="website-development"
              element={<WebsiteDevelopment />}
            />
            <Route path="hotels-resorts" element={<HotelandResorts />} />
            <Route path="travel-tours" element={<TravelandTours />} />
            <Route path="nile-cruises" element={<NileCruises />} />
            <Route path="general-purposes" element={<GeneralPurposes />} />

            <Route path="booking-engine" element={<BookingEngine />} />
            <Route path="attraction-d-edge" element={<AttractionDEdge />} />
            <Route path="SynXis" element={<SynXis />} />
            <Route
              path="nile-cruise-booking-engine"
              element={<NileCruiseBookingEngine />}
            />

            <Route
              path="web-check-in-solution"
              element={<WebCheckInSolution />}
            />

            <Route path="services" element={<Services />} />

            <Route
              path="search-engine-marketing"
              element={<SearchEngineMarketing />}
            />
            <Route path="google-ads" element={<GoogleAds />} />
            <Route path="bing-ads" element={<BingAds />} />
            <Route path="yandex-ads" element={<YandexAds />} />

            <Route
              path="social-media-marketing"
              element={<SocialMediaMarketing />}
            />
            <Route path="facebook-ads" element={<FacebookAds />} />
            <Route path="instagram-ads" element={<InstagramAds />} />
            <Route path="snapchat-ads" element={<SnapchatAds />} />
            <Route path="vk-ads" element={<VKAds />} />
            <Route path="linkedin-ads" element={<LinkedInAds />} />

            <Route
              path="social-media-management"
              element={<SocialMediaManagement />}
            />
            <Route
              path="social-media-strategy"
              element={<SocialMediaStrategy />}
            />
            <Route
              path="social-media-posting"
              element={<SocialMediaPosting />}
            />
            <Route
              path="social-media-graphics"
              element={<SocialMediaGraphics />}
            />

            <Route path="hotel-e-commerce" element={<HotelECommerce />} />
            <Route
              path="e-commerce-consultancy"
              element={<ECommerceConsultancy />}
            />
            <Route
              path="e-commerce-management"
              element={<ECommerceManagement />}
            />

            <Route
              path="search-engine-optimization"
              element={<SearchEngineOptimization />}
            />

            <Route path="email-marketing" element={<EmailMarketing />} />
            <Route path="constant-contact" element={<ConstantContact />} />
            <Route
              path="manage-email-marketing"
              element={<ManageEmailMarketing />}
            />

            <Route path="reporting" element={<Reporting />} />
            <Route
              path="google-analytics-implementation"
              element={<GoogleAnalyticsImplementation />}
            />
            <Route
              path="digital-marketing-reporting"
              element={<DigitalMarketingReporting />}
            />
            <Route
              path="website-360-reporting"
              element={<Website360Reporting />}
            />

            <Route
              path="hospitality-photography"
              element={<HospitalityPhotography />}
            />
            <Route
              path="asksuite-hotel-chatbot"
              element={<AsksuiteHotelChatbot />}
            />
            <Route path="the-hotels-network" element={<TheHotelsNetwork />} />

            <Route path="services-details" element={<ServicesDetails />} />

            <Route path="d-edge" element={<DEdge />} />

            <Route
              path="central-reservation-system"
              element={<CentralReservationSystem />}
            />
            <Route
              path="booking-engine-for-hotel"
              element={<BookingEngineForHotel />}
            />
            <Route path="dedge-channel-manager" element={<ChannelManager />} />
            <Route
              path="d-edge-inventory-management"
              element={<CentralInventory />}
            />
            <Route path="gds-hotel-solutions" element={<GDSHotelSolutions />} />

            <Route path="guest-management" element={<GuestManagement />} />
            <Route path="hotel-crm" element={<HotelCRM />} />
            <Route path="guest-loyalty" element={<GuestLoyalty />} />
            <Route path="guest-feedback" element={<GuestFeedback />} />

            <Route path="data-intelligence" element={<DataIntelligence />} />
            <Route path="price-monitoring" element={<PriceMonitoring />} />
            <Route
              path="price-recommendation"
              element={<PriceRecommendation />}
            />
            <Route
              path="performance-analysis"
              element={<PerformanceAnalysis />}
            />

            <Route path="industries" element={<Solutions />} />
            <Route
              path="digital-marketing-agency-for-hotels-in-egypt"
              element={<DigitalMarketingHotels />}
            />
            <Route path="travel-agencies" element={<TravelAgencies />} />

            <Route path="about-us" element={<AboutUs />} />
            <Route path="clients" element={<OurClients />} />
            <Route path="portfolio" element={<Portfolio />} />

            <Route path="news" element={<News blogPosts={blogPosts} />} />
            <Route
              path="google-premier-partner-2024"
              element={<GooglePremierPartner blogPosts={blogPosts} />}
            />
            <Route
              path="dubai-hotel-show"
              element={<DubaiHotelShow blogPosts={blogPosts} />}
            />
            <Route
              path="riyadh-travel-fair-2024"
              element={<RiyadhTravelFair blogPosts={blogPosts} />}
            />
            <Route
              path="atm-dubai-2024"
              element={<ATMDubai blogPosts={blogPosts} />}
            />
            <Route
              path="travco-group"
              element={<Travco blogPosts={blogPosts} />}
            />
            <Route
              path="cleopark-owned-by-sharm"
              element={<CleoPark blogPosts={blogPosts} />}
            />
            <Route
              path="partners-with-duetto-software"
              element={<Duetto blogPosts={blogPosts} />}
            />
            <Route
              path="let-s-meet-in-berlin!"
              element={<Berlin blogPosts={blogPosts} />}
            />
            <Route
              path="discover-chrismar-travel"
              element={<ChrismarTravel blogPosts={blogPosts} />}
            />
            <Route
              path="tawila-island"
              element={<TawilaIsland blogPosts={blogPosts} />}
            />
            <Route
              path="participating-in-the-arabian-travel-market-atm"
              element={<ArabianTravelMarket blogPosts={blogPosts} />}
            />
            <Route
              path="partook-kwentra"
              element={<PartookKwentra blogPosts={blogPosts} />}
            />
            <Route
              path="news-kashir"
              element={<KashierPaymentSolutions blogPosts={blogPosts} />}
            />
            <Route
              path="google-premier-2023"
              element={<GooglePremierPartner2023 blogPosts={blogPosts} />}
            />
            <Route
              path="utopia-beach-hotels"
              element={<UtopiaBeachHotels blogPosts={blogPosts} />}
            />
            <Route
              path="slice-and-dice-egypt"
              element={<SliceandDice blogPosts={blogPosts} />}
            />
            <Route path="regal-heights-hotel" element={<RegalHeightsHotel blogPosts={blogPosts} />}/>
            <Route path="regal-hotel-website" element={<RegalHotelWebsite blogPosts={blogPosts} />}/>
            <Route path="steigenberger-hotel-website" element={<SteigenbergerHotel blogPosts={blogPosts} />}/>
            <Route path="diving-world-sharm" element={<DivingWorldSharm blogPosts={blogPosts} />}/>
            <Route path="savoy-sharm" element={<SavoySharm blogPosts={blogPosts} />}/>
            <Route path="crystal-inn-hotel" element={<CrystalInnHotel blogPosts={blogPosts} />}/>

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
