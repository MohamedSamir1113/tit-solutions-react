import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";
function Travco({ blogPosts }) {
  const [otherPosts, setOtherPosts] = useState([]);
  const [searchParams,setSearchParams]=useSearchParams();
    const id = searchParams.get("id")
  useEffect(() => {
    document.title =
      "T.I.T Solutions and Travco Group Launches A New Website";
    setOtherPosts(blogPosts.filter((post) => post.id !== id));
  }, [blogPosts, id]);
  return (
    <>
      <NewsName name="T.I.T Solutions and Travco Group Launches A New Website" />
      {/*News */}

      <div className="blog_area blog-details-area pt-100 pb-100 bg-news" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="blog_details">
                    <div className="blog_dtl_thumb">
                      <img
                        src="assets/images/news/WS-Travco-Launch.png"
                        alt=""
                      />
                    </div>

                    <div className="blog_dtl_content bg-news-details">
                      <div className="blog_dtl_top_bs pt-2">
                        <span>
                          <i className="fa fa-calendar"></i>2 April 2024
                        </span>
                      </div>
                      <h2 classNameName="mb-4">
                      T.I.T Solutions and Travco Group Launches A New Website

                      </h2>

                      <p>
                      Travco Group: is an international company with local heritage. It has a footprint across the globe yet it is proud of its legacy that started in Egypt back in 1979. Travco is a dominant local player and international brand. Not only does Travco lead the market in travel and hospitality, but it also conquers vast diverse industries including aviation, real estate development, engineering and construction, security services, transportation, retail, and merchandise; creating an unrivaled international integrated platform that consistently delivers on its promise of delivering the highest value, world-className endless experience and beyond
                      </p>
                      <p>
                      Visit the new website https://travco.com/ today and explore Travco Group`s unique travel options.
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

export default Travco;
