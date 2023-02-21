import React from "react";
import "./FunFactStyles.css";

const FunFact = () => {
  return (
    <div className="w-full h-screen relative bg-gray-800">
      <h1 className="text-white py-10 text-center">Fun Fact About Kaela</h1>
      <div className="grid grid-cols-2 py-4 gap-1 ">
        <div className="flex flex-col justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-white ">
          <h2>Profile</h2>
          <li>Age : too busy collecting hammers</li>
          <li>Birthday : August 30th </li>
          <li>Height : 173cm</li>
          <li>Debut Day : March 26th,2022</li>
        </div>
        <div className="flex flex-col justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-white ">
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem inventore cupiditate tenetur modi, doloremque deserunt iure quasi. Optio sit nostrum, harum id, debitis temporibus corrupti officia, quisquam perspiciatis
            quaerat ipsa.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
