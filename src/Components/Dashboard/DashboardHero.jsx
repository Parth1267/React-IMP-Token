import React, { useContext, useEffect, useState } from "react";
import { Countdown } from "circular-countdown-react";
import "./styles.css";
import { ImpC } from "../../Myontext";
import ProgressbarCircle from "./ProgressbarCircle";
import MyTimer from "./MyTimer";

var start = new Date();
var now = new Date();

start.setHours(17, 35, 0); // inseret time here

if (now > start) {
  // too late, go to tomorrow
  start.setDate(start.getDate() + 1);
}

export default function DashboardHero() {
  const {
    account, toastError, toastSuccess,
    smuser, getsmcs, connectMetamask,
    copyaddress, dbuser,
    rate, stakcontract
  } = useContext(ImpC);
  const [loading, setloading] = useState(false);
  const [hash, sethash] = useState(null);
  const [ac_claim, setac_claim] = useState(false);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setInterval(() => setProgress(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);
  const stakeNow = async () => {
    if (!account) {
      connectMetamask();
      toastError("Connect first");
      setloading(false);
      return;
    }
    setloading(true);
    try {
      var stk = await stakcontract.claimtoken(
        account
      );
      const receipt = await stk.wait();
      sethash(receipt.transactionHash);
      toastSuccess("Transaction done");
      // getuserDB();
      getsmcs();
      setloading(false);
    } catch (error) {
      console.log(error);
      toastError("Transaction declined");
      setloading(false);
      return;
    }
    // navigate("/dashboard");


  };
  useEffect(() => {
    if (smuser) {
      if (smuser._lastclaim !== 0) {
        const currentDate = new Date();
        const newDate = new Date(smuser._lastclaim * 1000);

        // Add 24 hours to the new date
        newDate.setDate(newDate.getDate() + 1);

        const isDateGreaterThanCurrent = currentDate > newDate;
        setac_claim(isDateGreaterThanCurrent)
      }
    }
  }, [smuser])
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const targetDateTime = "2024-12-31T23:59:59";
  return (
    <>
      <div className="row justify-content-center my-3">

        <div className="col-12 d-flex flex-wrap justify-content-between">
          <p className="green-border-1 mt-lg-5 my-1 mx-2 notes-1 w-100">
            <span className="green-bdge text-black">Live Rate : ${rate}</span>{" "}
          </p>
          <p className="green-border mt-lg-5 my-1 notes">
            <span className="green-bdge text-black">Full Name : {" "}{dbuser !== null ? dbuser.name : "Ashish"}</span>
          </p>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <footer className="foote footer-alter">

            <div className="row">
              <div className="col-12">
                <div className="footer-alter__inner appear-down mt-2">
                  <div className="row">
                    <div className="col-12 col-lg-8 col-xl-8 col-xxl-8">
                      <div className="footer-alter__content d-block">
                        <div>
                          <h3 className="title-animation fw-7 text-black">Address</h3>
                          <br />
                          <p className="text-black text-break" onClick={() => copyaddress(account)}>
                            {account}{" "}
                            <i className="fa fa-copy" />
                          </p>
                        </div>
                        <br />
                        <div>
                          <h3 className="title-animation fw-7 text-black">
                            Referral Address
                          </h3>
                          <br />
                          <p className="text-black text-break" onClick={() => copyaddress(smuser.ref_address)}>
                            {smuser !== null ? smuser.ref_address : ''}{" "}
                            <i className="fa fa-copy" />
                          </p>
                        </div>
                        <div className="d-flex flex-wrap justify-content-around align-items-center mt-3">
                          <a class="button-3 m-2" href="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xA7358433cDce3416F15764B1DA667A9Eacb0dd01&outputCurrency=0x55d398326f99059fF775485246999027B3197955" target="_blank">
                            <div class="display">
                              <div id="msg">Buy IMP</div>
                            </div>
                            <span></span>
                            <span></span>
                          </a>
                          {ac_claim ? <>
                            {!loading ?
                              <button class="button m-2" onClick={() => stakeNow()}>Claim Reward</button> :
                              <img src="assets/images/loader.gif" alt="" style={{ "width": "100px" }} />}
                          </> : ''}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-xl-2 col-xxl-2 d-flex flex-wrap justify-content-center align-items-center">
                      <div className="mb-2" style={{width:"150px"}}>
                        <ProgressbarCircle />
                      </div>
                      <MyTimer targetDateTime={targetDateTime} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
