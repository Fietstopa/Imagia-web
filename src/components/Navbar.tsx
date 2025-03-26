// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCalApi } from "@calcom/embed-react";
import logo from "/images/logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallery";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Inicializace Cal embed – volá se pouze jednou po mountu
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "1h-rezervace" });
      // Nastavení, aby se zobrazoval měsíční kalendář, skrytý detail eventu atd.
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex items-center z-[999] transition-all duration-300 ${
        isScrolled || isGalleryPage ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full my-5 mx-10">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-15" />
        </Link>

        <div className="flex items-center text-white gap-10">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/gallery">
            <p>Gallery</p>
          </Link>
          <p>Room 1</p>
          <p>Room 2</p>

          {/* Button pro 1h rezervace přímo v Navbaru */}
          <Link to="/reservation">
            <button className="bg-[#C7AC81] px-3 py-2 cursor-pointer">
              Reservation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
