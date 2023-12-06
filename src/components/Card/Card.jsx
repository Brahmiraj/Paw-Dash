import React from "react";
import CardIcon from "../../assets/images/card/cardIcon.png";

const Card = () => {
  return (
    <div className="text-gray-400 rounded-2xl bg-black p-5 flex flex-col gap-5 w-full ring-1 ring-white">
      <div>
        <img src={CardIcon} alt="CardIcon" />
      </div>
      <div>
        <h1 className="text-2xl text-white">Blockchain</h1>
        <h1>900.348.15 PAW Staked</h1>
      </div>
      <div className="text-sm">
      <div className="flex justify-between">
        <h1>Commission</h1>
        <h1>10%</h1>
      </div>
      <div className="flex justify-between">
        <h1>Checkpoints Signed </h1>
        <h1>100%</h1>
      </div>
      <div className="flex justify-between">
        <h1>Health Status</h1>
        <h1>Healthy</h1>
      </div>
      </div>
      <div><button className="p-3 bg-[#064986] rounded-2xl w-full">Delegate</button></div>
    </div>
  );
};

export default Card;
