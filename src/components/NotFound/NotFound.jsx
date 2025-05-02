import React from "react";
import { ChevronRight, House } from "lucide-react";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="w-full mx-auto pb-8 flex flex-col min-h-screen bg-black text-white">
    {/* Header */}
    <div className="py-10 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-semibold">
          Sorry! This page doesn't exist.
        </span>
        <div className="flex items-center space-x-2">
          <Link to="/">
            <House size={18} />
          </Link>
          <ChevronRight size={18} />
          <span className="text-xl">404</span>
        </div>
      </div>
    </div>

    <div className="w-full">
        <div className="h-[2px] bg-[#B89B5E]"></div>
      </div>

    {/* Main Content */}
    <div className="flex flex-col justify-center items-center flex-grow text-center px-4">
      <span className="text-9xl font-bold tracking-tight text-[#B89B5E]">404!</span>

      <span className="text-3xl mt-4 mb-2 font-semibold">Page Not Found</span>
      <p className="text-lg">
        We’re sorry for the inconvenience. Let’s get you back on track.
      </p>
      <p className="text-lg mb-6">
        Head to the homepage or explore our latest solutions.
      </p>

      <Link
        to="/"
        className="px-5 py-3 text-md font-medium border border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-black transition"
      >
        Back to Homepage
      </Link>
    </div>
  </div>
  );
};

export default NotFound;
