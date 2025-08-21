import React, { useContext, useEffect, useState } from "react";
import Header2 from "../comman/Header2";
import Sidebar from "../comman/Sidebar";
import { ImpC } from "../../Myontext";

export default function Locked() {
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

    let data = await stakcontract.getuserstakings(account);
    var fdata = []
    for (let index = 0; index < data.length; index++) {
      const e = data[index];
      console.log("eeeee", e);
      fdata.push({
        _amt: Number(ethers.utils.formatUnits(e._amt, 18)),
        _rate: Number(ethers.utils.formatUnits(e._rate, 18)),
        _sdate: Number(e._sdate),
        _edate: Number(e._edate),
        _token: Number(ethers.utils.formatUnits(e._token, 18)),
        _lid: e._lid,
      })
    }
    setdatas(fdata)
    console.log("ee", fdata);
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
            <Header2 />
            <main className="">
              <div className="container">

                {/* ==== cart start ==== */}
                <section className="cart-m pt-5">
                  <div className="container">
                    <div class="card-shadow">
                      <div class="card__content-shadow">

                        <div className="row">
                          <div className="col-12 ">
                            <div className="cart-m-inner">
                              <div className="cart__wrapper-footer align-items-center my-2">
                                <div className="intro">
                                  <h2 className="light-title title-animation fw-7 text-white mt-12">
                                    Staking
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
                                      <th>Amount</th>
                                      <th>Token</th>
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
                                            {formatAddress(item._lid)}
                                          </td>
                                          <td>
                                            ${item._amt}
                                          </td>
                                          <td>
                                            {item._token} IMP
                                          </td>
                                          <td>
                                            ${item._rate}
                                          </td>
                                          <td>
                                            {formatDate(item._sdate * 1000)}
                                          </td>

                                        </tr>
                                      )
                                    })}

                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="row">
                              <div className="col-12">
                                <div className="section__cta">
                                  <ul className="pagination">
                                    <li>
                                      <button>
                                        <i className="fa-solid fa-angle-left" />
                                      </button>
                                    </li>
                                    <li>
                                      <a href="">1</a>
                                    </li>
                                    <li>
                                      <a href="" className="active">
                                        2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="">3</a>
                                    </li>
                                    <li>
                                      <button>
                                        <i className="fa-solid fa-angle-right" />
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div> */}
                    </div>
                  </div>
                </section>
                {/* ==== / cart end ==== */}

              </div >
            </main >
          </div >
        </div >
      </div>
    </>
  );
}
