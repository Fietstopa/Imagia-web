import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/logo.png";
import "../styles/navbar.css";
import Reservation1hCard from "./Reservation/reservation1hcard";
// import Reservation2hCard from "./reservation2hcard"; // Přidej další pokud máš

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | null>(
    null
  );
  const [selectedHours, setSelectedHours] = useState<number | null>(null);

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

  const resetBooking = () => {
    setIsBookingOpen(false);
    setPaymentMethod(null);
    setSelectedHours(null);
  };

  return (
    <>
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
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#C6AB81] cursor-pointer p-3"
            >
              RESERVATION
            </button>
          </div>
        </div>
      </div>

      {/* MODAL – rezervace */}
      {isBookingOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-[1000] text-white"
          onClick={resetBooking}
        >
          <div
            className="bg-[#111] rounded-lg shadow-xl w-full max-w-2xl p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={resetBooking}
            >
              ✖
            </button>

            {/* Krok 1 – Výběr platby */}
            {!paymentMethod && (
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-2xl mb-4">Select Payment Method</h2>
                <div className="flex gap-6">
                  <button
                    className="bg-[#C6AB81] px-6 py-3 rounded"
                    onClick={() => setPaymentMethod("cash")}
                  >
                    Cash
                  </button>
                  <button
                    className="bg-[#C6AB81] px-6 py-3 rounded"
                    onClick={() => setPaymentMethod("card")}
                  >
                    Card
                  </button>
                </div>
              </div>
            )}

            {/* Krok 2 – Výběr hodin */}
            {paymentMethod && selectedHours === null && (
              <div className="flex flex-col items-center gap-6 mt-6">
                <h2 className="text-2xl mb-4">How many hours?</h2>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((hour) => (
                    <button
                      key={hour}
                      className="bg-[#C6AB81] px-4 py-2 rounded"
                      onClick={() => setSelectedHours(hour)}
                    >
                      {hour} hour{hour > 1 ? "s" : ""}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Krok 3 – Zobrazení rezervační komponenty */}
            {selectedHours && (
              <div className="mt-8">
                <h2 className="text-xl mb-4">
                  {paymentMethod === "cash" ? "Cash" : "Card"} Reservation –{" "}
                  {selectedHours}h
                </h2>

                {/* Tady podmíněně vykresli komponentu podle hodin */}
                {selectedHours === 1 && <Reservation1hCard />}
                {/* {selectedHours === 2 && <Reservation2hCard />} */}
                {/* {selectedHours === 3 && <Reservation3hCard />} */}
                {/* ... */}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
