// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// Imported Icons ======>
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

// Imported Images =====>
import logo from "../../assets/logo-2.png";
import { Link } from "react-router-dom";
import {
  COMPARING_PAGE_ROUTE,
  DORMITORY_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  ACCOUNT_PAGE_ROUTE
} from "../../utils/consts";

const Navbar = () => {
  // Remove navBar on small screens
  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };
  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  // Add bgcolor on second navBar
  const [noBg, addBg] = useState("navBarTwo");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_With_Bg");
    } else {
      addBg("navBarTwo");
    }
  };
  window.addEventListener("scroll", addBgColor);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Languages
          </li>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              <Link to={HOME_PAGE_ROUTE}>Home</Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              <Link to={DORMITORY_PAGE_ROUTE}>Dormitories</Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              <Link to={COMPARING_PAGE_ROUTE}>Comparing</Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              <Link to={ACCOUNT_PAGE_ROUTE}>My Account</Link>
            </li>
          </ul>
          <button className="btn flex btnOne">Contact</button>
        </div>
        <button className="btn flex btnTwo">
          <Link to={LOGIN_PAGE_ROUTE}>Login</Link>
        </button>
        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
