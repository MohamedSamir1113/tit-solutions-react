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
        title1={`Hotel & Resorts`}
        title2={`Industries`}
        path={`/industries`}
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
                    <Link to="/social-media-management">
                      Social Media Management
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/hotel-e-commerce">
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
                        <img src="assets/images/hotels.jpg" alt="" />
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

                        <div style={{ marginLeft: "10px" }}>
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
                              experts. We know that all hotels have a website
                              but do the design of your hotel site and images
                              encourage people to book directly? Is your hotel’s
                              website optimized so that customers will actually
                              see you when they search online? That is exactly
                              how we do our job to attract lookers and bookers!
                            </p>
                          </div>

                          <div>
                            <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              Booking Engine
                            </h4>
                            <p
                              style={{
                                margin: "0 0 15px",
                                fontFamily: "open sans, sans-serif",
                                lineHeight: "31px",
                              }}
                            >
                              Want to get an engaging and appealing hotel
                              website while increasing sales and revenue? So
                              adding a booking engine to your website is a MUST!
                              We make your hotel website the best place for
                              guests to reserve a room by integrating a hotel
                              reservation system to get more direct bookings and
                              share less of your revenue with OTAs.
                            </p>
                          </div>

                          <div>
                            <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              Online Payment Service
                            </h4>
                            <p
                              style={{
                                margin: "0 0 15px",
                                fontFamily: "open sans, sans-serif",
                                lineHeight: "31px",
                              }}
                            >
                              Make your guests experience less friction and
                              derive more revenue from extra bookings and
                              amenities by using our online payment solutions.
                              Through integration with all the available banks
                              in Egypt who provide that service, we offer you
                              the fastest and safest payment service that is
                              highly secured for both you and your client.
                            </p>
                          </div>

                          <div>
                            <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              SEO (Search Engine Optimization)
                            </h4>
                            <p
                              style={{
                                margin: "0 0 15px",
                                fontFamily: "open sans, sans-serif",
                                lineHeight: "31px",
                              }}
                            >
                              Maximize your hotel's return on investment for its
                              effective SEO strategy & marketing activities
                              while positioning your hotel brand and services in
                              front of your target market. We help your hotel
                              rise above the rest in local, national, and global
                              search results ranking with a tailored SEO package
                              based on your specific needs and budget.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <h3 className=" pb-15">Advertising solutions</h3>

                        <div style={{ marginLeft: "10px" }}>
                          <div>
                            <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              Google Ads
                            </h4>
                            <p
                              style={{
                                margin: "0 0 15px",
                                fontFamily: "open sans, sans-serif",
                                lineHeight: "31px",
                              }}
                            >
                              Help your next guest find you and drive bookings
                              with Google Ads. Cause millions of travelers
                              around the world search for hotels on Google every
                              day, our experts boost your hotel brand to be on
                              top of it by showing your hotel`s rates,
                              availability, offers, and unique selling points
                              through sales-effective Ads on Google.
                            </p>
                          </div>

                          <div>
                            <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              Bing Ads
                            </h4>
                            <p
                              style={{
                                margin: "0 0 15px",
                                fontFamily: "open sans, sans-serif",
                                lineHeight: "31px",
                              }}
                            >
                              Reach travelers who are ready to book on the Bing
                              search results pages and within Bing Maps. We help
                              you fill your hotel rooms effectively and drive
                              bookings easily by connecting your customers to
                              you where they are, using the right message at the
                              right time.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <h3 className=" pb-15">Social Media Marketing</h3>

                        <div style={{ marginLeft: "10px" }}>
                          <div>
                            <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              Social Media Campaigns
                            </h4>
                            <p
                              style={{
                                margin: "0 0 15px",
                                fontFamily: "open sans, sans-serif",
                                lineHeight: "31px",
                              }}
                            >
                              Make your hotel "a go-to destination" for your
                              potential guests and give a massive boost to your
                              revenue through our efficient social media
                              solutions. With the right strategy, we give your
                              social media presence the ability to unlock the
                              booking potential of your hotel by providing users
                              with inspiration to travel and take action.
                            </p>
                          </div>

                          <div>
                            <h4 className="pb-10" style={{ color: "#ff9000" }}>
                              Facebook Ads
                            </h4>
                            <p
                              style={{
                                margin: "0 0 15px",
                                fontFamily: "open sans, sans-serif",
                                lineHeight: "31px",
                              }}
                            >
                              Get top results and maximize bookings within your
                              budget through Facebook Ads. Using highly targeted
                              campaigns, we target niche audiences with the
                              “travel” behavior, including those who are looking
                              for a family or private vacation or those who are
                              business travelers or frequent travelers.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <h3 className=" pb-15">OTAS Management</h3>

                        <div style={{ marginLeft: "10px" }}>
                          <div>
                            <h4 className="pb-10" style={{ color: "#ff9000" }}>
                            TripAdvisor Management
                            </h4>
                            <p
                              style={{
                                margin: "0 0 15px",
                                fontFamily: "open sans, sans-serif",
                                lineHeight: "31px",
                              }}
                            >
                              Manage your hotel reputation and encourage more bookings by linking TripAdvisor to your website and your Facebook business pages. We optimize your TripAdvisor pages, and we offer you and your team efficient training on how you can react faster and professionally to any incoming comment from the guests and how to process the feedback into actual improvements.
                            </p>
                          </div>

                          <div>
                            <h4 className="pb-10" style={{ color: "#ff9000" }}>
                            Email Marketing
                            </h4>
                            <p
                              style={{
                                margin: "0 0 15px",
                                fontFamily: "open sans, sans-serif",
                                lineHeight: "31px",
                              }}
                            >
                              Get more direct bookings, increase customer loyalty, and lower your marketing costs via a good email marketing strategy. We build strong relationships with your guests and make your hotel brand engage with them through personalized & targeted emails, the thing that will eventually maximize your hotel revenue.
                            </p>
                          </div>

                          <div>
                            <h4 className="pb-10" style={{ color: "#ff9000" }}>
                            Reporting
                            </h4>
                            <p
                              style={{
                                margin: "0 0 15px",
                                fontFamily: "open sans, sans-serif",
                                lineHeight: "31px",
                              }}
                            >
                              Keep on top of your bookings, ad campaigns, organic search results, social media presence, and more with customizable reports. We track your marketing and sales performance, and we also show you the return on investment you're getting from your ad spend over time. Make sure to take advantage of this!
                            </p>
                          </div>

                          <div>
                            <h4 className="pb-10" style={{ color: "#ff9000" }}>
                            Photography
                            </h4>
                            <p
                              style={{
                                margin: "0 0 15px",
                                fontFamily: "open sans, sans-serif",
                                lineHeight: "31px",
                              }}
                            >
                              High-quality photography is essential in engaging the attention of your online guests. Whether you need professional photos to showcase your property's unique selling points in your digital marketing strategy, or to enrich your social media presence, T.I.T. Solutions offers a comprehensive photography service with the help of our creative experts, who have a trained eye to capture the best of your hotel.
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
      </div>

      {/*talk to experts section*/}
      <ContactForm />
    </>
  );
}

export default DigitalMarketingHotels;
