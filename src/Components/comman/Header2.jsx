import React, { useContext, useState } from "react";
import {  ImpC } from "../../Myontext";
import { useNavigate } from 'react-router-dom';

const Header2 = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  
  const {
    connectMetamask,
    disconnectNow,
    account,formatAddress,
    isConnecting,
    isDisconnected,
  } = useContext(ImpC);
  const logout = () => {
    disconnectNow()
    navigate("/");
}

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-nav d-flex justify-content-lg-center justify-content-between align-items-center">
       <a className="navbar-brand d-lg-none d-block" href="/">
          <img src="./assets/images/favicon.png" width="70" alt="" />
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="navbar__options my-lg-3 my-0">
          <div className="navbar__mobile-options">
            {!account ? (
              <>
                <button
                  className="btn btn--primary py-2 px-4"
                  onClick={() => connectMetamask()}
                >
                  <i class="bi bi-wallet2" />{" "}
                  <small className="text-black"> Connect</small>
                </button>
              </>
            ) : (
              <>
                <span className="navbar__item navbar__item--has-children nav-fade d-flex justify-content-between">
                  <button className="btn btn--primary py-2 px-4 mx-2">
                    {formatAddress(account)} <i className="bi bi-clipboard2-fill"></i>
                  </button>
                  <button
                    className="btn btn--primary py-2 px-4 mx-2"
                    onClick={() => logout()}
                  >
                  <i className="bi bi-box-arrow-right" />
                  </button>
                </span>
              </>
            )}
          </div>
        </div>
        {/* <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        ></div> */}
      </nav>
    </>
  );
};

export default Header2;
