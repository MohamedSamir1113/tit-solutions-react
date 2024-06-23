import React, { useEffect } from "react";

import BgArea from "../components/BgArea";
import BlogDetails from "../components/BlogDetails";
const News = ({blogPosts}) => {
  useEffect(() => {
    document.title = "Our News";
  }, []);
  

  return (
    <>
      <BgArea title1="Our News" title2="Home" path="/" />
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
            {blogPosts.map((blogPost, i) => (
              <BlogDetails key={i} blogPost={blogPost} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
