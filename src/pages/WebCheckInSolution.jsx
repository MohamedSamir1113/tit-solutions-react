import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

function WebCheckInSolution() {
  useEffect(() => {
    document.title = "Web Check-In Solution";
  }, []);
  return (
    <>
      <BgArea
        title1={`Web Check-In Solution`}
        title2={`solutions`}
        path={`/solutions`}
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
                    <Link to="/social-media-managment">
                      Social Media Management
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/hotel-ecommerce">
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
                          src="assets/images/digital-marketing-in-egypt-for-hotels-solutions-web-check-in-solution-202120111949888.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Web Check-In Solution</h3>

                        <h4>Instant | Simple | Secure</h4>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px;",
                            fontFamily: "open sans, sans-serif;",
                            lineHeight: "31px",
                          }}
                        >
                          During this challenging time, Hotels & Resorts need to
                          implement a solution to facilitate a smooth, fast, and
                          paperless Check-In for the guests.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px;",
                            fontFamily: "open sans, sans-serif;",
                            lineHeight: "31px",
                          }}
                        >
                          Our solution ensures a better experience for our
                          guests and more reliable protection for our teams.
                        </p>
                      </div>

                      <div className="py-3">
                        <h4 className="mb-20">Instant</h4>
                        <ul class="list-bullets">
                          <li>
                            Our solution is ready to be implemented within one
                            or two working days.
                          </li>
                        </ul>
                      </div>
                      <div className="py-3">
                        <h4 className="mb-20">Secure</h4>
                        <ul class="list-bullets">
                          <li>
                            Our solution is using SSL certificates on its web
                            interface.
                          </li>
                          <li>
                            If your email gateway is using an SSL certificate,
                            the solution is 100% compatible.
                          </li>
                          <li>
                            Guests do not have to log in. The solution does not
                            store usernames or passwords at our database.
                          </li>
                          <li>
                            If you wish to use the DB, rest assured that the
                            data is encrypted.
                          </li>
                        </ul>
                      </div>
                      <div className="py-3">
                        <h4 className="mb-20">Multilingual</h4>
                        <ul class="list-bullets">
                          <li>
                            Our solution is available with a multilingual
                            interface.
                          </li>
                          <li>
                            The guest can choose the language to make it easy
                            for him/her to Check-In.
                          </li>
                          <li>An Arabic interface is available.</li>
                        </ul>
                      </div>
                      <div className="py-3">
                        <h4 className="mb-20">Upselling!</h4>
                        <ul class="list-bullets">
                          <li>
                            Once the guest submits his/her data, you can show
                            him a marketing message to upsell or cross-sell your
                            services.
                          </li>
                          <li>
                            Also, you can direct him to any page on your website
                            or your social media accounts.
                          </li>
                        </ul>
                      </div>

                    
                    </div>
                  </div>
                 
                </div>

               
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="service-main-details-content-title pt-4 pb-3">
                    <h3>Other Solutions:</h3>
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
                          <h3>Website Development</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We deliver intuitive and fast websites services for
                            the hospitality industry and more! ...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage: "url(assets/images/solutions/s1.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Website Development</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            We deliver intuitive and fast websites services for
                            the hospitality industry and more! ...
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

export default WebCheckInSolution;
