import React, { useEffect, useState } from "react";
import headerLogo from "../../assets/images/header/header-logo.png";
import switchlogo from "../../assets/images/header/switch.svg.png";
import hamburgers from "../../assets/images/header/hamburger.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);

  const Links = [
    { name: "Overview", navigate: "/Overview" },
    { name: "All Validators", navigate: "/AllValidators" },
    { name: "Public Notices", navigate: "/" },
  ];

  const handleLinkClick = (path, index) => {
    navigate(path);
    setActiveLink(index);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-20 max-lg:px-5 pt-6">
        <div className="flex">
          <img
            src={headerLogo}
            alt=""
            className="max-lg:w-10 lg:w-12 special:w-28"
          />
        </div>

        <div className="hidden sm:flex pl-40 max-xl:pl-32 max-lg:pl-16">
          <div className="flex gap-8 rounded-full bg-[#064986] p-2 special:p-5 special:gap-20 special:text-4xl px-20 max-xl:px-5">
            {Links.map((link, index) => (
              <h1
                key={link.name}
                className={`Poppins text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 ${activeLink === index ? 'font-bold' : ''}`}
                onClick={() => handleLinkClick(link.navigate, index)}
              >
                {link.name}
              </h1>
            ))}
          </div>
        </div>

        <div className="flex">
          <div className="flex gap-8 special:gap-20 max-sm:gap-3 max-xl:gap-2">
            <button
              className="text-black rounded-full bg-white flex justify-center items-center p-2 gap-10 special:text-4xl special:p-5 special:gap-10 px-5 max-sm:px-3 max-xl:gap-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <img src={switchlogo} alt="switchlogo" className="special:w-8 max-sm:w-3" />
              <h1 className="max-lg:hidden visible Poppins">Switch to testnet</h1>
            </button>
            <button
              className="Poppins text-white rounded-full bg-[#064986] p-2 special:text-4xl special:p-5 px-3 max-sm:text-xs transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Login
            </button>
            <button className="text-white hidden max-sm:inline">
              <img src={hamburgers} alt="" className="special:w-20" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
