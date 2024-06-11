import { useEffect } from "react";
import BgArea from "../components/BgArea";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
function ECommerceManagement() {
  useEffect(() => {
    document.title = "E-Commerce Management";
  }, []);
  return (
    <>
      <BgArea
        title1={`E-Commerce Management`}
        title2={`Hotel E-Commerce`}
        path={`/hotel-e-commerce`}
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
                        <img
                          src="assets/images/hotel-e-commerce---hospitality-management-consulting---hotel-revenue-management-202125101751493.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-main-details-content-title pt-4 pb-3">
                        <h3>E-Commerce Management</h3>
                      </div>

                      <div className="service-main-details-content-text pb-4">
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          Keeping your hotel e-commerce strategy up-to-date and
                          effective is a constant challenge for hotel owners;
                          this is where T.I.T. Solutions offers the most value.
                          We keep an eye on several factors that contribute to
                          the success of your e-commerce channels; the product
                          offering set aside its technology, usability, and the
                          security infrastructure that drives sales.
                        </p>

                        <p
                          style={{
                            margin: "0 0 15px",
                            fontFamily: "open sans, sans-serif",
                            lineHeight: "31px",
                          }}
                        >
                          We carefully plan and run your digital commerce
                          projects from the very beginning to the end and from
                          strategy to optimization. Do you need hotel revenue
                          management? Hospitality management consulting?
                        </p>

                        <ul class="list-bullets">
                          <li>
                            We create customized strategies tailored to your
                            potential and existing concept.
                          </li>
                          <li>
                            We leverage correct technology tools for the various
                            aspects of communicating with customers to keep
                            rooms full and maximize revenues.
                          </li>
                          <li>
                            We track the market dynamics and rate movements by
                            looking at how rates are positioned on different
                            OTAs than your competitors for different dates on
                            various channels.
                          </li>
                          <li>
                            We manage your online booking system to make it easy
                            for guests to find a room, choose a rate, pay for a
                            reservation, and boost your revenue.
                          </li>
                          <li>
                            We keep you up-to-date with new developments in the
                            e-marketing world.
                          </li>
                          <li>
                            We review the security of checkout pages and payment
                            procedures.
                          </li>
                          <li>
                            We analyze traffic to inform website maintenance and
                            the effectiveness of marketing strategies.
                          </li>
                          <li>
                            We meet your customer's expectations and guarantee
                            100% satisfaction in their booking experience, all
                            with our solutions.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="service-main-details-content-title pt-4 pb-3">
                    <h3 className="text-capitalize">Hotel E-Commerce:</h3>
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
                          <h3>E-Commerce Consultancy</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            By applying our Hospitality Ecommerce Consultancy
                            tips, we help you drive revenue...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="techno_flipbox_back"
                      style={{
                        backgroundImage:
                          "url(assets/images/e-commerce-consultancy---services-for-hotels---hospitality-ecommerce-202125101549742.jpg)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="techno_flipbox_inner">
                        <div className="flipbox_title">
                          <h3>E-Commerce Management</h3>
                        </div>
                        <div className="flipbox_desc">
                          <p>
                            By applying our Hospitality Ecommerce Consultancy
                            tips, we help you drive revenue...
                          </p>
                        </div>
                        <div className="flipbox_button">
                          <Link to="/e-commerce-consultancy">
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

export default ECommerceManagement;
