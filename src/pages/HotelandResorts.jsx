import { useEffect } from "react";
import { Link } from "react-router-dom";
import BgArea from "../components/BgArea";
import ContactForm from "../components/ContactForm";
import SolutionList from "../components/SolutionList";
function HotelandResorts() {
  useEffect(() => {
    document.title = "Hotels and Resorts";
  }, []);
  return (
    <>
      <BgArea
        title1={`Hotels and Resorts`}
        title2={`Website Development`}
        path={`/website-development`}
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
                          src="assets/images/digital-marketing-in-egypt-for-hotels-solutions-hotels-resorts-202120114146833.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Hotels & Resorts</h3>
                      </div>
                      <div className="service-main-details-content-text pb-4">
                        <p>
                          Keep your website up-to-date and user-friendly all the
                          time with the help of our web development experts. We
                          know that all hotels have a website but do the design
                          of your hotel site and images encourage people to book
                          directly? Is your hotel’s website optimized so that
                          customers will actually see you when they search
                          online? That is exactly how we do our job to attract
                          lookers and bookers!
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
                          <Link to="/general-purposes">
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

export default HotelandResorts;
