import { useEffect } from "react";
import { Link } from "react-router-dom";
import BgArea from "../components/BgArea";
import ContactForm from "../components/ContactForm";
import DEdgeSolutionsList from "../components/DEdgeSolutionsList";
function HotelCRM() {
  useEffect(() => {
    document.title = "Hotel CRM";
  }, []);
  return (
    <>
      <BgArea
        title1={`Hotel CRM`}
        title2={`Guest Management`}
        path={`/guest-management`}
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
                          src="assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-hotel-crm-2021210335489.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Hotel CRM</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Hospitality CRM gives several marketing advantages by
                          leveraging data, automation, intelligent segmentation,
                          and marketing tools based on guests` personalization.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          This way, from the moment your guests arrive, they can
                          count on that personalized touch that is the
                          foundation of delivering five-star guest satisfaction.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          D-EDGE CRM for hotels offers next-level advantages to
                          all sorts of businesses in the hospitality industry,
                          from major international hotel chains to boutique
                          hotels.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          It said that "The relationship between a guest and a
                          hotel begins well before check-in." This CRM helps
                          manage your guest journey through all its steps;
                          visiting your site, contacting your team, enjoying
                          their stay, and after they've gone. Remember, it's all
                          about delivering personalized experiences.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Also, CRM hotels often has tools dedicated to loyalty
                          programs, targeting guests with special offers.
                          Post-stay surveys are also showing your customers your
                          dedication to constant improvement.
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
                          <h3>Guest Loyalty</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            A hotel guest loyalty program can be even more
                            advantageous than acquisition...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-guest-loyalty-2021210307639.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Guest Loyalty</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            A hotel guest loyalty program can be even more
                            advantageous than acquisition...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/guest-loyalty">
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
                          <Link to="/guest-feedback">
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

export default HotelCRM;
