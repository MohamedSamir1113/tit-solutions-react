import React, { useEffect } from "react";
import $ from "jquery";

// Import FancyBox CSS
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";
// Import FancyBox JS
import "@fancyapps/fancybox";
import { Link } from "react-router-dom";

const VideoModalFancyBox = () => {
  useEffect(() => {
    // Initialize FancyBox
    $("[data-fancybox]").fancybox({
      // FancyBox options
    });
  }, []);

  return (
    <div>
      <Link
        title="video"
        data-fancybox
        data-type="iframe"
        data-src="https://www.youtube.com/watch?v=e6R6VsgD8yQ&amp;amp;t=179s"
        href="javascript:;"
        
        className="button video-vemo-icon venobox vbox-item"
        data-vbtype="youtube"
        data-autoplay="true"
      >
        <i className="bi bi-play-fill"></i>
      </Link>
    </div>
  );
};

export default VideoModalFancyBox;
