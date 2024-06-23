import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ServicesList from "../components/ServicesList";
function DigitalMarketingReporting() {
  useEffect(() => {
    document.title = "Digital Marketing Reporting";
  }, []);
  return (
    <>
      <BgArea
        title1={`Digital Marketing Reporting`}
        title2={`Reporting`}
        path={`/reporting`}
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
                          src="assets/images/digital-marketing-reporting---digital-marketing-analytics---hotel-digital-marketing-reports-20212510140712.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Digital Marketing Reporting</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <h4 className="pb-15"
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                          }}
                        >
                          It is all about digital marketing reporting.
                        </h4>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We provide you with consultancy in choosing the best
                          tool to use for your digital marketing reporting
                          objectives. Do you need to track bookings? from where
                          they occur? When do they occur? Which nationalities?
                          It is all possible with T.I.T smart digital solutions
                          and endless effective tools.
                        </p>

                        <div className="py-3">
                          <h4 className="pb-20">
                            We will help you in the following:
                          </h4>
                          <ul class="list-bullets">
                            <li>
                              Google Analytics Implementation and Consultancy.
                            </li>
                            <li>Heat Maps Implementation and Consultancy.</li>
                            <li>SEO reporting.</li>
                            <li>Competitors Intelligence Reporting.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-main-details-content-title pt-4 pb-3">
                    <h3>REPORTING:</h3>
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
                          <h3>Google Analytics Implementation</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We align your business goals with the implementation...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/google-analytics-for-hotels---google-website-analytics---hotel-website-analytics-20212510265317.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Google Analytics Implementation</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We align your business goals with the implementation..
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/google-analytics-implementation">
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
                          <h3>Website 360 Reporting</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We offer you a 360 website reporting that is
                            designed for customizable data views, powerful
                            analysis, and actionable information...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/google-analytics-360---reporting-360-202125104654433.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Website 360 Reporting</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We offer you a 360 website reporting that is
                            designed for customizable data views, powerful
                            analysis, and actionable information..
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/website-360-reporting">
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

export default DigitalMarketingReporting;
