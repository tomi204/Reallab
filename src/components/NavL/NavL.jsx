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
        <a href="https://twitter.com/R3allab" target={"_blank"}>
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/r3allab.eth/" target={"_blank"}>
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/reallab-project/"
          target={"_blank"}
        >
          <FaLinkedinIn />
        </a>
        <a href="https://t.me/+oo2ra2NcP6ZhYTMx" target={"_blank"}>
          <FaTelegram />
        </a>
        <a
          href="https://medium.com/@Reallab__/list/reading-list"
          target={"_blank"}
        >
          <FaMedium />
        </a>
      </li>
    </div>
  );
};

export default NavL;
