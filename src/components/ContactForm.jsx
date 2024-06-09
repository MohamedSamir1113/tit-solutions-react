function ContactForm() {
    return (
        <>
          <div className="col-md-12 testimonial-bg bg_color2 p-5 mb-0">
        <div className="blog_reply_coment_dtl mt-5">
          <div className="reply_ttl">
            <h3>Talk To the Experts</h3>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="contact_from">
                <form
                  id="contact_form"
                  action="https://formspree.io/f/myyleorq"
                  method="POST"
                  
                >
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
        </>
    )
}

export default ContactForm
