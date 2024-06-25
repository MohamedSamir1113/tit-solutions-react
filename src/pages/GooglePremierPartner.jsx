import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";

const GooglePremierPartner = ({blogPosts}) => {
  const [otherPosts,setOtherPosts]=useState([])
 // const location = useLocation();
 // const searchParams = new URLSearchParams(location.search);
  //const id = searchParams.get('id');
  const [searchParams,setSearchParams]=useSearchParams();
  const id = searchParams.get("id")
  useEffect(() => {
    document.title = "Google Premier Partner 2024";
    setOtherPosts(blogPosts.filter((post) => post.id !== id));
  }, [blogPosts,id]);

  
 
  return (
    <>
     <NewsName name="Google Premier Partner 2024"/>
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
                        src="assets/images/news/google-w-tit-website.jpg"
                        alt=""
                      />
                    </div>

                    <div className="blog_dtl_content bg-news-details">
                      <div className="blog_dtl_top_bs pt-2">
                        <span>
                          <i className="fa fa-calendar"></i>16 April 2024{" "}
                        </span>
                      </div>
                      <h2 className="mb-4">Google Premier Partner 2024</h2>

                      <p>
                        T.I.T Solutions, a leading innovator in digital
                        marketing strategies, has been honored once again as a
                        Google Premier Partner for the year 2024. This
                        consecutive recognition underscores the company's
                        unwavering commitment to excellence, following its
                        previous acknowledgment as a Google Premier Partner in
                        2023.
                      </p>
                      <p>
                        T.I.T Solutions has consistently demonstrated
                        unparalleled expertise and results in leveraging
                        Google's advertising products to drive success for its
                        clients. This distinction is awarded only to companies
                        that meet Google's requirements for certification, ad
                        spend, and performance, highlighting T.I.T Solutions'
                        proficiency and dedication to delivering cutting-edge
                        solutions.
                      </p>
                      <p>
                        As a Google Premier Partner, T.I.T Solutions has proven
                        its ability to help clients navigate the complexities of
                        the digital landscape, ensuring that they not only
                        achieve but exceed their marketing objectives. The
                        agency is committed to maintaining its position as an
                        industry leader, driving innovation, and setting new
                        benchmarks for success.
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

export default GooglePremierPartner;
