import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import NewsName from "../components/NewsName";
function DubaiHotelShow({blogPosts}) {
    
    const [otherPosts,setOtherPosts]=useState([])
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    useEffect(() => {
      document.title = "We're Heading Back to Dubai for The Hotel Show";
      setOtherPosts(blogPosts.filter((post) => post.id !== id));
    }, [blogPosts,id])
    return (
        <>
        <NewsName name="We're Heading Back to Dubai for The Hotel Show"/>
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
                          src="assets/images/dubai-show-Website-banner.jpg"
                          alt=""
                        />
                      </div>
  
                      <div class="blog_dtl_content">
                        <div class="blog_dtl_top_bs pt-2">
                          <span>
                            <i class="fa fa-calendar"></i>2 June 2024
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
