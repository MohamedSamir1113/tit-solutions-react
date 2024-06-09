import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import BgArea from "../components/BgArea";

function WebsiteDevelopment() {
  useEffect(() => {
    document.title = "Website Development";
  }, []);
  
  return (
    <>
     {/*bg*/}
      <BgArea title1={`Website Development`} title2={`Solutions`} path={`/solutions`}/>


      <div className="service_area style2 pt-80 pb-70">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5  ">
              <div className="service_single_thumb left ">
                <div className="single_service_inner_thumb m-0  ">
                  <img src="assets/images/digital-marketing-in-egypt-for-hotels-solutions-hotels-resorts-202120114146849.jpg" alt="" />
                </div>
                <div className="single_service_brg">
                  <div className="single_service_brg_thumb rotateme">
                    <img src="assets/images/service-rot.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6  ">
              <div className="section_title text_left  ">
                <div className="section_main_title">
                  <h1>Hotels & Resorts</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4">
                  <p>
                  Keep your website up-to-date and user-friendly all the time with the help of our web development experts. We know that all hotels have a website but do the design of your hotel site and images encourage people to book directly? Is your hotel’s website optimized so that customers will actually see you when they search online? That is exactly how we do our job to attract lookers and bookers!
                  </p>
                 
                  <div className="row  mt-4">
                    <div className="col-lg-6 col-sm-6">
                      <div className="single_service">
                        <div className="single_service_inner">
                          <div className="single_service_icon">
                            <i className="fa fa-share"></i>
                          </div>
                          <Link to="/hotels-resorts" className="single_service_content">
                            <h4> View More </h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/*Hotels and resorts*/}

      <div className="service_area bg_color2 pt-80 pb-70">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6  ">
              <div className="section_title text_left  ">
                <div className="section_main_title">
                  <h1>Travel & Tours</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4">
                  <p>
                  We offer unique & custom made Website Designing & Development for hospitality sector. Our solutions cover Travel agents, hotels, Resorts and Nile cruises. Our promise is to provide world-class website design with the ability to integrate with our user friendly Connect booking engine to take your website works as a powerful online agent for you. This will ensure presenting your image in the best way infront of your clientele & drive more sales.
                  </p>
                  
                  <div className="row  mt-4">
                    <div className="col-lg-6 col-sm-6">
                      <div className="single_service">
                        <div className="single_service_inner">
                          <div className="single_service_icon">
                            <i className="fa fa-share"></i>
                          </div>
                          <Link to="/travel-tours" className="single_service_content">
                            <h4> View More </h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5  ">
              <div className="service_single_thumb left ">
                <div className="single_service_inner_thumb m-0  ">
                  <img src="assets/images/solutions/s2.jpg" alt="" />
                </div>
                <div className="single_service_brg">
                  <div className="single_service_brg_thumb rotateme">
                    <img src="assets/images/service-rot.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/*Travels and tours*/}

      <div className="service_area style2 pt-80 pb-70">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5  ">
              <div className="service_single_thumb left ">
                <div className="single_service_inner_thumb m-0  ">
                  <img src="assets/images/digital-marketing-in-egypt-for-hotels-solutions-nile-cruises-202130133148568.jpg" alt="" />
                </div>
                <div className="single_service_brg">
                  <div className="single_service_brg_thumb rotateme">
                    <img src="assets/images/service-rot.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6  ">
              <div className="section_title text_left  ">
                <div className="section_main_title">
                  <h1>Nile Cruises</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4">
                  <p>
                  Join our satisfied clients and let us create the responsive website that you dream about for your Nile Cruise business! We know your industry well and your particular needs in a website. Our web developers team is extremely experienced and trained for creating tailored websites like yours!
                  </p>
                 
                  <div className="row  mt-4">
                    <div className="col-lg-6 col-sm-6">
                      <div className="single_service">
                        <div className="single_service_inner">
                          <div className="single_service_icon">
                            <i className="fa fa-share"></i>
                          </div>
                          <Link to="/nile-cruises" className="single_service_content">
                            <h4> View More </h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/*Nile cruises*/}

      <div className="service_area bg_color2 pt-80 pb-70">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6  ">
              <div className="section_title text_left  ">
                <div className="section_main_title">
                  <h1>General Purposes</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4">
                  <p>
                  T.I.T Solutions offers next-generation web development and designing services to help you sail effortlessly through the constantly evolving technological changes.
                  </p>
                  
                  <div className="row  mt-4">
                    <div className="col-lg-6 col-sm-6">
                      <div className="single_service">
                        <div className="single_service_inner">
                          <div className="single_service_icon">
                            <i className="fa fa-share"></i>
                          </div>
                          <Link to="/general-purposes" className="single_service_content">
                            <h4> View More </h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5  ">
              <div className="service_single_thumb left ">
                <div className="single_service_inner_thumb m-0  ">
                  <img src="assets/images/digital-marketing-in-egypt-for-hotels-solutions-general-purposes-202120115030332.jpg" alt="" />
                </div>
                <div className="single_service_brg">
                  <div className="single_service_brg_thumb rotateme">
                    <img src="assets/images/service-rot.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/*general purposes*/}
    </>
  );
}

export default WebsiteDevelopment;
