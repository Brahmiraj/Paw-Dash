import React from "react";
import CardIcon from "../../assets/images/card/cardIcon.png";

const Card = ({contant1, contant2, contant3, contant4, contant5, contant6, contant7, contant8, onDelegateClick}) => {
  return (
    <div className="Poppins text-gray-400 rounded-2xl bg-black p-5 flex flex-col gap-5 w-full ring-1 ring-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
      <div>
        <img src={CardIcon} alt="CardIcon" />
      </div>
      <div>
        <h1 className="text-2xl text-white">{contant1}</h1>
        <h1>{contant2}</h1>
      </div>
      <div className="text-sm">
      <div className="flex justify-between">
        <h1>{contant3}</h1>
        <h1>{contant4}</h1>
      </div>
      <div className="flex justify-between">
        <h1>{contant5}</h1>
        <h1>{contant6}</h1>
      </div>
      <div className="flex justify-between">
        <h1>{contant7}</h1>
        <h1>{contant8}</h1>
      </div>
      </div>
      <div><button className="p-3 bg-[#064986] rounded-2xl w-full text-white" onClick={onDelegateClick}>Delegate</button></div>
    </div>
  );
};

export default Card;
