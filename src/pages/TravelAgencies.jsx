import { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import BgArea from "../components/BgArea";
function TravelAgencies() {
    useEffect(function () {
        document.title = "Travel Agencies";
      }, []);
    return (
        <>
        <BgArea
          title1={`Travel Agencies`}
          title2={`Industries`}
          path={`/industries`}
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
                          <img src="assets/images/travelagency.jpg" alt="" />
                        </div>
                        <div className="service-main-details-content-title pt-4 pb-3">
                          <h3>Travel Agencies</h3>
                        </div>
  
                        <div className="service-main-details-content-text pb-4">
                       
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                            Achieving an exceptional online presence through
                            effective online activities after treating your guests
                            well is the most important thing to do for your hotel
                            business. With our unparalleled combination of digital
                            expertise and deep knowledge of the hospitality
                            sector, we offer you comprehensive packages of digital
                            marketing & web development services so that hoteliers
                            can rest easy knowing that nothing will be missed.
                          </p>
                        </div>
  
                        <div className="service-main-details-content-text pb-4">
                          
  
                          <div style={{ marginLeft: "10px" }}>
                            <div>
                              <h4 className="pb-10" style={{ color: "#ff9000" }}>
                                Website Designing:
                              </h4>
                              <p
                                style={{
                                  margin: "0 0 15px",
                                  fontFamily: "open sans, sans-serif",
                                  lineHeight: "31px",
                                }}
                              >
                                is to ensure that your website never goes out of date. We aim to simplify the lives of your employees by making website management and updates to your site easier and more accessible than they have ever been before.
                              </p>
                            </div>
  
                            <div>
                              <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              Online Payment Service:
                              </h4>
                              <p
                                style={{
                                  margin: "0 0 15px",
                                  fontFamily: "open sans, sans-serif",
                                  lineHeight: "31px",
                                }}
                              >
                                With integration with Arab African International Bank & National Bank Of Egypt (Al Ahly E-Shopping, we offer you the fastest and safest payment service that is highly secured for both you and your client.
                              </p>
                            </div>
  
                            <div>
                              <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              Email Marketing:
                              </h4>
                              <p
                                style={{
                                  margin: "0 0 15px",
                                  fontFamily: "open sans, sans-serif",
                                  lineHeight: "31px",
                                }}
                              >
                                Engage with your clients through personalized & targeted email marketing as it helps you on building strong relationships with clients, and selling any type of products or offering any type of services.
                              </p>
                            </div>
  
                            <div>
                              <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              TripAdvisor Management:
                              </h4>
                              <p
                                style={{
                                  margin: "0 0 15px",
                                  fontFamily: "open sans, sans-serif",
                                  lineHeight: "31px",
                                }}
                              >
                               As TripAdvisor is the largest Social Website, we will help you optimize and manage TripAdvisor pages. We will train your staff to react faster and professionally to incoming comments and how to process the feedback into actual improvements. Along with Linking your TripAdvisor to your website and your Facebook business page
                              </p>
                            </div>

                            <div>
                              <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              Social Media Campaigns:
                              </h4>
                              <p
                                style={{
                                  margin: "0 0 15px",
                                  fontFamily: "open sans, sans-serif",
                                  lineHeight: "31px",
                                }}
                              >
                              Social media is controlling the world and we control Social Media. With our dedicated up-to-date team, we provide you with the best strategies that raises your ROI.
                              </p>
                            </div>

                            <div>
                              <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              Facebook Ads:
                              </h4>
                              <p
                                style={{
                                  margin: "0 0 15px",
                                  fontFamily: "open sans, sans-serif",
                                  lineHeight: "31px",
                                }}
                              >
                             With the perfect strategy, we can reach your client at his door step wherever he is.
                              </p>
                            </div>

                            <div>
                              <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              Google Ads:
                              </h4>
                              <p
                                style={{
                                  margin: "0 0 15px",
                                  fontFamily: "open sans, sans-serif",
                                  lineHeight: "31px",
                                }}
                              >
                            Google AdWords is Google's main advertising system that will allow you to bid on certain keywords and appear in prominent positions on Google's search results. It is the leading and most effective Pay Per Click marketing platform available for advertising on Google's Search Results. You set your advertising budget and only pay for positive clicks to your desired landing pages.
                              </p>
                            </div>

                            <div>
                              <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              Reports:
                              </h4>
                              <p
                                style={{
                                  margin: "0 0 15px",
                                  fontFamily: "open sans, sans-serif",
                                  lineHeight: "31px",
                                }}
                              >
                            A full detailed report with all the results and positive impact that will show you a big difference in your results.
                              </p>
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
        </div>
  
        {/*talk to experts section*/}
        <ContactForm />
      </>
    )
}

export default TravelAgencies
