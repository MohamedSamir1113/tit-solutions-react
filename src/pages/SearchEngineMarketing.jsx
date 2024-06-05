import { Link } from "react-router-dom"

function SearchEngineMarketing() {
    return (
        <>
    <div className="breatcome_area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner pb-2">
                  <h2>Search Engine Marketing</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <Link to="/services">Services</Link>{" "}
                      <i className="fa fa-angle-right"></i>
                      <span>Search Engine Marketing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/*bg*/}

      <div className="service_area style2 pt-80 pb-70">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5  ">
              <div className="service_single_thumb left ">
                <div className="single_service_inner_thumb m-0  ">
                  <img src="assets/images/services/google-hotel-ads.jpg" alt="" />
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
                  <h1>Google Ads</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4">
                  <p>
                  Managing Google Ads for hotels and building it from scratch is very demanding, which usually ends with business owners and managers leaving this magnificent tool to easier platforms.
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
      </div>{/*Google ads*/}

      <div className="service_area bg_color2 pt-80 pb-70">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6  ">
              <div className="section_title text_left  ">
                <div className="section_main_title">
                  <h1>Bing Ads</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4">
                  <p>
                  T.I.T. solutions agency offers you powerful Bing hotel ads management with real-time results.
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
                  <img src="assets/images/services/bing-hotel-ads.jpg" alt="" />
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
      </div>{/*Bing Ads*/}

      <div className="service_area style2 pt-80 pb-70">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5  ">
              <div className="service_single_thumb left ">
                <div className="single_service_inner_thumb m-0  ">
                  <img src="assets/images/services/yandex-ads-in-egypt.jpg" alt="yandex" />
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
                  <h1>Yandex Ads</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4">
                  <p>
                  Unlock your business potential, tap into new markets, and grow internationally in the Russian-speaking world with our Yandex ads in Egypt.
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
      </div>{/*Yandex*/}

      
    </>
    )
}

export default SearchEngineMarketing
