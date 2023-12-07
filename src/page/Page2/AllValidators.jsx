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
import { useNavigate } from "react-router-dom";

const AllValidators = () => {
  const navigate = useNavigate();
  const handleDelegateClick = () => {
    navigate('/Overview');
  };
  const cardData = [
    {
      contant1: "Blockchain",
      contant2: "900.348.15 PAW Staked",
      contant3: "Commission",
      contant4: "10%",
      contant5: "Checkpoints Signed",
      contant6: "100%",
      contant7: "Health Status",
      contant8: "Healthy",
    },
    {
      contant1: "Blockchain",
      contant2: "900.348.15 PAW Staked",
      contant3: "Commission",
      contant4: "10%",
      contant5: "Checkpoints Signed",
      contant6: "100%",
      contant7: "Health Status",
      contant8: "Healthy",
    },
    {
      contant1: "Blockchain",
      contant2: "900.348.15 PAW Staked",
      contant3: "Commission",
      contant4: "10%",
      contant5: "Checkpoints Signed",
      contant6: "100%",
      contant7: "Health Status",
      contant8: "Healthy",
    },
    {
      contant1: "Blockchain",
      contant2: "900.348.15 PAW Staked",
      contant3: "Commission",
      contant4: "10%",
      contant5: "Checkpoints Signed",
      contant6: "100%",
      contant7: "Health Status",
      contant8: "Healthy",
    },
    {
      contant1: "Blockchain",
      contant2: "900.348.15 PAW Staked",
      contant3: "Commission",
      contant4: "10%",
      contant5: "Checkpoints Signed",
      contant6: "100%",
      contant7: "Health Status",
      contant8: "Healthy",
    },
    {
      contant1: "Blockchain",
      contant2: "900.348.15 PAW Staked",
      contant3: "Commission",
      contant4: "10%",
      contant5: "Checkpoints Signed",
      contant6: "100%",
      contant7: "Health Status",
      contant8: "Healthy",
    },
    {
      contant1: "Blockchain",
      contant2: "900.348.15 PAW Staked",
      contant3: "Commission",
      contant4: "10%",
      contant5: "Checkpoints Signed",
      contant6: "100%",
      contant7: "Health Status",
      contant8: "Healthy",
    },
    {
      contant1: "Blockchain",
      contant2: "900.348.15 PAW Staked",
      contant3: "Commission",
      contant4: "10%",
      contant5: "Checkpoints Signed",
      contant6: "100%",
      contant7: "Health Status",
      contant8: "Healthy",
    },
    {
      contant1: "Blockchain",
      contant2: "900.348.15 PAW Staked",
      contant3: "Commission",
      contant4: "10%",
      contant5: "Checkpoints Signed",
      contant6: "100%",
      contant7: "Health Status",
      contant8: "Healthy",
    },
    {
      contant1: "Blockchain",
      contant2: "900.348.15 PAW Staked",
      contant3: "Commission",
      contant4: "10%",
      contant5: "Checkpoints Signed",
      contant6: "100%",
      contant7: "Health Status",
      contant8: "Healthy",
    },
    {
      contant1: "Blockchain",
      contant2: "900.348.15 PAW Staked",
      contant3: "Commission",
      contant4: "10%",
      contant5: "Checkpoints Signed",
      contant6: "100%",
      contant7: "Health Status",
      contant8: "Healthy",
    },
    {
      contant1: "Blockchain",
      contant2: "900.348.15 PAW Staked",
      contant3: "Commission",
      contant4: "10%",
      contant5: "Checkpoints Signed",
      contant6: "100%",
      contant7: "Health Status",
      contant8: "Healthy",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex flex-col gap-5 px-40 py-10 max-lg:px-5 lg:px-20 pt-24">
        <div className="flex justify-between items-center gap-2">
          <div>
            <SearchField />
          </div>
          <div className="flex max-sm:gap-1 gap-5">
            <Dropdown DropdownText={"Performance"} DropdownImg={command} />
            <img src={grid} alt="grid" className="max-sm:w-8 special:w-16 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"/>
            <img src={column} alt="column" className="max-sm:w-8 special:w-16 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer" />
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
        {cardData.map((card, index) => (
          <Card
            key={index}
            contant1={card.contant1}
            contant2={card.contant2}
            contant3={card.contant3}
            contant4={card.contant4}
            contant5={card.contant5}
            contant6={card.contant6}
            contant7={card.contant7}
            contant8={card.contant8}
            onDelegateClick={handleDelegateClick}
          />
        ))}
        </div>
        <div className="flex justify-center"><PaginationNav1Presentation/></div>
      </div>
      <Footer />
    </div>
  );
};

export default AllValidators;
