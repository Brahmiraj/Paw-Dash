import React from "react";
import { IoIosSearch } from "react-icons/io";
const  SearchField = () => (
  <div>
    <div className="flex ring-1 ring-white p-3 rounded-xl max-sm:p-2">
      <input
        className="focus:outline-none bg-transparent placeholder:text-white placeholder:max-sm:text-xs placeholder:lg:text-lg placeholder:special:text-4xl max-sm:w-full special:w-96 text-white"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="">
        <IoIosSearch className="text-2xl text-white special:text-4xl" />
      </button>
    </div>
  </div>
);

export default SearchField;
