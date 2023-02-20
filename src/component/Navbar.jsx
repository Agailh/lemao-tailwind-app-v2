import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white ">
      <div className="flex justify-center">
        <h1 onClick={handleNav} className={(logo ? "hidden" : "block", "text-red-600")}>
          Kae
        </h1>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          Lemao
        </h1>
      </div>
      <ul className=" hidden md:flex">
        <li>Home</li>
        <li>About Kaela</li>
        <li>Fun Fact</li>
        <li>Gallery</li>
        <li>Merch</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
      </div>

      {/* Mobile navbar */}

      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? <AiOutlineClose className="text-black" size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>
      <div onClick={handleNav} className={nav ? "absolute left-0 top-0 w-full text-black bg-gray-100/90 px-4 py-7 fle flex-col" : "absolute left-[-100%]"}>
        <ul>
          <h1>KaeLemao</h1>
          <li className="border-b">Home</li>
          <li className="border-b">About Kaela</li>
          <li className="border-b">Fun Fact</li>
          <li className="border-b">Gallery</li>
          <li className="border-b">Merch</li>
          <div className="flex flex-col">
            <button className="my-4">Search</button>
            <button className="my-4">Account</button>
          </div>
          <div className="flex justify-between my-8">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
