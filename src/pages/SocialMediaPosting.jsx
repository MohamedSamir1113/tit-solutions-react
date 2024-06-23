import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ServicesList from "../components/ServicesList";
function SocialMediaPosting() {
  useEffect(() => {
    document.title = "Social Media Posting";
  }, []);
  return (
    <>
      <BgArea
        title1={`Social Media Posting`}
        title2={`Social Media Management`}
        path={`/social-media-management`}
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
                          src="assets/images/social-media-content-for-hotels---social-media-posting-strategy---hotel-social-media-202125104144302.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Social Media Content For Hotels</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          A Strong presence on different social media platforms
                          is essential for all hotels and for the hospitality
                          field. To stay competitive in today's hotel social
                          media market, you need to distinguish your brand with
                          social media content for hotels that is engaging,
                          entertaining, and unique.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Here at T.I.T Solutions, we offer you not only
                          engaging social media content and posting tactics but
                          also content that would drive bookings from your own
                          social media accounts and increase your conversion
                          rate.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          By implementing a customized social media posting
                          strategy for your own hotel, we guarantee your hotel
                          content to go viral; we have endless ideas for your
                          content posting strategy:
                        </p>

                        <ul class="list-bullets">
                          <li>Posting the hotel's experiences.</li>
                          <li>Posting the latest hotel news.</li>
                          <li>
                            Property highlights like posts about special
                            packages.
                          </li>
                          <li>The offered amenities.</li>
                          <li>Information about loyalty programs.</li>
                          <li>
                            Questions that can be leveraged to boost credibility
                            and win bookings.
                          </li>
                        </ul>
                        <p>
                          Unleash your growth potential; we plan, monitor, and
                          analyze your accounts in one place.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-main-details-content-title pt-4 pb-3">
                    <h3>SOCIAL MEDIA MANAGEMENT:</h3>
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
                          <h3>Social Media Strategy</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            By creating the social media marketing strategy for
                            hotels, we draw your short and long-term goals,
                            tactics for achieving them
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back"
                      style={{
                        backgroundImage:
                          "url(assets/images/hotel-social-media-marketing---social-media-marketing-strategy-for-hotels---social-media-marketing-agency-20212510430862.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Social Media Strategy</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            By creating the social media marketing strategy for
                            hotels, we draw your short and long-term goals,
                            tactics for achieving them
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/social-media-strategy">
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
                          <h3>Social Media Graphics</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Do you need those graphics for your social media
                            posting? Google Display ads?...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/social-media-graphics---hotels-branding---test-202125958612.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Social Media Graphics</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Do you need those graphics for your social media
                            posting? Google Display ads?...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/social-media-graphics">
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

export default SocialMediaPosting;
