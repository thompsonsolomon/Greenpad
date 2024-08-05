import React from "react";
import "./footer.css";
import { Logo } from "../../Asset/Images";
import { Link } from "react-router-dom";
function Footer() {
  return (
    // <!-- ##### Footer Area Start ##### -->
    <footer className="footer-area">
      {/* <!-- Main Footer Area --> */}
      <div className="main-footer-area">
        <div className="container">
          <div className="row">
            {/* <!-- Single Footer Widget --> */}
            <div className="single-footer">
              <Link to="/Home" className="footer-logo">
                <img src={Logo} alt="logo" />
                {/* <img src={Logo} style={{,}} alt="" /> */}
              </Link>
              <p>
                Girls lack right information on menstruation and feminine
                hygiene because of taboos around menstruation. Rural Nigeria has
                reportedly has the highest dropout rate in Nigeria resulting
                from difficulties that girls experience when they are on their
                period.
              </p>
            </div>

            {/* <!-- Single Footer Widget --> */}
            <div className="single-footer">
              <h5 className="widget-title">Quick Link</h5>
              <nav className="footer-menu">
                <ul>
                  <li>
                    <Link to="/Home">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to="about">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/media">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Gallery
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link to="/donate">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Donate
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* <!-- Single Footer Widget --> */}
            <div className="single-footer">
              <h5 className="widget-title">Contact Us</h5>

              <div className="contact-information">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  2, Orisunbare Street Ondo Road Akure Ondo State <br /> Akure
                  South LG Ondo State
                </p>
                <Link
                  className="contactLink"
                  to="tel:+2348063229816"
                  target="blank"
                >
                  <i className="bi bi-telephone-fill"></i>
                  (+234) 806-3229-816 
                  
                </Link>
                <Link
                  className="contactLink"
                  to="mailto:greenpadconcepts@yahoo.com"
                  target="blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  greenpadconcepts@yahoo.com{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Copwrite Area --> */}
      <div className="copywrite">
        {/* <!-- Copywrite Text --> */}
        <div className="copywrite-text">
          <p>
            Copyright &copy;
            <span className="Date"> {new Date().getFullYear()} </span>
            All rights reserved | This template is made with
            <i className="bi bi-heart" aria-hidden="true">
              {" "}
            </i>
            by
            <Link
              to="https://github.com/thompsonsolomon"
              className="Date"
              target="_blank"
            >
              {" "}
              Reythompson{" "}
            </Link>
          </p>
        </div>

        {/* <!-- Footer Social Icon --> */}
        <div className="footer-social-icon">
          <Link to="https://web.facebook.com/GreenPad-Concepts">
            <i className="bi bi-facebook"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </Link>
          <Link to="http://instagram.com/greenpad.concepts">
            <i className="bi bi-instagram"></i>{" "}
          </Link>

          <Link to="https://www.tiktok.com/@greenpadconcepts">
            <i className="bi bi-tiktok"></i>
          </Link>
        </div>
      </div>
    </footer>
    // <!-- ##### Footer Area End ##### -->
  );
}

export default Footer;
