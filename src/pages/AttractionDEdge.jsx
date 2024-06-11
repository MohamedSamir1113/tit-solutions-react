import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

function AttractionDEdge() {
    useEffect(function() {
        document.title="Attraction D-Edge"
    },[])
    return (
        <>
        <BgArea
          title1={`AttractionDEdge`}
          title2={`Booking Engine`}
          path={`/booking-engine`}
        />
        <div className="service-details pages pt-90 pb-50">
          <div className="container">
            <div className="row">
            <div className=" col-lg-4 col-md-5 col-sm-12 col-xs-12">
              <h3 className="pb-15">Our Solutions:</h3>
              <div className="service-details-pn-list">
                <ul>
                  <li>
                    <Link to="/website-development">
                      Website Development
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/booking-engine">
                      Booking Engine
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/web-check-in-solution">
                      Web Check-In Solution
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="service-details-big-button mt-40 mb-40">
                <a href="/">
                  <span className="details-big-content">
                    Company Presentation <i className="fa fa-download"></i>
                  </span>
                </a>
              </div>

              <div
                className="service-details-pn-about mb-4"
                style={{ backgroundImage: "url(assets/images/tab1.jpg)" }}
              >
                <div className="service-details-pn-about-content pt-35 pb-40 pl-4 pr-4">
                  <div className="service-details-pn-about-content-title pb-3">
                    <h4>Need Any Help For Business ?</h4>
                  </div>
                  <div className="service-details-pn-about-content-text">
                    <p>
                      We take an omni-channel approach to online marketing with
                      a focus on increasing conversions, repeat traffic and
                      generating greater brand loyalty online.
                    </p>
                  </div>
                  <div className="service-details-pn-about-content-button pt-2">
                    <Link to="/contact-us">Contact Now</Link>
                  </div>
                </div>
              </div>
            </div>
  
              <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="service-main-details">
                      <div className="service-main-details-inner">
                        <div className="service-main-details-inner-thumb">
                          <img
                            src="assets/images/digital-marketing-in-egypt-for-hotels-solutions-attraction-d-edge-202130132820642.jpg"
                            alt=""
                          />
                        </div>
                        <div className="service-main-details-content-title pt-4 pb-3">
                          <h3>Attraction D-Edge</h3>
                        </div>
  
                        <div className="service-main-details-content-text pb-4">
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                            A professional reservation system has to be your first priority, as well as website creation. Having just a working booking engine is not enough; you need the best booking engine to not lose even a single booking.
                          </p>
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                            D-EDGE`s direct booking system is appropriate for all property sizes and accommodation types. It doesn’t matter if you have got only one space or 5, 10, twenty or more rooms. Having a website booking engine will enable you to direct communications with your guests and raising trust and loyalty.
                          </p>
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                           You can build and market various promotional offers for your guests, packages, or arrangements for the weekend, summer, or winter through this reservation system. Sell vouchers and additional products and services, as a package with a room or standalone, without a room.
                          </p>

                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                           Also, your inventory for the number of available rooms and your pricing will be updated automatically from one main extranet calendar with just one click. You can rest assured the system is working 24/7 on your behalf.
                          </p>

                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                          D-EDGE`s advanced booking engine got you covered, whether your priority is high conversion rates, integrating the latest technology in hospitality, or finding a user-friendly system.
                          </p>
  
                          
                        </div>
                      </div>
                    </div>
                    <div className="service-main-details-content-title pt-4 pb-3">
                      <h3>BOOKING ENGINE:</h3>
                    </div>
                  </div>
  
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
                    <div className="techno_flipbox mb-30">
                      <div className="techno_flipbox_font">
                        <div className="techno_flipbox_inner">
                          <div className="techno_flipbox_icon">
                            <div className="icon">
                              <i className="flaticon-intelligent"></i>
                            </div>
                          </div>
                          <div className="flipbox_title">
                            <h3>SynXis</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              Are you looking for a hotel booking engine that turns your website into a very powerful and effective sales channel...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/digital-marketing-in-egypt-for-hotels-solutions-synxis-20213013252534.jpg)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="techno_flipbox_inner">
                          <div className="flipbox_title">
                            <h3>SynXis</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              Are you looking for a hotel booking engine that turns your website into a very powerful and effective sales channel...
                            </p>
                          </div>
                          <div className="flipbox_button">
                            <Link to="/SynXis">
                              Read More
                              <i className="fa fa-angle-double-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
                    <div className="techno_flipbox mb-30">
                      <div className="techno_flipbox_font">
                        <div className="techno_flipbox_inner">
                          <div className="techno_flipbox_icon">
                            <div className="icon">
                              <i className="flaticon-intelligent"></i>
                            </div>
                          </div>
                          <div className="flipbox_title">
                            <h3>Nile Cruise Booking Engine</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              Connect Nile Cruises booking engine is the younger brother of connect hotel...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/digital-marketing-in-egypt-for-hotels-solutions-nile-cruise-booking-engine-20212012411399.jpg)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="techno_flipbox_inner">
                          <div className="flipbox_title">
                            <h3>Nile Cruise Booking Engine</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              Connect Nile Cruises booking engine is the younger brother of connect hotel...
                            </p>
                          </div>
                          <div className="flipbox_button">
                            <Link to="/travel-tours">
                              Read More
                              <i className="fa fa-angle-double-right"></i>
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
        </div>
  
        {/*talk to experts section*/}
        <ContactForm />
      </>
    )
}

export default AttractionDEdge
