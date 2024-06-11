import { useEffect } from "react";
import { Link } from "react-router-dom";
import BgArea from "../components/BgArea";
import ContactForm from "../components/ContactForm";
function GDSHotelSolutions() {
    useEffect(() => {
        document.title = "GDS Hotel Solutions";
      }, []);
    return (
        <>
        <BgArea
          title1={`GDS Hotel Solutions`}
          title2={`Central Reservation System`}
          path={`/central-reservation-system`}
        />
        <div className="service-details pages pt-90 pb-50">
          <div className="container">
            <div className="row">
              <div className=" col-lg-4 col-md-5 col-sm-12 col-xs-12">
                <h3 className="pb-15">OTHER D-EDGE SOLUTIONS</h3>
                <div className="service-details-pn-list">
                  <ul>
                    <li>
                      <Link to="/guest-management">
                        Guest Management
                        <span>
                          <i className="fa fa-angle-right"></i>
                        </span>
                      </Link>
                    </li>
  
                    <li>
                      <Link to="/data-intelligence">
                        Data Intelligence
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
                            src="assets/images/gds-solutions---gds-booking-20212510649355.jpg"
                            alt=""
                          />
                        </div>
                        <div className="service-main-details-content-title pt-4 pb-3">
                          <h3>GDS Hotel Solutions</h3>
                        </div>
  
                        <div className="service-main-details-content-text pb-4">
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                            With GDS Hotel Solutions from D-EDGE, we help you increase your hotel brand visibility and distribute your presence to thousands of Travel Agents and B2B buyers on a global scale.
                          </p>
  
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                           This service helps you get more business bookings the easiest way. We connect your hotel to the required GDS Booking, and then your hotel rooms can be requested by all GDS/agents worldwide.
                          </p>
  
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                            We give you the complete control to manage your prices and availabilities from your Central Inventory, as same as the way you do for your Booking Engine and OTAs. The resulting GDS bookings are directly and automatically integrated into your PMS, avoiding any manual loading.
                          </p>
  
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                           We help you reach your highest and make your hotel bookable by almost 600k travel agents and more. Save time, gain money and resources with us.
                          </p>
                        </div>
                      </div>
                    </div>
  
                    <div className="service-main-details-content-title pt-4 pb-3">
                      <h3>CENTRAL SYSTEM RESERVATION:</h3>
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
                              A professional booking engine has to be your first
                              priority, as well as website creation. Having just a
                              working reservation system is not enough...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/d_edge-booking-hotel-engine---the-best-booking-engine-for-hotel-20212415629738.jpg)",
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
                              A professional booking engine has to be your first
                              priority, as well as website creation. Having just a
                              working reservation system is not enough...
                            </p>
                          </div>
                          <div className="flipbox_button">
                            <Link to="/booking-engine-for-hotel">
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
                          <h3>Channel Manager</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            This Channel Manager from D-Edge is ranked as the
                            most easy-to-use tool by its 20,000 + users...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/channel-manager-for-hotels---booking-channel-manager---d-edge-channel-manager-20212510109135.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>Channel Manager</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            This Channel Manager from D-Edge is ranked as the
                            most easy-to-use tool by its 20,000 + users...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/dedge-channel-manager">
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
                            <h3>Central Inventory</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              Having effective hotel inventory management is a
                              core aspect of running a successful business...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="techno_flipbox_back "
                        style={{
                          backgroundImage:
                            "url(assets/images/d-edge-inventory-management---hotel-management-system---hotel-inventory-management-2021251054075.jpg)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="techno_flipbox_inner">
                          <div className="flipbox_title">
                            <h3>Central Inventory</h3>
                          </div>
                          <div className="flipbox_desc">
                            <p>
                              Having effective hotel inventory management is a
                              core aspect of running a successful business...
                            </p>
                          </div>
                          <div className="flipbox_button">
                            <Link to="/d-edge-inventory-management">
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

export default GDSHotelSolutions
