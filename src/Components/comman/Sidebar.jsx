import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation()
  console.log(location)

  return (
    <>

      {/* Sidebar*/}
      <nav className="navbar d-lg-block d-md-none d-sm-none d-none">
        <div className="container-fluid">
          <button className="btn-sidebarToggle" id="sidebarToggle" onClick={() => setToggleMenu(!toggleMenu)}><i className="bi bi-list text-light" /></button>
        </div>
      </nav>
      <div className={toggleMenu ? "d-none" : " d-lg-block  d-non"} id="sidebar-wrapper">
        <span className="d-lg-block d-none p-1 mb-4 ">
         <img src="./assets/images/favicon-2.png" width="80" alt="" srcset="" />
        </span>
        <ul className="nav flex-lg-column d-flex justify-content-around  mb-auto text-center">
          <li className={location.pathname === '/dashboard' ? "nav-item active" : "nav-item"}>
            <Link to="/dashboard" className="nav-link  text-dark py-2" aria-current="page" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="bi bi-house-heart-fill" style={{ fontSize: '27px' }} />
            </Link>
          </li>
          <li className={location.pathname === '/locked' ? "nav-item active" : "nav-item"}>
            <Link to="/locked" className="nav-link text-dark py-2  rounded-0" title="Stakings" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="bi bi-database-fill-lock" style={{ fontSize: '27px' }} />
            </Link>
          </li>
          <li className={location.pathname === '/referral-reward' ? "nav-item active" : "nav-item"}>
            <Link to="/referral-reward" className="nav-link py-2 text-dark rounded-0" title="Referral Reward" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="bi bi-gift-fill" style={{ fontSize: '27px' }} />
            </Link>
          </li>
          <li className={location.pathname === '/claimed' ? "nav-item active" : "nav-item"}>
            <Link to="/claimed" className="nav-link py-2 text-dark rounded-0" title="Claimed" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="bi bi-person-fill-down" style={{ fontSize: '27px' }} />
            </Link>
          </li>
        </ul>
        {/* <div className="dropdown border-top position-absolute bottom-0">
          <Link to="#" style={{ color: '#333' }} className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width={24} height={24} className="rounded-circle" />
          </Link>
          <ul className="dropdown-menu text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</Link></li>
            <li><a className="dropdown-item" href="#">Settings</Link></li>
            <li><a className="dropdown-item" href="#">Profile</Link></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><a className="dropdown-item" href="#">Sign out</Link></li>
          </ul>
        </div> */}
      </div>
    {/* Mobile menu */}


    </>
  );
};

export default Sidebar;