import React, { useEffect, useRef, useState } from "react";

import { Alert, Snackbar, useMediaQuery } from "@mui/material";
import OwlCarousel from "react-owl-carousel2";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import { speed } from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faDownload,
  faFilePdf,
  faMapLocationDot,
  faShieldHeart,
  faUser,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const clients = [
  {
    src: "https://titegypt.com/images/uploads/clients/logo-travco.png",
    alt: "Travco",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/WingsTravel.png",
    alt: "Wings Travel",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/logo-chrismar.png",
    alt: "Chrismar",
  },
  {
    src: "https://titegypt.com/images/uploads/new-logos/TravelSector/Agazat-Club-USA.svg",
    alt: "Agazat Club USA",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/tattravel.png",
    alt: "TAT Travel",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/logo-clavie.png",
    alt: "Clavie",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/vacations.png",
    alt: "Vacations",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/timetotravel.png",
    alt: "Time to Travel",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/AlQasemTravel.png",
    alt: "Al Qasem Travel",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/falconadventure.png",
    alt: "Falcon Adventure",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/EgyptFantastictours.png",
    alt: "Egypt Fantastic Tours",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/Interconti.png",
    alt: "Interconti",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/AlexandriaAirlines.png",
    alt: "Alexandria Airlines",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/meetingpoint.png",
    alt: "Meeting Point",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/WingsGroup.png",
    alt: "Wings Group",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/EasyTrav.png",
    alt: "Easy Trav",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/logo-idnc.png",
    alt: "IDNC",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/vivaegypttravel.png",
    alt: "Viva Egypt Travel",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/Egypthappytours.png",
    alt: "Egypt Happy Tours",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/EgyptianJou.png",
    alt: "Egyptian Jou",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/myegyptianguide.png",
    alt: "My Egyptian Guide",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/RoyaleEgypt.png",
    alt: "Royale Egypt",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/almasreya.png",
    alt: "Al Masreya",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/loveegypttours.png",
    alt: "Love Egypt Tours",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/CoralDiving.png",
    alt: "Coral Diving",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/atravel.png",
    alt: "A Travel",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/FlyingCarpet.png",
    alt: "Flying Carpet",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/flymisr.png",
    alt: "Fly Misr",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/EgyptTravelMarket.png",
    alt: "Egypt Travel Market",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/dominant.png",
    alt: "Dominant",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/tegotours.png",
    alt: "Tego Tours",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/worldsharm.png",
    alt: "World Sharm",
  },
  { src: "https://titegypt.com/images/uploads/clients/deal.png", alt: "Deal" },
  {
    src: "https://titegypt.com/images/uploads/clients/YourEgyptTours.png",
    alt: "Your Egypt Tours",
  },
];
const otherss = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const others = [
  {
    src: "https://titegypt.com/images/uploads/clients/logo-alduadev.png",
    alt: "Alduadev",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/darelkhebra.png",
    alt: "Darelkhebra",
  },
  { src: "https://titegypt.com/images/uploads/clients/cne.png", alt: "CNE" },
  {
    src: "https://titegypt.com/images/uploads/clients/logo-sally.png",
    alt: "Sally",
  },
  { src: "https://titegypt.com/images/uploads/clients/logo-dc.png", alt: "DC" },
  {
    src: "https://titegypt.com/images/uploads/clients/treehr.png",
    alt: "Tree HR",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/mohamedsobhi.png",
    alt: "Mohamed Sobhi",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/cairoCosmo.png",
    alt: "Cairo Cosmo",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/acipd.png",
    alt: "ACIPD",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/irent.png",
    alt: "IRent",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/curegroup.png",
    alt: "Cure Group",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/technosteel.png",
    alt: "Technosteel",
  },
  {
    src: "https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/dhara-events-hospitality-logo.svg",
    alt: "Dhara Events Hospitality",
  },
  {
    src: "https://titegypt.com/images/uploads/new-logos/Others/PROCHAMP.svg",
    alt: "ProChamp",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/logo-slice.png",
    alt: "Slice",
  },
  {
    src: "https://titegypt.com/images/uploads/clients/logo-worldstone.png",
    alt: "Worldstone",
  },
];
const OurClients = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  return (
    <>
      {/* Banner */}
      <div className="breatcome_area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner pb-2">
                  <h2>Our Clients</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>{" "}
                      <i className="fa fa-angle-right"></i>{" "}
                      <span>Our Clients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flipbox_area pages pt-85  ">
        <div className="container">
          <div className="row">
            <div className="section_title text_center ">
              <div className="section_sub_title uppercase mb-3">
                <h6>T.I.T Solutions</h6>
              </div>
              <div className="section_main_title">
                <h1> Our Profile</h1>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>{" "}
                <div>
                  <p>
                    We take pride in offering a great range of digital marketing
                    and IT services while working with these respectful brands
                    that we consider partners in success, not just clients!
                  </p>
                  <div className="slider_button mx-auto   ml-130">
                    <div className="button">
                      <a
                        className="active"
                        target="_blank"
                        href="/T.I.TSolutions-Company-Brief Profile-Hospitality-Services.pdf"
                      >
                        Download{" "}
                        <FontAwesomeIcon icon={faFilePdf} className="pl-10" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/*portfolio */}
      <section className="portfolio  pb-70" id="clients">
        <div className="container">
          <div className="section_title text_center mb-55">
            <div className="section_sub_title uppercase mb-3">
              <h6>Our Portfolio</h6>
            </div>
            <div className="section_main_title">
              <h1>Hospitality Sector</h1>
            </div>
            <div className="em_bar">
              <div className="em_bar_bg"></div>
            </div>
          </div>

          <div className="row lap" style={{ justifyContent: "center" }}>
            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/SAVOY-GP-SHARM.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/ROYAL-SAVOY-SHARM.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/SAVOY-SHARM.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/sierra-sharm.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/clients/GrandOasis.png"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/clients/soho.png"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/CLEOPATRA-Sharm-Aquarium-logo.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/TAHRIR.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/NILE-PALACE.svg"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/STALCAZAR-SHARM-ELSHEIKH.svg"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/STCECIL-ALEXANDRIA.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/JAZ-HOTELS.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/Pickalbatros.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/coralsea.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/REGAL-HEIGHTS.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/CRYSTALINN.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/BENBEN.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/SULTAN-GARDENS.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/STELLA-GARDENS.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/clients/Ractus.png"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/UTOPIA.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/clients/braykaresorts.png"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/OLD-PALACE-RESORT.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/FORTE-ARABESQUE.svg"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/clients/Logo-plereve.png"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/clients/logo-jasmin.png"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/clients/nilebreeze.png"
                alt=""
              />
            </div>
            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/dhara-hospitality-logo.svg"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/abchotels.svg"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/clients/sharmdream.png"
                alt=""
              />
            </div>
            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/clients/fayrouz.png"
                alt=""
              />
            </div>
            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/clients/coralresort.png"
                alt=""
              />
            </div>
            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/clients/villa.png"
                alt=""
              />
            </div>
            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/new-logos/Hospitality-Sector/Historia.svg"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="col-4 col-md-2 col-xs-6">
              <img
                src="https://titegypt.com/images/uploads/clients/logo-promenade.png"
                className="img-responsive"
                alt=""
              />
            </div>
          </div>
          <div className="section_title text_center pt-50 mb-55">
            <div className="section_main_title">
              <h1>Travel Sector</h1>
            </div>
            <div className="em_bar">
              <div className="em_bar_bg"></div>
            </div>
          </div>
          <div className="row lap" style={{ justifyContent: "center" }}>
            {clients.map((client, index) => (
              <div key={index} className="col-4 col-md-2 col-xs-6">
                <div>
                  <img src={client.src} alt={client.alt} />
                </div>
              </div>
            ))}
          </div>
          <div className="section_title text_center pt-50 mb-55">
            <div className="section_main_title">
              <h1>Others</h1>
            </div>
            <div className="em_bar">
              <div className="em_bar_bg"></div>
            </div>
          </div>
          <div className="row lap" style={{ justifyContent: "center" }}>
            {others.map((client, index) => (
              <div key={index} className="col-4 col-md-2 col-xs-6">
                <div>
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="img-responsive"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClients;
