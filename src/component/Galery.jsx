import React, { useState } from "react";
import { BsArrowLeft, BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1675685438732-cca70893fa44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1676381901411-bd74b1292899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1117&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1587682205729-f29187da8774?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const Galery = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  return (
    <div className="w-full relative bg-gray-800">
      <h1 className="text-white text-center pt-10">Gallery</h1>
      <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center bg-gray-800">
        <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[50%] text-3xl  text-white cursor-pointer left-12" />
        <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] text-3xl  text-white cursor-pointer right-12 " />
        {sliderData.map((item, index) => (
          <div className={index === slide ? "opacity-100" : "opacity-0"}>{index === slide && <img className="w-full rounded-md" src={item.url} alt="/" />}</div>
        ))}
      </div>
    </div>
  );
};

export default Galery;
