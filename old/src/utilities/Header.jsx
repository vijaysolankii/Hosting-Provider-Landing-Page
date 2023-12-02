import React, { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import Button from "../components/Button";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const navItems = ["hosting", "domain", "features", "support", "community"];

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="container flex md:justify-between justify-end items-center">
        <a className="brandLogo" href="#">
          <img src={Logo} alt="brandlogo" />
        </a>
        <nav className={`${isActive ? "active" : ""}`}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="link" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:w-2/12 w-3/12 text-right">
          <Button classes={'btn-primary sm-space'} text="login" />
        </div>
        <div className="block md:hidden">
          <div
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="w-6 h-0.5 bg-white mb-[6px] "></div>
            <div className="w-6 h-0.5 bg-white mb-[6px] "></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
