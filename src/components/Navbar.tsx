// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCalApi } from "@calcom/embed-react";
import logo from "/images/logo.png";
import "../styles/navbar.css";
import IconLoader from "./iconLoader";

// Import both icons
import bars from "/bars.svg";
import close from "/close.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallery";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "1h-rezervace" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between z-[999] transition-all duration-300 px-5 py-5 ${
        isScrolled || isGalleryPage ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-15" />
      </Link>

      {/* Right Side: Desktop + Mobile */}
      <div className="flex items-center gap-5 text-white">
        {/* Desktop Menu Items (hidden on smaller screens) */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <p>Room 1</p>
          <p>Room 2</p>
        </div>

        {/* Reservation Button (always visible) */}
        <Link to="/reservation">
          <button className="bg-[#C7AC81] px-3 py-2 cursor-pointer">
            Reservation
          </button>
        </Link>

        {/* Hamburger / Close Icon (visible on smaller screens) */}
        <button
          className="block md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IconLoader link={close} styles="w-5 h-5" />
          ) : (
            <IconLoader link={bars} styles="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu (shown when `menuOpen` is true, hidden at md and above) */}
      {menuOpen && (
        <div className="md:hidden absolute top-25 right-0 w-full bg-black shadow-lg flex flex-col items-center text-white gap-5 px-5 py-5">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
          <p>Room 1</p>
          <p>Room 2</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
