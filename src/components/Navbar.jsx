import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/constants";
import { menu, close } from "../assets";
import myLogo from "../assets/logo-no-bg.svg";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActiveLink("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={myLogo} alt="rayan-logo" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((item) => {
            return (
              <li>
                <a href={`${item.id}`}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
