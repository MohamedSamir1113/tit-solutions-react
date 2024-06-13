import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";
function ChrismarTravel({ blogPosts }) {
  const [otherPosts, setOtherPosts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  useEffect(() => {
    document.title =
      "Discover Chrismar Travel's Updated Online Presence, Crafted by T.I.T Solutions!";
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
                      <img src="assets/images/news/chrismar-Website-banner-3.jpg" alt="" />
                    </div>

                    <div class="blog_dtl_content">
                      <div class="blog_dtl_top_bs pt-2">
                        <span>
                          <i class="fa fa-calendar"></i>3 March 2024
                        </span>
                      </div>
                      <h2 className="mb-4">
                      Discover Chrismar Travel's Updated Online Presence, Crafted by T.I.T Solutions!
                      </h2>

                      <p>
                      We are thrilled to share the exciting introduction of Chrismar Travel website. The new website promises to be an engaging gateway for travel enthusiasts, offering a seamless exploration of Chrismar's world of captivating destinations and experiences.
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

export default ChrismarTravel;
