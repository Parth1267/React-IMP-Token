import React from "react";

const ClientLog = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-12">
          <div className="section__header">
            <h2 className="light-title fw-7 text-white title-animation mt-12 text-center">
              <div style={{ position: "relative", display: "inline-block" }}>
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
                  A
                </div>
                vailable on
              </div>{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="sponsor overflow-hidden mb-5">
        <div className="sponsor__slider">
          <div className="sponsor__single text-center">
            <img src="assets/images/metamask.png" alt="Image" />
          </div>
          <div className="sponsor__single text-center">
            <img src="assets/images/bscscan.png" alt="Image" />
          </div>
          <div className="sponsor__single text-center">
            <img src="assets/images/cake.png" alt="Image" />
          </div>
          <div className="sponsor__single text-center">
            <img src="assets/images/token_pocket.png" alt="Image" />
          </div>
          <div className="sponsor__single text-center">
            <img src="assets/images/trust_wallet.png" alt="Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLog;
