import React, { useEffect, useState } from "react";
// import { Container, ProgressBar } from "react-bootstrap";

const Loader = () => {
  const [now, setNow] = useState(0);

  useEffect(() => {
    now <= 95 && setTimeout(() => setNow(now + 10), [100]);
  }, [now]);

  return (
    <>
      {/* <div style={{ height: "100vh" }} className="d-flex align-items-center ">
        <div className="container mt-5 text-center">
    
          <div
            className="loader d-flex justify-content-center align-items-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ zIndex: "9999999", position: "fixed" }}>
              {" "}
              <img
                alt="loader"
                src="Spin.gif"
                width="100"
               
                style={{ filter: "brightness(0.7)" }}
              />
               
            </div>
          </div>
           
        </div>
          </div>*/}
      <div className="loader-container">
        <img src="logo-header.png" alt="Loader" className="loader-image" />
        <div className="loader-text">
          <span className="letter">T</span>
          <span className="letter">.</span>
          <span className="letter">I</span>
          <span className="letter">.</span>
          <span className="letter">T</span>
          <span className="letter">&nbsp;</span>
          <span className="letter">S</span>
          <span className="letter">o</span>
          <span className="letter">l</span>
          <span className="letter">u</span>
          <span className="letter">t</span>
          <span className="letter">i</span>
          <span className="letter">o</span>
          <span className="letter">n</span>
          <span className="letter">s</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
