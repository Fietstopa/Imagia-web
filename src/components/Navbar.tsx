import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import "../styles/navbar.css";
import BookingPage from "./bookingpage";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallery";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full flex items-center z-[999] transition-all duration-300 ${
          isScrolled || isGalleryPage ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full my-5 mx-10">
          <img src={logo} alt="Logo" className="h-15" />
          <div className="flex items-center text-white gap-10">
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/gallery">
              <p>Gallery</p>
            </Link>
            <p>Room 1</p>
            <p>Room 2</p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#C6AB81] cursor-pointer p-3"
            >
              RESERVATION
            </button>
          </div>
        </div>
      </div>

      {isBookingOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[1000]"
          onClick={() => setIsBookingOpen(false)}
        >
          <div
            className="rounded-lg shadow-xl w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-xl"
              onClick={() => setIsBookingOpen(false)}
            >
              ✖
            </button>
            <BookingPage />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
