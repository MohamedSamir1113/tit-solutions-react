import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ServicesList from "../components/ServicesList";
function LinkedInAds() {
  useEffect(() => {
    document.title = "LinkedIn Ads";
  }, []);
  return (
    <>
      <BgArea
        title1={`LinkedIn Ads`}
        title2={`Social Media Marketing`}
        path={`/services/social-media-marketing`}
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
                          src="assets/images/linkedin-for-hotels---linkedin-advertising-202125103027344.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Linkedin For Hotels</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <h4 className="pb-15">
                          Connect with professionals in almost any field using
                          effective LinkedIn Ads.
                        </h4>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          The T.I.T Solutions agency uses LinkedIn for hotels to
                          create ad campaigns that boost your hotel content and
                          deliver personalized ads to LinkedIn inboxes. We
                          integrate your contacts list, retarget LinkedIn
                          members who have visited your hotel site, and generate
                          ultra-targeted leads within minutes.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We also provide LinkedIn advertising management that
                          can help you figure out the best way to target your
                          market there, giving you better results as you reach
                          out to a new audience and engage with the existing
                          ones.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We use your hotel`s LinkedIn page to demonstrate the
                          value you bring to the hospitality industry. We create
                          consistently engaging content focusing on professional
                          topics to grow a following and effectively market your
                          property on LinkedIn.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Contact us now, and let`s harness your LinkedIn’s full
                          potential by targeting decision-makers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-main-details-content-title pt-4 pb-3">
                    <h3>SOCIAL MEDIA MARKETING:</h3>
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
                          <h3>Facebook Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Reach your guests or potential ones with effective
                            Instagram marketing for hotels services by T.I.T
                            Solutions...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/facebook-ads-for-hotels---hotel-facebook-marketing---facebook-marketing-strategy-20212510571844.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Facebook Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Reach your guests or potential ones with effective
                            Instagram marketing for hotels services by T.I.T
                            Solutions...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/services/social-media-marketing/facebook-ads">
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
                          <h3>Snapchat Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Do you own or manage a hotel Snapchat business that
                            you want to reach highly engaged audiences...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/snapchat-ads-for-hotel---snapchat-marketing----hotel-snapchat---hotel-snapchat-marketing-202125103622557.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Snapchat Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Do you own or manage a hotel Snapchat business that
                            you want to reach highly engaged audiences..
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/services/social-media-marketing/snapchat-ads">
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
                          <h3>Instagram Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Reach your guests or potential ones with effective
                            Instagram marketing for hotels services by T.I.T
                            Solutions...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/instagram-marketing-for-hotels---instagram-ads---instagram-advertising-202125102822806.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Instagram Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            Reach your guests or potential ones with effective
                            Instagram marketing for hotels services by T.I.T
                            Solutions..
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/services/social-media-marketing/instagram-ads">
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
                          <h3>VK Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            VK platform is one of Russia's largest social media
                            networks; Vk ads for hotels can help you reach the
                            Russian target audience there...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/vk-ads-for-hotels---vk-advertising---vkontakte-ads-20212510440585.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>VK Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            VK platform is one of Russia's largest social media
                            networks; Vk ads for hotels can help you reach the
                            Russian target audience there..
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/services/social-media-marketing/vk-ads">
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

export default LinkedInAds;
