// src/components/Navbar.tsx
import React from "react";
import { scrollToSection } from "../utils/scroll";
import { COMPANY_NAME } from "../data";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="btn btn-ghost normal-case text-xl"
          onClick={() => scrollToSection("home")}
        >
          {COMPANY_NAME}
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-primary"
          onClick={() => scrollToSection("contact")}
        >
          Book Repair
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
