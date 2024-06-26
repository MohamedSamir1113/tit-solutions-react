import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import SolutionList from "../components/SolutionList";
function NileCruises() {
  useEffect(() => {
    document.title = "Nile Cruises";
  }, []);
  return (
    <>
      <BgArea
        title1={`Nile Cruises`}
        title2={`Website Development`}
        path={`/solutions/website-development`}
      />
      <div className="service-details pages pt-90 pb-50">
        <div className="container">
          <div className="row">
         <SolutionList/>

            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="service-main-details">
                    <div className="service-main-details-inner">
                      <div className="service-main-details-inner-thumb">
                        <img
                          src="assets/images/digital-marketing-in-egypt-for-hotels-solutions-nile-cruises-202130133148568.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Nile Cruises</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Join our satisfied clients and let us create the
                          responsive website that you dream about for your Nile
                          Cruise business! We know your industry well and your
                          particular needs in a website. Our web developers team
                          is extremely experienced and trained for creating
                          tailored websites like yours!
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Do you want to build a website from scratch or
                          renovate your existing one? We can help to make sure
                          that your business stands apart from competitors in
                          your industry with an outstanding website; we also
                          increase your Nile cruise packages demand through a
                          customer-centric and data-driven approach.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We know that your business needs an engaging website
                          to drive bookings and to be your effective tool to
                          incorporate all digital marketing aspects like SEO,
                          PPC, content marketing, and more to yield outstanding
                          results.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Invest in your site’s success with T.I.T Solutions
                          services to get a website that has all these listed
                          features:
                        </p>

                        <div className="py-3">
                          <ul class="list-bullets">
                            <li>Custom.</li>
                            <li>User friendly.</li>
                            <li>Responsive.</li>
                            <li>
                              Optimized for search engine optimization (SEO).
                            </li>
                            <li>Secure (HTTPS).</li>
                            <li>Professionally styled.</li>
                            <p>
                              Ready to create a website that drives revenue?
                              Then contact us now.
                            </p>
                          </ul>
                        </div>
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
                          <Link to="/solutions/website-development/hotels-resorts">
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
                          <Link to="/solutions/website-development/travel-tours">
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
                          <h3>General Purposes</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Creating customized websites to meet unique business
                            requirements is an essential asset to any
                            organization that wants to generate...{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/digital-marketing-in-egypt-for-hotels-solutions-general-purposes-202120115030332.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>General Purposes</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Creating customized websites to meet unique business
                            requirements is an essential asset to any
                            organization that wants to generate...{" "}
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/solutions/website-development/general-purposes">
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

export default NileCruises;
