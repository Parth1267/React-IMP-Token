import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImpC } from "../../Myontext";
import axios from "axios";

const Stake = () => {
  const navigate = useNavigate();
  const { l_ref_addr } = useParams();
  const {
    library,
    account,
    balance,
    ethers,
    connectMetamask,
    toastError,
    toastSuccess, getuserDB,
    formatAddress,
    defRef, dbuser,
    copyaddress,
    rate,
    esigner,
    settings,
    getsmcs,
    stakcontract
  } = useContext(ImpC);
  const [referral, setreferral] = useState(defRef);
  const [name, setname] = useState(null);
  const [hash, sethash] = useState(null);
  const [amt, setamt] = useState(0);
  const [token, settoken] = useState(0);
  const [loading, setloading] = useState(false);
  const [trdone, settrdone] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const stakeNow = async () => {
    sethash("");
    console.log("dbuser", dbuser);
    if (!isChecked) {
      toastError("Please accept the terms and conditions.");
      return;
    }
    if (!account) {
      connectMetamask();
      toastError("Connect first");
      setloading(false);
      return;
    }

    if (!amt || amt < 0) {
      toastError("Enter amount");
      setloading(false);
      return;
    }
    if (Number(amt) > balance) {
      toastError("Insufficient Balance");
      setloading(false);
      // return;
    }
    if (!referral) {
      toastError("Enter Referral Address");
      setloading(false);
      return;
    }

    if (50 > amt) {
      toastError(`Enter Min $${50}`);
      setloading(false);
      return;
    }
    var userdesc = await stakcontract.userdesc(referral);
    console.log("userdesc", Number(userdesc._status));
    if (referral !== defRef) {

      if (Number(userdesc._status) === 0) {
        toastError(`Referral is not active`);
        setloading(false);
        return;
      }

    }
    setloading(true);

    let token_contract = new ethers.Contract(
      settings.token,
      settings.token_abi,
      esigner
    );
    const allowance = await token_contract.allowance(
      account,
      settings.contract
    );
    async function main() {
      try {
        var stk = await stakcontract.stake(
          account,
          referral,
          ethers.utils.parseEther(`${amt}`)
        );
        const receipt = await stk.wait();
        sethash(receipt.transactionHash);
        toastSuccess("Transaction done");
        // getuserDB();
        console.log("dbuser", dbuser);
        if (dbuser === null) {

          await axios
            .post(`${process.env.REACT_APP_BACKEND_URL}`, {
              method: "user",
              submethod: "insert",
              name: name,
              address: account,
              key: process.env.REACT_APP_SECRET_KEY,
            })
            .then((res) => {
              if (res.data.error) {
                toastError(res.data.error)
                console.log("error : ", res.data.error);
              } else {
                toastSuccess(res.data.data)
                console.log("res.data : ", res.data);
              }
            });

        }
        getsmcs();
        getuserDB()
        setloading(false);
        navigate("/dashboard");

      } catch (error) {
        console.log(error);
        toastError("Transaction declined");
        setloading(false);
        return;
      }
    }

    if (Number(ethers.utils.formatEther(allowance)) < token) {
      // if (true) {
      try {
        var approv = await token_contract.approve(
          settings.contract,
          ethers.utils.parseEther("100000000")
        );
        const receipt = await approv.wait();
        console.log(receipt);
        toastSuccess("Token Approved");
        main();
      } catch (error) {
        console.log("error", error);
        toastError("Token not approved");
        setloading(false);
        return;
      }
    } else {
      main();
    }
  };
  useEffect(() => {
    settoken(amt / rate)
  }, [amt, rate])
  useEffect(() => {
    setreferral(defRef)
  }, [defRef])
  return (
    <div>
      <section className="checkout-m fade-wrapper" id="stake" style={{ backgroundImage: `url('./assets/images/waves_bg.png')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "50% 50%" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__header">
                <h2 className="light-title fw-7 text-white title-animation mt-12 text-center">
                  <div
                    style={{ position: "relative", display: "inline-block" }}
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
                      S
                    </div>
                    take
                  </div>{" "}
                  <div
                    style={{ position: "relative", display: "inline-block" }}
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
                    oken
                  </div>
                </h2>
              </div>
            </div>
          </div>
          <div className="row gaper justify-content-center">
            <div className="col-12 col-lg-7 order-first order-lg-last">
              <div
                className="checkout-m__content fade-top bg-green"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                <div className="checkout-m__form">
                  {/* <div className="intro">
                    <h4 className="text-white ">
                      Referral Reward{" "} 5%
                    </h4>
                  </div> */}
                  <form >
                    {dbuser !== null ?
                      <div className="input">
                        {/* <p className="text-dark  balance">Name</p> */}
                        <div className="input-single">
                          <input
                            type="text"
                            name="check-name"
                            placeholder="Enter Name*"
                            value={dbuser.name}

                          />
                        </div>
                      </div> :
                      <div className="input">
                        {/* <p className="text-dark  balance">Enter Name</p> */}
                        <div className="input-single">
                          <input
                            type="text"
                            name="check-name"
                            id="checkName"
                            placeholder="Enter Name*"
                            value={name}
                            onChange={(e) =>
                              setname(e.target.value)
                            }
                          />
                        </div>
                      </div>}

                    <div className="input mt-5">
                      {/* <h4 className="text-dark">Enter Amount</h4> */}
                      <div className="input-single">
                        <input
                          type="text"
                          name="check-name"
                          id="checkName"
                          placeholder="Enter Referral Address*"
                          value={referral}
                          onChange={(e) =>
                            setreferral(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="input mt-4">
                      {/* <h4 className="text-dark">Enter Amount</h4> */}
                      <p className="text-dark  balance">Balance: {balance} {process.env.REACT_APP_TICKER}</p>
                      <div className="input-single">
                        <input
                          type="text"
                          name="check-name"
                          id="checkName"
                          placeholder="Enter Amount*"
                          value={amt}
                          onChange={(e) => setamt(e.target.value)}
                        />
                      </div>
                    </div>
                    <ul className="d-flex justify-content-between px-2 mt-2">
                      <li>
                        <h6 className="text-white fw-bold">
                          Token: <span className="text-white">{token} {process.env.REACT_APP_TICKER}</span>{" "}
                        </h6>
                      </li>

                      <li>
                        <h6 className="text-white fw-bold">
                          Rate: <span className="text-white">${rate}</span>{" "}
                        </h6>
                      </li>
                    </ul>
                    <div className="text-center">
                      <h6 className="text-white fw-bold text-center">
                        <h1 className="mb-0 " style={{ "color": "#5af664" }}>{token * 2} {process.env.REACT_APP_TICKER}</h1>{" "}
                        <span className="text-uppercase"> Stake 2X Token</span>
                      </h6>
                    </div>
                    {/* <h6 className="text-white fw-bold text-center mt-5">Tnx Hash <span className="text-white fs-6 text-break">
                      {" "}
                      0x976E8db2c1d9551f65295C88b5889C7a64Ba0a3d
                    </span></h6> */}
                    {hash ? (
                      <>
                        <h6 className="text-white fw-bold text-center mt-5">Tnx Hash</h6>
                        <p className="text-white fs-6 text-break text-center" onClick={() => copyaddress(hash)}>
                          {formatAddress(hash)} <i className="fa fa-copy" />
                        </p>
                      </>
                    ) : (
                      ""
                    )}
                    <div className="text-center pt-3 ">
                      <label>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => setIsChecked(e.target.checked)}
                        />
                      </label>
                      &nbsp; *I accept the terms and conditions

                    </div>
                    <div className="section__cta text-center">
                      {!loading ?
                        <button
                          type="button"
                          className="btn btn--primary"
                          onClick={() => stakeNow()}
                        >
                          Stake
                        </button> : <img src="assets/images/loader.gif" alt="" style={{ "width": "100px" }} />}
                    </div>
                  </form>
                </div>
              </div>
              <div className="testimonial__item-inner "></div>
              <div className="testimonial__item-inner-2"></div>
              <div className="testimonial__item-inner-3"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stake;
