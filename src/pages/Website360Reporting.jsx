import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ServicesList from "../components/ServicesList";
function Website360Reporting() {
  useEffect(() => {
    document.title = "Website 360 Reporting";
  }, []);
  return (
    <>
      <BgArea
        title1={`Website 360 Reporting`}
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
                          src="assets/images/google-analytics-360---reporting-360-202125104654433.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Google Analytics 360</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Great data is that can be used to improve your
                          business; with T.I.T Solutions, get the vital data you
                          need, whenever and however you need it!
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We offer you google analytics 360 reports designed for
                          customizable data views, powerful analysis, and
                          actionable information.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Identify your audience and know who visited your
                          website, and turn them into engaged shoppers. We track
                          all visitors, filtering out irrelevant parties, so you
                          only get leads that are relevant for you:
                        </p>

                        <div className="py-3">
                          <ul class="list-bullets">
                            <li>When they last visited your website</li>
                            <li>The specific pages they visited</li>
                            <li>How long they spent on your site</li>
                            <li>The marketing channel they came from</li>
                            <li>The action they took on your website</li>
                          </ul>
                        </div>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Our intuitive, easy-to-read, and seamless reports will
                          help you gain the knowledge and the insights you need
                          about what is happening on your site and which online
                          activities matter the most. With our reporting 360
                          advanced services, you can manage everything,
                          including Facebook Ads, Google Ads, LinkedIn Ads,
                          Instagram, and you can easily connect to the required
                          marketing channels within minutes.
                        </p>
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
                            We align your business goals with the
                            implementation...
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
                            We align your business goals with the
                            implementation..
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
                          <h3>Digital Marketing Reporting</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We provide you with consultancy in choosing the best tool to use for your digital marketing reporting objectives...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/digital-marketing-reporting---digital-marketing-analytics---hotel-digital-marketing-reports-20212510140712.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Digital Marketing Reporting</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We provide you with consultancy in choosing the best tool to use for your digital marketing reporting objectives...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/digital-marketing-reporting">
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

export default Website360Reporting;
