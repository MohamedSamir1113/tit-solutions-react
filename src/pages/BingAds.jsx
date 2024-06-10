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
                        <h3>Bing Hotel Ads</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px;",
                            fontFamily: "open sans, sans-serif;",
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
                            margin: "0 0 15px;",
                            fontFamily: "open sans, sans-serif;",
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
                          <h4 className="pb-20">
                          Bing Ads Services We Offer
                          </h4>
                          <ul class="list-bullets">
                            <li>
                            Market research.
                            </li>
                            <li>
                            Keyword discovery and selection.
                            </li>
                            <li>
                            Campaigns creation and management.
                            </li>
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
                            Managing Google Ads for hotels and building it from scratch is very demanding...
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
                            Managing Google Ads for hotels and building it from scratch is very demanding...
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
                          <h3>Social Media Marketing</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Reach your social media goals and drive a return on
                            investment (ROI) from important social media
                            channels like Facebook...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage: "url(assets/images/services/s2.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Social Media Marketing</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Reach your social media goals and drive a return on
                            investment (ROI) from important social media
                            channels like Facebook...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/social-media-marketing">
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
                          <h3>Social Media Management</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We transform your brand's online presence with
                            high-quality content, daily activity...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage: "url(assets/images/services/s3.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Social Media Management</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We transform your brand's online presence with
                            high-quality content, daily activity...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/social-media-management">
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
                          <h3>Hotel E-Commerce</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            A successful hotel needs a well created and managed
                            e-commerce strategy...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage: "url(assets/images/services/s4.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Hotel E-Commerce</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            A successful hotel needs a well created and managed
                            e-commerce strategy...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/hotel-e-commerce">
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
                          <h3>Search Engine Optimization</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We provide SEO consulting services that give your
                            Website a strong competitive push in the search
                            engine results...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage: "url(assets/images/services/s5.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Search Engine Optimization</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We provide SEO consulting services that give your
                            Website a strong competitive push in the search
                            engine results...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/search-engine-optimization">
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
                          <h3>Email Marketing</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Get started with our Email Marketing Services that
                            allow you to reach a wider audience and keep your
                            current clients loyal to your brand...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage: "url(assets/images/services/s6.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Email Marketing</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Get started with our Email Marketing Services that
                            allow you to reach a wider audience and keep your
                            current clients loyal to your brand...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/email-marketing">
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
                          <h3>Reporting</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We bring your data together, helping you make the
                            right business decisions based on the right
                            numbers...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage: "url(assets/images/services/s7.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Reporting</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We bring your data together, helping you make the
                            right business decisions based on the right
                            numbers...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/reporting">
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
                          <h3>Hospitality Photography</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Visual Content nowadays is much stronger than
                            before; that is why your guests always search for
                            PHOTOS of your property...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage: "url(assets/images/services/s8.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Hospitality Photography</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Visual Content nowadays is much stronger than
                            before; that is why your guests always search for
                            PHOTOS of your property...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/hospitality-photography">
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
                          <h3>The Hotels Network</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Nowadays, customer service teams at hotels can
                            easily become overwhelmed...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage: "url(assets/images/services/s9.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>The Hotels Network</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Nowadays, customer service teams at hotels can
                            easily become overwhelmed...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/asksuite-hotel-chatbot">
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
                          <h3>The Hotels Network</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Do you know the winning recipe for how to convert
                            website lookers into bookers?...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage: "url(assets/images/services/s10.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>The Hotels Network</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Do you know the winning recipe for how to convert
                            website lookers into bookers?...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/the-hotels-network">
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
