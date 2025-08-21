import React from "react";

const Tokenomics = () => {
  return (
    <div>
      <section
        id="Tokenomics"
        className="section craft craft-alt"
        style={{
          backgroundImage: `url('./assets/images/circle-bg.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center gaper">
            <div className="col-lg-8 col-12">
              <div className="section__content">
                <h2 className="title title-animation mt-12 mb-5 text-center">
                  Tokonomics
                </h2>
                <p className="text-center">
                  {" "}
                  tokonomics is essential for participants in cryptocurrency
                  ecosystems as it provides insights into the token's value
                  proposition, potential risks, and opportunities for
                  participation and engagement
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center gaper">
            <div className="col-12">
              <div className="section__content">
                <div className="craft__thumb text-center">
                  <div className="reveal-img parallax-img">
                    <img
                      src="assets/images/imp-tokenomics.png"
                      className="w-100"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="anime-one">
          <img src="assets/images/footer/shape-one.png" alt="Image" />
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
