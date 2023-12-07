import React from "react";

const Dropdown = ({DropdownText, DropdownImg}) => {
  return (
      <div className="max-sm:text-xs flex justify-center items-center ring-1 ring-white p-3 rounded-xl gap-5 max-sm:gap-0 max-sm:p-1 hover:bg-[#064986]">
        <h1 className="text-white max-sm:text-[10px] lg:text-lg special:text-4xl whitespace-nowrap px-3 max-sm:px-2 max-sm:py-1">
          {DropdownText}
        </h1>
        <img src={DropdownImg} alt="DropdownImg" className="max-sm:w-4"/>
      </div>
  );
};

export default Dropdown;
