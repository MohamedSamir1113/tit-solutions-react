import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <div className="breatcome_area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner pb-2">
                  <h2>Our News</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>{" "}
                      <i className="fa fa-angle-right"></i>
                      <span>Our News</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*News */}

      <div className="blog_area pt-85 pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-50 mt-3">
                <div className="section_main_title">
                  <h1>
                    Our <span>News</span>
                  </h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="single_blog text-center mb-4 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
              >
                <div className="single_blog_thumb">
                  <Link to="/news-details">
                    <img
                      src="assets/images/news/google-w-tit-website.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="single_blog_date">
                  <div className="single_blog_date_inner">
                    <h3>16</h3>
                    <span>APR</span>
                    <span className="years">2024</span>
                  </div>
                </div>
                <div className="single_blog_content pt-4 pl-4 pr-4">
                  <div className="blog_page_title pb-1">
                    <h6 className="mb-3">
                      <Link to="/news-details">
                        <br />
                        Google Premier Partner 2024
                      </Link>
                    </h6>
                  </div>
                  <div className="blog_description">
                    <p className="news-p">
                      T.I.T Solutions, a leading innovator in digital marketing
                      strategies, has been honored once again as a Google
                      Premier Partner for the year 2024. This consecutive
                      recognition underscores the company's unwavering
                      commitment to excellence, following its previous
                      acknowledgment as a Google Premier Partner in 2023.
                    </p>
                  </div>
                  <div className="blog_page_button style_two pb-5">
                    <Link to="/news-details">
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="single_blog text-center mb-4 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
              >
                <div className="single_blog_thumb">
                  <Link to="/news-details">
                    <img src="assets/images/news/WS-Travco-Launch.png" alt="" />
                  </Link>
                </div>
                <div className="single_blog_date color2">
                  <div className="single_blog_date_inner">
                    <h3>2</h3>
                    <span>APR</span>
                    <span className="years">2024</span>
                  </div>
                </div>
                <div className="single_blog_content pt-4 pl-4 pr-4">
                  <div className="blog_page_title pb-1">
                    <h6 className="mb-3">
                      <Link to="/news-details">
                        T.I.T Solutions and Travco Group Launches A New Website
                      </Link>
                    </h6>
                  </div>
                  <div className="blog_description">
                    <p className="news-p">
                      T.I.T Solutions is taking pride in announcing the launch
                      of the new website for Travco Group. The new website is
                      designed to provide a cutting-edge and dynamic user
                      experience. With a wide range of features and
                      functionalities that cater to the diverse needs of the
                      users.
                    </p>
                  </div>
                  <div className="blog_page_button style_two pb-5">
                    <Link to="/news-details">
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="single_blog text-center mb-4 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
              >
                <div className="single_blog_thumb">
                  <Link to="/news-details">
                    <img
                      src="assets/images/news/WS-Cleopark-Launch.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="single_blog_date color3">
                  <div className="single_blog_date_inner">
                    <h3>1</h3>
                    <span>APR</span>
                    <span className="years">2024</span>
                  </div>
                </div>
                <div className="single_blog_content pt-4 pl-4 pr-4">
                  <div className="blog_page_title pb-1">
                    <h6 className="mb-3">
                      <Link to="/news-details">
                        T.I.T Solutions & Cleopark, owned By Sharm Dreams
                        Holding, Shape a Digital Path to Adventure!
                      </Link>
                    </h6>
                  </div>
                  <div className="blog_description">
                    <p className="news-p">
                      T.I.T Solutions has launched the first-of-a-kind website
                      for a water park for Cleopark, the premier water park in
                      Sharm El Sheikh. Cleopark is owned by Sharm Dreams Holding
                      and operated by The Jaz Hotel Group.
                    </p>
                  </div>
                  <div className="blog_page_button style_two pb-5">
                    <Link to="/news-details">
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="single_blog text-center mb-4 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
              >
                <div className="single_blog_thumb">
                  <Link to="/news-details">
                    <img src="assets/images/news/duetto-website.jpg" alt="" />
                  </Link>
                </div>
                <div className="single_blog_date">
                  <div className="single_blog_date_inner">
                    <h3>5</h3>
                    <span>MAR</span>
                    <span className="years">2024</span>
                  </div>
                </div>
                <div className="single_blog_content pt-4 pl-4 pr-4">
                  <div className="blog_page_title pb-1">
                    <h6 className="mb-3">
                      <Link to="/news-details">
                        Driving Innovation In Profit Optimization:
                        T.I.T.Solutions Partners with Duetto Software to
                        Transform Hospitality field.
                      </Link>
                    </h6>
                  </div>
                  <div className="blog_description">
                    <p className="news-p">
                      Exciting news! We have partnered with Duetto Software to
                      revolutionize revenue management for hotels and resorts.
                      With Duetto's cutting-edge technology, we are confident
                      that we can deliver unparalleled value to our clients in
                      the hospitality sector.
                    </p>
                  </div>
                  <div className="blog_page_button style_two pb-5">
                    <Link to="/news-details">
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="single_blog text-center mb-4 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
              >
                <div className="single_blog_thumb">
                  <Link to="/news-details">
                    <img
                      src="assets/images/news/Lets-meet-in-Berlin.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="single_blog_date color2">
                  <div className="single_blog_date_inner">
                    <h3>3</h3>
                    <span>MAR</span>
                    <span className="years">2024</span>
                  </div>
                </div>
                <div className="single_blog_content pt-4 pl-4 pr-4">
                  <div className="blog_page_title pb-1">
                    <h3>
                      <Link to="/news-details">Let's meet in Berlin!</Link>
                    </h3>
                  </div>
                  <div className="blog_description">
                    <p className="news-p">
                      We are delighted to announce that our Managing Director,
                      Dr. Mohamed Taha, will attend the renowned ITB Berlin
                      Conference. This provides us with an excellent opportunity
                      to explore potential partnerships, discuss industry
                      trends, and showcase how T.I.T Solutions' team is changing
                      the game in travel experiences.
                    </p>
                  </div>
                  <div className="blog_page_button style_two pb-5">
                    <Link to="/news-details">
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="single_blog text-center mb-4 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
              >
                <div className="single_blog_thumb">
                  <Link to="/news-details">
                    <img
                      src="assets/images/news/chrismar-Website-banner-3.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="single_blog_date color3">
                  <div className="single_blog_date_inner">
                    <h3>15</h3>
                    <span>JAN</span>
                    <span className="years">2024</span>
                  </div>
                </div>
                <div className="single_blog_content pt-4 pl-4 pr-4">
                  <div className="blog_page_title pb-1">
                    <h3>
                      <Link to="/news-details">
                        Discover Chrismar Travel's Updated Online Presence,
                        Crafted by T.I.T Solutions!
                      </Link>
                    </h3>
                  </div>
                  <div className="blog_description">
                    <p className="news-p">
                      We are thrilled to share the exciting introduction of
                      Chrismar Travel website. The new website promises to be an
                      engaging gateway for travel enthusiasts, offering a
                      seamless exploration of Chrismar's world of captivating
                      destinations and experiences.
                    </p>
                  </div>
                  <div className="blog_page_button style_two pb-5">
                    <Link to="/news-details">
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </Link>
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

export default News;
