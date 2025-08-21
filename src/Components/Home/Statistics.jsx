import React from "react";

const Statistics = () => {
  return (
    <div>
      <section className="counter section pb-0 fade-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="counter__inner">
                <div className="counter__single fade-top">
                  <h2 className="light-title">
                    <span className="odometer" data-odometer-final={80} />
                    <span className="prefix"> k</span>
                  </h2>
                  <p className="primary-text">Active User</p>
                </div>
                <div className="counter__single d-none d-xxl-block">
                  <img src="assets/images/star-two.png" alt="Image" />
                </div>
                <div className="counter__single fade-top">
                  <h2 className="light-title">
                    <span className="odometer" data-odometer-final={100} />
                    <span className="prefix"> %</span>
                  </h2>
                  <p className="primary-text">Satisfaction</p>
                </div>
                <div className="counter__single d-none d-xxl-block">
                  <img src="assets/images/star-two.png" alt="Image" />
                </div>
                <div className="counter__single fade-top">
                  <h2 className="light-title">
                    <span className="odometer" data-odometer-final={2000} />
                    <span className="prefix"> +</span>
                  </h2>
                  <p className="primary-text">Daily User</p>
                </div>
                <div className="counter__single d-none d-xxl-block">
                  <img src="assets/images/star-two.png" alt="Image" />
                </div>
                <div className="counter__single fade-top">
                  <h2 className="light-title">
                    <span className="odometer" data-odometer-final={100} />
                    <span className="prefix"> k</span>
                  </h2>
                  <p className="primary-text">Years of Business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
