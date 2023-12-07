import React, { useEffect, useState } from "react";
import headerLogo from "../../assets/images/header/header-logo.png";
import switchlogo from "../../assets/images/header/switch.svg.png";
import hamburgers from "../../assets/images/header/hamburger.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Links = [
    { name: "Overview", navigate: "/" },
    { name: "All Validators", navigate: "/AllValidators" },
    { name: "Public Notices", navigate: "/PublicNotice" },
  ];

  const handleLinkClick = (path, index) => {
    navigate(path);
    setActiveLink(index);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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

        <div className="hidden sm:flex pl-52 max-xl:pl-32 max-lg:pl-16">
          <div className="flex gap-8 rounded-full bg-[#064986] p-2 special:p-5 special:gap-20 special:text-4xl px-20 max-xl:px-5">
            {Links.map((link, index) => (
              <h1
                key={link.name}
                className={`Poppins text-white cursor-pointer hover:bg-white hover:text-[#064986] hover:rounded-xl p-1 ${
                  activeLink === index ? "font-bold" : ""
                }`}
                onClick={() => handleLinkClick(link.navigate, index)}
              >
                {link.name}
              </h1>
            ))}
          </div>
        </div>

        <div className="flex">
          <div className="flex gap-8 special:gap-20 max-sm:gap-3 max-xl:gap-2">
            <button className="text-black rounded-full bg-white flex justify-center items-center p-2 gap-5 special:text-4xl special:p-5 special:gap-10 px-5 max-sm:px-3 max-xl:gap-2 hover:bg-[#064986] hover:text-white">
              <img
                src={switchlogo}
                alt="switchlogo"
                className="special:w-8 max-sm:w-3 bg-white rounded-xl p-1 max-sm:p-0"
              />
              <h1 className="max-xl:hidden visible Poppins">
                Switch to testnet
              </h1>
            </button>
            <button className="Poppins text-white rounded-full bg-[#064986] p-3 special:text-4xl special:p-5 px-8 max-sm:px-3 max-sm:text-xs hover:bg-white hover:text-[#064986]">
              Login
            </button>
            <button className="text-white sm:hidden">
              <img
                src={hamburgers}
                alt=""
                className="special:w-20"
                onClick={toggleMobileMenu}
              />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute flex flex-col justify-start items-center h-40 w-full p-8 bg-blue-900 rounded-2xl gap-5">
          {Links.map((link, index) => (
            <h1
              key={link.name}
              className={`Poppins text-white cursor-pointer ${
                activeLink === index ? "font-bold" : ""
              }`}
              onClick={() => handleLinkClick(link.navigate, index)}
            >
              {link.name}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
