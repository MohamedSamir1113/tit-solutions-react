import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import SolutionList from "../components/SolutionList";
function NileCruiseBookingEngine() {
  useEffect(function () {
    document.title = "Nile Cruise Booking Engine";
  }, []);
  return (
    <>
      <BgArea
        title1={`Nile Cruise Booking Engine`}
        title2={`Booking Engine`}
        path={`/solutions/booking-engine`}
      />
      <div className="service-details pages pt-90 pb-50">
        <div className="container">
          <div className="row">
            <SolutionList/>

            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="service-main-details">
                    <div className="service-main-details-inner">
                      <div className="service-main-details-inner-thumb">
                        <img
                          src="assets/images/digital-marketing-in-egypt-for-hotels-solutions-nile-cruise-booking-engine-20212012411399.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Nile Cruise Booking Engine</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Connect Nile Cruises booking engine is the younger
                          brother of connect hotel booking engine. Inhiriting
                          all the user freindly features from his older brother;
                          Nile cruises booking engine features the ability to
                          deal with reservations based on the itenary of each
                          Nile cruise seperately.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          You will be able to create seasons and different
                          properties with different itenaries to make dealing
                          with online reservations a peice of cake for your
                          sales team.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Connect Nile Cruises booking engine can be sued as a
                          central sales office that updates the availability
                          based on real time status making sales online a very
                          easy task.
                        </p>
                      </div>

                      <div className="py-3">
                        <h4 className="mb-20">Some of Our Services</h4>
                        <ul class="list-bullets">
                          <li>B2C Cruise online reservation system</li>
                          <li>B2B Cruises - Travel Agent</li>
                          <li>Mobile Solution</li>
                          <li>CMS</li>
                        </ul>
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
                          <h3>Attraction D-Edge</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            A professional booking engine has to be your first
                            priority, as well as website creation...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/digital-marketing-in-egypt-for-hotels-solutions-attraction-d-edge-202130132820642.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Attraction D-Edge</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            A professional booking engine has to be your first
                            priority, as well as website creation...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/solutions/booking-engine/attraction-d-edge">
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
                          <h3>SynXis</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Are you looking for a hotel booking engine that
                            turns your website into a very powerful and
                            effective sales channel...
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
                            Are you looking for a hotel booking engine that
                            turns your website into a very powerful and
                            effective sales channel...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/solutions/booking-engine/SynXis">
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
  );
}

export default NileCruiseBookingEngine;
