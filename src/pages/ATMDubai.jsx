import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";
function ATMDubai({ blogPosts }) {
  const [otherPosts, setOtherPosts] = useState([]);
  const [searchParams,setSearchParams]=useSearchParams();
    const id = searchParams.get("id")
  useEffect(() => {
    document.title =
      "Glad to Attend ATM Dubai 2024: Connecting with Industry Leaders and Forging New Partnerships";
    setOtherPosts(blogPosts.filter((post) => post.id !== id));
  }, [blogPosts, id]);
  return (
    <>
      <NewsName name="Glad to Attend ATM Dubai 2024: Connecting with Industry Leaders and Forging New Partnerships" />
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
                        src="assets/images/ATM-Website-banner.jpg"
                        alt=""
                      />
                    </div>

                    <div className="blog_dtl_content bg-news-details">
                      <div className="blog_dtl_top_bs pt-2">
                        <span>
                          <i className="fa fa-calendar"></i>4 May 2024
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

export default ATMDubai;
