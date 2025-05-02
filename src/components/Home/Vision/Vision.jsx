import React from "react";
import { motion } from "framer-motion";

import linkedIn from "../../../assets/Images/Links/linkedIn.png";
import instagram from "../../../assets/Images/Links/instagram.png";
import twitter from "../../../assets/Images/Links/twitter.png";
import youTube from "../../../assets/Images/Links/youTube.png";

const Vision = () => {
  return (
    <section className="text-[#FFFFFF] pb-16 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-base md:text-lg font-normal mb-4"
      >
        <span
          style={{ fontFamily: "Caveat, cursive" }}
          className="text-[#B89B5E] font-semibold text-2xl"
        >
          Our
        </span>{" "}
        VISION
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-sm md:text-base max-w-2xl mx-auto mb-8"
      >
        "Elevating leadership, Preserving legacy, Uniting visionaries"
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="h-[1px] bg-[#B89B5E] mx-auto mb-8"
      />

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-base md:text-lg font-normal mb-4"
      >
        <span
          style={{ fontFamily: "Caveat, cursive" }}
          className="text-[#B89B5E] font-semibold text-2xl"
        >
          Our
        </span>{" "}
        SOCIAL MEDIA
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex justify-center space-x-4"
      >
        <motion.a href="#" whileHover={{ scale: 1.2 }} className="inline-block">
          <img src={linkedIn} alt="WhatsApp" className="w-8 h-8" />
        </motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }} className="inline-block">
          <img src={twitter} alt="Twitter" className="w-8 h-8" />
        </motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }} className="inline-block">
          <img src={youTube} alt="YouTube" className="w-8 h-8" />
        </motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }} className="inline-block">
          <img src={instagram} alt="Instagram" className="w-8 h-8" />
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="h-[1px] bg-[#B89B5E] mx-auto mt-8"
      />
    </section>
  );
};

export default Vision;
