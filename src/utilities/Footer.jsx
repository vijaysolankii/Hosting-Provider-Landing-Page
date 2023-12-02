import React from "react";
import Logo from "../assets/images/Logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-nav">
          <div className="footer-nav-block">
            <ul>
              <li>Company</li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-block">
            <ul>
              <li>Features</li>
              <li>
                <a href="#">Domain</a>
              </li>
              <li>
                <a href="#">hosting</a>
              </li>
              <li>
                <a href="#">wordpress</a>
              </li>
              <li>
                <a href="#">web security</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-block">
            <ul>
              <li>Help</li>
              <li>
                <a href="#">Payment methods</a>
              </li>
              <li>
                <a href="#">know ledgebase</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-block">
            <ul>
              <li>social media</li>
              <li>
                <a href="#">instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">facebook</a>
              </li>
              <li>
                <a href="#">youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-secondary">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <p>2023 &copy; Vijay Solanki</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
