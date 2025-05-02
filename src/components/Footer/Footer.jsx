import React from "react";

import footerBorder from "../../assets/Images/topFooter.png";
import footerRight from "../../assets/Images/rightFooter.png";
import bottomFooter from "../../assets/Images/bottomFooter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-[#FFFFFF] pt-12 pb-6 px-4 relative">
      {/* Top Border Image */}
      <div className="absolute top-0 left-0 w-full">
        <img
          src={footerBorder}
          alt="Footer Border"
          className="w-full h-[10px]"
        />
      </div>
      {/* Footer Content */}
      <div className="flex flex-col justify-between items-center gap-8 md:gap-15">
        <div className="text-lg font-normal mb-4 md:mb-0">
          Powered by{" "}
          <Link to={"https://empirekuwait.com/"} className="text-[#B89B5E]">
            Empire
          </Link>
        </div>
        <div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs font-normal"
        >
          © 2023 ALL RIGHTS RESERVED
        </div>
      </div>
      {/* Right Image */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute right-0 bottom-0 block w-32 md:w-48"
      >
        <img
          src={footerRight}
          alt="Footer Right"
          className="w-full h-auto object-contain"
        />
      </motion.div> */}
      <div
        className="absolute bottom-0 left-0 w-full h-21 bg-repeat-x"
        style={{
          backgroundImage: `url(${bottomFooter})`,
          backgroundSize: "auto 100%",
        }}
      />
    </footer>
  );
};

export default Footer;
