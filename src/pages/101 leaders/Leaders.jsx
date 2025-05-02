import React, { useState } from "react";
import { leadersData } from "./leadersData";
import { Link } from "react-router-dom";

const Leaders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLeaders = leadersData.filter(
    (leader) =>
      leader.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center py-5 md:py-12 px-4 md:px-8 lg:px-16 text-center text-white bg-black min-h-screen">
      <div className="flex flex-col items-center w-full max-w-[1240px] py-5">
        <div className="flex items-center justify-between w-full py-0 md:py-5">
          <div className="flex flex-col items-center">
            <span
              style={{ fontFamily: "Caveat, cursive" }}
              className="text-[#B89B5E] font-semibold text-xl md:text-2xl"
            >
              101 Leaders
            </span>

            <div className="w-[40px] md:w-[60px] my-4">
              <div className="h-[2px] bg-[#B89B5E]"></div>
            </div>
          </div>

          <input
            type="text"
            placeholder="Fine a leader...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-6 px-4 py-2 w-full max-w-md text-gray-200 rounded border border-[#B89B5E] focus:outline-none focus:ring-2 focus:ring-[#B89B5E] transition-all duration-200"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1240px] py-5">
          {filteredLeaders.length > 0 ? (
            filteredLeaders.map((leader, index) => (
              <div
                key={index}
                className="relative border-2 border-[#B89B5E] h-[70vh] flex flex-col group"
              >
                <div className="relative flex-1">
                  <Link to={`leaders/${leader.id}`}>
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale cursor-pointer"
                    />
                  </Link>
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="p-4 text-left">
                      <h3 className="text-[#B89B5E] font-semibold text-lg">
                        {leader.name}
                      </h3>
                      <p className="text-sm leading-relaxed">
                        {leader.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[#B89B5E] col-span-full">No matching results</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leaders;
