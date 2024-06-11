import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
function GeneralPurposes() {
    useEffect(() => {
        document.title = "General Purposes";
      }, []);
    return (
        <>
        <BgArea
          title1={`General Purposes`}
          title2={`Website Development`}
          path={`/website-development`}
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
                            src="assets/images/digital-marketing-in-egypt-for-hotels-solutions-general-purposes-202120115030332.jpg"
                            alt=""
                          />
                        </div>
                        <div className="service-main-details-content-title pt-4 pb-3">
                          <h3>General Purposes</h3>
                        </div>
  
                        <div className="service-main-details-content-text pb-4">
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                            Creating customized websites to meet unique business requirements is an essential asset to any organization that wants to generate growth.
                          </p>
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                            T.I.T Solutions offers next-generation web development and designing services to help you sail effortlessly through the constantly evolving technological changes.
                          </p>
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                           We have many years of experience in developing web applications, combining our developer’s skills with their long experience to suit your business needs and your custom requirements.
                          </p>
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                            Our website development solutions can offer your visitors the best possible user experience. Whether you need a web design created from scratch to satisfy your industry needs or want a performance-optimized E-commerce website, you can always talk to us.
                          </p>
  
                          
                        </div>
                      </div>
                    </div>
                    <div className="service-main-details-content-title pt-4 pb-3">
                      <h3>WEBSITE DEVELOPMENT:</h3>
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
                            <h3>Hotels and Resorts</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              We offer unique & custom made Website Designing &
                              Development for hospitality sector. Our solutions
                              cover Travel agents, hotels...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/digital-marketing-in-egypt-for-hotels-solutions-hotels-resorts-202120114146833.jpg)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="techno_flipbox_inner">
                          <div className="flipbox_title">
                            <h3>Hotels and Resorts</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              We offer unique & custom made Website Designing &
                              Development for hospitality sector. Our solutions
                              cover Travel agents, hotels...
                            </p>
                          </div>
                          <div className="flipbox_button">
                            <Link to="/hotels-resorts">
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
                            <h3>Travel & Tours</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              We offer unique & custom made Website Designing &
                              Development for hospitality sector. Our solutions
                              cover Travel agents, hotels...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/digital-marketing-in-egypt-for-hotels-solutions-travel-tours-202120114432949.jpg)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="techno_flipbox_inner">
                          <div className="flipbox_title">
                            <h3>Travel & Tours</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              We offer unique & custom made Website Designing &
                              Development for hospitality sector. Our solutions
                              cover Travel agents, hotels...
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
                          <h3>Nile Cruises</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Join our satisfied clients and let us create the
                            responsive website that you dream about for your
                            Nile Cruise business...{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/digital-marketing-in-egypt-for-hotels-solutions-nile-cruises-202130133148568.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Nile Cruises</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Join our satisfied clients and let us create the
                            responsive website that you dream about for your
                            Nile Cruise business...{" "}
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/nile-cruises">
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

export default GeneralPurposes
