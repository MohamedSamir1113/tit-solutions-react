import React, { useState } from "react";
import "./CustomLightbox.css"; // Import your custom CSS

const CustomLightbox = ({ imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="instagram-item wow fadeInUp delay-0-3s">
        {" "}
        <img
          src={imageSrc}
          onClick={() => setIsOpen(true)}
          alt="Thumbnail"
          style={{ cursor: "pointer" }}
        />
      </div>
      {isOpen && (
        <div className="lightbox-backdrop" onClick={() => setIsOpen(false)}>
          <img src={imageSrc} alt="Full Size" className="lightbox-image" />
        </div>
      )}
    </>
  );
};

export default CustomLightbox;
