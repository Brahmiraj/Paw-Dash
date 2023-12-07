import React from "react";
import CardIcon from "../../assets/images/card/cardIcon.png";

const Card = ({Blockchain, Stake, Commission, Checkpoints, Health, onDelegateClick}) => {
  return (
    <div className="Poppins text-gray-400 rounded-2xl bg-black p-5 flex flex-col gap-5 w-full ring-1 ring-white">
      <div>
        <img src={CardIcon} alt="CardIcon" />
      </div>
      <div>
        <h1 className="text-2xl text-white">{Blockchain}</h1>
        <h1>{Stake} Staked</h1>
      </div>
      <div className="text-sm">
      <div className="flex justify-between">
        <h1>Commission</h1>
        <h1>{Commission}</h1>
      </div>
      <div className="flex justify-between">
        <h1>Checkpoints Signed</h1>
        <h1>{Checkpoints}</h1>
      </div>
      <div className="flex justify-between">
        <h1>Health Status</h1>
        <h1>{Health}</h1>
      </div>
      </div>
      <div><button className="p-3 bg-[#064986] rounded-2xl w-full text-white hover:bg-white hover:text-[#064986]" onClick={onDelegateClick}>Delegate</button></div>
    </div>
  );
};

export default Card;
