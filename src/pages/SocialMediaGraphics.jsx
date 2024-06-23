import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ServicesList from "../components/ServicesList";
function SocialMediaGraphics() {
  useEffect(() => {
    document.title = "Social Media Graphics";
  }, []);
  return (
    <>
      <BgArea
        title1={`Social Media Graphics`}
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
                          src="assets/images/social-media-graphics---hotels-branding---test-202125958612.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Social Media Design Services</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <h4 className="pb-15">
                          We let the art meet the words!
                        </h4>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          No matter how good your social media marketing efforts
                          are, you cannot meet the goals you have set for your
                          hotel business without good graphics.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Good graphics can help your hotel business to
                          reinforce the brand and tell its story. T.I.T.
                          Solutions pays great attention to offer engaging
                          social media design services for your hotel. Taking
                          care of the nature of each platform and its specific
                          needs.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Do you need those graphics for your social media
                          posting? Google Display ads? Instagram? or Facebook
                          ads? Whatever your requirements are, we specialize in
                          hotels branding, and we can create a whole identity
                          for your hotel, including logos, templates, and many
                          other visual assets for hotel chains, individual
                          hotels, resorts, and Hotels' outlets.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          At T.I.T. Solutions, our aim is to deliver a design
                          that you can stand out from the crowd with.
                          Communicate with your audience visually now, and let
                          us help you!
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
                          <h3>Social Media Posting</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            By implementing a customized social media posting
                            strategy for your own hotel, we guarantee your hotel
                            content to go viral...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/social-media-content-for-hotels---social-media-posting-strategy---hotel-social-media-202125104144302.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Social Media Posting</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            By implementing a customized social media posting
                            strategy for your own hotel, we guarantee your hotel
                            content to go viral...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/social-media-posting">
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

export default SocialMediaGraphics;
