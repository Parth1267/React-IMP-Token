import React from "react";

const BuyToke = () => {
  return (
    <>
      <section className="checkout-m fade-wrapper pt-5" style={{backgroundImage:`url('./assets/images/bg_02.png')`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"50% 50%"}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__header">
                <h2 className="light-title fw-7 text-white title-animation mt-12 text-center">
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      B
                    </div>
                    uy
                  </div>{" "}
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      T
                    </div>
                    oken
                  </div>
                </h2>
              </div>
            </div>
          </div>
          <div className="row gaper justify-content-center">
            <div className="col-12 col-lg-7 order-first order-lg-last">
              <div
                className="checkout-m__content fade-top bg-green"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                <div className="checkout-m__form">
                  <div className="intro">
                    <h4 className="text-white ">
                      Wallet Address:{" "}
                      <span className="fs-6 text-break">
                        {" "}
                        0x976E8db2c1d9551f65295C88b5889C7a64Ba0a3d{" "}
                        <i className="fa fa-copy" />
                      </span>
                    </h4>
                  </div>
                  <form action="#" method="post" className="">
                    <div className="input">
                      {/* <h4 className="text-dark">Enter Amount</h4> */}
                      <p className="text-dark fw-bol balance">Balance: $100</p>
                      <div className="input-single border-2 rounded-pill">
                        <input
                          type="text"
                          name="check-name"
                          id="checkName"
                          placeholder="Enter Amount*"
                          required
                        />
                      </div>
                    </div>
                    <ul className="d-flex justify-content-between px-2 mt-2">
                      <li>
                        <h6 className="text-white fw-bold">
                          Token: <span className="text-white">1.00</span>{" "}
                        </h6>
                      </li>
                      <li>
                        <h6 className="text-white fw-bold">
                          Rate: <span className="text-white">100$</span>{" "}
                        </h6>
                      </li>
                    </ul>
                    <div className="section__cta text-center">
                      <button
                        type="submit"
                        className="btn btn--primary bg-black"
                      >
                        Buy Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyToke;
