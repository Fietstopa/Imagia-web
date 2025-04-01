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
          {/* <img src={imagia} alt="Logo" className="w-32 mb-2" /> */}
          <iframe
            className="border-[#c6b081]-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162.9394234712106!2d16.61039381027796!3d49.19997573970132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471295b6f1efd719%3A0xb7890a6d9e9805d!2sImagia%20fotoateli%C3%A9r!5e0!3m2!1scs!2scz!4v1743525884309!5m2!1scs!2scz"
            width="350"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
          <h3 className="text-lg font-semibold">Social</h3>
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
            <a href="#" className="text-gray-400 flex hover:text-white">
              <IconLoader link={email} styles="pr-2" />
              Milady Horákové 2031/1{" "}
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
