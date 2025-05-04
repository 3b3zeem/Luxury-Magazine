import React from "react";
import { motion } from "framer-motion";

import videoImg from "../../../assets/Images/video.png";
import { useNavigate } from "react-router-dom";

const Video = () => {
  const navigate = useNavigate()
  return (
    <section className="text-center relative">
      <div className="w-full my-10">
        <div className="h-[2px] bg-[#B89B5E]"></div>
        <div className="h-[2px] bg-[#B89B5E] mt-[5px]"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Image */}
        <img
          src={videoImg}
          alt="101 Leaders"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Description */}
      <div className="flex flex-col justify-center items-center px-4 py-4 order-2 lg:order-1">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm md:text-base text-[#FFFFFF] mt-6 max-w-2xl mx-auto"
        >
          Leadership is the force that creates opportunities, transforms worlds,
          and carves legacies beyond the reach of time.
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "300px" }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="h-[2px] bg-[#B89B5E] mx-auto my-4"
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onClick={() => navigate("/contact")}
          className="px-6 py-2 border border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-black transition cursor-pointer"
        >
          Be the Next to Inspire
        </motion.button>
      </div>

      <div className="w-full my-20">
        <div className="h-[2px] bg-[#B89B5E]"></div>
        <div className="h-[2px] bg-[#B89B5E] mt-[5px]"></div>
      </div>
    </section>
  );
};

export default Video;
