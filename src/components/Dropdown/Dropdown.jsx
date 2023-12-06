import React from "react";

const Dropdown = ({DropdownText, DropdownImg}) => {
  return (
      <div className="flex justify-center items-center ring-1 ring-white p-3 rounded-xl gap-5 max-sm:gap-1 max-sm:p-2">
        <h1 className="text-white max-sm:text-xs lg:text-lg special:text-4xl whitespace-nowrap px-3">
          {DropdownText}
        </h1>
        <img src={DropdownImg} alt="DropdownImg" />
      </div>
  );
};

export default Dropdown;
