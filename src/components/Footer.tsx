import React from "react";
import imagia from "/images/M.png";
import ig from "/ig.svg";
import phone from "/phone.svg";
import fb from "/fb.svg";
import email from "/email.svg";
import IconLoader from "./iconLoader";

const Footer = () => {
  return (
    <div className="w-full bg-[#222222] text-white px-5 py-10">
      {/* Top Section - responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
        {/* Logo */}
        <div className="flex flex-col items-center sm:items-start">
          <img src={imagia} alt="Logo" className="w-32 mb-2" />
        </div>

        {/* Navigation */}
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

        {/* Socials */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Contact</h3>
          <a
            href="https://www.instagram.com/imagia.fotoatelier/"
            className="text-gray-400 flex hover:text-white"
          >
            <IconLoader link={ig} styles="pr-2" />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61570517223628"
            className="text-gray-400 flex hover:text-white"
          >
            <IconLoader link={fb} styles="pr-2" />
            Facebook
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-400 flex hover:text-white">
              <IconLoader link={phone} styles="pr-2" />
              +420 730 237 937
            </a>
            <a href="#" className="text-gray-400 flex hover:text-white">
              <IconLoader link={email} styles="pr-2" />
              imagia.atelier@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 pt-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Imagia Fotoateliér. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
