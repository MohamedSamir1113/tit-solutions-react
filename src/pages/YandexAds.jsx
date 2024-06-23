import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ServicesList from "../components/ServicesList";
function YandexAds() {
  useEffect(() => {
    document.title = "Yandex Hotel Ads";
  }, []);
  return (
    <>
      <BgArea
        title1={`Yandex Ads`}
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
                          src="assets/images/services/yandex-ads-in-egypt.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Yandex Hotel Ads</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Unlock your business potential, tap into new markets,
                          and grow internationally in the Russian-speaking world
                          with our Yandex ads in Egypt.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          With the assist of our Yandex specialists, T.T.T
                          Solutions can help you set up, manage, and optimize
                          your Yandex Ads campaign to achieve maximum marketing
                          outcomes for your hotel business.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Yandex Advertising is definitely a good investment to
                          make, as it delivers highly targeted ads on both
                          search and display networks. Whatever your main
                          objective is, with T.I.T Solutions and our experienced
                          team will increase your brand awareness, get high
                          engagement on your ads and achieve great visibility
                          through the Russian market.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Get in-depth of this new market and reach your
                          potential hotel guests; T.I.T Solutions will make them
                          recognize your existence, engage with your ads and
                          choose you for their next travel and hotel
                          accommodation.
                        </p>
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
                          <h3>Bing Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            T.I.T. solutions agency offers you powerful Bing
                            hotel ads management....
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
                            hotel ads management...
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

export default YandexAds;
