import React from "react";

const Content = () => {
  return (
    <>
      <section className="section unlock pb-0" id="Impresive">
        <div className="container">
          <div className="row align-items-center gaper">
            <div className="col-12 col-lg-5 col-xxl-4">
              <div className="section__content">
                <span className="sub-title">About</span>
                <h2 className="title title-animation">Impresive Token</h2>
                <p>
                  Impresive represents the convergence of three cutting-edge
                  technologies: cryptocurrency, artificial intelligence (AI),
                  and decentralized finance (DeFi). In this innovative
                  ecosystem, AI algorithms are utilized to enhance various
                  aspects of decentralized finance protocols, such as automated
                  trading, risk management, yield optimization, and predictive
                  analytics.
                </p>
                {/* <div className="section__content-cta">
                  <a href="shop.html" className="btn btn--primary">
                    Get started
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1 col-xxl-6 offset-xxl-2">
              <div className="unlock__thumb text-start text-lg-end">
                <div className="reveal-img parallax-img">
                  <img src="assets/images/about_coin.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
