import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function HotelandResorts() {
  return (
    <>
      <div className="row mx-auto hotels-resorts justify-content-center">
        <div className="col-md-7">
          <img
            className="w-100"
            src="assets/images/digital-marketing-in-egypt-for-hotels-solutions-hotels-resorts-202120114146833.jpg"
            alt=""
          />
          <div className="pt-3">
            <h1 className="pb-20">Hotels & Resorts</h1>
            <p>
              Keep your website up-to-date and user-friendly all the time with
              the help of our web development experts. We know that all hotels
              have a website but do the design of your hotel site and images
              encourage people to book directly? Is your hotel’s website
              optimized so that customers will actually see you when they search
              online? That is exactly how we do our job to attract lookers and
              bookers!
            </p>
          </div>
          <div className="py-5">
            <h1>Talk To the Experts</h1>
          </div>

          <form id="hotels-resorts-form">
            <div className="row">
              <div className="col-lg-4">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="col-lg-4">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-lg-4">
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                />
              </div>

              <div className="col-lg-12 py-3">
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Write a Message"
                ></textarea>

                <div className="ms-0 quote_btn pt-40 text_center">
                  <button className="btn" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-5">
          <div>
            <h3>Website Development</h3>
            <ul className="list-unstyled">
              <Link to="/travel-tours">
                <li>
                  <i>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </i>
                  <span>Travel&Tours</span>
                </li>
              </Link>
              <Link to="/nile-cruises">
                <li>
                  <i>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </i>
                  <span>Nile Cruises</span>
                </li>
              </Link>
              <Link to="/general-purposes">
                <li>
                  <i>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </i>
                  <span>General Purposes</span>
                </li>
              </Link>
            </ul>
          </div>

          <div>
            <h3>Other Solutions</h3>
            <ul className="list-unstyled">
              <Link to="/booking-engine">
                <li>
                  <i>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </i>
                  <span>Booking Engine</span>
                </li>
              </Link>
              <Link to="/web-check-in-solution">
                <li>
                  <i>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </i>
                  <span>Web Check-In Solution</span>
                </li>
              </Link>
            </ul>
          </div>

          <div className="pt-20">
            <h3>Our Services</h3>
            <Link className="service-link" to="/search-engine-marketing">Search Engine Marketing</Link>
            <Link className="service-link" to="/social-media-marketing">Social Media Marketing</Link>
            <Link className="service-link" to="/social-media-managment">Social Media Management</Link>
            <Link className="service-link" to="/hotel-ecommerce">Hotel E-Commerce</Link>
            <Link className="service-link" to="/search-engine-optimization">Search Engine Optimization</Link>
            <Link className="service-link d-inline-block me" to="/email-marketing">Email Marketing</Link>
            <Link className="service-link d-inline-block" to="/reporting">Reporting</Link>
            <Link className="service-link" to="/hospitality-photography">Hospitality Photography</Link>
            <Link className="service-link" to="/asksuite-hotel-chatbot">Asksuite Hotel Chatbot</Link>
            <Link className="service-link" to="/the-hotels-network"> The Hotels Network</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelandResorts;
