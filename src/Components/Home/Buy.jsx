import React from "react";

const Buy = () => {
  return (
    <>
      <main
        className="authentication auth-create"
        data-background="assets/images/auth-line.png"
        style={{ backgroundImage: 'url("assets/images/auth-line.png")' }}
      >
        <section className="authentication-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-6 col-xl-4">
                <div className="authentication__content section">
                  <div className="intro">
                    <h2 className="light-title-sm title-animation fw-7 text-white mt-12">
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
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
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
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
                          oken
                        </div>
                      </div>
                    </h2>
                  </div>
                  <div className="authentication__inner">
                    <form action="#" method="post">
                      <div className="input-single">
                       <div className="d-flex justify-content-between">
                       <label htmlFor="createuserName">Enter Amount</label>
                        <p>Balance : $100</p>
                       </div>

                        <div className="ic-group">
                          <input
                            type="text"
                            name="createuser-name"
                            id="createuserName"
                            placeholder="Enter Amount"
                            required
                          />
                          <span className="material-symbols-outlined">
                            person
                          </span>
                        </div>
                      </div>
                      <div className="section__content-cta">
                        <button type="submit" className="btn btn--primary">
                          Buy
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Buy;
