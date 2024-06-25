import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link,useSearchParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";
function RiyadhTravelFair({ blogPosts }) {
  const [otherPosts, setOtherPosts] = useState([]);
  const [searchParams,setSearchParams]=useSearchParams();
  const id = searchParams.get("id")
  useEffect(() => {
    document.title =
      "T.I.T Solutions Announces Participation in Riyadh Travel Fair 2024";
    setOtherPosts(blogPosts.filter((post) => post.id !== id));
  }, [blogPosts, id]);
  return (
    <>
      <NewsName name="T.I.T Solutions Announces Participation in Riyadh Travel Fair 2024" />
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
                        src="assets/images/RIYADH-WEBSITE.jpg"
                        alt=""
                      />
                    </div>

                    <div className="blog_dtl_content bg-news-details">
                      <div className="blog_dtl_top_bs pt-2">
                        <span>
                          <i className="fa fa-calendar"></i>25 May 2024
                        </span>
                      </div>
                      <h2 className="mb-4">
                      T.I.T Solutions Announces Participation in Riyadh Travel Fair 2024
                      </h2>

                      <p>
                      T.I.T Solutions is pleased to announce that our Managing Director, Dr. Mohamed Taha, will participate in the Riyadh Travel Fair, the premier tourism event in Saudi Arabia, from May 27 to 29, 2024.
                      </p>
                      <p>
                      We are eager to explore the potential opportunities that this esteemed event will offer.
                      </p>
                      <p>
                      The Riyadh Travel Fair, known for its vibrant and diverse participation from global tourism and travel sectors, provides a unique platform for industry professionals to network, collaborate, and discover new market trends. Dr. Mohamed Taha's presence underscores T.I.T Solutions' commitment to expanding its reach and enhancing its offerings within the travel and tourism industry.
                      </p>

                      <p>
                      "We are thrilled to be part of the Riyadh Travel Fair 2024," said Dr. Taha. "This event represents a significant opportunity for us to connect with industry leaders, share our vision, and explore collaborative ventures that can shape the future of travel and tourism."
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

export default RiyadhTravelFair;
