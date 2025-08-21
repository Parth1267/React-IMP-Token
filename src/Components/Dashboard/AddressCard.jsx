import React,{useState} from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

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

export default function AddressCard() {

    
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const [showStep, setShowSetp] = useState(false);
  return (
    <>
      <div className="col-12 d-flex justify-content-center">
        <p className="green-border mt-lg-5 my-1 notes">
          <span className="green-bdge text-black">New</span>{" "}
          http://www.theimpresive.com/
        </p>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
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
      </div>
    </>
  );
}
