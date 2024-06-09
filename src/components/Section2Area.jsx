import { Link } from "react-router-dom";

function Section2Area({ title, description, linkPath, imgSrc }) {
  return (
    <>
      <div className="service_area bg_color2 pt-80 pb-70">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6  ">
              <div className="section_title text_left  ">
                <div className="section_main_title">
                  <h1>{title}</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4">
                  <p>{description}</p>

                  <div className="row  mt-4">
                    <div className="col-lg-6 col-sm-6">
                      <div className="single_service">
                        <div className="single_service_inner">
                          <div className="single_service_icon">
                            <i className="fa fa-share"></i>
                          </div>
                          <Link
                            to={linkPath}
                            className="single_service_content"
                          >
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
                  <img src={imgSrc} alt="" />
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
    </>
  );
}

export default Section2Area;
