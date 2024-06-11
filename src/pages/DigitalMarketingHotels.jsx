import { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import BgArea from "../components/BgArea";
function DigitalMarketingHotels() {
  useEffect(function () {
    document.title = "Digital Marketing Agency For Hotels in Egypt";
  }, []);
  return (
    <>
      <BgArea
        title1={`Hotels & Resorts`}
        title2={`Industries`}
        path={`/industries`}
      />
      <div className="service-details pages pt-90 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-md-9 col-sm-12 col-xs-12">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="service-main-details">
                    <div className="service-main-details-inner">
                      <div className="service-main-details-inner-thumb">
                        <img
                          className="w-75"
                          src="assets/images/hotels.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Digital Marketing Agency for Hotels in Egypt</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <h4 className="py-4">Engagement Marketing Solutions</h4>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Achieving an exceptional online presence through
                          effective online activities after treating your guests
                          well is the most important thing to do for your hotel
                          business. With our unparalleled combination of digital
                          expertise and deep knowledge of the hospitality
                          sector, we offer you comprehensive packages of digital
                          marketing & web development services so that hoteliers
                          can rest easy knowing that nothing will be missed.
                        </p>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <h3 className=" pb-15">Website Services</h3>

                        <div>
                          <h4 className="pb-10" style={{ color: "#ff9000" }}>
                            Website Designing
                          </h4>
                          <p
                            style={{
                              margin: "0 0 15px",
                              fontFamily: "open sans, sans-serif",
                              lineHeight: "31px",
                            }}
                          >
                            Keep your website up-to-date and user-friendly all
                            the time with the help of our web development
                            experts. We know that all hotels have a website but
                            do the design of your hotel site and images
                            encourage people to book directly? Is your hotel’s
                            website optimized so that customers will actually
                            see you when they search online? That is exactly how
                            we do our job to attract lookers and bookers!
                          </p>
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

export default DigitalMarketingHotels;
