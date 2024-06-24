import { useEffect } from "react";

import BgArea from "../components/BgArea";
import ContactForm from "../components/ContactForm";
import ServicesList from "../components/ServicesList";
function TheHotelsNetwork() {
  useEffect(() => {
    document.title = "The Hotels Network";
  }, []);
  return (
    <>
      <BgArea
        title1={`The Hotels Network`}
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
                        <img src="assets/images/services/s10.jpg" alt="" />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>The Hotels Network</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Do you know the winning recipe for how to convert
                          website lookers into bookers? It is all about
                          personalization!
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Get help in doing that with an efficient ecosystem of
                          growth tools that can easily increase conversions and
                          ADR; get help from The Hotels Network.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          With the Hotels Network's benchmarking platform, you
                          can compare your performance to the market and get
                          never-before-seen competitive data through real-time
                          actionable insights for competitive intelligence and
                          smarter decisions.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Use the offered tools for customized message formats
                          and optimal timing. The Intelligent behavioral
                          triggers ensure you show users personalized messages
                          at critical points in the booking process to create
                          urgency and get guaranteed bookings.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Is the user making a last-minute booking? Living in
                          Paris? Coming from a referral? The Hotels Network's
                          extensive set of targeting options will help you
                          display hyper-relevant content and promotions to
                          maximize revenue.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          The Hotels Network will give you the full flexibility
                          to create unlimited vouchers in multiple languages and
                          currencies, applying your own terms & conditions. It
                          also ensures you are offering visitors the best
                          possible rates by identifying the price disparities
                          your guests are finding online on OTAs and metasearch
                          engines.
                        </p>
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Boost your bookings and strengthen the relationship
                          between your hotel and its guests the easiest way with
                          The Hotels Network.
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

export default TheHotelsNetwork;
