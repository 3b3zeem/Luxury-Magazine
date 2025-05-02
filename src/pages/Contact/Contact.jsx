import React, { useEffect } from "react";

import linkedIn from "../../assets/Images/Links/linkedIn.png";
import instagram from "../../assets/Images/Links/instagram.png";
import twitter from "../../assets/Images/Links/twitter.png";
import youTube from "../../assets/Images/Links/youTube.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center py-5 px-4 md:px-8 lg:px-16 text-center text-white min-h-screen">
      <div className="flex flex-col items-center w-full max-w-[1240px] py-5">
        <span className="text-[#B89B5E] font-semibold text-md md:text-xl">
          Be the Next to Inspire. Share your journey. Shape the future.
        </span>

        <div className="w-[80px] md:w-[100px] my-4">
          <div className="h-[2px] bg-[#B89B5E]"></div>
        </div>

        {/* نموذج إدخال البيانات */}
        <div className="w-full py-5">
          <div className="flex flex-col text-left text-white">
            <label className="text-sm md:text-lg mb-15">
              Submit Request for Details:
            </label>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-baseline gap-20">
              <div>
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder=""
                  className="w-full p-2 mb-4 bg-transparent border-b border-white text-white placeholder-white focus:outline-none"
                />
              </div>
              <div>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 mb-4 bg-transparent border-b border-white text-white placeholder-white focus:outline-none"
                />
              </div>
              <div>
                <label>Phone Number (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-2 mb-4 bg-transparent border-b border-white text-white placeholder-white focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label>Message</label>
              <textarea
                name="message"
                className="w-full p-2 mb-4 bg-transparent border-b border-white text-white placeholder-white focus:outline-none resize-none"
                rows="3"
              ></textarea>
            </div>

            <button className="w-fit flex items-center gap-2 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base border border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-black transition cursor-pointer mt-5">
              Submit
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* قسم Connect Us */}
        <div className="flex flex-col items-start w-full py-10">
          <h2 className="text-[#B89B5E] font-semibold text-lg md:text-xl">
            Connect Us
          </h2>
          <div className="flex flex-col gap-10 text-sm md:text-base my-10">
            <p className="flex gap-3 items-center">
              <span className="text-[#B89B5E] font-semibold text-lg md:text-xl">
                Email Address:
              </span>
              <a href="mailto:info@101-leaders.com">info@101-leaders.com</a>
            </p>
            <p className="flex gap-3 items-center">
              <span className="text-[#B89B5E] font-semibold text-lg md:text-xl">
                Contact:
              </span>
              <a href="tel:+96560808876">+96560808876</a>
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <Link to="">
              <img src={linkedIn} className="w-8 h-8" alt="" />
            </Link>
            <Link to="">
              <img src={twitter} className="w-8 h-8" alt="" />
            </Link>
            <Link to="">
              <img src={youTube} className="w-8 h-8" alt="" />
            </Link>
            <Link to="">
              <img src={instagram} className="w-8 h-8" alt="" />
            </Link>
          </div>
        </div>

        {/* النص السفلي */}
        <p className="text-sm md:text-lg leading-relaxed font-semibold mt-4">
          Get in touch with us. We’re here to assist you.
        </p>
      </div>
    </div>
  );
};

export default Contact;
