import React, { useState, useEffect } from "react";
import Sidebar from "../comman/Sidebar";
import ProgressBar from "../comman/ProgressBar";
import SmallStepSize from "./SmallStepSize";
import CountdownTimer from "./CountdownTimer";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ProgressbarCircle from "./ProgressbarCircle";

const appStyles = {
  height: 50,
  width: 500,
  margin: 50,
};

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const Statusics = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setInterval(() => setProgress(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const [showStep, setShowSetp] = useState(false);

  return (
    <>
      <div className="row py-5 justify-content-start px-2">
        <div className="col-12 d-flex justify-content-center">
          <p className="green-border mt-lg-5 my-1 notes">
            <span className="green-bdge text-black">New</span>{" "}
            http://www.theimpresive.com/
          </p>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="row">
            <div className="col-12">
              <h4 className="pb-2">My accounts</h4>
              <div
                className="card border-0 bg-green"
                // style={{
                //   backgroundImage: `url('./assets/images/bg-main-dash.jpg')`,
                //   backgroundRepeat: "no-repeat",
                //   backgroundSize: "cover",
                //   backgroundOrigin: "50% 50%",
                // }}
              >
                <div className="card-body p-5">
                  <ul className="d-flex flex-wrap justify-content-between">
                    <li>
                      <h1 className="card-title text-white">$1000</h1>
                      <p className="card-text">Main Wallet</p>
                      <button class="btn-1" type="button">
                        <strong>SPACE</strong>
                        <div id="container-stars">
                          <div id="stars"></div>
                        </div>

                        <div id="glow">
                          <div class="circle"></div>
                          <div class="circle"></div>
                        </div>
                      </button>
                    </li>
                    <li className="d-flex flex-wrap justify-content-around">
                      <CountdownCircleTimer
                        {...timerProps}
                        colors="#D14081"
                        duration={daySeconds}
                        initialRemainingTime={remainingTime % daySeconds}
                        onComplete={(totalElapsedTime) => ({
                          shouldRepeat:
                            remainingTime - totalElapsedTime > hourSeconds,
                        })}
                      >
                        {({ elapsedTime, color }) => (
                          <span style={{ color }}>
                            {renderTime(
                              "Hours",
                              getTimeHours(daySeconds - elapsedTime)
                            )}
                          </span>
                        )}
                      </CountdownCircleTimer>
                      &nbsp;&nbsp;&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
              <div className="testimonial__item-inner "></div>
              <div className="testimonial__item-inner-2"></div>
              <div className="testimonial__item-inner-3"></div>
            </div>
          </div>
        
          <div className="row mt-5">
            <div className="col-12">
              <h4 className="pb-2">Last spending</h4>
              <div className="card border bg  border-gradient border-gradient-green-2 ">
                <div className="card-body px-5 py-2 border-bottom ">
                  <ul className="d-flex justify-content-between align-items-center">
                    <li className="d-flex justify-content-between align-items-center">
                      <img
                        src="./assets/images/four.png"
                        width="50"
                        alt=""
                        srcset=""
                      />
                      <div className="p-2">
                        <h4 className="card-title text-black fw-bold">
                          The light Cafe
                        </h4>
                        <p className="card-text text-black fw-bold">
                          Main Wallet
                        </p>
                      </div>
                    </li>
                    <li>
                      <h3 className="card-title text-black fw-bold">$1000</h3>
                      <p className="card-text text-black fw-bold">
                        Main Wallet
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="card-body px-5 py-2">
                  <ul className="d-flex justify-content-between align-items-center">
                    <li className="d-flex justify-content-between align-items-center">
                      <img
                        src="./assets/images/four.png"
                        width="50"
                        alt=""
                        srcset=""
                      />
                      <div className="p-2">
                        <h4 className="card-title text-black fw-bold">
                          The light Cafe
                        </h4>
                        <p className="card-text text-black fw-bold">
                          Main Wallet
                        </p>
                      </div>
                    </li>
                    <li>
                      <h3 className="card-title text-black fw-bold">$1000</h3>
                      <p className="card-text text-black fw-bold">
                        Main Wallet
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
          <div className="row justify-content-center mt-5">
            <div className="col-10 mx-5">
              <div className="card bg-none">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h4 className="card-title fw-bold fs-1 text-white text-center">
                    $ 123.000
                  </h4>
                  <p className="card-text text-center">Daily bounes</p>

                  <ProgressbarCircle />

                  {!showStep ? (
                    <>
                      <div className="text-center">
                        <button
                          className="btn btn--primary my-5"
                          onClick={() => setShowSetp(true)}
                        >
                          <i class="bi bi-wallet2" /> Get Reward{" "}
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <SmallStepSize />
                    </>
                  )}
                  <ProgressBar
                    className="m-0"
                    bgColor={"#DF8100"}
                    progress={progress}
                  />
                  <div className="row mt-5">
                    <div className="col-6">
                      <p className="card-text text-center ">Spend</p>
                      <h4 className="card-title fw-bold text-white text-center">
                        $ 123
                      </h4>
                    </div>
                    <div className="col-6">
                      <p className="card-text text-center">Left</p>
                      <h4 className="card-title fw-bold text-white text-center">
                        $ 100
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-8 mx-5">
              <div
                className="card border-0"
                style={{
                  backgroundImage: `url('./assets/images/bg-main-dash.jpg')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundOrigin: "50% 50%",
                }}
              >
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <p className="card-text text-start fs-2">My goals</p>
                  <h4 className="card-title fw-bold fs-1 mt-3 text-white text-start">
                    $ 123.000
                  </h4>
                  <div className="row mt-5">
                    <div className="col-6">
                      <p className="card-text text-center">Spend</p>
                      <h4 className="card-title fw-bold text-white text-center">
                        $ 123
                      </h4>
                    </div>
                    <div className="col-6">
                      <p className="card-text text-center">Left</p>
                      <h4 className="card-title fw-bold text-white text-center">
                        $ 100
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statusics;
