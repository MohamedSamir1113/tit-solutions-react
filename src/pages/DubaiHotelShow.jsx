import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";
function DubaiHotelShow({blogPosts}) {
    
    const [otherPosts,setOtherPosts]=useState([])
    const [searchParams,setSearchParams]=useSearchParams();
    const id = searchParams.get("id")
    useEffect(() => {
      document.title = "We're Heading Back to Dubai for The Hotel Show";
      setOtherPosts(blogPosts.filter((post) => post.id !== id));
    }, [blogPosts,id])
    return (
        <>
        <NewsName name="We're Heading Back to Dubai for The Hotel Show"/>
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
                          src="assets/images/dubai-show-Website-banner.jpg"
                          alt=""
                        />
                      </div>
  
                      <div className="blog_dtl_content bg-news-details">
                        <div className="blog_dtl_top_bs pt-2">
                          <span>
                            <i className="fa fa-calendar"></i>2 June 2024
                          </span>
                        </div>
                        <h2 className="mb-4">We're Heading Back to Dubai for The Hotel Show</h2>
  
                        <p>
                        We are thrilled to announce our participation in The Hotel Show in Dubai, the ultimate hub for the hospitality industry! This premier event is scheduled to take place from 4 to 6 June, brings together leading brands and professionals from around the world, offering an unparalleled platform for networking, innovation, and discovering new opportunities.
                        </p>
                        <p>
                        As a key event in the global hospitality calendar, The Hotel Show attracts industry leaders and showcases cutting-edge products and services. It provides a unique opportunity for attendees to connect, collaborate, and stay ahead of the latest trends and developments in the hospitality sector.
                        </p>
                        <p>
                        This event is a great opportunity for us to engage with industry experts, explore the latest innovations, and gain valuable insights that will help us continue to elevate our services and offerings." said Dr. Mohamed Taha, Managing Director at T.I.T Solutions.
                        </p>

                        <p>
                        Our team is committed to leveraging this experience to bring back fresh ideas and innovative solutions that will benefit our clients and partners.
                        </p>

                        <p>
                        We look forward to connecting with you at The Hotel Show in Dubai!
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
    )
}

export default DubaiHotelShow
