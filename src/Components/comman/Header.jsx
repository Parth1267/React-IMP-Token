import React, { useContext, useState } from "react";
import { ImpC } from "../../Myontext";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const {
    connectMetamask,
    disconnectNow,
    account,formatAddress,
  } = useContext(ImpC);
  const logout = () => {
    disconnectNow()
    navigate("/");
}

  return (
    <>
      <header className="header">
        <div className="primary-navbar">
          {/* <p className="green-border mt-3 notes"><span className="green-bdge text-black">New</span> http://www.theimpresive.com/</p> */}
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <a href="/" aria-label="home page" title="logo">
                      <img
                        src="assets/images/logo.png"
                        width="250"
                        alt="Image"
                      />
                    </a>
                  </div>
                  <div className="navbar__menu">
                    <ul className="navbar__list">
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <a
                          href="#Impresive"
                          aria-label="dropdown menu"
                          className="navbar__dropdown-labe"
                        >
                          Impresive Token
                        </a>
                        {/* <ul className="navbar__sub-menu">
                          <li>
                            <a href="index-2.html">Ai Solution</a>
                          </li>
                          <li>
                            <a href="index-two.html">Ai Chatbot</a>
                          </li>
                          <li>
                            <a href="index-three.html">Ai Gaming</a>
                          </li>
                          <li>
                            <a href="index-four.html">Ai Prompts</a>
                          </li>
                          <li>
                            <a href="index-five.html">Ai Portfolio</a>
                          </li>
                          <li>
                            <a href="index-six.html">Ai News</a>
                          </li>
                          <li>
                            <a href="index-seven.html">Ai Agency</a>
                          </li>
                        </ul> */}
                      </li>
                      <li className="navbar__item nav-fade">
                        <a href="#Ecosystem">Ecosystem</a>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <a
                          href="#Tokenomics"
                          aria-label="dropdown menu"
                          className="navbar__dropdown-lab"
                        >
                          Tokenomics
                        </a>
                        {/* <ul className="navbar__sub-menu">
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="product-single.html">Product Details</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Pages
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <a href="404.html">Error</a>
                          </li>
                          <li>
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li>
                            <a href="sign-in.html">Sign In</a>
                          </li>
                          <li>
                            <a href="sign-up.html">Create Account</a>
                          </li>
                          <li className="navbar__item navbar__item--has-children">
                            <button
                              aria-label="dropdown menu"
                              className="navbar__dropdown-label navbar__dropdown-label-sub"
                            >
                              Services
                            </button>
                            <ul className="navbar__sub-menu navbar__sub-menu__nested">
                              <li>
                                <a href="services.html">Our Services</a>
                              </li>
                              <li>
                                <a href="service-single.html">
                                  Service Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="navbar__item navbar__item--has-children">
                            <button
                              aria-label="dropdown menu"
                              className="navbar__dropdown-label navbar__dropdown-label-sub"
                            >
                              Case Study
                            </button>
                            <ul className="navbar__sub-menu navbar__sub-menu__nested">
                              <li>
                                <a href="case-study.html">Case Study</a>
                              </li>
                              <li>
                                <a href="case-study-single.html">
                                  Case Study Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact-us.html">Contact Us</a>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Blog
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-single.html">Blog Details</a>
                          </li>
                        </ul>
                      </li> */}
                      <li className="navbar__item nav-fade">
                        <a href="#Join">How to Join</a>
                      </li>
                      <li className="navbar__item nav-fade">
                        <a href="#Whitepaper">Whitepaper</a>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
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
                          <span className="navbar__item navbar__item--has-children nav-fade">
                            <button
                              aria-label="dropdown menu "
                              className="navbar__dropdown-label fs-5"
                            >
                              {formatAddress(account)}{" "}
                              <i className="bi bi-clipboard2-fill"></i>
                            </button>
                            <ul className="navbar__sub-menu">
                              <li>
                                <a href="/dashboard">Dashboard</a>
                              </li>
                              <li onClick={() => logout()}>
                                <a>
                                  Logout <i className="bi bi-box-arrow-right" />
                                </a>
                              </li>
                            </ul>
                          </span>
                        </>
                      )}
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      title="open mobile menu"
                    >
                      <i className="material-symbols-outlined">menu_open</i>
                    </button>
                    {/* <button
                      type="button"
                      onClick={() => setShow(true)}
                    >
                      <i class="bi bi-collection-fill"></i>
                    </button> */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* ==== mobile menu start ==== */}
          <div className="mobile-menu d-block d-xl-none">
            <nav className="mobile-menu__wrapper">
              <div className="mobile-menu__header nav-fade">
                <div className="logo">
                  <a href="index-2.html" aria-label="home page" title="logo">
                    <img src="assets/images/logo.png" alt="Image" />
                  </a>
                </div>
                <button
                  aria-label="close mobile menu"
                  className="close-mobile-menu"
                >
                  <i className="bi bi-x-lg" />
                </button>
              </div>
              <div className="mobile-menu__list" />
              <div className="mobile-menu__social social nav-fade">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="share us on facebook"
                  title="facebook"
                >
                  <i className="bi bi-facebook" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  aria-label="share us on twitter"
                  title="twitter"
                >
                  <i className="bi bi-twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  aria-label="share us on pinterest"
                  title="linkedin"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  aria-label="share us on instagram"
                  title="instagram"
                >
                  <i className="bi bi-instagram" />
                </a>
              </div>
            </nav>
          </div>
          <div className="mobile-menu__backdrop" />
          {/* ==== / mobile menu end ==== */}
        </div>
      </header>

      <div>
        {/* Button trigger modal */}

        {/* Modal */}
        <div
          className={show ? "modal fade show" : "modal fade"}
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          style={show ? { display: "block" } : { display: "none" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-gradient border-gradient-green">
              <div className="modal-header">
                <h5
                  className="modal-title text-dark"
                  id="exampleModalLongTitle"
                >
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close "
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShow(false)}
                >
                  X
                </button>
              </div>
              <div className="modal-body">
                <p className="text-dark">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  deserunt, fugiat omnis expedita qui dolore illo voluptatum
                  ipsa rem voluptatem, quisquam voluptate cumque unde eveniet
                  magnam suscipit voluptas distinctio necessitatibus?
                </p>
              </div>
              {/* <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div class={show ? "modal-backdrop fade show" : ""}></div>
    </>
  );
};

export default Header;
