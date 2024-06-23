import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ServicesList from "../components/ServicesList";
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
           <ServicesList/>

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
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Managing Google Ads for hotels and building it from
                          scratch is very demanding, which usually ends with
                          business owners and managers leaving this magnificent
                          tool to easier platforms.
                        </p>

                        <div className="py-3">
                          <h4 className="pb-20">
                            We can help you in the following; in the process of
                            creating your hotel campaigns google ads:
                          </h4>
                          <ul class="list-bullets">
                            <li>Landing Page / Website Analysis</li>
                            <li>Landing Page A/B Testing</li>
                            <li>Align Your Value Proposition & Sales Funnel</li>
                            <li>
                              Advanced Keyword Research and Campaign Setup
                            </li>
                            <li>Creative Text Ad Development</li>
                            <li>PPC Account Settings</li>
                            <li>PPC Bid Management & ROI Tracking</li>
                            <li>Mobile advertising</li>
                            <li>Leverage The Power of Remarketing</li>
                            <li>
                              Display: The Internet’s Cost-Effective Answer to
                              Billboards
                            </li>
                            <li>Reporting</li>
                          </ul>
                          <p>
                            By taking advantage of our Google Ads services for
                            hotels, we guarantee to get your hotel more direct
                            bookings and achieving your dream ROI.
                          </p>
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
                            T.I.T. solutions agency offers you powerful Bing
                            hotel ads management with real-time results...
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
                            T.I.T. solutions agency offers you powerful Bing
                            hotel ads management with real-time results...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/bing-ads">
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

export default GoogleAds;
