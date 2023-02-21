import React from "react";
import BGabt from "../assets/BKaela_HolidayGift.png";
import KaePP from "../assets/channels4_profile.jpg";

const About = () => {
  return (
    <div className="w-full h-screen relative bg-gray-800">
      <img className="w-full h-full object-cover" src={BGabt} alt="/" />
      <div className="absolute w-full top-0 h-full flex flex-col justify-center text-center p-4 ">
        <div className="flex flex-col justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-white ">
          <img className="h-[200px] w-[200px] rounded-full" src={KaePP} alt="/" />
          <h1 className="py-5">Kaela Kovalskia</h1>
          <div className="flex justify-between items-center gap-1 py-5">
            <h2>The </h2>
            <h2 className="line-through"> Cutest</h2>
            <h2>Coolest Blacksmith from Hololive Indonesia Gen 3</h2>
          </div>
          <h3>
            "After taking over her great blacksmithing teacher's forge, she felt a lack of excitement in her life. So, she decided to be free and depart on a journey to find rare smithing materials, one of which was rumored to be under the
            building of a certain "idol group" in town."
          </h3>

          <h3 className="py-5">Fan Name : Pemaloe </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
