import React from "react";

const About = () => {
  return (
    <>
      <section
        className="section review"
        style={{
          backgroundImage: `url('./assets/images/bg_04.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="section__header text-center">
                <h2 className="title title-animation">Token Details</h2>
                <p>Impresive represents the convergence of three cutting-edge technologies: cryptocurrency, artificial intelligence (AI), and decentralized finance (DeFi) </p>
              </div>
              <div className="section__content-cta text-center mt-0">
                <a href="" className="btn btn--primary">
                  Add to Metamask
                </a>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-xl-7 text-start">
              <div className="section__content ">
                <img src="./assets/images/imp_600.png" alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
              <div className="row mt-5">
                <div className="col-12  col-lg-12 col-md-12  col-sm-12 m-2">
                  <div className="review__slider-single">
                    <div className="review__meta mt-0">
                      <div className="thumb">
                        <img src="assets/images/ticker.png" alt="Image" />
                      </div>
                      <div className="content">
                        <h5>IMP</h5>
                        <p className="tertiary-text">Ticker</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12  col-lg-12 col-md-12  col-sm-12 m-2">
                  <div className="review__slider-single">
                    <div className="review__meta mt-0">
                      <div className="thumb">
                        <img src="assets/images/decimals.png" alt="Image" />
                      </div>
                      <div className="content">
                        <h5>18</h5>
                        <p className="tertiary-text">Decimal</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12  col-lg-12 col-md-12  col-sm-12 m-2">
                  <div className="review__slider-single">
                    <div className="review__meta mt-0">
                      <div className="thumb">
                        <img src="assets/images/total_supply.png" alt="Image" />
                      </div>
                      <div className="content">
                        <h5>100000000</h5>
                        <p className="tertiary-text">Total supply</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12  col-lg-12 col-md-12  col-sm-12 m-2">
                  <div className="review__slider-single">
                    <div className="review__meta mt-0">
                      {/* <div className="thumb">
                        <img src="assets/images/t-one.png" alt="Image" />
                      </div> */}
                      <div className="content">
                        <h5 className="text-break">
                          <a href="https://bscscan.com/token/0xA7358433cDce3416F15764B1DA667A9Eacb0dd01" target="">
                            0xA7358433cDce3416F15764B1DA667A9Eacb0dd01
                            <i className="fa fa-copy" />
                          </a>
                        </h5>
                        <p className="tertiary-text">Contract</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
