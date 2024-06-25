import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";
function Berlin({ blogPosts }) {
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
                      <img src="assets/images/news/Lets-meet-in-Berlin.jpg" alt="" />
                    </div>

                    <div className="blog_dtl_content bg-news-details">
                      <div className="blog_dtl_top_bs pt-2">
                        <span>
                          <i className="fa fa-calendar"></i>3 March 2024
                        </span>
                      </div>
                      <h2 classNameName="mb-4">
                      Let's meet in Berlin!
                      </h2>

                      <p>
                      We are delighted to announce that our Managing Director, Dr. Mohamed Taha, will attend the renowned ITB Berlin Conference. This provides us with an excellent opportunity to explore potential partnerships, discuss industry trends, and showcase how T.I.T Solutions' team is changing the game in travel experiences.
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
                              classNameName="fa fa-twitter"
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

export default Berlin;
