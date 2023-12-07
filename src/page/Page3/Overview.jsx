import React from "react";
import Header from "../../components/Header/Header";
import SearchField from "../../components/Search/SearchField";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import grid from "../../assets/images/Grid-view/grid4.svg";
import column from "../../assets/images/Grid-view/Group.svg";
import icon from "../../assets/images/Icon-section/icon.png";
import arrow from "../../assets/images/Icon-section/arrow.svg";
import { PaginationNav1Presentation } from "../../components/Pagination/Pagination";
import Infocard from '../../components/Infocard/Infocard'
import { useNavigate } from "react-router-dom";


const Overview = () => {
  const navigate = useNavigate();
  const handleDelegateClick = () => {
    navigate('/Overview2');
  };
  const handleBecomeDelegateClick = () => {
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
      <div className="flex flex-col gap-5 px-40 py-10 max-lg:px-5 lg:px-20">
        <div className="bg-[#00030CCC] rounded-2xl">
          <h1 className="text-white text-center special:text-4xl">Staking Overview</h1>
          <div className="px-10 py-5 max-xl:px-3 max-sm:hidden">
            <div className="flex justify-between divide-x">
              <Infocard
                contant1={"OWNER MATIC BALANCE"}
                contant2={"0 PAW"}
                contant3={"$0.00"}
              />
              <Infocard
                contant1={"TOTAL STAKE"}
                contant2={"900,348.14 PAW"}
                contant3={"$736,313.71"}
              />
              <Infocard
                contant1={"VALIDATOR'S STAKE"}
                contant2={"205,761.64 PAW"}
                contant3={"$168,273.93"}
              />
              <Infocard
                contant1={"HEIMDALL FEES"}
                contant2={"212.83 PAW"}
                contant3={"$174.05"}
              />
            </div>
            <hr />
            <div className="flex justify-between divide-x">
              <Infocard
                contant1={"TOTAL REWARDS EARNED"}
                contant2={"250,249.04 MATIC"}
                contant3={"$204,656.17"}
              />
              <Infocard
                contant1={"HEALTH STATUS"}
                contant2={"Healthy"}
                contant3={""}
              />
              <Infocard
                contant1={"PERFORMANCE INDEX"}
                contant2={"100%"}
                contant3={""}
              />
              <Infocard
                contant1={"SIGNER ETH BALANCE"}
                contant2={"0.40 ETH"}
                contant3={""}
              />
            </div>
          </div>
          <div>
          <div className="sm:hidden inline">
            <div className="flex justify-between divide-x">
              <Infocard
                contant1={"OWNER MATIC BALANCE"}
                contant2={"0 PAW"}
                contant3={"$0.00"}
              />
              <Infocard
                contant1={"TOTAL STAKE"}
                contant2={"900,348.14 PAW"}
                contant3={"$736,313.71"}
              />
            </div>
            <hr />

            <div className="flex justify-between divide-x">
              <Infocard
                contant1={"VALIDATOR'S STAKE"}
                contant2={"205,761.64 PAW"}
                contant3={"$168,273.93"}
              />
              <Infocard
                contant1={"HEIMDALL FEES"}
                contant2={"212.83 PAW"}
                contant3={"$174.05"}
              />
            </div>

            <hr />
            <div className="flex justify-between divide-x">
              <Infocard
                contant1={"TOTAL REWARDS EARNED"}
                contant2={"250,249.04 MATIC"}
                contant3={"$204,656.17"}
              />
              <Infocard
                contant1={"HEALTH STATUS"}
                contant2={"Healthy"}
                contant3={""}
              />
            </div>
            <hr />
            <div className="flex justify-between divide-x">
              <Infocard
                contant1={"PERFORMANCE INDEX"}
                contant2={"100%"}
                contant3={""}
              />
              <Infocard
                contant1={"SIGNER ETH BALANCE"}
                contant2={"0.40 ETH"}
                contant3={""}
              />
            </div>
          </div>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div>
            <SearchField />
          </div>
          <div className="flex max-sm:gap-1 gap-5">
            <button className="bg-[#064986] rounded-lg text-sm text-white px-3 special:text-2xl md:whitespace-nowrap transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" onClick={handleBecomeDelegateClick}>
              Become a Delegator
            </button>
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
        <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-sm:grid-cols-1 special:grid-cols-6">
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

export default Overview;
