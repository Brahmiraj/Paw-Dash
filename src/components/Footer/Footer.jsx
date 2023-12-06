import React from "react";
import footerBigLogo from "../../assets/images/footer/footerBigLogo.png";
import footerSmallLogo from "../../assets/images/footer/footerSmallLogo.png";

const Footer = () => {
  return (
      <div className="flex justify-between items-end p-10 max-sm:p-3">
        <div className="flex flex-col gap-5">
          <div>
            <img src={footerBigLogo} alt="footerBigLogo" className="max-sm:w-10 lg:w-16 special:w-28"/>
          </div>
          <div className="flex gap-10 max-sm:gap-3 max-sm:text-xs lg:text-lg special:text-4xl">
            <h1 className="text-white">Discord</h1>
            <h1 className="text-white">Telegram</h1>
            <h1 className="text-white">Twitter</h1>
            <h1 className="text-white">Burn</h1>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 justify-end">
            <div>
              <img src={footerSmallLogo} alt="footerSmallLogo" className="max-sm:w-5 lg:w-8 special:w-16"/>
            </div>
            <h1 className="text-white max-sm:text-xs lg:text-lg special:text-4xl">0.00</h1>
          </div>
          <div className="flex gap-10 justify-end max-sm:gap-3 max-sm:text-xs lg:text-lg special:text-4xl">
            <h1 className="text-white">Etherscan</h1>
            <h1 className="text-white">Shibaswap</h1>
          </div>
        </div>
    </div>
  );
};

export default Footer;
