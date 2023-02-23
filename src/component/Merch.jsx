import React from "react";
import Gelas from "../assets/gelas.png";
import ilust from "../assets/ilust.png";
import ttkGelas from "../assets/tatakan gls.png";

const Merch = () => {
  return (
    <div className="w-full h-auto relative bg-gray-800">
      <div className="wax-w-[1240px] mx-auto py-16 px-4 text-center bg-gray-800">
        <h1 className="text-white">Kaela's Merch</h1>
        <h2 className="text-white">Birthday Edition</h2>
        <div className="grid grid-cols-3 justify-items-center py-4 gap-2 md:gap-2 pt-10">
          <img className="w-[250px] h-[250px] object-cover " src={Gelas} alt="/" />
          <img className="w-[250px] h-[250px] object-cover" src={ilust} alt="/" />
          <img className="w-[250px] h-[250px] object-cover" src={ttkGelas} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Merch;
