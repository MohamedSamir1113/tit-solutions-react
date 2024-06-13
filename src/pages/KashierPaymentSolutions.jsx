import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";
function KashierPaymentSolutions({ blogPosts }) {
  const [otherPosts, setOtherPosts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  useEffect(() => {
    document.title =
      "T.I.T. Solutions partnering with Kashier Payment Solutions";
    setOtherPosts(blogPosts.filter((post) => post.id !== id));
  }, [blogPosts, id]);
  return (
    <>
      <NewsName name="Discover Chrismar Travel's Updated Online Presence, Crafted by T.I.T Solutions!" />
      {/*News */}

      <div class="blog_area blog-details-area pt-100 pb-100" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div class="row">
                <div class="col-md-12">
                  <div class="blog_details">
                    <div class="blog_dtl_thumb">
                      <img src="assets/images/news-kashir.jpg" alt="" />
                    </div>

                    <div class="blog_dtl_content">
                      <div class="blog_dtl_top_bs pt-2">
                        <span>
                          <i class="fa fa-calendar"></i>7 March 2023
                        </span>
                      </div>
                      <h2 className="mb-4">
                        T.I.T. Solutions partnering with Kashier Payment
                        Solutions
                      </h2>

                      <h3 className="pb-50">
                        Kashier and TIT Solutions Partner Up to Drive E-commerce
                        Growth in Egypt’s Hospitality Sector
                      </h3>
                      <p>
                        Cairo, Egypt, March 5th, 2023 – Kashier Payment and TIT
                        Solutions are proud to announce their strategic
                        partnership to drive e-commerce growth in the
                        hospitality sector in Egypt.
                      </p>
                      <p>
                        Kashier Payment Solutions, a Cairo-based Merchant
                        payment and financial services provider and a leading
                        player in the hospitality sector, processes online
                        payments for some of the top hotels in Egypt.
                      </p>
                      <p>
                        TIT Solutions is a leading provider of Online Presence
                        management and digital marketing solutions for
                        independent hotels and chains in the Egyptian
                        hospitality sector.
                      </p>
                      <p>
                        Together, the two companies will introduce the “GROW
                        E-commerce” hospitality package, designed to deliver a
                        quick setup with competitive prices and an efficient and
                        quick positive return on hotel revenues by enabling and
                        growing the e-commerce side of hotel service delivery.
                      </p>
                      <p>
                        The “GROW E-commerce” package offers an integrated
                        approach to e-commerce enabling hospitality services
                        that combine Kashier Payment Solutions’ technical
                        expertise and TIT Solutions’ marketing know-how. This
                        integration allows hoteliers to quickly set up an
                        e-commerce presence, improve customers’ experiences, and
                        grow their direct booking revenues. Thanks to these
                        partnerships, Hoteliers in Egypt can now propose a
                        seamless payment process in the booking funnel.
                      </p>
                      <p>
                        The “GROW E-commerce” package includes comprehensive
                        services tailored to each hotel’s unique needs and
                        objectives. The “GROW E-commerce” comprises a
                        mobile-friendly responsive website integrated with a
                        modern booking engine provided by D-EDGE Hospitality
                        Solutions, a world-leading CRS, enabled with Kashier
                        payment solution(s). The solution is PCI-DSS compliant,
                        providing the highest level of security for the hotels
                        and their guests. “GROW E-commerce” also includes
                        marketing and social media asset setup and management
                        and a complete set of monitoring tools.
                      </p>
                      <p>
                        Kashier Payment Solutions and TIT Solutions are
                        committed to helping Egyptian hospitality businesses
                        enable e-commerce services and grow their revenues. The
                        “GROW E-commerce” package will allow hoteliers to take
                        advantage of the latest e-commerce technologies and
                        capitalize on the potential of online sales.
                      </p>
                      <p>
                        The “GROW E-commerce” package offers critical benefits
                        to the hotels who sign up for the offer, including:
                      </p>
                      <ul class="list-bullets">
                        <li>Quick setup with minimal disruption</li>
                        <li>Competitive Pricing</li>
                        <li>
                          Increased customer reach and improved customer
                          experience
                        </li>
                        <li>
                          Improved website traffic, search rankings, and overall
                          online visibility
                        </li>
                        <li>
                          An integrated approach of e-commerce enabling services
                        </li>
                        <li>
                          Increased revenue potential through online sales
                        </li>
                      </ul>

                      <p className="py-4">(Terms and Conditions apply)</p>

                      <div>
                        <Link
                          className="d-inline"
                          style={{ fontWeight: "700" }}
                        >
                          Link To Offer
                        </Link>
                        <p className="d-inline">: GROW E-commerce Package</p>
                      </div>

                      <div>
                        <h4>About Kashier Payments</h4>
                        <p>
                          Kashier Payments was founded in 2019 to build
                          innovative technology products to bridge the gap
                          between financial services and their intended
                          consumers. We are building the financial
                          infrastructure of the future, combining innovation and
                          technological capabilities, creating the perfect mix
                          to build products that reshape finance. Working under
                          the approval of the CBE as a Payment Facilitator and
                          Payment Service Provider, Kashier provides businesses
                          with a powerful set of tools to accept and make
                          payments seamlessly and conveniently. For more
                          information, please visit www.kashier.io
                        </p>
                      </div>

                      <div>
                        <h4>About TIT Solutions</h4>
                        <p>
                          Top Information Technology Solutions (T.I.T Solutions)
                          has been pioneering innovative digital marketing and
                          IT best practices in the hospitality industry and its
                          functionality since 2002. We have been honored with a
                          range of partnerships worldwide and respectable
                          clients of hotel chains who we are proud of –which we
                          consider quite an achievement to be chosen by them in
                          such a busy travel technology market –! Our all-time
                          aim is to empower each hotelier to drive higher value
                          for the direct business, increase profitability, and
                          unlock GROWTH. With us, #YouWillNeverWalkAlone.
                        </p>
                      </div>
                      <div>
                        <h4>About D-EDGE Hospitality Solutions</h4>
                        <p>
                          D-EDGE is a SaaS company offering leading-edge
                          cloud-based e-commerce solutions to more than 17,000
                          hotels in over 150 countries. Combining technical
                          excellence with digital marketing expertise, D-EDGE
                          brings a holistic hospitality technology
                          infrastructure under one roof. The integrated range of
                          solutions covers all stages of hotel distribution,
                          which encompasses Central Reservation System, Guest
                          Management, Data Intelligence, Connectivity Hub,
                          Digital Media, and Website Creation. With a team of
                          500 experts located in over 25 countries, D-EDGE
                          provides localised support, services, and tools. With
                          its global network of 550+ partners, D-EDGE’s
                          ever-expanding ecosystem is a positive place to do
                          business and grow. D-EDGE is a subsidiary of Accor, a
                          world-leading hospitality group consisting of more
                          than 5,300 properties and 10,000 food and beverage
                          venues throughout 110 countries. For more information,
                          please visit https://www.d-edge.com
                        </p>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <h3>Share To:</h3>

                        <div class="blog_details_dtn_icon">
                          <Link to="#.">
                            <i class="fa fa-facebook"></i>
                          </Link>
                          <Link to="#.">
                            <i class="fa fa-linkedin"></i>
                          </Link>
                          <Link to="#.">
                            <FontAwesomeIcon
                              icon={faXTwitter}
                              className="fa fa-twitter"
                            />
                          </Link>
                          <Link to="#.">
                            <i class="fa fa-instagram"></i>
                          </Link>
                          <Link to="#.">
                            <i class="fa fa-pinterest"></i>
                          </Link>
                          <Link to="#.">
                            <i class="fa fa-reddit"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class=" col-lg-4 col-md-5 col-sm-12 col-xs-12 sidebar-right content-widget pdsr">
              <div class="blog-left-side widget">
                <div
                  id="em_recent_post_widget-6"
                  class="widget widget_recent_data"
                >
                  <div class="single-widget-item">
                    <h2 class="widget-title">Other News</h2>
                    {otherPosts.map((otherPost) => (
                      <OtherPosts otherPost={otherPost} key={otherPost.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KashierPaymentSolutions;
