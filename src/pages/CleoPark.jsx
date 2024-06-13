import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";
function CleoPark({ blogPosts }) {
  const [otherPosts, setOtherPosts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  useEffect(() => {
    document.title =
      "T.I.T Solutions & Cleopark, owned By Sharm Dreams Holding, Shape a Digital Path to Adventure!";
    setOtherPosts(blogPosts.filter((post) => post.id !== id));
  }, [blogPosts, id]);
  return (
    <>
      <NewsName name="T.I.T Solutions & Cleopark, owned By Sharm Dreams Holding, Shape a Digital Path to Adventure!" />
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
                        src="assets/images/news/WS-Cleopark-Launch.jpg"
                        alt=""
                      />
                    </div>

                    <div class="blog_dtl_content">
                      <div class="blog_dtl_top_bs pt-2">
                        <span>
                          <i class="fa fa-calendar"></i>1 April 2024
                        </span>
                      </div>
                      <h2 className="mb-4">
                      T.I.T Solutions & Cleopark, owned By Sharm Dreams Holding, Shape a Digital Path to Adventure!

                      </h2>

                      <p>
                      T.I.T Solutions has launched the first-of-a-kind website for a water park for Cleopark, the premier water park in Sharm El Sheikh. Cleopark is owned by Sharm Dreams Holding and operated by The Jaz Hotel Group.
                      </p>
                      <p>
                      Sharm Dreams Holding is a Leading Egyptian Group of companies specialized in offering high-end tourist, entertainment, and mixed-use real estate developments.
                      </p>
                      <p>
                      The Jaz Hotel Group is one of the biggest and premier hotel ownership and management chains in the Middle East. Currently, the group owns 58 properties in Egypt & the UAE, under the flagship of Jaz Hotels & Resorts, Magic World Club by Jaz, Iberotel Hotels & Resorts, Solymar Hotels & Resorts, & Steigenberger Hotels and Resorts.
                      </p>
                      <p>
                      In an era where technology and leisure intertwine, T.I.T Solutions has crafted a digital masterpiece for Cleopark, redefining the online presence of this iconic destination. The new website embodies the spirit of Cleopark, offering a seamless blend of adventure and relaxation at the click of a button.
                      </p>
                      <p>
                      Experience this exhilarating journey of discovery and excitement from here: https://cleoparksharm.com/
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

export default CleoPark;
