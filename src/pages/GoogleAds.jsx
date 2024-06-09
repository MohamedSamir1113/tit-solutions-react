import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
function GoogleAds() {
    useEffect(() => {
        document.title = "Google Hotel Ads";
      }, []);
    return (
        <>
        <BgArea
          title1={`Google Ads`}
          title2={`Search Engine Marketing`}
          path={`/search-engine-marketing`}
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
                            src="assets/images/services/google-hotel-ads.jpg"
                            alt=""
                          />
                        </div>
                        <div className="service-main-details-content-title pt-4 pb-3">
                          <h3>Google Hotel Ads</h3>
                        </div>
  
                        <div className="service-main-details-content-text pb-4">
                          <p
                            style={{
                              margin: "0 0 15px;",
                              fontFamily: "open sans, sans-serif;",
                              lineHeight: "31px",
                            }}
                          >
                            Managing Google Ads for hotels and building it from scratch is very demanding, which usually ends with business owners and managers leaving this magnificent tool to easier platforms.
                          </p>
                          
                          <div className="py-3">
                          <h4 className="pb-20">We can help you in the following; in the process of creating your hotel campaigns google ads:</h4>
                          <ul class="list-bullets">
                            <li>Landing Page / Website Analysis</li>
                            <li>Landing Page A/B Testing</li>
                            <li>Align Your Value Proposition & Sales Funnel</li>
                            <li>Advanced Keyword Research and Campaign Setup</li>
                            <li>Creative Text Ad Development</li>
                            <li>PPC Account Settings</li>
                            <li>PPC Bid Management & ROI Tracking</li>
                            <li>Mobile advertising</li>
                            <li>Leverage The Power of Remarketing</li>
                            <li>Display: The Internet’s Cost-Effective Answer to Billboards</li>
                            <li>Reporting</li>
                            </ul>
                            <p>By taking advantage of our Google Ads services for hotels, we guarantee to get your hotel more direct bookings and achieving your dream ROI.</p>
                        </div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="service-main-details-content-title pt-4 pb-3">
                      <h3>SEARCH ENGINE MARKETING:</h3>
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
                            <h3>Bing Ads</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              T.I.T. solutions agency offers you powerful Bing hotel ads management with real-time results...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/services/bing-hotel-ads.jpg)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="techno_flipbox_inner">
                          <div className="flipbox_title">
                            <h3>Bing Ads</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              T.I.T. solutions agency offers you powerful Bing hotel ads management with real-time results...
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
                            <h3>Yandex Ads</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                            Unlock your business potential, tap into new markets, and grow internationally in the Russian-speaking world with our Yandex ads in Egypt....
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/services/yandex-ads-in-egypt.jpg)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="techno_flipbox_inner">
                          <div className="flipbox_title">
                            <h3>Yandex Ads</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                            Unlock your business potential, tap into new markets, and grow internationally in the Russian-speaking world with our Yandex ads in Egypt...
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
  
                  
                </div>
  
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="service-main-details-content-title pt-4 pb-3">
                      <h3>Other Services:</h3>
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
                            <h3>Booking Engine</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              With a user-friendly booking engine that works as a sales channel for your hotel, you can maximize your direct bookings easily...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/solutions/s2.jpg)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="techno_flipbox_inner">
                          <div className="flipbox_title">
                            <h3>Booking Engine</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              With a user-friendly booking engine that works as a sales channel for your hotel, you can maximize your direct bookings easily...
                            </p>
                          </div>
                          <div className="flipbox_button">
                            <Link to="/booking-engine">
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
                            <h3>Web Check-In Solution</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              During this challenging time, Hotels & Resorts need
                              to implement a solution to facilitate a smooth,
                              fast, and paperless Check-In for the guests...{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/digital-marketing-in-egypt-for-hotels-solutions-web-check-in-solution-202120111949888.jpg)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="techno_flipbox_inner">
                          <div className="flipbox_title">
                            <h3>Web Check-In Solution</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              During this challenging time, Hotels & Resorts need
                              to implement a solution to facilitate a smooth,
                              fast, and paperless Check-In for the guests...{" "}
                            </p>
                          </div>
                          <div className="flipbox_button">
                            <Link to="/web-check-in-solution">
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

export default GoogleAds
