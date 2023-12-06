import React from "react";
import Header from "../../components/Header/Header";
import SearchField from "../../components/Search/SearchField";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import command from "../../assets/images/Dropdown/Dropdown.png";
import grid from "../../assets/images/Grid-view/grid4.svg";
import column from "../../assets/images/Grid-view/Group.svg";
import icon from "../../assets/images/Icon-section/icon.png";
import arrow from '../../assets/images/Icon-section/arrow.svg'
import { PaginationNav1Presentation } from "../../components/Pagination/Pagination";

const AllValidators = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-5 px-40 py-10 max-lg:px-5 lg:px-20">
        <div className="flex justify-between gap-2">
          <div>
            <SearchField />
          </div>
          <div className="flex max-sm:gap-1 gap-5">
            <Dropdown DropdownText={"All Notices"} DropdownImg={command} />
            <img src={grid} alt="grid" className="special:w-16"/>
            <img src={column} alt="column" className="special:w-16" />
          </div>
        </div>
        <div className="flex justify-between items-center rounded-xl ring-1 ring-white px-3 py-1">
          <div className="flex flex-row max-sm:hidden">
            <img src={icon} alt="icon" className="special:w-10"/>
            <img src={icon} alt="icon" className="special:w-10"/>
            <img src={icon} alt="icon" className="special:w-10"/>
            <img src={icon} alt="icon" className="special:w-10"/>
            <img src={icon} alt="icon" className="special:w-10"/>
            <img src={icon} alt="icon" className="special:w-10"/>
            <img src={icon} alt="icon" className="special:w-10"/>
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            <h1 className="text-lg special:text-2xl">2,949,766,556.89</h1>
            <h1 className="text-gray-500 special:text-xl">PAW</h1>
          </div>
          <div className="text-gray-500 special:text-xl"><h1>99.47%</h1></div>
          <div><img src={arrow} alt="arrow" className="special:w-16"/></div>
        </div>
        <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-sm:grid-cols-1 special:grid-cols-6 rounded-3xl">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center"><PaginationNav1Presentation/></div>
      </div>
      <Footer />
    </div>
  );
};

export default AllValidators;
