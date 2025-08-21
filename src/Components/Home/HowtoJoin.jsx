import React from "react";

const HowtoJoin = () => {
  return (
    <div>
      <div>
        {/* ==== / unlock end ==== */}
        {/* ==== overview start ==== */}
        <section className="section overview" id="Join">
          <div className="container">
            <div className="row gaper fade-wrapper">
              <div className="col-12 text-center">
                <div className="section__content">
                  <h2 className="title title-animation mt-12">How to Join</h2>
                  <p className="mb-3">
                    Joining a Impresive with follow few general steps
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 fade-top">
                <div className="overview__single overview__single-active">
                  <div className="overview__thumb">
                    <img src="assets/images/connect.png" alt="Image" />
                  </div>
                  <div className="overview__content">
                    <h4>Connect Metamask</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 fade-top">
                <div className="overview__single">
                  <div className="overview__thumb">
                    <img src="assets/images/buy_token.png" alt="Image" />
                  </div>
                  <div className="overview__content">
                    <h4>Buy Token</h4>
                    {/* <p className="tertiary-text">
                      Deep Dream is a mesmerizing AI image generator that
                      generates.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 fade-top">
                <div className="overview__single">
                  <div className="overview__thumb">
                    <img src="assets/images/lock_token.png" alt="Image" />
                  </div>
                  <div className="overview__content">
                    <h4>Stake Token</h4>
                    {/* <p className="tertiary-text">
                      Deep Dream is a mesmerizing AI image generator that
                      generates.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 fade-top">
                <div className="overview__single">
                  <div className="overview__thumb">
                    <img src="assets/images/get_reward.png" alt="Image" />
                  </div>
                  <div className="overview__content">
                    <h4>Get Reward</h4>
                    {/* <p className="tertiary-text">
                      Deep Dream is a mesmerizing AI image generator that
                      generates.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowtoJoin;
