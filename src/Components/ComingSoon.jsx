import React from "react";

export default function ComingSoon() {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* ==== main start ==== */}
          <main>
            {/* ==== banner start ==== */}
            <section
              className="banner-three"
              data-background="assets/images/coming-bg-img.jpg"
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-8">
                    <div className="banner-three__content text-center">
                      <img
                        src="assets/images/logo.png"
                        alt="Image"
                      />
                      <h1 className="fw-7 title-animation mt-2">
                        The Impresive Token <br />
                        <span>Coming</span>
                        &nbsp;Soon
                      </h1>
                      <div className="banner-three__thumb">
                        <img
                          src="assets/images/imp_hero_banner.png"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-t-s-thumb">
                <img
                  src="assets/images/footer_right.png"
                  alt="Image"
                />
              </div>
              <a className="scroll-position-btn" href="#scrollPosition">
                <img src="assets/images/favicon.png" alt="Image" />
              </a>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
