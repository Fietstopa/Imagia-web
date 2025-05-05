import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCalApi } from "@calcom/embed-react";
import logo from "/images/logo.png";
import "../styles/navbar.css";
import IconLoader from "./iconLoader";
import LanguageSwitcher from "./languageSwithcher";
import { useTranslation } from "react-i18next";
import bars from "/bars.svg";
import close from "/close.svg";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;
  const isGalleryPage =
    pathname === "/gallery" ||
    pathname === "/coupons" ||
    pathname === "/rules" ||
    pathname === "/whyus" ||
    pathname === "/equipment";
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

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
      className={`fixed top-0 left-0 font-[Montserrat] w-full flex items-stretch justify-between z-[99] transition-all duration-300 px-4 md:px-8 py-3 ${
        isScrolled || isGalleryPage ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="z-[1000]">
        <img src={logo} alt="Logo" className="h-8 md:h-12" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex text-base text-white gap-6 lg:gap-8 xl:gap-10 items-center">
        <NavLink to="/" pathname={pathname} label={t("navbar.home")} />
        <NavLink
          to="/gallery"
          pathname={pathname}
          label={t("navbar.gallery")}
        />
        <NavLink to="/room1" pathname={pathname} label={t("navbar.room1")} />
        <NavLink to="/room2" pathname={pathname} label={t("navbar.room2")} />
        <NavLink to="/room3" pathname={pathname} label={t("navbar.room3")} />
        <NavLink
          to="/equipment"
          pathname={pathname}
          label={t("navbar.equipment")}
        />

        <NavLink to="/whyus" pathname={pathname} label={t("navbar.whyus")} />

        <NavLink to="/rules" pathname={pathname} label={t("navbar.rules")} />
        <NavLink
          to="/coupons"
          pathname={pathname}
          label={t("navbar.coupons")}
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6 text-white">
        <div className="hidden md:flex">
          {" "}
          <LanguageSwitcher />
        </div>
        <Link to="/reservation" className=" md:block">
          <button className="bg-[#C7AC81] px-4 py-2 text-sm md:text-lg cursor-pointer hover:bg-[#B89B70] transition-colors">
            {t("navbar.reservation")}
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden cursor-pointer p-2 z-[1000]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <IconLoader link={menuOpen ? close : bars} styles="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed md:hidden inset-0 bg-black/95 transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } pt-20 pb-8 flex flex-col items-center gap-6 overflow-y-auto z-50`}
      >
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl text-white hover:text-[#C7AC81] transition-colors"
        >
          {t("navbar.home")}
        </Link>
        <Link
          to="/gallery"
          onClick={() => setMenuOpen(false)}
          className="text-2xl text-white hover:text-[#C7AC81] transition-colors"
        >
          {t("navbar.gallery")}
        </Link>
        <Link
          to="/room1"
          onClick={() => setMenuOpen(false)}
          className="text-2xl text-white hover:text-[#C7AC81] transition-colors"
        >
          {t("navbar.room1")}
        </Link>
        <Link
          to="/room2"
          onClick={() => setMenuOpen(false)}
          className="text-2xl text-white hover:text-[#C7AC81] transition-colors"
        >
          {t("navbar.room2")}
        </Link>
        <Link
          to="/room3"
          onClick={() => setMenuOpen(false)}
          className="text-2xl text-white hover:text-[#C7AC81] transition-colors"
        >
          {t("navbar.room3")}
        </Link>
        <Link
          to="/whyus"
          onClick={() => setMenuOpen(false)}
          className="text-2xl text-white hover:text-[#C7AC81] transition-colors"
        >
          {t("navbar.whyus")}
        </Link>
        <Link
          to="/equipment"
          onClick={() => setMenuOpen(false)}
          className="text-2xl text-white hover:text-[#C7AC81] transition-colors"
        >
          {t("navbar.equipment")}
        </Link>
        <Link
          to="/coupons"
          onClick={() => setMenuOpen(false)}
          className="text-2xl text-white hover:text-[#C7AC81] transition-colors"
        >
          {t("navbar.coupons")}
        </Link>

        <Link
          to="/rules"
          onClick={() => setMenuOpen(false)}
          className="text-2xl text-white hover:text-[#C7AC81] transition-colors"
        >
          {t("navbar.rules")}
        </Link>

        <div className="">
          {" "}
          <LanguageSwitcher />
        </div>

        {/* Mobile Reservation Button */}
      </div>
    </nav>
  );
};
interface NavLinkProps {
  to: string;
  pathname: string;
  label: string;
}
// Reusable NavLink component
const NavLink: React.FC<NavLinkProps> = ({ to, pathname, label }) => (
  <Link
    to={to}
    className={`${
      pathname === to
        ? "border-b-2 border-[#C7AC81]"
        : "hover:border-b-2 hover:border-[#C7AC81]"
    } pb-1 transition-all`}
  >
    {label}
  </Link>
);

export default Navbar;
