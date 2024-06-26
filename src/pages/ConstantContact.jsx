import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import BgArea from "../components/BgArea";
import { useEffect } from "react";
import ServicesList from "../components/ServicesList";

function ConstantContact() {
  useEffect(() => {
    document.title = "Constant Contact";
  }, []);
  return (
    <>
      <BgArea
        title1={`Constant Contact`}
        title2={`Email Marketing`}
        path={`/services/email-marketing`}
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
                          src="assets/images/constant-contact-202125101153853.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Email Marketing For Hotels</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <h4 className="py-4">Engagement Marketing Solutions</h4>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Constant contact email marketing is a guaranteed
                          solution for hotels' success formula that helps
                          organizations to create and grow customer
                          relationships in today's socially connected world.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Through its unique combination of email marketing
                          strategy and personalized coaching, the T.I.T.
                          Solutions agency offers email marketing services that
                          help small businesses and associations connect and
                          engage with their next great customer, client, or
                          member.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We do create successful email marketing that can
                          benefit you in the best possible ways:
                        </p>

                        <ul class="list-bullets">
                          <li>
                            We drive revenue & profit for your individual hotel
                            or chain.
                          </li>
                          <li>
                            We grow subscribers and nurture them with your best
                            hotel deals.
                          </li>
                          <li>
                            We increase traffic to your hotel, resort, or motel
                            website.
                          </li>
                          <li>
                            We increase your hotel revenue through higher room
                            bookings.
                          </li>
                          <li>
                            We improve customer retention, which will build a
                            long-term relationship with your hotel.
                          </li>
                          <li>
                            We create & increase your hotel brand awareness
                            among a wide range of people.
                          </li>
                        </ul>
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
                          <h3>Manage Email Marketing</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            With Constant Contact as our partner, we have a wide
                            range of services to offer you and your hotel
                            business...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back"
                      style={{
                        backgroundImage:
                          "url(assets/images/email-marketing-for-hotels---email-marketing-services---hospitality-email-marketing-2021251032920.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Manage Email Marketing</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            With Constant Contact as our partner, we have a wide
                            range of services to offer you and your hotel
                            business...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/services/email-marketing/manage-email-marketing">
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

export default ConstantContact;
