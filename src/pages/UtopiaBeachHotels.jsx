import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";

const SliceandDice = ({ blogPosts }) => {
  const [otherPosts, setOtherPosts] = useState([]);
  const [searchParams,setSearchParams]=useSearchParams();
  const id = searchParams.get("id");
  useEffect(() => {
    document.title = "Slice and Dice Egypt Website Launched by T.I.T Solutions";
    setOtherPosts(blogPosts.filter((post) => post.id !== id));
  }, [blogPosts, id]);

  //const [post, setPost] = useState(null);
  return (
    <>
      <NewsName name="Slice and Dice Egypt Website Launched by T.I.T Solutions" />
      {/*News */}

      <div className="blog_area blog-details-area pt-100 pb-100 bg-news" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="blog_details">
                    <div className="blog_dtl_thumb">
                      <img src="assets/images/newsutopia.jpg" alt="" />
                    </div>

                    <div className="blog_dtl_content bg-news-details">
                      <div className="blog_dtl_top_bs pt-2">
                        <span>
                          <i className="fa fa-calendar"></i>19 FEB 2023
                        </span>
                      </div>
                      <h2 className="mb-4">
                        Slice and Dice Egypt Website Launched by T.I.T Solutions
                      </h2>

                      <p>
                      With honor and pleasure, we are sharing with you our new Website project launch for Slice and Dice Egypt
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
};

export default SliceandDice;
