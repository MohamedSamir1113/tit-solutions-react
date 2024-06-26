import { useEffect } from "react";
import { Link } from "react-router-dom";
import BgArea from "../components/BgArea";
import ContactForm from "../components/ContactForm";
import DEdgeSolutionsList from "../components/DEdgeSolutionsList";
function GuestLoyalty() {
    useEffect(() => {
        document.title = "Guest Loyalty";
      }, []);
  return (
    <>
      <BgArea
        title1={`Guest Loyalty`}
        title2={`Guest Management`}
        path={`/d-edge/guest-management`}
      />
      <div className="service-details pages pt-90 pb-50">
        <div className="container">
          <div className="row">
            <DEdgeSolutionsList/>

            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="service-main-details">
                    <div className="service-main-details-inner">
                      <div className="service-main-details-inner-thumb">
                        <img
                          src="assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-guest-loyalty-2021210307639.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Guest Loyalty</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          A hotel guest loyalty program can be even more
                          advantageous than acquisition. It can attract new
                          clients, boost hotel occupancy rates during off-peak
                          periods, and work as an efficient Marketing strategy
                          when well planned.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          This is exactly why a guest loyalty program for every
                          hotel is a Must! The D-EDGE Loyalty program will help
                          you build your guests' profiles and analyze their data
                          within your property management system. Once you know
                          what your guests are after, you can use that
                          information wisely and make it work for you.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          By using D-EDGE Guest Loyalty, you can satisfy the
                          needs and wants of all potential guests – even the
                          ones who won't necessarily speak your language.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Free yourself from managing everything manually; your
                          Loyalty Program will do all the hard work for you!
                          Once everything is set up, the platform runs itself
                          and rewards guests with their dedicated special
                          incentives, privileges, or rate programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="service-main-details-content-title pt-4 pb-3">
                    <h3>GUEST MANAGEMENT:</h3>
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
                          <h3>Hotel CRM</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Hospitality CRM gives several marketing advantages by leveraging data, automation...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-hotel-crm-2021210335489.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Hotel CRM</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Hospitality CRM gives several marketing advantages by leveraging data, automation...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/d-edge/guest-management/hotel-crm">
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
                          <h3>Guest Feedback</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Gain valuable insights from your hotel guest
                            feedback provided by D-Edge through customizable
                            pre-arrival and post-stay surveys...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-guest-feedback-20212101711225.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Guest Feedback</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Gain valuable insights from your hotel guest
                            feedback provided by D-Edge through customizable
                            pre-arrival and post-stay surveys...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/d-edge/guest-management/guest-feedback">
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

export default GuestLoyalty;
