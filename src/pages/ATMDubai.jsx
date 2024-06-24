import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";
function ATMDubai({ blogPosts }) {
  const [otherPosts, setOtherPosts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  useEffect(() => {
    document.title =
      "Glad to Attend ATM Dubai 2024: Connecting with Industry Leaders and Forging New Partnerships";
    setOtherPosts(blogPosts.filter((post) => post.id !== id));
  }, [blogPosts, id]);
  return (
    <>
      <NewsName name="Glad to Attend ATM Dubai 2024: Connecting with Industry Leaders and Forging New Partnerships" />
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
                        src="assets/images/ATM-Website-banner.jpg"
                        alt=""
                      />
                    </div>

                    <div class="blog_dtl_content bg-news-details">
                      <div class="blog_dtl_top_bs pt-2">
                        <span>
                          <i class="fa fa-calendar"></i>4 May 2024
                        </span>
                      </div>
                      <h2 className="mb-4">
                      Glad to Attend ATM Dubai 2024: Connecting with Industry Leaders and Forging New Partnerships

                      </h2>

                      <p>
                      We are delighted to announce our participation in the prestigious Arabian Travel Market (ATM) 2024, set to take place in Dubai from May 6th to May 9th.
                      </p>
                      <p>
                      This significant event will witness the presence of our Managing Director, Mohamed Taha, and our General Manager, Nahla Salah, who will represent us with utmost enthusiasm and expertise.
                      </p>
                      <p>
                      ATM Dubai is a pivotal platform for industry players to converge, exchange insights, and explore opportunities that drive innovation and growth in travel and tourism.
                      </p>

                      <p>
                      T.I.T Solutions eagerly anticipates engaging with industry experts, fostering meaningful connections, and establishing new partnerships.
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

export default ATMDubai;
