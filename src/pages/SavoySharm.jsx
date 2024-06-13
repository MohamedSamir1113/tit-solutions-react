import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";

const SavoySharm = ({ blogPosts }) => {
  const [otherPosts, setOtherPosts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  useEffect(() => {
    document.title =
      "launch of Asksuite at our prestigious partner Savoy Group Sharm El Sheikh";
    setOtherPosts(blogPosts.filter((post) => post.id !== id));
  }, [blogPosts, id]);

  //const [post, setPost] = useState(null);
  return (
    <>
      <NewsName name="launch of Asksuite at our prestigious partner Savoy Group Sharm El Sheikh" />
      {/*News */}

      <div class="blog_area blog-details-area pt-100 pb-100" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div class="row">
                <div class="col-md-12">
                  <div class="blog_details">
                    <div class="blog_dtl_thumb">
                      <img src="assets/images/news-savoy.jpg" alt="" />
                    </div>

                    <div class="blog_dtl_content">
                      <div class="blog_dtl_top_bs pt-2">
                        <span>
                          <i class="fa fa-calendar"></i>6 DEC 2022{" "}
                        </span>
                      </div>
                      <h2 className="mb-4">
                        launch of Asksuite at our prestigious partner Savoy
                        Group Sharm El Sheikh
                      </h2>

                      <p>
                        We are thrilled to announce the launch of Asksuite at
                        our prestigious partner Savoy Group Sharm El Sheikh
                        website and social media channels.
                      </p>
                      <p>
                        Asksuite has been awarded the Best AI Chatbot
                        Reservation Assistant in 2022, The Chatbot will serve
                        Savoy Sharm El Sheikh , Royal Savoy Hotel & Villas,
                        Sierra Sharm El Sheikh, and Grand Oasis Sharm El Sheikh
                      </p>
                      <p>Congratulations to Savoy Group Sharm El Sheikh, and keep up the excellent work💪</p>
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
};

export default SavoySharm;