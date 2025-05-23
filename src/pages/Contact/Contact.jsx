import React, { useEffect, useState } from "react";
import linkedIn from "../../assets/Images/Links/linkedIn.png";
import instagram from "../../assets/Images/Links/instagram.png";
import twitter from "../../assets/Images/Links/twitter.png";
import youTube from "../../assets/Images/Links/youTube.png";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Invalid email address");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("https://luxury-contact.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const err = await res.json();
        if (err.errors && err.errors.length > 0) {
          toast.error(err.errors[0].msg || "Something went wrong");
        } else {
          toast.error("Something went wrong");
        }
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-5 px-4 md:px-8 lg:px-16 text-center text-white min-h-screen bg-black">
      <div className="flex flex-col items-center w-full max-w-[1240px] py-5">
        <span className="text-[#B89B5E] font-semibold text-md md:text-xl">
          Be the Next to Inspire. Share your journey. Shape the future.
        </span>

        <div className="w-[80px] md:w-[100px] my-4">
          <div className="h-[2px] bg-[#B89B5E]"></div>
        </div>

        <form className="w-full py-5" onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full p-2 mb-4 bg-transparent border-b border-white text-white focus:outline-none placeholder:text-gray-400"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full p-2 mb-4 bg-transparent border-b border-white text-white placeholder:text-gray-400 focus:outline-none"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label>Phone Number (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full p-2 mb-4 bg-transparent border-b border-white text-white placeholder:text-gray-400 focus:outline-none"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                className="w-full p-2 mb-4 bg-transparent border-b border-white text-white placeholder:text-gray-400 focus:outline-none resize-none"
                rows="3"
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-fit flex items-center gap-2 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base border border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-black transition cursor-pointer mt-5"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              <ArrowRight />
            </button>
          </div>
        </form>

        {/* روابط التواصل كما هي */}
        <div className="flex flex-col items-start w-full py-10">
          <h2 className="text-[#B89B5E] font-semibold text-lg md:text-xl">
            Contact Us
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
            <a
              href="https://www.linkedin.com/company/101-leaders/"
              target="_blank"
            >
              <img src={linkedIn} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="https://x.com/101_leaders?s=11&t=K2p3dC83uOovALmH0qEI8Q"
              target="_blank"
            >
              <img src={twitter} alt="Twitter" className="w-8 h-8" />
            </a>
            <a
              href="https://youtube.com/@101leaders?si=U1vyfsTAM2kaCGFl"
              target="_blank"
            >
              <img src={youTube} alt="YouTube" className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/101leaders?igsh=MWp0bGkzMXkzZHZ2Yg=="
              target="_blank"
            >
              <img src={instagram} alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
        </div>

        <p className="text-sm md:text-lg leading-relaxed font-semibold mt-4">
          Get in touch with us. We’re here to assist you.
        </p>
      </div>
    </div>
  );
};

export default Contact;
