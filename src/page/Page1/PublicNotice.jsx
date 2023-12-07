import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchField from "../../components/Search/SearchField";
import Dropdown from "../../components/Dropdown/Dropdown";
import DropdownImg from "../../assets/images/Dropdown/Dropdown.png";
import { PaginationNav1Presentation } from "../../components/Pagination/Pagination";
import PublicTable from "../../components/Table/PublicTable";
import {PublicNoticeTABLE_HEAD, PublicNoticeTABLE_ROWS} from '../../components/Details/Details'

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
        <PublicTable TABLE_HEAD={PublicNoticeTABLE_HEAD} TABLE_ROWS={PublicNoticeTABLE_ROWS} />
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
