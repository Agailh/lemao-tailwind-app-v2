import React from "react";

const FunFact = () => {
  return (
    <div className="w-full relative bg-gray-800">
      <h1 className="text-white py-10 text-center">Fun Fact About Kaela</h1>
      <div className="grid grid-cols-2 py-4 gap-1 ">
        <div className="flex flex-col justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-white ">
          <h2 className="py-5">Profile</h2>
          <dl className="px-4 py-2">
            <dd>Age : too busy collecting hammers</dd>
            <dd>Birthday : August 30th </dd>
            <dd>Height : 173cm</dd>
            <dd>Debut Day : March 26th,2022</dd>
          </dl>
          <h2 className="py-5">Hobbies</h2>
          <dl className="px-4 py-2">
            <dd>Swinging Hammer 40%</dd>
            <dd>Gaming 40% </dd>
            <dd>Swimming 5%</dd>
            <dd>Writing 5%</dd>
            <dd>Cooking 5%</dd>
            <dd>Reading 5%</dd>
          </dl>
          <h2 className="py-2">Lore</h2>
          <h3 className="px-4 text-center text-xs pb-4">
            "After taking over her great blacksmithing teacher's forge, she felt a lack of excitement in her life. So, she decided to be free and depart on a journey to find rare smithing materials, one of which was rumored to be under the
            building of a certain "idol group" in town."
          </h3>
        </div>
        <div className="flex flex-col justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-white ">
          <h2 className="py-5">Facts About Kaela</h2>
          <h3>Source :https://www.youtube.com/watch?v=CKbR7kNpiTI </h3>
          <dl className="px-8 py-2">
            <dd>kaela loves all kinds of chicken noodles (mie ayam)</dd>
            <dd>like other ID kids, when she's still a kid she tried slurping a red flower's nectar, but sneezes after</dd>
            <dd>kaela loves football (soccer) games (winning eleven, FIFA), and used to watch the match with relatives at home</dd>
            <dd>she have the memory of playing / watching PS1 super soccer game</dd>
          </dl>
          <h3>Source :https://www.youtube.com/watch?v=SIQxQ7GhHTE </h3>
          <dl className="px-8 py-2">
            <dd>her family are gamers</dd>
            <dd>she got her silent laugh from her ma, and her 'extra hard worker' from her pa</dd>
            <dd>her pa is a car enthusiast, drive well and play racing game competitively; also have a truck driving license</dd>
            <dd>her pa can drive forklift</dd>
            <dd> kaela drives her car manually </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
