import { useEffect } from "react";
import { Link } from "react-router-dom";
import BgArea from "../components/BgArea";
import ContactForm from "../components/ContactForm";
import DEdgeSolutionsList from "../components/DEdgeSolutionsList";
function BookingEngineForHotel() {
  useEffect(() => {
    document.title = "Booking Engine For Hotel";
  }, []);
  return (
    <>
      <BgArea
        title1={`Booking Engine For Hotel`}
        title2={`Central Reservation System`}
        path={`/central-reservation-system`}
      />
      <div className="service-details pages pt-90 pb-50">
        <div className="container">
          <div className="row">
           <DEdgeSolutionsList/>

            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="service-main-details">
                    <div className="service-main-details-inner">
                      <div className="service-main-details-inner-thumb">
                        <img
                          src="assets/images/d_edge-booking-hotel-engine---the-best-booking-engine-for-hotel-20212415629738.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Booking Engine For Hotel</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          A professional booking engine has to be your first
                          priority, as well as website creation. Having just a
                          working reservation system is not enough; you need the
                          best booking engine for hotels to not lose even a
                          single booking.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          D-EDGE's direct booking system is appropriate for all
                          property sizes and accommodation types. It doesn't
                          matter if you have only one space or 5, 10, or twenty
                          or more rooms. Having one will enable you to direct
                          your guests' communications and raise trust and
                          loyalty.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          You can build and market various promotional offers
                          for your guests, packages, or arrangements for the
                          weekend, summer, or winter through this reservation
                          system. Sell vouchers and additional products and
                          services, as a package with a room or standalone,
                          without a room.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Also, your inventory for the number of available rooms
                          and your pricing will be updated automatically from
                          one main extranet calendar with just one click. You
                          can rest assured that the system is working 24/7 on
                          your behalf.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          D-EDGE's advanced booking engine got you covered,
                          whether your priority is high conversion rates,
                          integrating the latest technology in hospitality, or
                          finding a user-friendly system.
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
                          <Link to="/gds-hotel-solutions">
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

export default BookingEngineForHotel;
