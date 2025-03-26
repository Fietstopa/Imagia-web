import React from "react";
import imagia from "/images/M.png";
import ig from "/ig.svg";
import phone from "/phone.svg";
import fb from "/fb.svg";
import email from "/email.svg";

import IconLoader from "./iconLoader";
const Footer = () => {
  return (
    <div className="flex flex-col text-white w-full bg-[#222222] px-10 py-10">
      {/* Horní část - logo a sekce */}
      <div className="flex justify-between items-start mb-6">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center align-middle">
          <img src={imagia} alt="Logo" className="w-32 mb-2" />
        </div>

        {/* Navigace */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Navigation</h3>
          <a href="#" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Gallery
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>

        {/* Kontakt */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Contact</h3>
          <a
            href="https://www.instagram.com/imagia.fotoatelier/"
            className="text-gray-400 flex hover:text-white"
          >
            <IconLoader link={ig} styles="pr-2"></IconLoader>
            Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61570517223628"
            className="text-gray-400 flex hover:text-white"
          >
            <IconLoader link={fb} styles="pr-2"></IconLoader>Facebook
          </a>
        </div>

        {/* Sociální média */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-400 flex hover:text-white">
              <IconLoader link={phone} styles="pr-2"></IconLoader>
              +420 730 237 937
            </a>
            <a href="#" className="text-gray-400 flex hover:text-white">
              <IconLoader link={email} styles="pr-2"></IconLoader>
              imagia.atelier@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Spodní část - Copyright */}
      <div className="border-t border-gray-600 pt-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Imagia Fotoateliér. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
