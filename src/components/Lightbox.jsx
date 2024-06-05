import React, { useState } from "react";

const Lightbox = ({ images }) => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="footer-instagram pb-50">
      <div className="row justify-content-center">
        {images.map((image, index) => (
          <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div
              className="instagram-item"
              onClick={() => openModal(image.src)}
            >
              <span
                className="instagram-gallery wow fadeInDown delay-0-2s"
                style={{ cursor: "pointer" }}
              >
                <img src={image.src} alt={image.alt} />
                <span className="icon">
                  <i className="fab fa-instagram"></i>
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="lightbox-modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Modal" />
        </div>
      )}
    </div>
  );
};

export default Lightbox;
