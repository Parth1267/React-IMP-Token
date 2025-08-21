import React from "react";

export default function Whitpaper() {
  return (
    <>
      <section className="section easy position-relative" id="Whitepaper" style={{backgroundImage:`url('./assets/images/bg_02.png')`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"50% 50%"}}>
        <div className="container">
          <div className="row gaper align-items-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <div className="easy__thumb dir-rtl reveal-img d-block parallax-img">
                <img
                  src="assets/images/whitepaper.png"
                  alt="Image"
                  className="unset"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-5 offset-xl-2">
              <div className="section__content">
                <span className="sub-title-two">Impresive Whitepaper</span>
                <h2 className="title title-animation">Whitepaper</h2>
                <p>
                  With its deep understanding of context and ability to learn
                  from every interaction, our chatbot delivers efficient and
                  accurate responses, saving you time and effort. Experience the
                  future of communication with our AI chatbot and unlock a world
                  of possibilities.
                </p>
                <div className="section__content-cta">
                  <a href="#" className="btn btn--primary">
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
