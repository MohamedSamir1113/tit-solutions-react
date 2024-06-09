import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
function SynXis() {
    useEffect(function() {
        document.title="SynXis"
    },[])
    return (
        <>
        <BgArea
          title1={`SynXis`}
          title2={`Booking Engine`}
          path={`/booking-engine`}
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
                            src="assets/images/digital-marketing-in-egypt-for-hotels-solutions-synxis-20213013252534.jpg"
                            alt=""
                          />
                        </div>
                        <div className="service-main-details-content-title pt-4 pb-3">
                          <h3>SynXis</h3>
                        </div>
  
                        <div className="service-main-details-content-text pb-4">
                          <p
                            style={{
                              margin: "0 0 15px;",
                              fontFamily: "open sans, sans-serif;",
                              lineHeight: "31px",
                            }}
                          >
                            Are you looking for a hotel booking engine that turns your website into a very powerful and effective sales channel? Well, SynXis, the booking engine, is the right solution for you.</p>
                          <p
                            style={{
                              margin: "0 0 15px;",
                              fontFamily: "open sans, sans-serif;",
                              lineHeight: "31px",
                            }}
                          >
                            Connecting a hotel booking engine to your hotel website is a MUST for online display and sales of all types of accommodation and packages. SynXis is an easy-to-use rate, inventory, and reservations management solution. It was built with a deep retail focus to drive direct bookings, increase engagement and conversions. Your guests will be delighted with their booking experience every time, no matter where they are.
                          </p>
                    
                        </div>

                        <div className="py-3">
                          <h4 className="mb-20">Important features of SynXis hotel booking engine include:</h4>
                          <ul class="list-bullets">
                            <li>Room availability checking</li>
                            <li>Real-time updating</li>
                            <li>Full search capability</li>
                            <li>Reporting and sales analysis</li>
                            
                          </ul>
                        </div>

                        <p style={{
                              margin: "0 0 15px;",
                              fontFamily: "open sans, sans-serif;",
                              lineHeight: "31px",
                            }}>
                        With SynXis hotel booking application, process secure and accurate online reservations become easy. Providing the hotels, management companies, travel companies with a simple yet very powerful way to sell rooms and packages online.
                        </p>
                      </div>
                    </div>
                    <div className="service-main-details-content-title pt-4 pb-3">
                      <h3>BOOKING ENGINE:</h3>
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
                            <h3>Attraction D-Edge</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              A professional booking engine has to be your first priority, as well as website creation...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/digital-marketing-in-egypt-for-hotels-solutions-attraction-d-edge-202130132820642.jpg)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="techno_flipbox_inner">
                          <div className="flipbox_title">
                            <h3>Attraction D-Edge</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              A professional booking engine has to be your first priority, as well as website creation...
                            </p>
                          </div>
                          <div className="flipbox_button">
                            <Link to="/attraction-d-edge">
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
                            <h3>Nile Cruise Booking Engine</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              Connect Nile Cruises booking engine is the younger brother of connect hotel...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/digital-marketing-in-egypt-for-hotels-solutions-nile-cruise-booking-engine-20212012411399.jpg)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="techno_flipbox_inner">
                          <div className="flipbox_title">
                            <h3>Nile Cruise Booking Engine</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              Connect Nile Cruises booking engine is the younger brother of connect hotel...
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
                            We deliver intuitive and fast websites services for the hospitality industry and more! ...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/solutions/s1.jpg)",
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
                            We deliver intuitive and fast websites services for the hospitality industry and more! ...
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

export default SynXis
