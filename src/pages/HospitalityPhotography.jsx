import { useEffect } from "react";
import { Link } from "react-router-dom";
import BgArea from "../components/BgArea";
import ContactForm from "../components/ContactForm";
import ServicesList from "../components/ServicesList";
function HospitalityPhotography() {
  useEffect(() => {
    document.title = "Hospitality Photography";
  }, []);
  return (
    <>
      <BgArea
        title1={`Hospitality Photography`}
        title2={`Services`}
        path={`/services`}
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
                        <img src="assets/images/services/s8.jpg" alt="" />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>Hospitality Photography</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Visual Content nowadays is much stronger than before;
                          that is why your guests always search for PHOTOS of
                          your property! We at T.I.T Solutions help you gain
                          more bookings through our professional photography
                          service that is dedicated especially to the hotels`
                          needs.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We work on capturing your hotel locations in order to
                          use them in different digital publishing areas, like
                          social media platforms, paid ads, on the website,
                          Google search, etc. We achieve that while
                          collaborating with your hotel staff to visualize the
                          finest form of a hotel story. We focus on capturing
                          moments, memories, and guests' experiences. Creating
                          the desire to reserve, pack, and go to your hotel is
                          what we make sure of when offering you our photography
                          service.
                        </p>

                        <div className="py-3">
                          <h4 className="pb-15">Showcase Service:</h4>
                          <ul class="list-bullets">
                            <li>Welcoming guests, entrance</li>
                            <li>Rooms</li>
                            <li>Food photography</li>
                            <li>Architect and interior</li>
                            <li>Site Photography</li>
                            <li>Amenities</li>
                            <li>Exterior Photography</li>
                            <li>And any extra services</li>
                          </ul>
                        </div>

                        <h4 className="pb-15">
                          Why to collaborate with T.I.T Solutions?
                        </h4>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          T.I.T Solutions has been in business for more than 20
                          years, which makes it an experienced, fully
                          integrated, and one-of-a-kind agency that serves the
                          hospitality industry. Our game is helping you create
                          interest and make your hotel go viral with winning
                          photos. We work beyond the typical ideas to create a
                          fascinating photography experience that captures your
                          guests' attention in a blink.
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

      {/*talk to experts section*/}
      <ContactForm />
    </>
  );
}

export default HospitalityPhotography;
