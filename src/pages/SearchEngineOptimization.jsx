import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
function SearchEngineOptimization() {
  useEffect(() => {
    document.title = "Search Engine Optimization";
  }, []);
  return (
    <>
      <BgArea
        title1={`Search Engine Optimization`}
        title2={`Services`}
        path={`/services`}
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
                          src="assets/images/digital-marketing-in-egypt-for-hotels-services-search-engine-optimization-202120134041915.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Search Engine Optimization</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px;",
                            fontFamily: "open sans, sans-serif;",
                            lineHeight: "31px",
                          }}
                        >
                          We provide{" "}
                          <span
                            style={{
                              fontWeight: "700",
                              fontSize: "18px",
                              color: "#333",
                            }}
                          >
                            SEO
                          </span>{" "}
                          consulting services that give your Website a strong
                          competitive push in the search engine results. We dig
                          deep into your busness to create you a tailored SEO
                          package based on your specific needs and budget. Our
                          SEO services are designed to take you from A to Z.
                          Starting from creating a strategy that makes sense,
                          help you analyze your competitors, and search which
                          keywords are important to achieve success.
                        </p>

                        <h4 className="pb-15">
                          Our SEO Consulting services include:
                        </h4>

                        <ul class="list-bullets">
                          <li>Keywords Research and Selection</li>
                          <li>Competitor Analysis</li>
                          <li>Title and Meta Tags</li>
                          <li>HTML Code Cleanup and Optimization</li>
                          <li>Image and Hyperlink Optimization</li>
                          <li>Customized 404 Pages</li>
                          <li>Robots.txt Optimization</li>
                          <li>Search Engine Friendly URL Creation</li>
                          <li>GOOGLE, YAHOO! & BING Site Map Creation</li>
                          <li>Creating Social Media Profiles</li>
                          <li>GOOGLE Analytics Set Up and Integration</li>
                          <li>Manual Submissions to Free Web Directories</li>
                        </ul>
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

export default SearchEngineOptimization;
