import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer" style={{backgroundImage:`url('./assets/images/footer_bg.png')`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"50% 50%"}}>
        <div className="container">
          <div className="row justify-content-center section">
            <div className="col-12 col-md-9 col-lg-9 col-xl-10 col-xxl-9">
              <div className="footer__content text-center">
                <h2 className="light-title fw-7 title-animation">
                  Get started The Future of
                  <span>Impresive</span>
                </h2>
                <div className="footer__content-cta">
                  <a href="shop.html" className="btn btn--primary">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="footer__nav">
                <div className="row gaper align-items-center">
                  <div className="col-12">
                    <div className="footer__nav-logo text-center">
                      <a
                        href="index-2.html"
                        aria-label="home page"
                        title="logo"
                      >
                        <img
                          src="assets/images/logo.png"
                          width="250"
                          alt="Image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-lg-12">
                    <div className="footer__copyright-social justify-content-center">
                      {/* <p className="tertiary-text d-none d-lg-block">
                        Follow Us :
                      </p> */}
                      <div className="social">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                          title="facebook"
                        >
                          <i className="bi bi-facebook" />
                        </a>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                          title="linkedin"
                        >
                          <i className="bi bi-telegram" />
                        </a>
                        <a
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                          title="twitter"
                        >
                          <i className="bi bi-youtube" />
                        </a>
                        <a
                          href="https://www.instagram.com/impresivetoken/"
                          target="_blank"
                          aria-label="share us on instagram"
                          title="instagram"
                        >
                          <i className="bi bi-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-12 col-lg-8">
                    <div className="footer__nav-list">
                      <ul className="justify-content-center justify-content-lg-end">
                        <li>
                          <a href="index-2.html">Home</a>
                        </li>
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="footer__copyright">
                <div className="row gaper">
                  <div className="col-12 col-lg-12">
                    <div className="footer__copyright-content text-center">
                      <p>
                        Copyright ©
                        <span id="copyrightYear" />
                        <a href="/">&nbsp;Impresive</a>. All Rights Reserved
                      </p>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-thumb-one">
          <img src="assets/images/footer_left.png" alt="Image" />
        </div>
        <div className="footer-thumb-two">
          <img src="assets/images/footer_right.png" alt="Image" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
