import React from "react";

const Roadmap = () => {
  return (
    <>
      <section className="section craft craft-alt">
        <div className="container">
          <div>
            <h2 className="text-center">
              Roadmap
            </h2>
            <div className="timeline">
              <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                <div className="timeline__event__icon ">
                  <i className="lni-cake" />
                  <div className="timeline__event__date">June 2024</div>
                </div>
                <div className="timeline__event__content ">
                  <div className="timeline__event__title">E-commerce</div>
                  <div className="timeline__event__description">
                    <p>Launch IMP token through E-commerce</p>
                  </div>
                </div>
              </div>
              <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                <div className="timeline__event__icon">
                  <img src="./assssets/images/tour_travel.png" alt="" />
                  <div className="timeline__event__date"> January 2025</div>
                </div>
                <div className="timeline__event__content">
                  <div className="timeline__event__title">Tours & Travels</div>
                  <div className="timeline__event__description">
                    <p>Launch IMP token through</p>
                  </div>
                </div>
              </div>
              <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                <div className="timeline__event__icon">
                  <i className="lni-slim" />
                  <div className="timeline__event__date"> June 2025</div>
                </div>
                <div className="timeline__event__content">
                  <div className="timeline__event__title">RealEstate</div>
                  <div className="timeline__event__description">
                    <p>
                      Launch IMP token through RealEstate
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__event animated fadeInUp timeline__event--type1">
                <div className="timeline__event__icon">
                  <i className="lni-cake" />
                  <div className="timeline__event__date">January 2026</div>
                </div>
                <div className="timeline__event__content">
                  <div className="timeline__event__title">Global Exchange</div>
                  <div className="timeline__event__description">
                    <p>
                      Launch IMP token listed on Global Exchange
                    </p>
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

export default Roadmap;
