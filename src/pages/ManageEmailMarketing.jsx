import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import BgArea from "../components/BgArea";
import { useEffect } from "react";
import ServicesList from "../components/ServicesList";
function ManageEmailMarketing() {
  useEffect(() => {
    document.title = "Manage Email Marketing";
  }, []);
  return (
    <>
      <BgArea
        title1={`Manage Email Marketing`}
        title2={`Email Marketing`}
        path={`/email-marketing`}
      />
      <div className="service-details pages pt-90 pb-50">
        <div className="container">
          <div className="row">
           <ServicesList/>

            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="service-main-details">
                    <div className="service-main-details-inner">
                      <div className="service-main-details-inner-thumb">
                        <img
                          src="assets/images/email-marketing-for-hotels---email-marketing-services---hospitality-email-marketing-2021251032920.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Email Marketing For Hotels</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          With Constant Contact as our partner, we have a wide
                          range of services to offer you and your hotel
                          business. Including initial engagement services such
                          as setting up your account or designing the first
                          Email Marketing template for you to ongoing
                          hospitality email marketing and social media outreach
                          management and execution services.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We help you grow your contact list using Email
                          Marketing For Hotel’s built-in Forward-to-Friend and
                          Join My Mailing List features. We also manage your
                          guests’ bounce and unsubscribe requests and allow you
                          to segment mailing lists to deliver content relevant
                          to specific audiences.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Our experienced team will also show your hotel`s email
                          marketing results in real-time, detailing who has
                          received your email, who has opened it, and who has
                          clicked on which link for a better understanding.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          And finally, to ensure your messages are delivered
                          exactly as we have designed them, Email Marketing from
                          Constant Contact templates are format-tested across
                          popular email programs, including Outlook and Gmail,
                          among others. This, combined with sophisticated
                          anti-spam checks and balances, ensure messages avoid
                          ISP blocking -- all resulting in an average delivery
                          rate of 97 percent.
                        </p>
                      </div>

                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3 className="text-capitalize">EMAIL MARKETING:</h3>
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
                          <h3>Constant Contact</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Constant contact email marketing is a guaranteed solution for hotels' success formula that helps organizations...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back"
                      style={{
                        backgroundImage:
                          "url(assets/images/constant-contact-202125101153853.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Constant Contact</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Constant contact email marketing is a guaranteed solution for hotels' success formula that helps organizations...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/constant-contact">
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

export default ManageEmailMarketing;
