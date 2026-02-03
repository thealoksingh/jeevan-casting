import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/images/logo.png";
import "./css/navBar.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ContactUsModal from "../screens/ContactUsModal";

// Navigation config
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    // subPaths: [
    //   { name: "Web Development", path: "/services/web-dev" },
    //   { name: "App Development", path: "/services/app-dev" },
    // ],
  },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </a>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map((link, idx) => (
            <li key={idx} className="nav-item">
              <NavLink to={link.path} className="nav-link">
                {link.name}
              </NavLink>
              {link.subPaths && (
                <ul className="dropdown">
                  {link.subPaths.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <NavLink to={sub.path} className="nav-link dropdown-link">
                        {sub.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setContactModalOpen(true)}
          className="hidden md:inline-flex group items-center gap-2 rounded-xl px-5 py-2 
             border border-brand-secondary-hover 
             text-brand-secondary 
             hover:bg-brand-secondary-hover 
             shadow-glow transition"
        >
          Get in Touch
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M5 12h14M13 5l7 7-7 7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavbar} className="menu-btn">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Side Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleNavbar}>
          <XMarkIcon className="h-6 w-6" />
        </button>
        <ul>
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.path}
                className="nav-link"
                onClick={toggleNavbar}
              >
                {link.name}
              </NavLink>
              {link.subPaths && (
                <ul className="mobile-submenu">
                  {link.subPaths.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <NavLink
                        to={sub.path}
                        className="nav-link"
                        onClick={toggleNavbar}
                      >
                        {sub.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      <ContactUsModal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      {isOpen && <div className="overlay" onClick={toggleNavbar}></div>}
    </>
  );
};

export default Navbar;
