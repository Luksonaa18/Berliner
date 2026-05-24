"use client";

import React from "react";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaTiktok />, href: "https://facebook.com", label: "Facebook" },
  ];

  const footerLinks = [
    { name: "მთავარი", href: "/" },
    { name: "ჩვენს შესახებ", href: "/about" },
    { name: "მენიუ", href: "/menu" },
    { name: "კონტაქტი", href: "/contact" },
  ];

  return (
    <footer
      id="footer"
      className="w-full bg-[#FFF6E5] text-[#634D3D] border-t border-[#E5D9C4] py-12 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-black tracking-wider uppercase">
            Berliner
          </h2>
          <p className="text-sm font-medium opacity-80">By Ekas Bakeology</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-base font-semibold">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:opacity-70 transition-opacity"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex flex-row gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-[#634D3D] text-[#FFF6E5] flex items-center justify-center text-lg hover:scale-110 hover:opacity-90 transition-all shadow-md"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-10 pt-6 border-t border-[#634D3D]/10 text-center text-xs font-medium opacity-60">
        Berliner © {currentYear} • დამზადებულია სიყვარულით
      </div>
    </footer>
  );
};

export default Footer;
