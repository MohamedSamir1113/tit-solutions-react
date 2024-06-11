import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
function PriceMonitoring() {
  useEffect(function () {
    document.title = "Price Monitoring";
  }, []);
  return (
    <>
      <BgArea
        title1={`Price Monitoring`}
        title2={`Data Intelligence`}
        path={`/data-intelligence`}
      />
      <div className="service-details pages pt-90 pb-50">
        <div className="container">
          <div className="row">
            <div className=" col-lg-4 col-md-5 col-sm-12 col-xs-12">
              <h3 className="pb-15">OTHER D-EDGE SOLUTIONS</h3>
              <div className="service-details-pn-list">
                <ul>
                  <li>
                    <Link to="/guest-management">
                      Guest Management
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/data-intelligence">
                      Data Intelligence
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
                          src="assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-price-monitoring-20212103906.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Price Monitoring</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Your hotel`s pricing is one of the most important
                          factors that make your guests choose you again and
                          again; that is why you need to have a clear pricing
                          strategy to be monitored efficiently and wisely!
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          D-EDGE Price Monitoring solution helps your property
                          to stay on the top of your competition set. By using
                          this smart solution, you will receive automatic
                          notifications of what others do in your market, for
                          example, if your competitors change their pricing
                          strategies, to ensure you are competitive.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We put you in control of everything that happens in
                          your market. Is it a high season? OFF-season? a long
                          weekend? Making sure you are monitoring your daily
                          prices is a MUST, and we help you in doing so with our
                          D-EDGE`s easy-to-use tool all at a glance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="service-main-details-content-title pt-4 pb-3">
                    <h3>DATA INTELLIGENCE:</h3>
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
                          <h3>Price Recommendation</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Do you need some help with pricing your hotel rooms?
                            D-EDGE automatic algorithm can...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-price-recommendation-20212104435879.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Price Recommendation</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Do you need some help with pricing your hotel rooms?
                            D-EDGE automatic algorithm can...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/price-recommendation">
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
                          <h3>Performance Analysis</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            The clear-cut measurability of KPIs is alluring.
                            Occupancy percentages, profit indicators, return on
                            investment...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-performance-analysis-20212104618276.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Performance Analysis</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            The clear-cut measurability of KPIs is alluring.
                            Occupancy percentages, profit indicators, return on
                            investment...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/performance-analysis">
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

export default PriceMonitoring;
