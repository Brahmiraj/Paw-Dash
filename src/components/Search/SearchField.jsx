import React from "react";
import { IoIosSearch } from "react-icons/io";
const  SearchField = () => (
  <div>
    <div className="flex ring-1 ring-white p-3 rounded-xl max-sm:p-1 max-sm:px-2">
      <input
        className="focus:outline-none bg-transparent placeholder:text-white placeholder:max-sm:text-xs placeholder:lg:text-lg placeholder:special:text-4xl max-sm:w-full max-xl:w-60 xl:w-80 special:w-96 text-white"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="">
        <IoIosSearch className="max-sm:w-4 text-2xl text-white special:text-4xl" />
      </button>
    </div>
  </div>
);

export default SearchField;
