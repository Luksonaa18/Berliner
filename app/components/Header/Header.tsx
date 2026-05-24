"use client";

import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import foto from "@/public/new.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "მთავარი", href: "/" },
    { name: "მენიუ", href: "/menu" },
    { name: "კონტაქტი", href: "#footer" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="bg-[#634D3D] w-full h-18 shadow-lg fixed top-0 z-50">
        <nav className="w-full h-full flex flex-row items-center justify-between p-4 max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative flex items-center">
            <Image width={120} src={foto} alt="Berliner Logo" priority />
          </div>

          <ul className="hidden md:flex flex-row gap-8 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-[#FFF6E5] text-lg font-medium hover:opacity-80 transition-opacity"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <IoMenu
            onClick={() => setIsOpen(true)}
            className="text-3xl text-[#FFF6E5] cursor-pointer hover:opacity-80 transition-opacity md:hidden"
          />
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 right-0 w-[75%] max-w-[320px] h-screen bg-[#FFF6E5] z-50 p-6 flex flex-col shadow-2xl md:hidden"
            >
              <div className="w-full flex justify-end mb-8">
                <IoClose
                  onClick={() => setIsOpen(false)}
                  className="text-3xl text-[#634D3D] cursor-pointer hover:scale-110 transition-transform"
                />
              </div>

              <ul className="flex flex-col font-bold gap-6 my-auto text-center">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 30, opacity: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 120,
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[#634D3D] text-2xl font-bold block py-2 hover:tracking-wider transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="text-center text-xs text-[#634D3D]/60 mt-auto">
                Berliner © {new Date().getFullYear()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-18" />
    </>
  );
};

export default Header;
