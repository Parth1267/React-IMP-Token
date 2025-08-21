import React from "react";

const Hero = () => {
  return (
    <>
      <section className="banner-seven">
        <video className="videoTag" id="background-video" autoPlay loop muted>
          <source src="./assets/images/hero_bg_green.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-9 col-xxl-7">
              <div className="banner-seven__content">
                <h1 className="title-animation fw-9">
                  UNLOCKING FINANCIAL FRONTIERS
                </h1>
                <div className="banner-seven__group">
                  {/* <div className="thumb">
                    <img
                      src="assets/images/banner/banner-s-t-thumb.png"
                      alt="Image"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=RvreULjnzFo"
                      target="_blank"
                      title="video Player"
                      className="video-btn"
                    >
                      <span className="material-symbols-outlined">
                        play_arrow
                      </span>
                    </a>
                  </div> */}
                  <div className="content">
                    <p className="primary-text">WHERE AI MEETS DEFI</p>
                  </div>
                </div>
                <p className="green-border mt-4 w-75 w-sm-100 text-center">
                  <span className="green-bdge text-black text-break">
                    {" "}
                    0xA7358433cDce3416F15764B1DA667A9Eacb0dd01
                  </span>
                </p>
                <div className="section__cta text-start d-flex">
                  <a href="#stake" className="btn btn--primary m-1">
                    Join Now
                  </a>
                  <a href="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xA7358433cDce3416F15764B1DA667A9Eacb0dd01&outputCurrency=0x55d398326f99059fF775485246999027B3197955" target="_blank" className="btn btn--primary m-1">
                    Buy IMP
                  </a>
                </div>
              </div>
              <a className="scroll-position-btn" href="#scrollPosition">
                <img src="assets/images/favicon.png" alt="Image" />
              </a>
            </div>
          </div>
        </div>
        <div className="banner-seven__thumb">
          <img src="assets/images/imp_hero_banner.png" alt="Image" />
        </div>
      </section>
    </>
  );
};

export default Hero;
