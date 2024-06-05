function ModalVideo({ handleClose }) {
  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <iframe
          title="video"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/7BGNAGahig8"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ModalVideo;
