import React from "react";

const Dropdown = ({DropdownText, DropdownImg}) => {
  return (
      <div className="max-sm:text-xs flex justify-center items-center ring-1 ring-white p-3 rounded-xl gap-5 max-sm:gap-0 max-sm:p-1 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
        <h1 className="text-white max-sm:text-xs lg:text-lg special:text-4xl whitespace-nowrap px-3 max-sm:px-1">
          {DropdownText}
        </h1>
        <img src={DropdownImg} alt="DropdownImg" className="max-sm:w-6"/>
      </div>
  );
};

export default Dropdown;
