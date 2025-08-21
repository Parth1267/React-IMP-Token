import React, { useContext } from "react";
import { ImpC } from "../../Myontext";

export default function DashboardStatusics() {
  const {
    account,
    smuser,
    copyaddress,
    rate,
  } = useContext(ImpC);
  return (
    <>
      <div className="row my-3">
        {/* <h4 className="pb-2">Savings</h4> */}
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-2">
          <div className="card border border-gradient border-gradient-green-2">
            <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
              <div>
                <img
                  src="./assets/images/four.png"
                  width="50"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text-end">
                <p className="card-text text-white fw-bold">Reward Token</p>
                <h2 className="card-title text-white fw-bold">{smuser!==null ? smuser._locked:0} IMP</h2>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-2">
          <div className="card border border-gradient border-gradient-green-2">
            <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
              <div>
                <img
                  src="./assets/images/four.png"
                  width="50"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text-end">
                <p className="card-text text-white fw-bold">Reward IMP</p>
                <h2 className="card-title text-white fw-bold">{smuser!==null ? smuser._locked:0} IMP</h2>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-2">
          <div className="card border border-gradient border-gradient-green-2">
            <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
              <div>
                <img
                  src="./assets/images/four.png"
                  width="50"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text-end">
                <p className="card-text text-white fw-bold">Claimed Token</p>
                <h2 className="card-title text-white fw-bold">{smuser!==null ? smuser._claimed:0} IMP</h2>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-2">
          <div className="card border border-gradient border-gradient-green-2">
            <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
              <div>
                <img
                  src="./assets/images/four.png"
                  width="50"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text-end">
                <p className="card-text text-white fw-bold">Claimed $</p>
                <h2 className="card-title text-white fw-bold">${smuser!==null ? smuser._claimed * rate:0} </h2>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-2">
          <div className="card border border-gradient border-gradient-green-2">
            <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
              <div>
                <img
                  src="./assets/images/four.png"
                  width="50"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text-end">
                <p className="card-text text-white fw-bold">Referral reward</p>
                <h2 className="card-title text-white fw-bold">${smuser!==null ? smuser._referalreward:0} </h2>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-2">
          <div className="card border border-gradient border-gradient-green-2">
            <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
              <div>
                <img
                  src="./assets/images/four.png"
                  width="50"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text-end">
                <p className="card-text text-white fw-bold">Referral Reward</p>
                <h2 className="card-title text-white fw-bold">{smuser!==null ? smuser._referalreward :0} IMP</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
