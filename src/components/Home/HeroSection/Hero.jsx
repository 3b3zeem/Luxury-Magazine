import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import hero from "../../../assets/Images/Hero.jpg";
import logo from "../../../assets/Images/logo.png";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    customPaging: (i) => (
      <div className="w-3 h-3 mx-1 rounded-full bg-white transition-all duration-300" />
    ),
    dotsClass: "slick-dots custom-dots",
  };

  const slides = [
    {
      title: "101 Leaders — Where Your Legacy Begins.",
      image: hero,
    },
    {
      title: "Because True Leaders Don’t Follow Trends - ",
      description:
        "They Set Them",
      image: hero,
    },
    {
      title: "The Spotlight Is Reserved for Those Who Dare to Lead.",
      image: hero,
    },
  ];

  return (
    <section className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-cover bg-center px-10 lg:px-40 bg-[#1F2520]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex flex-col justify-center items-center px-4 py-4 order-2 lg:order-1">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-xl md:text-2xl font-semibold text-white leading-[140%] max-w-3xl text-center"
                >
                  {slide.title}
                  <p className="whitespace-pre-line">{slide.description}</p>
                </motion.h1>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="h-[2px] bg-[#B89B5E] my-4 w-[50%] max-w-xs"
                />

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  onClick={() => navigate("/contact")}
                  className="mt-4 px-6 py-2 border border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-black transition cursor-pointer"
                >
                  Be the Next to Inspire
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex order-1 lg:order-2"
              >
                <img
                  src={logo}
                  alt="Hero Logo"
                  className="w-[300px] lg:w-[500px] p-3"
                />
              </motion.div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
