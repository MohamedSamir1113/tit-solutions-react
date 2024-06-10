import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
function InstagramAds() {
    useEffect(function () {
        document.title = "Instagram Ads";
      }, []);
    return (
        <>
      <BgArea
        title1={`Instagram Ads`}
        title2={`Social Media Marketing`}
        path={`/social-media-marketing`}
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
                          src="assets/images/instagram-marketing-for-hotels---instagram-ads---instagram-advertising-202125102822806.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Instagram Ads for Hotel</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px;",
                            fontFamily: "open sans, sans-serif;",
                            lineHeight: "31px",
                          }}
                        >
                          Reach your guests or potential ones with effective Instagram marketing for hotels services by T.I.T Solutions. We take responsibility for your ad campaigns from start to finish, applying the best practices for your brand and audience.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px;",
                            fontFamily: "open sans, sans-serif;",
                            lineHeight: "31px",
                          }}
                        >
                          As a hotel owner, we know you want to run ads to generate results; placing ads with us on big platforms like Instagram will help more guests notice your business. That means more of them will click your content, which ultimately can turn into conversions and bookings.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px;",
                            fontFamily: "open sans, sans-serif;",
                            lineHeight: "31px",
                          }}
                        >
                          Does your brand have a story to tell? Instagram advertising is a reliable way to gain exposure for your brand, taking advantage of being an image-based platform, providing essential tools for photo and video content. Compared to other platforms, Instagram posts are rarely overlooked by users and produce heavy levels of engagement for brands every single day.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px;",
                            fontFamily: "open sans, sans-serif;",
                            lineHeight: "31px",
                          }}
                        >
                          Our unique Instagram ads approach is built to fit your hotel business`s needs. We create custom campaigns that align with your goals to ensure the best return on your investment. This is the right choice for your hotel business.
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
                            Reach your guests or potential ones with effective Instagram marketing for hotels services by T.I.T Solutions...
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
                            Reach your guests or potential ones with effective Instagram marketing for hotels services by T.I.T Solutions...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/facebook-ads">
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
                          <h3>LinkedIn Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            The T.I.T Solutions agency uses LinkedIn for hotels
                            to create ad campaigns that boost your hotel content
                            and deliver personalized ads to LinkedIn inboxes...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/linkedin-for-hotels---linkedin-advertising-202125103027344.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>LinkedIn Ads</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            The T.I.T Solutions agency uses LinkedIn for hotels
                            to create ad campaigns that boost your hotel content
                            and deliver personalized ads to LinkedIn inboxes..
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
                          <h3>Search Engine Marketing</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            With in-depth keyword research along with effective
                            SEM campaigns and continuous optimization...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage: "url(assets/images/services/s1.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Search Engine Marketing</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            With in-depth keyword research along with effective
                            SEM campaigns and continuous optimization...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/search-engine-marketing">
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
    )
}

export default InstagramAds