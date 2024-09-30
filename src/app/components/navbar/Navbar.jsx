"use client";
import React, { useState } from "react";
import "./navbar.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            className="logo"
            height={50}
            width={150}
          />
        </Link>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <div>
          <Link
            href="/"
            className={`navbar-link ${isActive("/") ? "active" : ""}`}
            onClick={toggleMenu}
          >
            HOME
          </Link>
        </div>

        <div>
          <Link
            href="/about"
            className={`navbar-link ${isActive("/about") ? "active" : ""}`}
            onClick={toggleMenu}
          >
            ABOUT US
          </Link>
        </div>

        <div className="dropdown">
          <Link
            href="/buyservices"
            className={`navbar-link ${
              isActive("/buyservices") ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            BUY OUR SERVICES
          </Link>
          <div className="services-dropdown-content">
            <div className="buyservices-dropdown-content">
              <Link href="/buyservices/service1" onClick={toggleMenu}>Taxi Booking Services</Link>
              <Link href="/buyservices/service2" onClick={toggleMenu}>Customer Services</Link>
              <Link href="/buyservices/service2" onClick={toggleMenu}>Outsourcing Services</Link>
              <Link href="/buyservices/service3" onClick={toggleMenu}>Live Chat Support</Link>
              <Link href="/buyservices/service3" onClick={toggleMenu}>Email Support Services</Link>
              <Link href="/buyservices/service3" onClick={toggleMenu}>Remote Staff Hiring</Link>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link
            href="/ourservices"
            className={`navbar-link ${
              isActive("/ourservices") ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            OUR SERVICES
          </Link>
          <div className="services-dropdown-content">
            <div className="ourservices-dropdown-content">
              <Link href="/ourservices/service1" onClick={toggleMenu}>Taxi Booking Services</Link>
              <Link href="/ourservices/service2" onClick={toggleMenu}>Customer Services</Link>
              <Link href="/ourservices/service2" onClick={toggleMenu}>Outsourcing Services</Link>
              <Link href="/ourservices/service3" onClick={toggleMenu}>Live Chat Support</Link>
              <Link href="/ourservices/service3" onClick={toggleMenu}>Email Support Services</Link>
              <Link href="/ourservices/service3" onClick={toggleMenu}>Remote Staff Hiring</Link>
            </div>
          </div>
        </div>

        <div>
          <Link
            href="/contact"
            className={`navbar-link ${isActive("/contact") ? "active" : ""}`}
            onClick={toggleMenu}
          >
            CONTACT US
          </Link>
        </div>
        
      </div>

      <div className="navbar-social">
        <Link
          href="https://www.facebook.com/letsoutsourceSMC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="navbar-social-link" />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="navbar-social-link" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/let-s-outsource-smc-pvt-ltd/mycompany/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="navbar-social-link" />
        </Link>
      </div>

      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
