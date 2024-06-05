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

const AboutUs = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const isTablet = useMediaQuery("(max-width:1024px)");
  const tiltRef1 = useRef(null);
  const tiltHandler1 = createTiltHandler(tiltRef1);
  const tiltRef2 = useRef(null);

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

  const testimonials = [
    {
      text: "Managing everyday banking has finally become fun, fast and easy. Icing on the cake, customer support is super reactive: 5 stars!",
      name: "Tom Abel De",
      job: "Digital Marketing",
    },
    {
      text: "Qonto met my needs straight away. ng has finally become fun, fast and Customer care is awesome! Period.",
      name: "Sanuka Santa",
      job: "To To Company",
    },
    {
      text: "With Qonto, I've been able to order MasterCard cards in seconds. My purchasing team can now be autonomous with their payments. Qonto is game changer.",
      name: "Grégoire Pasquet",
      job: "Solf Solution",
    },
    {
      text: "Qonto? Easy, fast, efficient. Traditionalng has finally become fun, fast and banks' hassles belong to the past!",
      name: "Nicolas Puran",
      job: "CEO Founder",
    },
    {
      text: "Qonto? A flawless UX and a customer service ng has finally become fun, fast and that cares so much. This is just incredible!",
      name: "Mathieu Jouhet",
      job: "Freelance @Hello Mat",
    },
    {
      text: "I needed a bank similar to a SaaS for LiveMentor: ng has finally become fun, fast and I think I found it.",
      name: "Charles Jadran",
      job: "Web Development",
    },
    {
      text: "I can say 'Goodbye' to the banking pains I had to ng has finally become fun, fast and bear with, and 'hello' to a way to do finance that makes sense.",
      name: "Digong Frando",
      job: "CEO Officience",
    },
    {
      text: "Qonto is 100% in tune with what we do at Alan.eu: a user-friendly service, a user-centric interface and a very reactive customer support.",
      name: "Charles Samuelian",
      job: "Director & Photo Man",
    },
    {
      text: "I have been looking for a modern and efficient banking alternative that could support the development of my business. I'm just wondering why Qonto did not exist before!",
      name: "Khatry Firmanio",
      job: "CEO Company",
    },
    {
      text: "That's just perfect - It rocks baby! ng has finally become fun, fast and You wanna apply at TheFamily? Use Qonto first.",
      name: "Jadran Parvej Imon",
      job: "CEO Manager",
    },
    {
      text: "I wish I could have had Qonto ng has finally become fun, fast andenrolled in the Techstars Paris's first batch!",
      name: "Bertier Luyt",
      job: "Managing Director",
    },
    {
      text: "Thanks to a slick interface and simple ng has finally become fun, fast and features, managing payments and expenses has become a piece of cake!",
      name: "Darpon Abir Khan",
      job: "Founder Officience",
    },
  ];
  return (
    <>
      {/* Banner */}
      <div className="breatcome_area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner pb-2">
                  <h2>About Us</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>{" "}
                      <i className="fa fa-angle-right"></i>{" "}
                      <span>About Us</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_area pt-85 ">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center px-5">
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-5 mx-auto">
              <div
                className="about_thumb"
                ref={tiltRef1}
                onMouseMove={tiltHandler1.handleMove}
                onMouseOut={tiltHandler1.handleMouseOut}
                onMouseDown={tiltHandler1.handleMouseDown}
                onMouseUp={tiltHandler1.handleMouseUp}
                style={{ transition: "none" }}
              >
                <img src="assets/images/aboutus.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="section_title text_left mb-20 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>+22 YEARS OF EXPERIENCE</h6>
                </div>
                <div className="section_main_title">
                  <h1>
                    Provide Best <span>Solutions.</span>
                  </h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>{" "}
                <div className="singel_about_left mt-30">
                  <div className="singel_about_left_inner ">
                    <div className="singel-about-content boder pl-4">
                      <p className="mb-0">
                        The home of the most effective solutions and the world’s
                        top innovative products, with a proven track record in
                        delivering results-based digital activities, we help
                        brands increase profitability and unlock GROWTH.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section_content_text bold ">
                <p className=" ">Our Experts</p>
              </div>
              <div className="singel_about_left mb-20 mt-0">
                <div className="singel_about_left_inner ">
                  <div className="singel-about-content boder pl-4">
                    <p className="mb-0">
                      We rely on a highly qualified and certified team of
                      designers, marketers, creatives, and programming experts
                      who always stay up-to-date with the latest tools,
                      technologies, and knowledge to deliver the best digital
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="section_content_text bold ">
                <p className=" ">Why Us?</p>
              </div>
              <div className="singel_about_left mb-20 mt-0">
                <div className="singel_about_left_inner ">
                  <div className="singel-about-content   pl-4">
                    <ul>
                      <li>
                        T.I.T Solutions offers no-hassle solutions by being that
                        one-stop shop you are searching for tailored services
                        for all your business needs.
                      </li>
                      <li>
                        Being a leading Digital Marketing & IT agency with more
                        than 21 years of proven experience makes our practical
                        solutions work right - the first time.
                      </li>
                      <li>
                        We believe in customization, meaning we never offer
                        one-size-fits-all solutions; we always do what suits
                        your very OWN business.
                      </li>
                      <li>
                        Our team of experienced and certified digital marketers
                        has helped hundreds of businesses achieve their goals
                        using our cutting-edge solutions, which means your trust
                        in us will be well-placed.
                      </li>
                    </ul>
                  </div>
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
                <div className="section_title text_center mb-20 mt-3">
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
    </>
  );
};

export default AboutUs;
