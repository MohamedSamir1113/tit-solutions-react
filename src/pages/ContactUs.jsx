import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  return (
    <>
      <div className="breatcome_area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner pb-2">
                  <h2>Contact Us </h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>{" "}
                      <i className="fa fa-angle-right"></i>{" "}
                      <span>Contact Us</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_address_area pt-80 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-55">
                <div className="section_sub_title uppercase mb-3">
                  <h6>CONTACT US</h6>
                </div>
                <div className="section_main_title">
                  <h1>We Are Here For You</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_contact_address text_center mb-30">
                <div className="contact_address_icon pb-3">
                  <i className="fa fa-map-o"></i>
                </div>
                <div className="contact_address_title pb-2">
                  <h4>Enter Your Address</h4>
                </div>
                <div className="contact_address_text">
                  <p>54/1 New sorini Asut, Melbord Austria.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_contact_address text_center mb-30">
                <div className="contact_address_icon pb-3">
                  <i className="fa fa-clock-o"></i>
                </div>
                <div className="contact_address_title pb-2">
                  <h4>Opening Hours</h4>
                </div>
                <div className="contact_address_text">
                  <p>Mon - Thu: 10:00am - 05:00pm</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_contact_address text_center mb-30">
                <div className="contact_address_icon pb-3">
                  <i className="fa fa-volume-control-phone"></i>
                </div>
                <div className="contact_address_title pb-2">
                  <h4>Contact Directly</h4>
                </div>
                <div className="contact_address_text">
                  <p>demo@example.com, 54786547521</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_contact_area pt-80 bg_color2 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-55">
                <div className="section_sub_title uppercase mb-3">
                  <h6>CONTACT US</h6>
                </div>
                <div className="section_main_title">
                  <h1>Feel Free Contact</h1>
                  <h1>Us Now</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact_from">
                <form id="contact_form" >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input type="text" name="web" placeholder="Website" />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Write a Message"
                        ></textarea>
                      </div>
                      <div className="quote_btn text_center">
                        <button className="btn" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="google_map_area">
        <div className="row-fluid">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="google_map_area">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1728.061516168314!2d31.278322!3d29.975894000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458386385feeaf5%3A0x713c1e0d0ddc436a!2sT.I.T%20Solutions!5e0!3m2!1sen!2seg!4v1716645724043!5m2!1sen!2seg"
                title="Location"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
