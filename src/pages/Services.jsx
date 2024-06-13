import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BgArea from "../components/BgArea";
import Section1Area from "../components/Section1Area";
import Section2Area from "../components/Section2Area";
const Services = () => {
  useEffect(() => {
    document.title = "Services";
  }, []);
  return (
    <>
      <BgArea title1="Services" title2="Home" path="/" />
      <Section1Area
        title="Search Engine Marketing"
        imgSrc="assets/images/services/s1.jpg"
        description="With in-depth keyword research along with effective SEM campaigns and continuous optimization, we start our Search Engine Marketing Services. Our main job is to deliver ROI-driven PPC management services that help your business meet your paid search goals."
        list={
          <ul className="list-unstyled">
            <li>
              <Link to="/google-ads">Google Hotel Ads</Link>
            </li>
            <li>
              <Link to="/bing-ads">Bing Hotel Ads</Link>
            </li>
            <li>
              <Link to="/yandex-ads">Yandex Ads In Egypt</Link>
            </li>
          </ul>
        }
        linkPath="/search-engine-marketing"
      />

      <Section2Area
        title="Social Media Marketing"
        imgSrc="assets/images/services/s2.jpg"
        description="Reach your social media goals and drive a return on investment (ROI) from important social media channels like Facebook, Instagram, and LinkedIn. With our competitive social media marketing services, your business can start growing its brand awareness and revenue as well!"
        list={
          <ul className="list-unstyled">
            <li>
              <Link to="/facebook-ads">Facebook Ads For Hotel</Link>
            </li>
            <li>
              <Link to="/instagram-ads">Instagram Marketing For Hotels</Link>
            </li>
            <li>
              <Link to="/snapchat-ads">Snapchat Ads For Hotel</Link>
            </li>
            <li>
              <Link to="/vk-ads">VK Ads For Hotels</Link>
            </li>
            <li>
              <Link to="/linkedin-ads">Linkedin For Hotels</Link>
            </li>
          </ul>
        }
        linkPath="/social-media-marketing"
      />

      <Section1Area
        title="Social Media Management"
        imgSrc="assets/images/services/s3.jpg"
        description="We transform your brand's online presence with high-quality content, daily activity, monitoring engagement, and increased followers. This service will attract targeted followers to convert them into loyal customers then while telling your brand’s story throughout."
        list={
          <ul className="list-unstyled">
            <li>
              <Link to="/social-media-strategy">
                Hotel Social Media Strategy
              </Link>
            </li>
            <li>
              <Link to="/social-media-posting">
                Social Media Content For Hotels
              </Link>
            </li>
            <li>
              <Link to="/social-media-graphics">
                Social Media Design Services
              </Link>
            </li>
          </ul>
        }
        linkPath="/social-media-management"
      />

      <Section2Area
        title="Hotel E-Commerce"
        imgSrc="assets/images/services/s4.jpg"
        description="A successful hotel needs a well created and managed e-commerce strategy. With our many years of experience managing hotels' online presence, we give your hotel(s) an edge to sell effectively and grow online in the most profitable ways on OTAs and Meta searches."
        list={
          <ul className="list-unstyled">
            <li>
              <Link to="/e-commerce-consultancy">E-Commerce Consultancy</Link>
            </li>
            <li>
              <Link to="/e-commerce-management">
                Hotel E-Commerce Management
              </Link>
            </li>
          </ul>
        }
        linkPath="/hotel-e-commerce"
      />

      <Section1Area
        title="Search Engine Optimization"
        imgSrc="assets/images/services/s5.jpg"
        description="We provide SEO consulting services that give your Website a strong competitive push in the search engine results. We dig deep into your busness to create you a tailored SEO package based on your specific needs and budget. Our SEO services are designed to take you from A to Z. Starting from creating a strategy that makes sense, help you analyze your competitors, and search which keywords are important to achieve success."
        linkPath="/search-engine-optimization"
      />

      <Section2Area
        title="Email Marketing"
        imgSrc="assets/images/services/s6.jpg"
        description="Get started with our Email Marketing Services that allow you to reach a wider audience and keep your current clients loyal to your brand. We have the technical skills and effective tools that work well for you."
        list={
          <ul className="list-unstyled">
            <li>
              <Link to="/manage-email-marketing">
                Email Marketing For Hotels
              </Link>
            </li>
            <li>
              <Link to="/constant-contact">
                Email Marketing For Hotels With "Constant Contact"
              </Link>
            </li>
          </ul>
        }
        linkPath="/email-marketing"
      />

      <Section1Area
        title="Reporting"
        imgSrc="assets/images/services/s7.jpg"
        description="We bring your data together, helping you make the right business decisions based on the right numbers. Our experts also help you highlight the key points, including successes, challenges, and goals for the next reporting period."
        list={
          <ul className="list-unstyled">
            <li>
              <Link to="/google-analytics-implementation">
                Google analytics for hotels
              </Link>
            </li>
            <li>
              <Link to="/digital-marketing-reporting">
                Digital Marketing Reporting
              </Link>
            </li>
            <li>
              <Link to="/website-360-reporting">Website Analytics 360</Link>
            </li>
          </ul>
        }
        linkPath="/reporting"
      />

      <Section2Area
        title="Hospitality Photography"
        imgSrc="assets/images/services/s8.jpg"
        description="Visual Content nowadays is much stronger than before; that
                    is why your guests always search for PHOTOS of your
                    property! We at T.I.T Solutions help you gain more bookings
                    through our professional photography service that is
                    dedicated especially to the hotels` needs."
        linkPath="/hospitality-photography"
      />
      <Section1Area
        title="Asksuite Hotel Chatbot"
        imgSrc="assets/images/services/s9.jpg"
        description="Nowadays, customer service teams at hotels can easily become overwhelmed; that is why every hotel needs a Hotel Chatbot to reduce this pressure, handling all the guests' frequent requests in rapid response times and leaving staff to the trickier cases."
        description2="Asksuite Chatbot will automatize your online customer service in a way that guarantees to boost direct bookings and conversion rates. It also enhances your guests` booking journey and even encourages more opportunities to up-sell and cross-sell

"
        linkPath="/asksuite-hotel-chatbot"
      />
      
      <div className="service_area bg_color2 pt-80 pb-70">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="section_title text_left  ">
                <div className="section_main_title">
                  <h1>The Hotels Network</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4">
                  <p>
                    Do you know the winning recipe for how to convert website
                    lookers into bookers? It is all about personalization!
                  </p>
                  <p>
                    Get help in doing that with an efficient ecosystem of growth
                    tools that can easily increase conversions and ADR; get help
                    from The Hotels Network.
                  </p>{" "}
                  <p>
                    With the Hotels Network's benchmarking platform, you can
                    compare your performance to the market and get
                    never-before-seen competitive data through real-time
                    actionable insights for competitive intelligence and smarter
                    decisions.
                  </p>
                  <div className="row  mt-4">
                    <div className="col-lg-6 col-sm-6">
                      <div className="single_service">
                        <div className="single_service_inner">
                          <div className="single_service_icon">
                            <i className="fa fa-share"></i>
                          </div>
                          <Link
                            to="/the-hotels-network"
                            className="single_service_content"
                          >
                            <h4> View More </h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5  ">
              <div className="service_single_thumb left ">
                <div className="single_service_inner_thumb m-0  ">
                  <img src="assets/images/services/s10.jpg" alt="" />
                </div>
                <div className="single_service_brg">
                  <div className="single_service_brg_thumb rotateme">
                    <img src="assets/images/service-rot.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
