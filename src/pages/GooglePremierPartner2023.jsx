import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";

const GooglePremierPartner2023 = ({blogPosts}) => {
  const [otherPosts,setOtherPosts]=useState([])
  const [searchParams,setSearchParams]=useSearchParams();
  const id = searchParams.get("id");
  useEffect(() => {
    document.title = "Google Premier Partner 2023";
    setOtherPosts(blogPosts.filter((post) => post.id !== id));
  }, [blogPosts,id]);

  
  //const [post, setPost] = useState(null);
  return (
    <>
     <NewsName name="Google Premier Partner 2023"/>
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
                        src="assets/images/google2023.jpg"
                        alt=""
                      />
                    </div>

                    <div className="blog_dtl_content bg-news-details">
                      <div className="blog_dtl_top_bs pt-2">
                        <span>
                          <i className="fa fa-calendar"></i>21 FEB 2023{" "}
                        </span>
                      </div>
                      <h2 classNameName="mb-4">Google Premier Partner 2023</h2>

                      <p>
                      As a Google Premier Partner and by being in the top selected 3% of partners in the region, T.I.T.Solutions continues its mission of introducing digital marketing best practices to the hospitality industry and turning them into a success story.
                      </p>
                      <p>
                      Becoming a Google Premier Partner means that Google recognizes our company for maximizing campaign success, driving clients' growth, and demonstrating Google Ads skills and expertise with certifications.
                      </p>
                      <p>
                      Achieving this was not easy, but it was worth the effort to reap what we sow and stand for; being the best One-Stop shop in the hospitality industry in Technology and Digital Marketing Solutions.
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
                    {otherPosts.map((otherPost) => (<OtherPosts otherPost={otherPost} key={otherPost.id}/>))}

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

export default GooglePremierPartner2023;
