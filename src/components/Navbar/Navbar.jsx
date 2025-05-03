import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/Images/logo.png";
import bgNav from "../../assets/Images/bg-nav.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <motion.nav
        className="text-white flex flex-col sticky top-0 z-200"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${bgNav})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <motion.div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center mb-1">
              <div className="w-18 h-18 rounded-full border-[1.5px] border-[#B89B5E] flex items-center justify-center">
                <div className="w-15 h-15 rounded-full border-[1.5px] border-[#B89B5E] flex items-center justify-center">
                  <NavLink to={"/"}>
                    <img
                      src={logo}
                      alt="Logo"
                      className="w-13 h-13 object-cover rounded-full"
                    />
                  </NavLink>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* { label: "LEADERS", to: "/leaders" }, */}
            {[
              { label: "ABOUT US", to: "/about" },
              { label: "CONTACT US", to: "/contact" },
            ].map((link) => (
              <motion.div key={link.label} whileHover={{ scale: 1.1 }}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-bold uppercase transition-colors ${
                      isActive
                        ? "text-[#B89B5E]"
                        : "text-white hover:text-[#B89B5E]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Hamburger Menu for Mobile */}
          <motion.div className="md:hidden" whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none cursor-pointer"
            >
              <svg
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </motion.div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              opacity: { delay: 0.1 },
            }}
            className="md:hidden absolute top-full left-0 right-0 shadow-xl overflow-hidden z-[100]"
          >
            <div className="flex flex-col items-center py-6 space-y-6 bg-black/90 ">
              {[
                { label: "ABOUT US", to: "/about" },
                { label: "CONTACT US", to: "/contact" },
              ].map((link) => (
                <motion.div key={link.label} whileHover={{ scale: 1.05 }}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-semibold uppercase transition-colors ${
                        isActive
                          ? "text-[#B89B5E]"
                          : "text-white hover:text-[#B89B5E]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="w-full">
          <div className="h-[2px] bg-[#B89B5E]"></div>
          <div className="h-[2px] bg-[#B89B5E] mt-[5px]"></div>
        </div>
      </motion.nav>
    </React.Fragment>
  );
};

export default Navbar;
