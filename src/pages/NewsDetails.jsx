import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const NewsDetails = () => {
  return (
    <>
      <div className=" d-flex align-items-center mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_content text-left text-dark">
                  <ul>
                    <li className="text-dark">
                      <Link to="/" className="text-dark">
                        Home
                      </Link>{" "}
                      <i className="fa fa-angle-right text-dark"></i>
                      <Link to="/news" className="text-dark">
                        Our News
                      </Link>
                      <i className="fa fa-angle-right text-dark"></i>
                      <span className="text-dark">
                        Google Premier Partner 2024
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*News */}

      <div class="blog_area blog-details-area pt-100 pb-100" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div class="row">
                <div class="col-md-12">
                  <div class="blog_details">
                    <div class="blog_dtl_thumb">
                      <img
                        src="assets/images/news/google-w-tit-website.jpg"
                        alt=""
                      />
                    </div>

                    <div class="blog_dtl_content">
                      <div class="blog_dtl_top_bs pt-2">
                        <span>
                          <i class="fa fa-calendar"></i>16 April 2024{" "}
                        </span>
                      </div>
                      <h2 className="mb-4">Google Premier Partner 2024</h2>

                      <p>
                        T.I.T Solutions, a leading innovator in digital
                        marketing strategies, has been honored once again as a
                        Google Premier Partner for the year 2024. This
                        consecutive recognition underscores the company's
                        unwavering commitment to excellence, following its
                        previous acknowledgment as a Google Premier Partner in
                        2023.
                      </p>
                      <p>
                        T.I.T Solutions has consistently demonstrated
                        unparalleled expertise and results in leveraging
                        Google's advertising products to drive success for its
                        clients. This distinction is awarded only to companies
                        that meet Google's requirements for certification, ad
                        spend, and performance, highlighting T.I.T Solutions'
                        proficiency and dedication to delivering cutting-edge
                        solutions.
                      </p>
                      <p>
                        As a Google Premier Partner, T.I.T Solutions has proven
                        its ability to help clients navigate the complexities of
                        the digital landscape, ensuring that they not only
                        achieve but exceed their marketing objectives. The
                        agency is committed to maintaining its position as an
                        industry leader, driving innovation, and setting new
                        benchmarks for success.
                      </p>

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
                    <div class="recent-post-item">
                      <div class="recent-post-image">
                        <Link to="#.">
                          <img
                            width="100"
                            height="90"
                            src="assets/images/news/WS-Travco-Launch.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="recent-post-text">
                        <h4>
                          <Link to="#.">
                            T.I.T Solutions and Travco Group...
                          </Link>
                        </h4>
                        <span class="rcomment">Tuesday, April 2, 2024</span>
                      </div>
                    </div>
                    <div class="recent-post-item">
                      <div class="recent-post-image">
                        <Link to="#.">
                          <img
                            width="100"
                            height="90"
                            src="assets/images/news/WS-Cleopark-Launch.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="recent-post-text">
                        <h4>
                          <Link to="#.">
                            T.I.T Solutions & Cleopark, owned By Sharm Dreams...
                          </Link>
                        </h4>
                        <span class="rcomment">Monday, April 1, 2024</span>
                      </div>
                    </div>
                    <div class="recent-post-item">
                      <div class="recent-post-image">
                        <Link to="#.">
                          <img
                            width="100"
                            height="90"
                            src="assets/images/news/duetto-website.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="recent-post-text">
                        <h4>
                          <Link to="#.">
                            Driving Innovation In Profit Optimization:
                            T.I.T.Solutions...
                          </Link>
                        </h4>
                        <span class="rcomment">Tuesday, March 5, 2024</span>
                      </div>
                    </div>
                    <div class="recent-post-item">
                      <div class="recent-post-image">
                        <Link to="#.">
                          <img
                            width="100"
                            height="90"
                            src="assets/images/news/chrismar-Website-banner-3.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="recent-post-text">
                        <h4>
                          <Link to="#.">
                            Discover Chrismar Travel's Updated Online
                            Presence...
                          </Link>
                        </h4>
                        <span class="rcomment">Monday,January 15, 2024</span>
                      </div>
                    </div>

                    <div class="recent-post-item">
                      <div class="recent-post-image">
                        <Link to="#.">
                          <img
                            width="100"
                            height="90"
                            src="assets/images/news/Lets-meet-in-Berlin.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="recent-post-text">
                        <h4>
                          <Link to="#.">Let's meet in Berlin!</Link>
                        </h4>
                        <span class="rcomment">Sunday, March 3, 2024</span>
                      </div>
                    </div>
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

export default NewsDetails;
