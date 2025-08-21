import React, { useContext, useEffect, useState } from "react";
import Header2 from "../comman/Header2";
import Sidebar from "../comman/Sidebar";
import { ImpC } from "../../Myontext";

export default function Claimed() {
  const {
    account,
    ethers, formatAddress,
    copyaddress, formatDate,
    locked, stakcontract
  } = useContext(ImpC);
  const [datas, setdatas] = useState([]);

  const getData = async () => {
    if (!stakcontract || !account) {
      return
    }

    let data = await stakcontract.getclaimed(account);
    var fdata = []
    for (let index = 0; index < data.length; index++) {
      const e = data[index];
      console.log("ssass", e);
      fdata.push({
        _token: Number(ethers.utils.formatUnits(e._token, 18)).toFixed(4),
        _feetoken: Number(ethers.utils.formatUnits(e._feetoken, 18)).toFixed(4),
        _fee: Number(ethers.utils.formatUnits(e._fee, 18)).toFixed(4),
        _receivedtoken: Number(ethers.utils.formatUnits(e._receivedtoken, 18)).toFixed(4),
        _rate: Number(ethers.utils.formatUnits(e._rate, 18)),
        _date: Number(e._date),
        _cid: e._cid,
      })
    }
    setdatas(fdata)
  }
  useEffect(() => {
    getData()
  }, [stakcontract, account])
  return (
    <>
      <div className="d-block" id="wrapper" >

        <Sidebar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="row">
              <Header2 />
              <main>
                <div className="container">
                  {/* ==== cart start ==== */}
                  <section className="cart-m pt-5">
                    <div className="container">

                      <div class="card-shadow">
                        <div class="card__content-shadow">
                          <div className="row">
                            <div className="col-12">
                              <div className="cart-m-inner">
                                <div className="cart__wrapper-footer align-items-center my-2">
                                  <div className="intro">
                                    <h2 className="light-title title-animation fw-7 text-white mt-12">
                                      Claimed
                                    </h2>
                                  </div>
                                  {/* <form>
                            <input
                              type="text"
                              name="promo-code"
                              id="promoCode"
                              placeholder="Promo code"
                            />
                            <button
                              type="button"
                              className="btn btn--secondary"
                            >
                              <i
                                class="bi bi-search"
                                aria-hidden="true"
                              />
                            </button>
                          </form> */}
                                </div>
                                <div className="cart-t-wrapper">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th>ID</th>
                                        <th>Token</th>
                                        <th>Fee Token</th>
                                        <th>Received Token</th>
                                        <th>Rate</th>
                                        <th>Date</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {datas.map((item, i) => {
                                        return (
                                          <tr className="cart-item-single-m">
                                            <td>
                                              {i + 1}
                                            </td>
                                            <td>
                                              {formatAddress(item._cid)}
                                            </td>
                                            <td>
                                              {item._token} IMP
                                            </td>
                                            <td>
                                              {item._feetoken} IMP
                                            </td>
                                            <td>
                                              {item._receivedtoken} IMP
                                            </td>
                                            <td>
                                              ${item._rate}
                                            </td>
                                            <td>
                                              {formatDate(item._date * 1000)}
                                            </td>
                                          </tr>
                                        )
                                      })}

                                    </tbody>
                                  </table>

                                </div>
                              </div>
                            </div>
                            {/* <Pagination /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* ==== / cart end ==== */}
                </div>
              </main >
            </div >
          </div >
        </div>
      </div>
    </>
  );
}
