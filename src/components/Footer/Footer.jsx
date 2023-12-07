import React from "react";
import footerBigLogo from "../../assets/images/footer/footerBigLogo.png";
import footerSmallLogo from "../../assets/images/footer/footerSmallLogo.png";

const Footer = () => {
  return (
    <div className="flex justify-between items-end p-10 max-sm:p-3 max-xl:text-xs max-sm:text-[10px]">
      <div className="flex flex-col gap-5">
        <div>
          <img
            src={footerBigLogo}
            alt="footerBigLogo"
            className="max-sm:w-10 lg:w-12 special:w-28"
          />
        </div>
        <div className="flex gap-10 max-xl:gap-4 max-sm:gap-2">
          <h1 className="text-white">Discord</h1>
          <h1 className="text-white">Telegram</h1>
          <h1 className="text-white">Twitter</h1>
          <h1 className="text-white">Burn</h1>
        </div>
      </div>
      <div>
        <h1 className="text-white max-sm:hidden">
          Copyright © 2023 PAW LLC All Rights Reserved
        </h1>
      </div>

      <div className="flex gap-10 justify-end max-xl:gap-3 max-sm:hidden">
        <h1 className="text-white">Etherscan</h1>
        <h1 className="text-white">Shibaswap</h1>
      </div>
      <div className="sm:hidden flex flex-col gap-5">
        <div>
          <h1 className="text-white truncate">
            Copyright © 2023 PAW LLC All Rights Reserved
          </h1>
        </div>

        <div className="flex gap-10 justify-end max-xl:gap-3">
          <h1 className="text-white">Etherscan</h1>
          <h1 className="text-white">Shibaswap</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
