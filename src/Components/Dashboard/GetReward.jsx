import React, { useState, useEffect, useContext } from "react";
import ProgressbarCircle from "./ProgressbarCircle";
import SmallStepSize from "./SmallStepSize";
import { ImpC } from "../../Myontext";
export default function GetReward() {
  const {
    account,
    smuser,
    copyaddress, formatDate,
    locked,
  } = useContext(ImpC);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setInterval(() => setProgress(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);
  const [showStep, setShowSetp] = useState(false);
  return (
    <>

      <div className="row justify-content-between align-items-center  my-3">
        <div class="card-shadow">
          <div class="card__content-shadow">
            <div className="col-12 d-flex justify-content-start">
              <h4 className="text-green fw-bold my-lg-2 my-5">Active Staking</h4>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
              <ul className="d-lg-flex d-block  justify-content-between card-02">
                <li className="my-1">
                  <p className="heading-2 text-white">${locked !== null ? locked._amt : 0}</p>
                  <p className="text-green">Amount</p>
                </li>
                <li className="my-1">
                  <p className="heading-2 text-white">{locked !== null ? locked._amt : 0} IMP</p>
                  <p className="text-green">Token </p>
                </li>
                <li className="my-1">
                  <p className="heading-2 text-white">{locked !== null ? locked._sdate === 0 ? '-' : formatDate(locked._sdate * 1000) : '-'}</p>
                  <p className="text-green">Date</p>
                </li>
                <li className="my-1">
                  <p className="heading-2 text-white">{smuser !== null ? smuser._claimed : 0} IMP</p>
                  <p className="text-green">Claimed</p>
                </li>
                <li className="my-1">
                  <p className="heading-2 text-white">{smuser !== null ? smuser._locked - smuser._claimed : 0} IMP</p>
                  <p className="text-green">Remaining</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-5 col-md-12 col-sm-12 col-12 d-flex justify-content-lg-end justify-content-center">
            <div className="d-block m-lg-0 m-5">
              <ProgressbarCircle />

              <div className="d-flex justify-content-center text-center mt-2">
                <button class="button mt-3" onClick={() => setShowSetp(true)}>
                  Get reward
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 mt-5">
            {showStep ? (
              <>
                <SmallStepSize />
              </>
            ) : (
              ""
            )}
          </div> */}
      </div>

    </>
  );
}
