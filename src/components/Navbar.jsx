import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/constants";
import { menu, close } from "../assets";
import myLogo from "../assets/logo-no-bg.svg";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [menuToggle, setMenuToggle] = useState(false);
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
              <li
                key={item.id}
                className={`${
                  activeLink === item.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActiveLink(item.title);
                  //window.scrollTo(0, 1);
                }}
              >
                <a href={`${item.id}`}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menuToggle ? close : menu}
            alt="navbar-menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setMenuToggle(!menuToggle)}
          />
          {/*DROPDOWN MENU */}
          <div
            className={`${
              !menuToggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-l from-[#392467] to-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`${
                      activeLink === item.title
                        ? "text-white"
                        : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActiveLink(item.title);
                      setMenuToggle(!menuToggle);
                    }}
                  >
                    <a href={`${item.id}`}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
