import { Link, Outlet, useLocation } from "react-router-dom";


function WebsiteDevelopment() {
  const location=useLocation()
  return (
    <>
     {location.pathname==="/solutions/website-development"?<>
     <div className="service_area style2 pt-80 pb-70">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5  ">
              <div className="service_single_thumb left ">
                <div className="single_service_inner_thumb m-0  ">
                  <img src="assets/images/solutions/s1.jpg" alt="" />
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
                          <Link className="single_service_content" to="hotels-resorts">Continue Reading</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="service_area bg_color2 pt-80 pb-70">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6  ">
              <div className="section_title text_left  ">
                <div className="section_main_title">
                  <h1>Travel and Tours</h1>
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
                          <Link className="single_service_content" to="travel-tours">Continue Reading</Link>
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
      </div>
      
      <div className="service_area style2 pt-80 pb-70">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5  ">
              <div className="service_single_thumb left ">
                <div className="single_service_inner_thumb m-0  ">
                  <img src="assets/images/solutions/s3.jpg" alt="" />
                </div>
                <div className="single_service_brg">
                  <div className="single_service_brg_thumb rotateme">
                    <img src="assets/images/service-rot.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="section_title text_left  ">
                <div className="section_main_title">
                  <h1>Web Check-In Solution</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4">
                  <p>
                    During this challenging time, Hotels & Resorts need to
                    implement a solution to facilitate a smooth, fast, and
                    paperless Check-In for the guests. Our solution ensures a
                    better experience for our guests and more reliable
                    protection for our teams.
                  </p>

                  <div className="row  mt-4">
                    <div className="col-lg-6 col-sm-6">
                      <div className="single_service">
                        <div className="single_service_inner">
                          <div className="single_service_icon">
                            <i className="fa fa-share"></i>
                          </div>
                          <a href="#." className="single_service_content">
                            <h4> View More </h4>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </>:<Outlet/>}
    </>
  );
}

export default WebsiteDevelopment;
