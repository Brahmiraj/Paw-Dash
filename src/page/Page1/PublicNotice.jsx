import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchField from "../../components/Search/SearchField";
import Dropdown from "../../components/Dropdown/Dropdown";
import DropdownImg from "../../assets/images/Dropdown/Dropdown.png";
import { PaginationNav1Presentation } from "../../components/Pagination/Pagination";
import PublicTable from "../../components/Table/PublicTable";



const TABLE_HEAD = ["#ID", "Title", "Validator title", "Notice Time"];
 
const TABLE_ROWS = [
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  },
  {
    id: "01",
    title: "Jane Cooper",
    name: "Torus Validator",
    time: "12/02/23, 09:46:11 AM",
    
  }
];
const PublicNotice = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow px-40 py-10 max-lg:px-5 lg:px-20 pt-24">
      <div className="flex justify-between">
        <SearchField />
        <Dropdown DropdownText={"All Notices"} DropdownImg={DropdownImg} />
      </div>
      <div className="py-3 pt-10">
        <PublicTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
      </div>
      <div className="flex justify-center">
        <PaginationNav1Presentation />
      </div>
    </div>
    <Footer className="flex-none" />
  </div>
  );
};

export default PublicNotice;
