import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";
function Travco({ blogPosts }) {
  const [otherPosts, setOtherPosts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  useEffect(() => {
    document.title =
      "T.I.T Solutions and Travco Group Launches A New Website";
    setOtherPosts(blogPosts.filter((post) => post.id !== id));
  }, [blogPosts, id]);
  return (
    <>
      <NewsName name="T.I.T Solutions and Travco Group Launches A New Website" />
      {/*News */}

      <div class="blog_area blog-details-area pt-100 pb-100 bg-news" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div class="row">
                <div class="col-md-12">
                  <div class="blog_details">
                    <div class="blog_dtl_thumb">
                      <img
                        src="assets/images/news/WS-Travco-Launch.png"
                        alt=""
                      />
                    </div>

                    <div class="blog_dtl_content bg-news-details">
                      <div class="blog_dtl_top_bs pt-2">
                        <span>
                          <i class="fa fa-calendar"></i>2 April 2024
                        </span>
                      </div>
                      <h2 className="mb-4">
                      T.I.T Solutions and Travco Group Launches A New Website

                      </h2>

                      <p>
                      Travco Group: is an international company with local heritage. It has a footprint across the globe yet it is proud of its legacy that started in Egypt back in 1979. Travco is a dominant local player and international brand. Not only does Travco lead the market in travel and hospitality, but it also conquers vast diverse industries including aviation, real estate development, engineering and construction, security services, transportation, retail, and merchandise; creating an unrivaled international integrated platform that consistently delivers on its promise of delivering the highest value, world-class endless experience and beyond
                      </p>
                      <p>
                      Visit the new website https://travco.com/ today and explore Travco Group`s unique travel options.
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
