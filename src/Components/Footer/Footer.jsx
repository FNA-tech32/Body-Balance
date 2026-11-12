import React from "react";
import "./Footer.css";
import wp from "../../assets/whatsapp-logo.jpg";

const Footer = () => {
  return (
    <>
      <div className="Footer-container" id="about">
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>Address</h3>
              <a
                href="https://maps.google.com/?q=Satara+Parisar,+Aurangabad"
                target="_blank"
                rel="noreferrer"
              >
                Satara Parisar, Aurangabad, Maharashtra
              </a>
              <a
                href="https://wa.me/+918766539293?text=Hello%20Body%20Balance"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="Chat with us on WhatsApp"
                  src={wp}
                  height="80"
                  width="240"
                  className="btn wp-btn"
                />
              </a>
            </div>
            <div className="box">
              <h3>Contact Us</h3>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              />
              <div className="footer-contact-row">
                <i className="fa fa-phone"></i>
                <a href="tel:+918766539293">+91 87665 39293 (Primary)</a>
              </div>
              <div className="footer-contact-row">
                <i className="fa fa-phone"></i>
                <a href="tel:+918888817886">+91 88888 17886 (Alt Contact)</a>
              </div>
              <div className="footer-contact-row">
                <i className="fa fa-phone"></i>
                <a href="tel:+914363557535">+91 43635 57535 (Alt Contact)</a>
              </div>
              <div className="footer-contact-row">
                <i className="fa fa-envelope"></i>
                <a href="mailto:contact@bodybalance.com">contact@bodybalance.com</a>
              </div>
              <div className="footer-contact-row">
                <i className="fa fa-envelope-o"></i>
                <a href="mailto:info@bodybalance.com">info@bodybalance.com</a>
              </div>
            </div>
            <div className="box">
              <h3>Follow Us</h3>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
              />
              <div className="hero1">
                <h1>Reach us at</h1>
                <div className="home__social-icon">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"> Facebook</i>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"> Instagram</i>
                  </a>
                  <a
                    href="https://wa.me/+918766539293?text=Hello%20Body%20Balance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp"> WhatsApp</i>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Satara+Parisar,+Aurangabad"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-google"> Google Maps</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="credits">
          <p>© 2026 Body Balance. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
