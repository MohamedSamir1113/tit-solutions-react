import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";
function Duetto({ blogPosts }) {
  const [otherPosts, setOtherPosts] = useState([]);
  const [searchParams,setSearchParams]=useSearchParams();
    const id = searchParams.get("id")
  useEffect(() => {
    document.title =
      "Driving Innovation In Profit Optimization: T.I.T.Solutions Partners with Duetto Software to Transform Hospitality field.";
    setOtherPosts(blogPosts.filter((post) => post.id !== id));
  }, [blogPosts, id]);
  return (
    <>
      <NewsName name="Driving Innovation In Profit Optimization: T.I.T.Solutions Partners with Duetto Software to Transform Hospitality field." />
      {/*News */}

      <div className="blog_area blog-details-area pt-100 pb-100 bg-news" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="blog_details">
                    <div className="blog_dtl_thumb">
                      <img src="assets/images/news/duetto-website.jpg" alt="" />
                    </div>

                    <div className="blog_dtl_content bg-news-details">
                      <div className="blog_dtl_top_bs pt-2">
                        <span>
                          <i className="fa fa-calendar"></i>5 March 2024
                        </span>
                      </div>
                      <h2 className="mb-4">
                      Driving Innovation In Profit Optimization: T.I.T.Solutions Partners with Duetto Software to Transform Hospitality field.
                      </h2>

                      <p>
                        Exciting news! We have partnered with Duetto Software to
                        revolutionize revenue management for hotels and resorts.
                        With Duetto's cutting-edge technology, we are confident
                        that we can deliver unparalleled value to our clients in
                        the hospitality sector.
                      </p>
                      <p>
                        Duetto's innovative Hotel Revenue Management Software
                        tools empower hotels and resorts to optimize pricing,
                        forecast dynamic demand, and maximize revenue through
                        real-time data-driven insights. By leveraging Duetto's
                        technology, we will offer our clients a comprehensive
                        suite of advertising solutions tailored to the unique
                        needs of the hospitality industry.
                      </p>
                      <p>
                        Our unwavering dedication to innovation and excellence
                        has steered us through this journey, and we are thrilled
                        to begin this new chapter with Duetto as our Partner.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <h3>Share To:</h3>

                        <div className="blog_details_dtn_icon">
                          <Link to="#.">
                            <i className="fa fa-facebook"></i>
                          </Link>
                          <Link to="#.">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link to="#.">
                            <FontAwesomeIcon
                              icon={faXTwitter}
                              className="fa fa-twitter"
                            />
                          </Link>
                          <Link to="#.">
                            <i className="fa fa-instagram"></i>
                          </Link>
                          <Link to="#.">
                            <i className="fa fa-pinterest"></i>
                          </Link>
                          <Link to="#.">
                            <i className="fa fa-reddit"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-5 col-sm-12 col-xs-12 sidebar-right content-widget pdsr">
              <div className="blog-left-side widget">
                <div
                  id="em_recent_post_widget-6"
                  className="widget widget_recent_data"
                >
                  <div className="single-widget-item">
                    <h2 className="widget-title">Other News</h2>
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

export default Duetto;
