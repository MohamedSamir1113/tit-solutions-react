import { useEffect } from "react";
import { Link } from "react-router-dom";
import BgArea from "../components/BgArea";
import ContactForm from "../components/ContactForm";
function CentralInventory() {
  useEffect(() => {
    document.title = "D-EDGE Inventory Management";
  }, []);
  return (
    <>
      <BgArea
        title1={`Central Inventory`}
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
                          src="assets/images/d-edge-inventory-management---hotel-management-system---hotel-inventory-management-2021251054075.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>D-EDGE Inventory Management</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Having effective hotel inventory management is a core aspect of running a successful business. It involves both creating and managing demand and maximizing returns.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          D-EDGE inventory management technology helps hoteliers identify their most popular rooms and services. This automated hotel inventory management system has real-time tracking features that allow hoteliers to distribute rooms efficiently. It gathers all occupancies into a centralized pool during this process, so different channels have access to them.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Real-time inventory management keeps track of ordered and in-stock rooms. It will prevent hotels from having rooms shortages and will also reduce overstocking and occupancies.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Developing an inventory management system ensures that the hotel has the right-priced rooms for guests. Also, this technology can help hotel owners improve effective marketing campaigns based on their highest selling items and most popular rooms.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          D-EDGE's platform improves efficiency since it eliminates manual work. It gives staff the time they need to focus on more valuable tasks that can improve guest satisfaction. Not only that but also the efficient reporting capabilities of D-EDGE's Central Inventory System.
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
                            A professional booking engine has to be your first priority, as well as website creation. Having just a working reservation system is not enough...
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
                            A professional booking engine has to be your first priority, as well as website creation. Having just a working reservation system is not enough...
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
                          <h3>GDS Solutions</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            With GDS Hotel Solutions from D-EDGE, we help you
                            increase your hotel brand visibility and distribute
                            your presence...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back "
                      style={{
                        backgroundImage:
                          "url(assets/images/gds-solutions---gds-booking-20212510649355.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>GDS Solutions</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            With GDS Hotel Solutions from D-EDGE, we help you
                            increase your hotel brand visibility and distribute
                            your presence...
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

export default CentralInventory;