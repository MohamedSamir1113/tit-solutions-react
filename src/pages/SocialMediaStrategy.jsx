import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
function SocialMediaStrategy() {
  useEffect(() => {
    document.title = "Social Media Strategy";
  }, []);
  return (
    <>
      <BgArea
        title1={`Social Media Strategy`}
        title2={`Social Media Management`}
        path={`/social-media-management`}
      />
      <div className="service-details pages pt-90 pb-50">
        <div className="container">
          <div className="row">
            <div className=" col-lg-4 col-md-5 col-sm-12 col-xs-12">
              <h3 className="pb-15">Our Services:</h3>
              <div className="service-details-pn-list">
                <ul>
                  <li>
                    <Link to="/social-media-marketing">
                      Social Media Marketing
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/social-media-management">
                      Social Media Management
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/hotel-e-commerce">
                      Hotel E-commerce
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/search-engine-optimization">
                      Search Engine Optimization
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/email-marketing">
                      Email Marketing
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/reporting">
                      Reporting
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/hospitality-photography">
                      Hospitality Photography
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/the-hotels-network">
                      The Hotels Network
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/asksuite-hotel-chatbot">
                      Asksuite Hotel Chatbot
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
                          src="assets/images/hotel-social-media-marketing---social-media-marketing-strategy-for-hotels---social-media-marketing-agency-20212510430862.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Hotel Social Media Marketing</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <h4 className="pb-15">
                          Want to generate a real increase in your hotel's
                          direct room selling as well as your hotel's social
                          engagement and following? T.I.T. Solutions is the
                          right choice for you.
                        </h4>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          By creating the social media marketing strategy for
                          hotels, we draw your short and long-term goals,
                          tactics for achieving them, and we choose the best
                          metrics to measure the WHOLE strategy progress. We
                          guarantee a WINING strategy formulation by following a
                          couple of steps:
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                            fontWeight: "700",
                            fontSize: "20px",
                            color: "#333",
                          }}
                        >
                          1) A Bespoke Strategy For Your Hotel Based On
                          S.M.A.R.T. Goals
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We design a complete hotel social media marketing
                          strategy for our clients that deliver what's needed
                          with a clear understanding of their goals and
                          challenges. We also create customized plans for your
                          specific property, achieving the highest R.O.I.
                          possible. ones.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                            fontWeight: "700",
                            fontSize: "20px",
                            color: "#333",
                          }}
                        >
                          2)Tracking Meaningful Metrics
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We focus on the most important metrics for your hotel
                          business, like the number of direct bookings and your
                          overall hotel revenue. ones.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                            fontWeight: "700",
                            fontSize: "20px",
                            color: "#333",
                          }}
                        >
                          3)Learning More About The Guests
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We conduct analysis that helps in setting the hotel
                          guests` persona to identify a high-performing
                          targeting and even use your existing guests' data to
                          design effective custom and lookalike audiences in
                          your hotel's paid campaigns.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                            fontWeight: "700",
                            fontSize: "20px",
                            color: "#333",
                          }}
                        >
                          4)Studying The Competition
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We do our marketing research, creating a social media
                          competitive analysis to represent how your hotel
                          stacks up against others in the industry and surface
                          new opportunities and possible threats.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          With our comprehensive experience and expertise in
                          doing this, we ensure the best results.
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

export default SocialMediaStrategy;
