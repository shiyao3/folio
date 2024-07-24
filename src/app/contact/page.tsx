import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="contact-text">
              <p>
                I'm always open to accept new opportunities, challenges, and new
                connections. Feel free to reach out if you think my skillset is
                a good match. <br />
                I'm also open to have coffee (I love coffee), chat, or talk
                about new ideas. Hope to connect with you soon!
              </p>
            </div>
          </div>
          <div className="row">
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>95014</h4>
              <p>Cupertino, CA</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <a
                  href="https://www.linkedin.com/in/liu6/"
                  target="_blank"
                  className="fa fa-linkedin"
                />
              </div>
              <h4>
                <a href="https://www.linkedin.com/in/liu6/" target="_blank">
                  LinkedIn
                </a>
              </h4>
              <a href="https://www.linkedin.com/in/liu6/" target="_blank">
                <p>linkedin.com/in/liu6</p>
              </a>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <a
                  href="mailto:liusy1588@gmail.com"
                  target="_blank"
                  className="fa fa-envelope"
                />
              </div>
              <h4>
                <a href="mailto:liusy1588@gmail.com" target="_blank">
                  Email
                </a>
              </h4>
              <a href="mailto:liusy1588@gmail.com" target="_blank">
                <p>eric23liu@gmail.com</p>
              </a>
            </div>
            {/* contact-info-item Ended */}
          </div>
          {/* Contact Form */}
          {/* <div className="row">
            <form className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email*"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject*"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message*"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div> */}
          {/* Contact Form Ended */}
        </div>
      </section>
    </>
  );
};

export default Contact;
