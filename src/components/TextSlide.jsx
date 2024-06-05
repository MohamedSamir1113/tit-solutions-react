import React from "react";

const TextSlide = ({ id, title, subTitle, buttonText }) => {
  console.log("TextSlide props:", { id, title, subTitle, buttonText }); // Debug log

  return (
    <div id={id} className="nivo-html-caption em-slider-content-nivo">
      <div className="em_slider_inner container text-left">
        {title && <h1 className="em-slider-main-title">{title}</h1>}
        {subTitle && <h3 className="em-slider-sub-title">{subTitle}</h3>}
        {buttonText && (
          <a href="#" className="btn btn-primary">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default TextSlide;
