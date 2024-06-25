import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Loader from "./../Loader";
import { useMediaQuery } from "@mui/material";
import { slide as Menu } from "react-burger-menu";
import "./header.css";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:767px)");
  //const isTablet = useMediaQuery("(max-width:1024px)");
  const handleMenuStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const handleLinkClick = (e) => {
    console.log(e.target.classList.contains("fa"));
    if (!e.target.classList.contains("fa")) {
      setMenuOpen(false);
      setLoading(true);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the scroll threshold as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [loading]);

  const [showSubMenu, setShowSubMenu] = useState({});

  const toggleSubMenu = (menuKey) => {
    setShowSubMenu((prev) => ({
      
      [menuKey]: !prev[menuKey],
    }));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/*Header*/}
          <div className="header_top_menu pt-2 pb-2 bg_color">
            <div className="container-fluid">
              <div className="row px-5">
                <div className="col-lg-8 col-sm-8">
                  <div className="header_top_menu_address">
                    <div className="header_top_menu_address_inner">
                      <ul>
                        <li>
                          <Link
                            onClick={() => setLoading(true)}
                            to="mailto:info@titegypt.com"
                          >
                            <i className="fa fa-envelope-o"></i>
                            info@titegypt.com
                          </Link>
                        </li>
                        <li>
                          <Link to="#.">
                            <i className="fa fa-clock-o"></i>Sun to Thu 09:00 -
                            17:00
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="header_top_menu_icon">
                    <div className="header_top_menu_icon_inner">
                      <ul>
                        <li>
                          <Link to="#." target="_blank">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#." target="_blank">
                            <FontAwesomeIcon
                              icon={faXTwitter}
                              className="fa fa-twitter"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="#." target="_blank">
                            <i className="fa fa-pinterest"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#." target="_blank">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nav*/}
          {isMobile ? (
            <> 
              <div
                id="sticky-header"
                className={`techno_nav_manu ${isSticky ? "sticky" : ""}`}
              >
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="menu">
                      <Link
                        to="/"
                        className="logo"
                        onClick={(e) => handleLinkClick(e)}
                      >
                        <img
                          className="down"
                          src="logo-header.png"
                          alt="Logo"
                        />
                        <img
                          className="main_sticky"
                          src="logo-header-white.png"
                          alt="Sticky Logo"
                        />
                      </Link>
                      {/*<Typical
          steps={["TIT Solutions", 1000, "TIT Solutions", 500]}
          loop={Infinity}
          wrapper="h2"
          className="typical-text"
        /> <FontAwesomeIcon icon={faBars} /> */}

                      <Menu
                        right
                        isOpen={isMenuOpen}
                        onStateChange={handleMenuStateChange}
                      >
                        <ul className="clearfix">
                          <li>
                            <Link to="/" onClick={(e) => handleLinkClick(e)}>
                              Home
                            </Link>
                          </li>
                          <li className="solutions">
                            <Link onClick={(e) => handleLinkClick(e)} to="/solutions">
                              Solutions <i className="fa fa-angle-down"></i>
                            </Link>
                            <ul className="normal-sub">
                              <li>
                                <Link
                                  to="/solutions/website-development"
                                  onClick={(e) => handleLinkClick(e)}
                                >
                                  <h5 className="text-center my-3 text-hover custom-h5">
                                    Website Development
                                  </h5>
                                </Link>
                                <ul>
                                  <li>
                                    <Link
                                      to="/solutions/website-development/hotels-resorts"
                                      onClick={(e) => handleLinkClick(e)}
                                    >
                                      Hotels & Resorts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/solutions/website-development/travel-tours"
                                      onClick={(e) => handleLinkClick(e)}
                                    >
                                      Travel & Tours
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/solutions/website-development/nile-cruises"
                                      onClick={(e) => handleLinkClick(e)}
                                    >
                                      Nile Cruises
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/solutions/website-development/general-purposes"
                                      onClick={(e) => handleLinkClick(e)}
                                    >
                                      General Purpose
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link
                                  className="text-lg-center"
                                  to="/solutions/booking-engine"
                                  onClick={(e) => handleLinkClick(e)}
                                >
                                  <h5 className="text-center my-3 text-hover custom-h5">
                                    Booking Engine
                                  </h5>
                                </Link>
                                <ul>
                                  <li>
                                    <Link
                                      to="/solutions/booking-engine/attraction-d-edge"
                                      onClick={(e) => handleLinkClick(e)}
                                    >
                                      Attraction D-Edge
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/solutions/booking-engine/SynXis"
                                      onClick={(e) => handleLinkClick(e)}
                                    >
                                      SynXis
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/solutions/booking-engine/nile-cruise-booking-engine"
                                      onClick={(e) => handleLinkClick(e)}
                                    >
                                      Nile Cruise Booking Engine
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <h5 className="text-lg-center custom-h5-1">
                                  Web Check-In Solution
                                </h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="/solutions/web-check-in-solution"
                                      onClick={(e) => handleLinkClick(e)}
                                    >
                                      Web Check-In Solution
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link
                              to="/services"
                              onClick={(e) => handleLinkClick(e)}
                            >
                              Service <i className="fa fa-angle-down"></i>
                            </Link>

                            <ul className="normal-sub">
                              <li className="position-relative">
                                <Link
                                  onClick={() => toggleSubMenu("sem")}
                                  className="d-flex justify-content-between align-items-center disabled"
                                >
                                  Search Engine Marketing
                                  {showSubMenu.sem ? (
                                    <i className="fa fa-caret-down"></i>
                                  ) : (
                                    <i className="fa fa-caret-right"></i>
                                  )}
                                </Link>
                                {showSubMenu.sem && (
                                  <ul className="sub-sub-menu position-relative">
                                    <li>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/search-engine-marketing/google-ads"
                                      >
                                        Google Ads
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/search-engine-marketing/bing-ads"
                                      >
                                        Bing Ads
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/search-engine-marketing/yandex-ads"
                                      >
                                        Yandex Ads
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>

                              <li className="position-relative">
                                <Link
                                  onClick={() => toggleSubMenu("smm")}
                                  className="d-flex justify-content-between align-items-center disabled"
                                >
                                  Social Media Marketing
                                  {showSubMenu.smm ? (
                                    <i className="fa fa-caret-down"></i>
                                  ) : (
                                    <i className="fa fa-caret-right"></i>
                                  )}
                                </Link>
                                {showSubMenu.smm && (
                                  <ul className="sub-sub-menu position-relative">
                                    <li>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/social-media-marketing/facebook-ads"
                                      >
                                        Facebook Ads
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/social-media-marketing/instagram-ads"
                                      >
                                        Instagram Ads
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/social-media-marketing/snapchat-ads"
                                      >
                                        Snapchat Ads
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/social-media-marketing/vk-ads"
                                      >
                                        Vk Ads
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/social-media-marketing/linkedin-ads"
                                      >
                                        Linkedin Ads
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>

                              <li className="position-relative">
                                <Link
                                  onClick={() => toggleSubMenu("smm1")}
                                  className="d-flex justify-content-between align-items-center disabled"
                                >
                                  Social Media Management
                                  {showSubMenu.smm1 ? (
                                    <i className="fa fa-caret-down"></i>
                                  ) : (
                                    <i className="fa fa-caret-right"></i>
                                  )}
                                </Link>
                                {showSubMenu.smm1 && (
                                  <ul className="sub-sub-menu position-relative">
                                    <li>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/social-media-management/social-media-strategy"
                                      >
                                        Social Media Strategy
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/social-media-management/social-media-posting"
                                      >
                                        Social Media Posting
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/social-media-management/social-media-graphics"
                                      >
                                        Social Media Graphics
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>

                              <li className="position-relative">
                                <Link
                                  onClick={() => toggleSubMenu("hec")}
                                  className="d-flex justify-content-between align-items-center disabled"
                                >
                                  Hotel E-Commerce
                                  {showSubMenu.hec ? (
                                    <i className="fa fa-caret-down"></i>
                                  ) : (
                                    <i className="fa fa-caret-right"></i>
                                  )}
                                </Link>
                                {showSubMenu.hec && (
                                  <ul className="sub-sub-menu position-relative">
                                    <li>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/hotel-e-commerce/e-commerce-consultancy"
                                      >
                                        E-Commerce Consultancy
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/hotel-e-commerce/e-commerce-management"
                                      >
                                        E-Commerce Management
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>

                              <li>
                                <Link
                                  onClick={(e) => handleLinkClick(e)}
                                  to="/services/search-engine-optimization"
                                >
                                  Search Engine Optimization
                                </Link>
                              </li>

                              <li className="position-relative">
                                <Link
                                  onClick={() => toggleSubMenu("em")}
                                  className="d-flex justify-content-between align-items-center disabled"
                                >
                                 Email Marketing
                                  {showSubMenu.em ? (
                                    <i className="fa fa-caret-down"></i>
                                  ) : (
                                    <i className="fa fa-caret-right"></i>
                                  )}
                                </Link>
                                {showSubMenu.em && (
                                  <ul className="sub-sub-menu position-relative">
                                    <li>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/email-marketing/constant-contact"
                                      >
                                        Constant Contact
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/email-marketing/manage-email-marketing"
                                      >
                                        Manage Email Marketing
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>

                              <li className="position-relative">
                                <Link
                                  onClick={() => toggleSubMenu("rep")}
                                  className="d-flex justify-content-between align-items-center text-black"
                                >
                                Reporting
                                  {showSubMenu.rep ? (
                                    <i className="fa fa-caret-down"></i>
                                  ) : (
                                    <i className="fa fa-caret-right"></i>
                                  )}
                                </Link>
                                {showSubMenu.rep && (
                                  <ul className="sub-sub-menu position-relative">
                                    <li>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/reporting/google-analytics-implementation"
                                      >
                                        Google Analytics Implementation
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/reporting/digital-marketing-reporting"
                                      >
                                        Digital Marketing Reporting
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/services/reporting/website-360-reporting"
                                      >
                                        Website 360 Reporting
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <Link  onClick={(e) => handleLinkClick(e)} to="/services/hospitality-photography">
                                  Hospitality Photography
                                </Link>
                              </li>
                              <li>
                                <Link  onClick={(e) => handleLinkClick(e)} to="/services/asksuite-hotel-chatbot">
                                  Asksuite Hotel Chatbot
                                </Link>
                              </li>
                              <li>
                                <Link  onClick={(e) => handleLinkClick(e)} to="/services/the-hotels-network">
                                  The Hotels Network
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              to="/d-edge"
                              onClick={(e) => handleLinkClick(e)}
                            >
                              D-EDGE Solutions{" "}
                              <i className="fa fa-angle-down"></i>
                            </Link>
                            <ul className="normal-sub">
                            <li className="position-relative">
                                <Link
                                  onClick={() => toggleSubMenu("crs")}
                                  className="d-flex justify-content-between align-items-center disabled"
                                >
                                 Central Reservation System
                                  {showSubMenu.crs ? (
                                    <i className="fa fa-caret-down"></i>
                                  ) : (
                                    <i className="fa fa-caret-right"></i>
                                  )}
                                </Link>
                                {showSubMenu.crs && (
                                  <ul className="sub-sub-menu position-relative">
                                    <li>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/d-edge/central-reservation-system/booking-engine-for-hotel"
                                      >
                                        Booking Engine
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/d-edge/central-reservation-system/dedge-channel-manager"
                                      >
                                        Channel Manager
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/d-edge/central-reservation-system/d-edge-inventory-management"
                                      >
                                        Central Inventory
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/d-edge/central-reservation-system/gds-hotel-solutions"
                                      >
                                        Gds Hotel Solutions
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>
                              <li className="position-relative">
                                <Link
                                  onClick={() => toggleSubMenu("gms")}
                                  className="d-flex justify-content-between align-items-center disabled"
                                >
                                 Guest Management System
                                  {showSubMenu.gms ? (
                                    <i className="fa fa-caret-down"></i>
                                  ) : (
                                    <i className="fa fa-caret-right"></i>
                                  )}
                                </Link>
                                {showSubMenu.gms && (
                                  <ul className="sub-sub-menu position-relative">
                                    <li>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/d-edge/guest-management/hotel-crm"
                                      >
                                        Hotel CRM
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/d-edge/guest-management/guest-loyalty"
                                      >
                                        Guest Loyalty
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/d-edge/guest-management/guest-feedback"
                                      >
                                        Guest Feedback
                                      </Link>
                                     
                                    </li>
                                  </ul>
                                )}
                              </li>

                              <li className="position-relative">
                                <Link
                                  onClick={() => toggleSubMenu("di")}
                                  className="d-flex justify-content-between align-items-center disabled"
                                >
                                 Data Intelligence
                                  {showSubMenu.di ? (
                                    <i className="fa fa-caret-down"></i>
                                  ) : (
                                    <i className="fa fa-caret-right"></i>
                                  )}
                                </Link>
                                {showSubMenu.di && (
                                  <ul className="sub-sub-menu position-relative">
                                    <li>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/d-edge/data-intelligence/price-monitoring"
                                      >
                                        Price Monitoring
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/d-edge/data-intelligence/price-recommendation"
                                      >
                                        Price Recommendation
                                      </Link>
                                      <Link
                                        onClick={(e) => handleLinkClick(e)}
                                        to="/d-edge/data-intelligence/performance-analysis"
                                      >
                                        Performance Analysis
                                      </Link>
                                     
                                    </li>
                                  </ul>
                                )}
                              </li>
                              
                            </ul>
                          </li>
                          <li>
                            <Link
                              to="/industries"
                              onClick={(e) => e.preventDefault()}
                            >
                              INDUSTRIES <i className="fa fa-angle-down"></i>
                            </Link>
                            <ul className="normal-sub">
                              <li>
                                <Link onClick={(e) => handleLinkClick(e)} to="/industries/digital-marketing-agency-for-hotels-in-egypt">
                                  Hotels & Resorts
                                </Link>
                              </li>
                              <li>
                                <Link onClick={(e) => handleLinkClick(e)} to="/industries/travel-agencies">
                                  Travel Companies
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link  onClick={(e) => e.preventDefault()}>
                              About Us <i className="fa fa-angle-down"></i>
                            </Link>
                            <ul className="normal-sub">
                              <li>
                                <Link
                                  to="/about-us"
                                  onClick={(e) => handleLinkClick(e)}
                                >
                                  About Us
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/clients"
                                  onClick={(e) => handleLinkClick(e)}
                                >
                                  Our Clients
                                </Link>
                              </li>
                              <li>
                                <Link onClick={(e) => handleLinkClick(e)} to="/portfolio">Portfolio</Link>
                              </li>
                              <li>
                                <Link
                                  to="/news"
                                  onClick={(e) => handleLinkClick(e)}
                                >
                                  Our News
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              to={`https://support.titegypt.com/?_gl=1*1x0dzt6*_gcl_au*MjA5NzA2MDE1NC4xNzEwODA2OTcz`}
                              target="_blank"
                              title="T.I.T Support"
                            >
                              Support
                            </Link>
                          </li>
                          <li>
                            <Link to="contact-us" onClick={(e) => handleLinkClick(e)}>
                              Contact Us
                            </Link>
                          </li>
                          <div className="donate-btn-header">
                            <Link className="dtbtn" to="tel:(+20)1000972210">
                              <i className="fa fa-phone"></i> (+20)1000972210
                            </Link>
                          </div>
                        </ul>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                id="sticky-header"
                className={`techno_nav_manu d-md-none d-lg-block d-sm-none d-none ${
                  isSticky ? "sticky" : ""
                }`}
              >
                <div className="px-0">
                  <div className="row align-items-center">
                    <div className="menu">
                      <Link
                        to="/"
                        className="logo"
                        onClick={() => setLoading(true)}
                      >
                        <img className="down" src="logo-header.png" alt="" />
                        <img
                          className="main_sticky"
                          src="logo-header-white.png"
                          alt=""
                        />
                      </Link>
                      <ul className="clearfix">
                        <li>
                          <Link to="/" onClick={() => setLoading(true)}>
                            Home
                          </Link>
                        </li>
                        <li className="solutions">
                          <Link
                            to="/solutions"
                            onClick={() => setLoading(true)}
                          >
                            Solutions <i className="fa fa-angle-down"></i>
                          </Link>
                          <ul className="row justify-content-between align-items-top">
                            <li>
                              <ul className="text-center">
                                <li>
                                  <Link
                                    to="/solutions/website-development"
                                    onClick={() => setLoading(true)}
                                    
                                  >
                                    <h5 className="text-center my-3 text-hover custom-h5">
                                      Website Development
                                    </h5>
                                  </Link>
                                </li>

                                <li className="text-center">
                                  <Link
                                    onClick={() => setLoading(true)}
                                    className="text-lg-center"
                                    to="/solutions/website-development/hotels-resorts"
                                  >
                                    Hotel & Resorts
                                  </Link>
                                </li>
                                <li className="text-center">
                                  <Link
                                    onClick={() => setLoading(true)}
                                    className="text-lg-center"
                                    to="/solutions/website-development/travel-tours"
                                  >
                                    Travel & Tours
                                  </Link>
                                </li>
                                <li className="text-center">
                                  <Link
                                    onClick={() => setLoading(true)}
                                    className="text-lg-center"
                                    to="/solutions/website-development/nile-cruises"
                                  >
                                    Nile Cruises
                                  </Link>
                                </li>
                                <li className="text-center">
                                  <Link
                                    onClick={() => setLoading(true)}
                                    className="text-lg-center"
                                    to="/solutions/website-development/general-purposes"
                                  >
                                    General Purpose
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <ul className="text-center">
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    className="text-lg-center"
                                    to="solutions/booking-engine"
                                  >
                                    <h5 className="text-center my-3 text-hover  custom-h5">
                                      Booking Engine
                                    </h5>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    className="text-lg-center"
                                    to="/solutions/booking-engine/attraction-d-edge"
                                  >
                                    Attraction D-Edge
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    className="text-lg-center"
                                    to="/solutions/booking-engine/SynXis"
                                  >
                                    SynXis
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    className="text-lg-center"
                                    to="/solutions/booking-engine/nile-cruise-booking-engine"
                                  >
                                    Nile Cruise Booking Engine
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <li>
                                  <h5 className="text-center my-3 custom-h5-1">
                                    Web Check-In Solution
                                  </h5>
                                </li>

                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    className="text-lg-center"
                                    to="solutions/web-check-in-solution"
                                  >
                                    Web Check-In Solution
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-dropdown-icon">
                          <Link to="/services" onClick={() => setLoading(true)}>
                            Service <i className="fa fa-angle-down"></i>
                          </Link>
                          <ul className="normal-sub">
                            <li className="position-relative">
                              <Link
                                onClick={() => setLoading(true)}
                                className="d-flex justify-content-between align-items-center"
                                to="/services/search-engine-marketing"
                              >
                                Search Engine Marketing
                                <i className="fa fa-caret-right"></i>
                              </Link>

                              <ul className="sub-sub-menu">
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/search-engine-marketing/google-ads"
                                  >
                                    Google Ads
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/search-engine-marketing/bing-ads"
                                  >
                                    Bing Ads
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/search-engine-marketing/yandex-ads"
                                  >
                                    Yandex Ads
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className="position-relative">
                              <Link
                                onClick={() => setLoading(true)}
                                className="d-flex justify-content-between align-items-center"
                                to="/services/social-media-marketing"
                              >
                                Social Media Marketing
                                <i className="fa fa-caret-right"></i>
                              </Link>

                              <ul className="sub-sub-menu">
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/social-media-marketing/facebook-ads"
                                  >
                                    Facebook Ads
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/social-media-marketing/instagram-ads"
                                  >
                                    Instagram Ads
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/social-media-marketing/snapchat-ads"
                                  >
                                    Snapchat Ads
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/social-media-marketing/vk-ads"
                                  >
                                    VK Ads
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/social-media-marketing/linkedin-ads"
                                  >
                                    LinkedIn Ads
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className="position-relative">
                              <Link
                                onClick={() => setLoading(true)}
                                className="d-flex justify-content-between align-items-center"
                                to="/services/social-media-management"
                              >
                                Social Media Management
                                <i className="fa fa-caret-right"></i>
                              </Link>
                              <ul className="sub-sub-menu">
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/social-media-management/social-media-strategy"
                                  >
                                    Social Media Strategy
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/social-media-management/social-media-posting"
                                  >
                                    Social Media Posting
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/social-media-management/social-media-graphics"
                                  >
                                    Social Media Graphics
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="position-relative">
                              <Link
                                onClick={() => setLoading(true)}
                                className="d-flex justify-content-between align-items-center"
                                to="/services/hotel-e-commerce"
                              >
                                Hotel E-Commerce
                                <i className="fa fa-caret-right"></i>
                              </Link>
                              <ul className="sub-sub-menu">
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/hotel-e-commerce/e-commerce-consultancy"
                                  >
                                    E-Commerce Consultancy
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/hotel-e-commerce/e-commerce-management"
                                  >
                                    E-Commerce Management
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link
                                onClick={() => setLoading(true)}
                                to="/services/search-engine-optimization"
                              >
                                Search Engine Optimization
                              </Link>
                            </li>
                            <li className="position-relative">
                              <Link
                                onClick={() => setLoading(true)}
                                className="d-flex justify-content-between align-items-center"
                                to="/services/email-marketing"
                              >
                                Email Marketing
                                <i className="fa fa-caret-right"></i>
                              </Link>

                              <ul className="sub-sub-menu">
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/email-marketing/constant-contact"
                                  >
                                    Constant Contact
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/email-marketing/manage-email-marketing"
                                  >
                                    Manage Email Marketing
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="position-relative">
                              <Link
                                onClick={() => setLoading(true)}
                                className="d-flex justify-content-between align-items-center"
                                to="/services/reporting"
                              >
                                Reporting
                                <i className="fa fa-caret-right"></i>
                              </Link>

                              <ul className="sub-sub-menu">
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/reporting/google-analytics-implementation"
                                  >
                                    Google Analytics Implementation
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/reporting/digital-marketing-reporting"
                                  >
                                    Digital Marketing Reporting
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/services/reporting/website-360-reporting"
                                  >
                                    Website 360 Reporting
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link
                                onClick={() => setLoading(true)}
                                to="/services/hospitality-photography"
                              >
                                Hospitality Photography
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => setLoading(true)}
                                to="/services/asksuite-hotel-chatbot"
                              >
                                Asksuite Hotel Chatbot
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => setLoading(true)}
                                to="/services/the-hotels-network"
                              >
                                The Hotels Network
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-dropdown-icon">
                          <Link to="/d-edge" onClick={() => setLoading(true)}>
                            D-EDGE Solutions{" "}
                            <i className="fa fa-angle-down"></i>
                          </Link>
                          <ul className="normal-sub">
                            <li className="position-relative">
                              <Link
                                onClick={() => setLoading(true)}
                                className="d-flex justify-content-between align-items-center"
                                to="/d-edge/central-reservation-system"
                              >
                                Central Reservation System
                                <i className="fa fa-caret-right"></i>
                              </Link>

                              <ul className="sub-sub-menu">
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/d-edge/central-reservation-system/booking-engine-for-hotel"
                                  >
                                    Booking Engine
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/d-edge/central-reservation-system/dedge-channel-manager"
                                  >
                                    Channel Manager
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/d-edge/central-reservation-system/d-edge-inventory-management"
                                  >
                                    Central Inventory
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/d-edge/central-reservation-system/gds-hotel-solutions"
                                  >
                                    GDS Solutions
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className="position-relative">
                              <Link
                                onClick={() => setLoading(true)}
                                className="d-flex justify-content-between align-items-center"
                                to="/d-edge/guest-management"
                              >
                                Guest Management
                                <i className="fa fa-caret-right"></i>
                              </Link>

                              <ul className="sub-sub-menu">
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/d-edge/guest-management/hotel-crm"
                                  >
                                    Hotel CRM
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/d-edge/guest-management/guest-loyalty"
                                  >
                                    Guest Loyalty
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/d-edge/guest-management/guest-feedback"
                                  >
                                    Guest Feedback
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className="position-relative">
                              <Link
                                onClick={() => setLoading(true)}
                                className="d-flex justify-content-between align-items-center"
                                to="/d-edge/data-intelligence"
                              >
                                Data Intelligence
                                <i className="fa fa-caret-right"></i>
                              </Link>

                              <ul className="sub-sub-menu">
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/d-edge/data-intelligence/price-monitoring"
                                  >
                                    Price Monitoring
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/d-edge/data-intelligence/price-recommendation"
                                  >
                                    Price Recommendation
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={() => setLoading(true)}
                                    to="/d-edge/data-intelligence/performance-analysis"
                                  >
                                    Performance Analysis
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-dropdown-icon">
                          <Link
                            to="/industries"
                            onClick={() => setLoading(true)}
                          >
                            Industries <i className="fa fa-angle-down"></i>
                          </Link>
                          <ul className="normal-sub">
                            <li>
                              <Link onClick={() => setLoading(true)} to="/industries/digital-marketing-agency-for-hotels-in-egypt">
                                Hotels & Resorts
                              </Link>
                            </li>
                            <li>
                              <Link onClick={() => setLoading(true)} to="/industries/travel-agencies">
                                Travel Companies
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-dropdown-icon">
                          <Link>
                            About Us <i className="fa fa-angle-down"></i>
                          </Link>
                          <ul className="normal-sub">
                            <li>
                              <Link
                                to="/about-us"
                                onClick={() => setLoading(true)}
                              >
                                About Us
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/clients"
                                onClick={() => setLoading(true)}
                              >
                                Our Clients
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/portfolio"
                                onClick={() => setLoading(true)}
                              >
                                Portfolio
                              </Link>
                            </li>
                            <li>
                              <Link to="/news" onClick={() => setLoading(true)}>
                                Our News
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link
                            to={`https://support.titegypt.com/?_gl=1*1x0dzt6*_gcl_au*MjA5NzA2MDE1NC4xNzEwODA2OTcz`}
                            target="_blank"
                            title="T.I.T Support"
                          >
                            Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="contact-us"
                            onClick={() => setLoading(true)}
                          >
                            Contact Us
                          </Link>
                        </li>

                        <div className="donate-btn-header mr-5">
                          <Link className="dtbtn" to="tel:(+20)1000972210">
                            <i className="fa fa-phone mr-2"></i> (+20)1000972210
                          </Link>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <Outlet />
          {/*Footer*/}
          <footer
            style={{
              backgroundImage: "url(assets/images/slider/slider14.jpg)",
              backgroundAttachment: `fixed`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="subscribe_area pb-45  pt-45 ">
              <div className="container">
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8">
                    <div className="single_subscribe_contact">
                      <div className="subscribe_content_title white text_center pb-30">
                        <h2>Subscribe Our Newsletter</h2>
                      </div>
                      <form action="#">
                        <div className="subscribe_form">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            required
                            data-error="Please enter your email"
                            placeholder="Enter Your Email"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                        <div className="subscribe_form_send">
                          <button type="submit" className="btn">
                            Subscribe
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                          <div className="clearfix"></div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-2"></div>
                </div>
              </div>
            </div>
            <div className="footer-bottom container"></div>
            <div className=" pt-45 ">
              <div className="container">
                {" "}
                <div className="row ">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="widget widgets-company-info">
                      <div className="footer-bottom-logo pb-40 ">
                        <img
                          src="logo-header-white.png"
                          className="ml-0 pl-0"
                          alt=""
                        />
                      </div>
                      <div className="company-info-desc">
                        <p>
                          Condimentum rhoncus, sem quam semper libero, sit amet
                          adipiscing sem neque sed ipsum. Nam quam nunc, blandit
                          vel, luctus.
                        </p>
                      </div>
                      <div className="follow-company-info pt-3">
                        <div className="follow-company-text mr-3">
                          <Link to="#.">
                            <p>Follow Us</p>
                          </Link>
                        </div>
                        <div className="follow-company-icon">
                          <Link to="#.">
                            <i className="fa fa-facebook"></i>
                          </Link>
                          <Link to="#.">
                            <FontAwesomeIcon
                              icon={faXTwitter}
                              className="fa fa-twitter"
                            />
                          </Link>
                          <Link to="#.">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link to="#.">
                            <i className="fa fa-skype"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="widget widget-nav-menu">
                      <h4 className="widget-title pb-4">Our Solutions</h4>
                      <div className="menu-quick-link-container ml-4">
                        <ul id="menu-quick-link" className="menu">
                          <li>
                            <Link to="/solutions/website-development/hotels-resorts">Hotel & Resorts Website</Link>
                          </li>
                          <li>
                            <Link to="/solutions/website-development/travel-tours">Travel & Tours Website</Link>
                          </li>
                          <li>
                            <Link to="/solutions/website-development/nile-cruises">Nile Cruises Websites</Link>
                          </li>
                          <li>
                            <Link to="/d-edge/central-reservation-system/booking-engine-for-hotel">D-Edge Booking Engine</Link>
                          </li>
                          <li>
                            <Link to="/solutions/booking-engine/SynXis">SynXis Booking Engine</Link>
                          </li>
                          <li>
                            <Link to="/solutions/web-check-in-solution">Web Check-In Solution</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="widget widget-nav-menu ">
                      <h4 className="widget-title pb-4">Our Services</h4>
                      <div className="menu-quick-link-container ml-4">
                        <ul id="menu-quick-link" className="menu">
                          <li>
                            <Link to="/services/search-engine-marketing">Search Engine Marketing</Link>
                          </li>
                          <li>
                            <Link to="/services/social-media-marketing">Social Media Marketing</Link>
                          </li>
                          <li>
                            <Link to="/services/social-media-management">Social Media Managements</Link>
                          </li>
                          <li>
                            <Link to="/services/hotel-e-commerce">Hotel E-Commerce</Link>
                          </li>
                          <li>
                            <Link to="/services/search-engine-optimization">Search Engine Optimization</Link>
                          </li>
                          <li>
                            <Link to="/services/email-marketing">Email Marketing</Link>
                          </li>
                          <li>
                            <Link to="/services/digital-marketing-reporting">Digital Marketing Reporting</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*<div className="col-lg-2 col-md-6 col-sm-12">
                    <div className="widget widget-nav-menu">
                      <h4 className="widget-title pb-4">D-EDGE</h4>
                      <div className="menu-quick-link-container ml-4">
                        <ul id="menu-quick-link" className="menu">
                          <li>
                            <Link to="#.">Central Reservation System</Link>
                          </li>
                          <li>
                            <Link to="#.">Channel Manager</Link>
                          </li>
                          <li>
                            <Link to="#.">D-Edge Booking Engine</Link>
                          </li>
                          <li>
                            <Link to="#.">Hotel CRM</Link>
                          </li>
                          <li>
                            <Link to="#.">Guest Loyalty</Link>
                          </li>
                          <li>
                            <Link to="#.">Performance Analysis</Link>
                          </li>
                          <li>
                            <Link to="#.">Price Monitoring</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="widget widgets-company-info">
                      <h3 className="widget-title pb-4">Contact US</h3>
                      <div className="footer-social-info">
                        <p>
                          <span>
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                          </span>
                          <Link
                            to="tel:(+2)01000 97 22 10"
                            className="text-light"
                          >
                            (+2)01000 97 22 10
                          </Link>
                        </p>
                      </div>
                      <div className="footer-social-info">
                        <p>
                          <span>
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              className="mr-2"
                            />
                          </span>
                          <Link
                            to="mailto:info@titegypt.com"
                            className="text-light"
                          >
                            info@titegypt.com
                          </Link>
                        </p>
                      </div>
                      <div className="footer-social-info">
                        <p>
                          <span>
                            {" "}
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="mr-2"
                            />
                          </span>
                          El-Nasr Street, Building #28. New Maadi. Cairo, Egypt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row footer-bottom mt-20 pt-3 pb-1">
                  <div className="col-lg-6 col-md-6">
                    <div className="footer-bottom-content">
                      <div className="footer-bottom-content-copy">
                        <p>© 2024 T.I.T Solutions.All Rights Reserved. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="footer-bottom-right">
                      <div className="footer-bottom-right-text">
                        <Link className="text-lg-center" to="#.">
                          Privacy Policy{" "}
                        </Link>
                        <Link to="#."> Terms & Conditions</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Layout;
