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
  const pathname = location.pathname;
  const isGalleryPage = pathname === "/gallery" || pathname === "/coupons";
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
      className={`fixed top-0 left-0 w-full flex items-stretch justify-between z-[999] transition-all duration-300 px-30 py-3  ${
        isScrolled || isGalleryPage ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-15" />
      </Link>
      <div className="hidden md:flex text-lg font-bold   text-white  gap-15">
        <Link
          to="/"
          className={`${
            pathname === "/"
              ? "border-b-2 content-center   border-[#C7AC81]"
              : "content-center"
          } pb-1 transition`}
        >
          Home
        </Link>

        <Link
          to="/gallery"
          className={`${
            pathname === "/gallery"
              ? "border-b-2 content-center  border-[#C7AC81]"
              : "content-center"
          } pb-1 transition`}
        >
          Galerie
        </Link>

        <Link
          to="/room1"
          className={`${
            pathname === "/room1"
              ? "border-b-2 border-[#C7AC81] content-center"
              : "content-center"
          } pb-1 transition`}
        >
          Sál 1
        </Link>

        <Link
          to="/room2"
          className={`${
            pathname === "/room2"
              ? "border-b-2 content-center border-[#C7AC81]"
              : "content-center"
          } pb-1 transition`}
        >
          Sál 2
        </Link>

        <Link
          to="/coupons"
          className={`${
            pathname === "/coupons"
              ? "border-b-2 border-[#C7AC81] content-center"
              : "content-center"
          } pb-1 transition`}
        >
          Dárkové kupony
        </Link>
      </div>

      <div className="flex items-center  text-white">
        <Link to="/reservation">
          <button className="bg-[#C7AC81] px-3 py-2 text-lg cursor-pointer">
            Rezervace
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-25 border-t-1 left-0 w-screen bg-black shadow-lg flex flex-col text-white ">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="w-full border-b border-white text-center py-2"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            className="w-full border-b border-white text-center py-2"
          >
            Galerie
          </Link>
          <p className="w-full border-b border-white text-center py-2">
            Room 1
          </p>
          <p className="w-full text-center py-2">Room 2</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
