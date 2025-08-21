import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="col-sm-auto bg-green-1  sticky-top min-vh-100" style={{width:"100px"}}>
        <div className="d-flex flex-sm-column flex-row flex-nowrap bg-green-1 align-items-center sticky-top">
          <a
            href="/"
            className="d-block p-3 link-dark text-decoration-none"
            title
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Icon-only"
          >
            <i className="bi-bootstrap fs-1" />
          </a>
          <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link py-3 px-2"
                title
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Home"
              >
                <i className="bi-house fs-1" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link py-3 px-2"
                title
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Dashboard"
              >
                <i className="bi-speedometer2 fs-1" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link py-3 px-2"
                title
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Orders"
              >
                <i className="bi-table fs-1" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link py-3 px-2"
                title
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Products"
              >
                <i className="bi-heart fs-1" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link py-3 px-2"
                title
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Customers"
              >
                <i className="bi-people fs-1" />
              </a>
            </li>
          </ul>
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi-person-circle h2" />
            </a>
            <ul
              className="dropdown-menu text-small shadow"
              aria-labelledby="dropdownUser3"
            >
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
