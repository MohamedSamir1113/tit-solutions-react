import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
function BingAds() {
  useEffect(() => {
    document.title = "Bing Hotel Ads";
  }, []);
  return (
    <>
      <BgArea
        title1={`Bing Ads`}
        title2={`Search Engine Marketing`}
        path={`/search-engine-marketing`}
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
                          src="assets/images/services/bing-hotel-ads.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Bing Hotel Ads</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Reach every possible customer in the right place at
                          the right time, using our effective Bing hotel Ads.
                          While many PPC advertisers consider the search engine
                          platforms as competitors, we make them work best
                          hand-in-hand.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          T.I.T. solutions offers you a powerful Bing ads
                          management for your hotel with real-time results.
                        </p>

                        <div className="py-3">
                          <h4 className="pb-20">
                            Why Bing Ads Matter For Your Business With T.I.T
                            Solutions?
                          </h4>
                          <ul class="list-bullets">
                            <li>
                              We create the Bing ads campaign that guarantees
                              your hotel business great exposure on important
                              platforms; Bing, Yahoo, and AOL.
                            </li>
                            <li>
                              Bing Ads drive more for less money; driving much
                              more leads, traffic, and sales for much less
                              money.
                            </li>
                            <li>
                              The lower cost per click (CPC), and a higher
                              conversion rate on Bing means that your hotel
                              business can easily go up against.
                            </li>
                          </ul>
                        </div>

                        <div className="py-3">
                          <h4 className="pb-20">Bing Ads Services We Offer</h4>
                          <ul class="list-bullets">
                            <li>Market research.</li>
                            <li>Keyword discovery and selection.</li>
                            <li>Campaigns creation and management.</li>
                            <li>Ad Optimizations, monitoring & A/B testing.</li>
                            <li>Conversion tracking.</li>
                            <li>Detailed reporting.</li>
                          </ul>
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
                          <h3>Google Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Managing Google Ads for hotels and building it from
                            scratch is very demanding...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/services/google-hotel-ads.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Google Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Managing Google Ads for hotels and building it from
                            scratch is very demanding...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/google-ads">
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
                            Unlock your business potential, tap into new
                            markets, and grow internationally in the
                            Russian-speaking world with our Yandex ads in
                            Egypt....
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
                            Unlock your business potential, tap into new
                            markets, and grow internationally in the
                            Russian-speaking world with our Yandex ads in
                            Egypt...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/yandex-ads">
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

export default BingAds;
