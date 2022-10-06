import React from "react";
import "./NavL.css";
import {
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaLinkedinIn,
  FaMediumM,
  FaMedium,
} from "react-icons/fa";

const NavL = () => {
  return (
    <div className="navl">
      <li className="navl-li">
        <a href="https://twitter.com/Reallab__">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/reallab__/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/reallab-project/">
          <FaLinkedinIn />
        </a>
        <a href="https://t.me/+oo2ra2NcP6ZhYTMx">
          <FaTelegram />
        </a>
        <a href="https://medium.com/@Reallab__/list/reading-list">
          <FaMedium />
        </a>
      </li>
    </div>
  );
};

export default NavL;
