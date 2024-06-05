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
  faMapLocationDot,
  faShieldHeart,
  faUser,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";

const createTiltHandler = (tiltRef) => {
  return {
    handleMove: (e) => {
      const el = tiltRef.current;
      const height = el.clientHeight;
      const width = el.clientWidth;

      const xVal = e.nativeEvent.offsetX;
      const yVal = e.nativeEvent.offsetY;

      const yRotation = 30 * ((xVal - width / 2) / width);
      const xRotation = -30 * ((yVal - height / 2) / height);

      const transformString = `perspective(1000px)  rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1,1,1)`;
      el.style.transform = transformString;
    },

    handleMouseOut: () => {
      const el = tiltRef.current;
      el.style.transform =
        "perspective(1000px)   rotateX(0) rotateY(0) scale3d(1,1,1)";
    },

    handleMouseDown: () => {
      const el = tiltRef.current;
      el.style.transform =
        "perspective(1000px)   rotateX(0) rotateY(0) scale3d(1,1,1)";
    },

    handleMouseUp: () => {
      const el = tiltRef.current;
      el.style.transform =
        "perspective(1000px)   rotateX(0) rotateY(0) scale3d(1,1,1)";
    },
  };
};

const Home = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const isTablet = useMediaQuery("(max-width:1024px)");
  const tiltRef1 = useRef(null);
  const tiltHandler1 = createTiltHandler(tiltRef1);
  const tiltRef2 = useRef(null);
  const tiltHandler2 = createTiltHandler(tiltRef2);
  const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    autoplayHoverPause: false,
    lazyLoad: true,
    animateOut: "fadeOut",
    slideTransition: "linear",
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  };
  const brandOptions = {
    items: 6,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    slideTransition: "linear",

    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 6,
      },
    },
  };
  const servicesOptions = {
    items: 4,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    slideTransition: "linear",

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  const newsOptions = {
    items: 3,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    margin: 20,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      {/* Banner */}
      <section id="banner">
        {" "}
        <OwlCarousel options={options}>
          <div
            className="slider_area d-flex align-items-center slider11"
            style={{ backgroundImage: `url(Our-Clients.jpg)` }}
            id="home"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="single_slider">
                    <div className="slider_content">
                      <div className="slider_text">
                        <div className="slider_text_inner">
                          <h1>Our Clients</h1>
                        </div>
                        <div className="slider_text_desc pt-4">
                          <p>They Never Walked Alone.</p>
                        </div>
                        <div className="slider_button pt-2">
                          <div className="button">
                            <Link className="active" to="#.">
                              Get In Touch
                              <i className="fa fa-long-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="slider_area d-flex align-items-center slider12"
            style={{ backgroundImage: `url(Google-Partner.jpg)` }}
            id="home"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="single_slider">
                    <div className="slider_content text_center">
                      <div className="slider_text mt-200 text-left">
                        <div className="slider_text_desc pt-4 ml-150">
                          <p className="mx-0  ">
                            Highest ROI With Google Advertising.
                          </p>
                        </div>
                        <div className="slider_button pt-5 ml-130">
                          <div className="button">
                            <Link className="active" to="#.">
                              Get In Touch
                              <i className="fa fa-long-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slider_area d-flex align-items-center slider12"
            style={{ backgroundImage: `url(D-Edge.jpg)` }}
            id="home"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="single_slider">
                    <div className="slider_content text_center">
                      <div className="slider_text mt-200 text-left">
                        <div className="slider_text_desc pt-4 ml-120">
                          <p className="mx-0  ">
                            Maximize Your Direct Bookings.
                          </p>
                        </div>
                        <div className="slider_button pt-5 ml-130">
                          <div className="button">
                            <Link className="active" to="#.">
                              Read More
                              <i className="fa fa-long-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slider_area d-flex align-items-center slider12"
            style={{ backgroundImage: `url(Asksuite-Chatbot.jpg)` }}
            id="home"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="single_slider">
                    <div className="slider_content text_center">
                      <div className="slider_text mt-200 text-left">
                        <div className="slider_text_desc pt-4 ml-80">
                          <p className="mx-0  ">
                            Chatbot Agent Across All Online Channels.
                          </p>
                        </div>
                        <div className="slider_button pt-5 ml-60">
                          <div className="button">
                            <Link className="active" to="#.">
                              Read More
                              <i className="fa fa-long-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slider_area d-flex align-items-center slider12"
            style={{ backgroundImage: `url(THN.jpg)` }}
            id="home"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="single_slider">
                    <div className="slider_content text_center">
                      <div className="slider_text mt-200 text-left">
                        <div className="slider_text_desc pt-4 ml-100">
                          <p className="mx-0  ">
                            Increase Booking Conversion Rates.
                          </p>
                        </div>
                        <div className="slider_button pt-5 ml-80">
                          <div className="button">
                            <Link className="active" to="#.">
                              Read More
                              <i className="fa fa-long-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>

      {/*About  */}
      <div className="about_area pt-70 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 pr-5">
              <div className="single_about_thumb mb-3">
                <div
                  className="single_about_thumb_inner"
                  ref={tiltRef1}
                  onMouseMove={tiltHandler1.handleMove}
                  onMouseOut={tiltHandler1.handleMouseOut}
                  onMouseDown={tiltHandler1.handleMouseDown}
                  onMouseUp={tiltHandler1.handleMouseUp}
                  style={{ transition: "none" }}
                >
                  <img
                    src="digital-design-businessman-show-increase-market-graphic.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="single_about_shape">
                <div className="single_about_shape_thumb bounce-animate">
                  <img src="about-circle.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 ">
              <div className="section_title text_left mb-40 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6 style={{ color: "#ffb600" }}> 22+ YEARS OF EXPERIENCE</h6>
                </div>
                <div className="section_main_title">
                  <h1>
                    Why do They <span style={{ color: "#ffb600" }}>Trust </span>{" "}
                    Us?
                  </h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4 ">
                  <p>
                    With our experience exceeding 22+ years in the digital
                    marketing world for the hospitality and travel sectors, our
                    partners always get the most shining results and notice a
                    dramatic increase in business ROI ; we do it by customizing
                    the right solutions for your needs, giving the feeling of{" "}
                    <span style={{ color: "#ffb600" }}>
                      "#You_Will_Never_Walk_Alone".
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brand_main_area  pt-50 pb-50">
        <div className="brand_area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_title text_center mb-50 mt-3">
                  <div className="section_main_title">
                    <h1>
                      Our <span> Clients</span>
                    </h1>
                    <p>clients we have worked with </p>
                  </div>
                  <div className="em_bar">
                    <div className="em_bar_bg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 mx-auto">
                <OwlCarousel options={brandOptions}>
                  <div className="single_brand px-3">
                    <div className="single_brand_thumb">
                      <img
                        src="assets/images/clients/coralresort.png"
                        width="150"
                        height="150"
                        alt="Coral Resort"
                      />
                    </div>
                  </div>
                  <div className="single_brand px-3">
                    <div className="single_brand_thumb">
                      <img
                        src="assets/images/clients/villa.png"
                        width="150"
                        height="150"
                        alt="Villa"
                      />
                    </div>
                  </div>
                  <div className="single_brand px-3">
                    <div className="single_brand_thumb">
                      <img
                        src="assets/images/clients/Historia.svg"
                        width="150"
                        height="150"
                        alt="Historia"
                      />
                    </div>
                  </div>
                  <div className="single_brand px-3">
                    <div className="single_brand_thumb">
                      <img
                        src="assets/images/clients/logo-promenade.png"
                        width="150"
                        height="150"
                        alt="Promenade"
                      />
                    </div>
                  </div>
                  <div className="single_brand px-3">
                    <div className="single_brand_thumb">
                      <img
                        src="assets/images/clients/coralresort.png"
                        width="150"
                        height="150"
                        alt="Coral Resort"
                      />
                    </div>
                  </div>
                  <div className="single_brand px-3">
                    <div className="single_brand_thumb">
                      <img
                        src="assets/images/clients/villa.png"
                        width="150"
                        height="150"
                        alt="Villa"
                      />
                    </div>
                  </div>
                  <div className="single_brand px-3">
                    <div className="single_brand_thumb">
                      <img
                        src="assets/images/clients/Historia.svg"
                        width="150"
                        height="150"
                        alt="Historia"
                      />
                    </div>
                  </div>
                  <div className="single_brand px-3">
                    <div className="single_brand_thumb">
                      <img
                        src="assets/images/clients/logo-promenade.png"
                        width="150"
                        height="150"
                        alt="Promenade"
                      />
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Solutions */}
      <div
        className="flipbox_area pt-85 pb-70"
        style={{
          backgroundImage: `url(assets/images/slider/slider-4.jpg)`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center white mb-55">
                <div className="section_sub_title uppercase mb-3">
                  <h6>SOLUTIONS</h6>
                </div>
                <div className="section_main_title">
                  <h1>Provide Exclusive Solutions</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon">
                        <i className="flaticon-code"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>Website Development</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        We deliver intuitive and fast websites services for the
                        hospitality industry and...
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="techno_flipbox_back "
                  style={{
                    backgroundImage: `url(assets/images/solutions/s1.jpg)`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>Website Development</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        We deliver intuitive and fast websites services for the
                        hospitality industry and more! Our web developers can
                        build custom...
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon">
                        <i className="flaticon-intelligent"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>Booking Engine</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        With a user-friendly booking engine that works as a
                        sales channel for your hotel...
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="techno_flipbox_back "
                  style={{
                    backgroundImage: `url(assets/images/solutions/s2.jpg)`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>Booking Engine</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        With a user-friendly booking engine that works as a
                        sales channel for your hotel, you can maximize your
                        direct bookings easily...
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon">
                        <i className="flaticon-code"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>Web Check-In Solution</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        During this challenging time, Hotels & Resorts need to
                        implement a solution to...
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="techno_flipbox_back "
                  style={{
                    backgroundImage: `url(assets/images/solutions/s3.jpg)`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>Web Check-In Solution</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        During this challenging time, Hotels & Resorts need to
                        implement a solution to facilitate a smooth...
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Counter */}
      <div className="counter_area pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-50 mt-3">
                <div className="section_main_title">
                  <h1>
                    Helping <span> Businesses</span>
                  </h1>
                  <p>
                    Our digital marketing strategy is built on the foundation of
                    driving measurable results.
                  </p>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row cntr_bg_up pt-50 pb-45">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_counter text_center mb-4">
                <div className="single_counter_icon pb-3">
                  <i>
                    <FontAwesomeIcon icon={faUsersBetweenLines} />
                  </i>
                </div>
                <div className="countr_text">
                  <h1>
                    <Counter
                      className="counter"
                      start={0}
                      end={92}
                      duration={10}
                    />
                    <span>+</span>{" "}
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>Clients</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_counter text_center mb-4">
                <div className="single_counter_icon pb-3">
                  <i>
                    <FontAwesomeIcon icon={faBed} />
                  </i>
                </div>
                <div className="countr_text">
                  <h1>
                    <Counter
                      className="counter"
                      start={0}
                      end={30000}
                      duration={500}
                    />
                    <span className="counter"></span>
                    <span>+</span>{" "}
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>Rooms</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_counter text_center mb-4">
                <div className="single_counter_icon pb-3">
                  <i>
                    <FontAwesomeIcon icon={faShieldHeart} />
                  </i>
                </div>
                <div className="countr_text">
                  <h1>
                    <Counter
                      className="counter"
                      start={0}
                      end={1290744273}
                      duration={1000}
                    />
                    <span>+</span>{" "}
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>Impressions</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_counter text_center mb-4">
                <div className="single_counter_icon pb-3">
                  <i>
                    <FontAwesomeIcon icon={faMapLocationDot} />
                  </i>
                </div>
                <div className="countr_text">
                  <h1>
                    <Counter
                      className="counter"
                      start={0}
                      end={12}
                      duration={2}
                    />
                    <span>+</span>{" "}
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>Destination</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Team */}
      <div
        className="team_area pt-80 pb-75"
        style={{ backgroundImage: `url(assets/images/team-bg2.jpg)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-50 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>TEAM MEMBER</h6>
                </div>
                <div className="section_main_title">
                  <h1>Our Awesome Creative</h1>
                  <h1>Team Member</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_team mb-4">
                <div className="single_team_thumb">
                  <img src="mohamed.jpg" alt="" />
                  <div className="single_team_icon">
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="single_team_content">
                  <h4>Mohamed Hassan</h4>
                  <span>DIRECTOR</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_team mb-4">
                <div className="single_team_thumb">
                  <img src="ahmed.jpg" alt="" />
                  <div className="single_team_icon">
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="single_team_content">
                  <h4>Ahmed Hassan</h4>
                  <span>Technical Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_team mb-4">
                <div className="single_team_thumb">
                  <img src="nahla.jpg" alt="" height="255" />
                  <div className="single_team_icon">
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="single_team_content">
                  <h4>Nahla Salah </h4>
                  <span>General Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Servies */}
      <div className="feature_area pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-50 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>SERVICES</h6>
                </div>
                <div className="section_main_title">
                  <h1>Provide Exclusive Services</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="feature_style_three ">
                <div className="feature_style_tree_thumb">
                  <img
                    loading="lazy"
                    src="service1.jpg"
                    alt="service 1"
                    height="360"
                  />
                </div>
                <div className="feature_style_tree_content">
                  <div className="feature_style_thre_icon pb-4">
                    <div className="icon">
                      <i className="flaticon-system"></i>
                    </div>
                  </div>
                  <div className="feature_style_three_title">
                    <h4>Hotel Website Development</h4>
                  </div>
                  <div className="feature_style_three_text pt-4">
                    <p>
                      It is not just about having an attractive website; it's
                      about creating an experience that works for your customers
                      and pays off for your hotel.
                    </p>
                  </div>
                  <div className="feature_style_three_butoon">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="feature_style_three ">
                <div className="feature_style_tree_thumb">
                  <img
                    src="service2.jpg"
                    loading="lazy"
                    alt="service 2"
                    height="360"
                  />
                </div>
                <div className="feature_style_tree_content">
                  <div className="feature_style_thre_icon pb-4">
                    <div className="icon">
                      <i className="flaticon-chart"></i>
                    </div>
                  </div>
                  <div className="feature_style_three_title">
                    <h4>Digital Marketing For Hotels</h4>
                  </div>
                  <div className="feature_style_three_text pt-4">
                    <p>
                      Our hotel-specific digital marketing solutions are
                      tailored to all hotels' needs to increase your direct
                      bookings and traffic through your online channels.
                    </p>
                  </div>
                  <div className="feature_style_three_butoon">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="case_study_area " id="portfolio">
        <div className="row">
          <div className="col-lg-12 grid-item">
            <OwlCarousel options={servicesOptions}>
              <div className="single_case_study">
                <div className="single_case_study_inner">
                  <div className="single_case_study_thumb">
                    <a href="case-study-details.html">
                      <img
                        src="assets/images/services/s1.jpg"
                        alt="Service 1"
                      />
                    </a>
                  </div>
                  <div className="single_case_study_content">
                    <div className="single_case_study_content_inner">
                      <h2>
                        <a href="case-study-details.html">
                          Search Engine Marketing
                        </a>
                      </h2>
                      <ul className="text-center">
                        <li>
                          <a href="#.">Google Hotel Ads</a>
                        </li>
                        <li>
                          <a href="#.">Bing Hotel Ads</a>
                        </li>
                        <li>
                          <a href="#.">Yandex Ads In Egypt</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_case_study">
                <div className="single_case_study_inner">
                  <div className="single_case_study_thumb">
                    <a href="case-study-details.html">
                      <img
                        src="assets/images/services/s2.jpg"
                        alt="Service 2"
                      />
                    </a>
                  </div>
                  <div className="single_case_study_content">
                    <div className="single_case_study_content_inner">
                      <h2>
                        <a href="case-study-details.html">
                          Social Media Marketing
                        </a>
                      </h2>
                      <ul className="text-center">
                        <li>
                          <a href="#.">Facebook Ads For Hotel</a>
                        </li>
                        <li>
                          <a href="#.">Instagram Marketing For Hotels</a>
                        </li>
                        <li>
                          <a href="#.">Snapchat Ads For Hotel</a>
                        </li>
                        <li>
                          <a href="#.">VK Ads For Hotels</a>
                        </li>
                        <li>
                          <a href="#.">LinkedIn For Hotels</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_case_study">
                <div className="single_case_study_inner">
                  <div className="single_case_study_thumb">
                    <a href="case-study-details.html">
                      <img
                        src="assets/images/services/s3.jpg"
                        alt="Service 3"
                      />
                    </a>
                  </div>
                  <div className="single_case_study_content">
                    <div className="single_case_study_content_inner">
                      <h2>
                        <a href="case-study-details.html">
                          Social Media Management
                        </a>
                      </h2>
                      <ul className="text-center">
                        <li>
                          <a href="#.">Hotel Social Media Marketing</a>
                        </li>
                        <li>
                          <a href="#.">Social Media Content For Hotels</a>
                        </li>
                        <li>
                          <a href="#.">Social Media Design Services</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_case_study">
                <div className="single_case_study_inner">
                  <div className="single_case_study_thumb">
                    <a href="case-study-details.html">
                      <img
                        src="assets/images/services/s4.jpg"
                        alt="Service 4"
                      />
                    </a>
                  </div>
                  <div className="single_case_study_content">
                    <div className="single_case_study_content_inner">
                      <h2>
                        <a href="case-study-details.html">Hotel E-Commerce</a>
                      </h2>
                      <ul className="text-center">
                        <li>
                          <a href="#.">E-Commerce Consultancy</a>
                        </li>
                        <li>
                          <a href="#.">Hotel E-Commerce Management</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_case_study">
                <div className="single_case_study_inner">
                  <div className="single_case_study_thumb">
                    <a href="case-study-details.html">
                      <img
                        src="assets/images/services/s5.jpg"
                        alt="Service 5"
                      />
                    </a>
                  </div>
                  <div className="single_case_study_content">
                    <div className="single_case_study_content_inner">
                      <h2>
                        <a href="case-study-details.html">
                          Search Engine Optimization
                        </a>
                      </h2>
                      <ul className="text-center">
                        <li>
                          <a href="#.">CONTINUE READING</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_case_study">
                <div className="single_case_study_inner">
                  <div className="single_case_study_thumb">
                    <a href="case-study-details.html">
                      <img
                        src="assets/images/services/s6.jpg"
                        alt="Service 6"
                      />
                    </a>
                  </div>
                  <div className="single_case_study_content">
                    <div className="single_case_study_content_inner">
                      <h2>
                        <a href="case-study-details.html">Email Marketing</a>
                      </h2>
                      <ul className="text-center">
                        <li>
                          <a href="#.">Constant Contact</a>
                        </li>
                        <li>
                          <a href="#.">Email Marketing For Hotels</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_case_study">
                <div className="single_case_study_inner">
                  <div className="single_case_study_thumb">
                    <a href="case-study-details.html">
                      <img
                        src="assets/images/services/s7.jpg"
                        alt="Service 7"
                      />
                    </a>
                  </div>
                  <div className="single_case_study_content">
                    <div className="single_case_study_content_inner">
                      <h2>
                        <a href="case-study-details.html">Reporting</a>
                      </h2>
                      <ul className="text-center">
                        <li>
                          <a href="#.">Google analytics for hotels</a>
                        </li>
                        <li>
                          <a href="#.">Digital Marketing Reporting</a>
                        </li>
                        <li>
                          <a href="#.">Google Analytics 360</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_case_study">
                <div className="single_case_study_inner">
                  <div className="single_case_study_thumb">
                    <a href="case-study-details.html">
                      <img
                        src="assets/images/services/s8.jpg"
                        alt="Service 8"
                      />
                    </a>
                  </div>
                  <div className="single_case_study_content">
                    <div className="single_case_study_content_inner">
                      <h2>
                        <a href="case-study-details.html">
                          Hospitality Photography
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_case_study">
                <div className="single_case_study_inner">
                  <div className="single_case_study_thumb">
                    <a href="case-study-details.html">
                      <img
                        src="assets/images/services/s9.jpg"
                        alt="Service 9"
                      />
                    </a>
                  </div>
                  <div className="single_case_study_content">
                    <div className="single_case_study_content_inner">
                      <h2>
                        <a href="case-study-details.html">
                          Asksuite Hotel Chatbot
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_case_study">
                <div className="single_case_study_inner">
                  <div className="single_case_study_thumb">
                    <a href="case-study-details.html">
                      <img
                        src="assets/images/services/s10.jpg"
                        alt="Service 10"
                      />
                    </a>
                  </div>
                  <div className="single_case_study_content">
                    <div className="single_case_study_content_inner">
                      <h2>
                        <a href="case-study-details.html">The Hotels Network</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

      {/*News */}
      <div className="blog_area brand_main_area pt-85 pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="section_title text_left mb-60 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>Our News</h6>
                </div>
                <div className="section_main_title">
                  <h1>See Our Latest</h1>
                  <h1>News</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 ">
              <div className="section_button mt-50">
                <div className="button two">
                  <Link to="/news">See All</Link>
                </div>
              </div>
            </div>
          </div>
          <OwlCarousel options={newsOptions}>
            <div
              className="single_blog text-center mb-4 wow flipInY"
              data-wow-delay="0ms"
              data-wow-duration="2500ms"
            >
              <div className="single_blog_thumb">
                <Link to="#.">
                  <img
                    src="assets/images/news/google-w-tit-website.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="single_blog_date">
                <div className="single_blog_date_inner">
                  <h3>16</h3>
                  <span>APR</span>
                  <span className="years">2024</span>
                </div>
              </div>
              <div className="single_blog_content pt-4 pl-4 pr-4">
                <div className="blog_page_title pb-1">
                  <h6 className="mb-3">
                    <Link to="#.">
                      <br />
                      Google Premier Partner 2024
                    </Link>
                  </h6>
                </div>
                <div className="blog_description">
                  <p className="news-p">
                    T.I.T Solutions, a leading innovator in digital marketing
                    strategies, has been honored once again as a Google Premier
                    Partner for the year 2024. This consecutive recognition
                    underscores the company's unwavering commitment to
                    excellence, following its previous acknowledgment as a
                    Google Premier Partner in 2023.
                  </p>
                </div>
                <div className="blog_page_button style_two pb-5">
                  <Link to="#.">
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="single_blog text-center mb-4 wow flipInY"
              data-wow-delay="0ms"
              data-wow-duration="2500ms"
            >
              <div className="single_blog_thumb">
                <Link to="#.">
                  <img src="assets/images/news/WS-Travco-Launch.png" alt="" />
                </Link>
              </div>
              <div className="single_blog_date color2">
                <div className="single_blog_date_inner">
                  <h3>2</h3>
                  <span>APR</span>
                  <span className="years">2024</span>
                </div>
              </div>
              <div className="single_blog_content pt-4 pl-4 pr-4">
                <div className="blog_page_title pb-1">
                  <h6 className="mb-3">
                    <Link to="#.">
                      T.I.T Solutions and Travco Group Launches A New Website
                    </Link>
                  </h6>
                </div>
                <div className="blog_description">
                  <p className="news-p">
                    T.I.T Solutions is taking pride in announcing the launch of
                    the new website for Travco Group. The new website is
                    designed to provide a cutting-edge and dynamic user
                    experience. With a wide range of features and
                    functionalities that cater to the diverse needs of the
                    users.
                  </p>
                </div>
                <div className="blog_page_button style_two pb-5">
                  <Link to="#.">
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="single_blog text-center mb-4 wow flipInY"
              data-wow-delay="0ms"
              data-wow-duration="2500ms"
            >
              <div className="single_blog_thumb">
                <Link to="#.">
                  <img src="assets/images/news/WS-Cleopark-Launch.jpg" alt="" />
                </Link>
              </div>
              <div className="single_blog_date color3">
                <div className="single_blog_date_inner">
                  <h3>1</h3>
                  <span>APR</span>
                  <span className="years">2024</span>
                </div>
              </div>
              <div className="single_blog_content pt-4 pl-4 pr-4">
                <div className="blog_page_title pb-1">
                  <h6 className="mb-3">
                    <Link to="#.">
                      T.I.T Solutions & Cleopark, owned By Sharm Dreams Holding,
                      Shape a Digital Path to Adventure!
                    </Link>
                  </h6>
                </div>
                <div className="blog_description">
                  <p className="news-p">
                    T.I.T Solutions has launched the first-of-a-kind website for
                    a water park for Cleopark, the premier water park in Sharm
                    El Sheikh. Cleopark is owned by Sharm Dreams Holding and
                    operated by The Jaz Hotel Group.
                  </p>
                </div>
                <div className="blog_page_button style_two pb-5">
                  <Link to="#.">
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="single_blog text-center mb-4 wow flipInY"
              data-wow-delay="0ms"
              data-wow-duration="2500ms"
            >
              <div className="single_blog_thumb">
                <Link to="#.">
                  <img src="assets/images/news/duetto-website.jpg" alt="" />
                </Link>
              </div>
              <div className="single_blog_date">
                <div className="single_blog_date_inner">
                  <h3>5</h3>
                  <span>MAR</span>
                  <span className="years">2024</span>
                </div>
              </div>
              <div className="single_blog_content pt-4 pl-4 pr-4">
                <div className="blog_page_title pb-1">
                  <h6 className="mb-3">
                    <Link to="#.">
                      Driving Innovation In Profit Optimization: T.I.T.Solutions
                      Partners with Duetto Software to Transform Hospitality
                      field.
                    </Link>
                  </h6>
                </div>
                <div className="blog_description">
                  <p className="news-p">
                    Exciting news! We have partnered with Duetto Software to
                    revolutionize revenue management for hotels and resorts.
                    With Duetto's cutting-edge technology, we are confident that
                    we can deliver unparalleled value to our clients in the
                    hospitality sector.
                  </p>
                </div>
                <div className="blog_page_button style_two pb-5">
                  <Link to="#.">
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="single_blog text-center mb-4 wow flipInY"
              data-wow-delay="0ms"
              data-wow-duration="2500ms"
            >
              <div className="single_blog_thumb">
                <Link to="#.">
                  <img
                    src="assets/images/news/Lets-meet-in-Berlin.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="single_blog_date color2">
                <div className="single_blog_date_inner">
                  <h3>3</h3>
                  <span>MAR</span>
                  <span className="years">2024</span>
                </div>
              </div>
              <div className="single_blog_content pt-4 pl-4 pr-4">
                <div className="blog_page_title pb-1">
                  <h3>
                    <Link to="#.">Let's meet in Berlin!</Link>
                  </h3>
                </div>
                <div className="blog_description">
                  <p className="news-p">
                    We are delighted to announce that our Managing Director, Dr.
                    Mohamed Taha, will attend the renowned ITB Berlin
                    Conference. This provides us with an excellent opportunity
                    to explore potential partnerships, discuss industry trends,
                    and showcase how T.I.T Solutions' team is changing the game
                    in travel experiences.
                  </p>
                </div>
                <div className="blog_page_button style_two pb-5">
                  <Link to="#.">
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="single_blog text-center mb-4 wow flipInY"
              data-wow-delay="0ms"
              data-wow-duration="2500ms"
            >
              <div className="single_blog_thumb">
                <Link to="#.">
                  <img
                    src="assets/images/news/chrismar-Website-banner-3.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="single_blog_date color3">
                <div className="single_blog_date_inner">
                  <h3>15</h3>
                  <span>JAN</span>
                  <span className="years">2024</span>
                </div>
              </div>
              <div className="single_blog_content pt-4 pl-4 pr-4">
                <div className="blog_page_title pb-1">
                  <h3>
                    <Link to="#.">
                      Discover Chrismar Travel's Updated Online Presence,
                      Crafted by T.I.T Solutions!
                    </Link>
                  </h3>
                </div>
                <div className="blog_description">
                  <p className="news-p">
                    We are thrilled to share the exciting introduction of
                    Chrismar Travel website. The new website promises to be an
                    engaging gateway for travel enthusiasts, offering a seamless
                    exploration of Chrismar's world of captivating destinations
                    and experiences.
                  </p>
                </div>
                <div className="blog_page_button style_two pb-5">
                  <Link to="#.">
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Home;
