import React from "react";
import headerLogo from "../../assets/images/header/header-logo.png";
import switchlogo from "../../assets/images/header/switch.svg.png";
import hamburgers from "../../assets/images/header/hamburger.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const Links =[
    {name:"Overview",link:"/Overview"},
    {name:"All Validators",link:"/AllValidators"},
    {name:"Public Notices",link:"/"},
  ];
  const handleClick = () => {
    navigate("/AllValidators")
  }
  return (
    <div>
      <div className="">
        <div className="flex justify-between items-center px-20 max-lg:px-5 pt-6">
          <div className="flex">
            <img src={headerLogo} alt="" className="max-lg:w-10 special:w-40 cursor-pointer" onClick={handleClick}/>
          </div>
          <div className="hidden sm:block">
            <div className="flex gap-8 rounded-full bg-[#064986] p-2 special:p-5 special:gap-20 special:text-4xl">
            {Links.map((link) => (
                <h1 key={link.name} className="text-white cursor-pointer">
                  {link.name}
                </h1>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="flex gap-8 special:gap-20">
              <button className="text-black rounded-full bg-white flex justify-center items-center p-2 gap-5 special:text-4xl special:p-5 special:gap-10 px-5">
                <img
                  src={switchlogo}
                  alt="switchlogo"
                  className="special:w-8"
                />
                <h1 className="max-lg:hidden visible">Switch to testnet</h1>
              </button>
              <button className="text-white rounded-full bg-[#030A17] p-2 special:text-4xl special:p-5 px-3">
                Login
              </button>
              <button className="text-white hidden max-sm:inline">
                <img src={hamburgers} alt="" className="special:w-20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
