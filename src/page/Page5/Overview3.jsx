import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import copy from "../../assets/images/Overview2/copy.svg";
import trophy from "../../assets/images/Overview2/trophy.svg";
import { PaginationNav1Presentation } from "../../components/Pagination/Pagination";
import Overview3table from "../../components/Overview3table/Overview3table";

const Overview3 = () => {
  const TABLE_HEAD = ["Latest Checkpoints Signed", "Rewards", "Timestamp"];
  const TABLE_ROWS = [
    {
      contant1: "#54,534",
      contant2: "2.76 MATIC",
      contant3: "12/4/2023, 2:31:59 PM",
    },
    {
      contant1: "#54,534",
      contant2: "2.76 MATIC",
      contant3: "12/4/2023, 2:31:59 PM",
    },
    {
      contant1: "#54,534",
      contant2: "2.76 MATIC",
      contant3: "12/4/2023, 2:31:59 PM",
    },
    {
      contant1: "#54,534",
      contant2: "2.76 MATIC",
      contant3: "12/4/2023, 2:31:59 PM",
    },
    {
      contant1: "#54,534",
      contant2: "2.76 MATIC",
      contant3: "12/4/2023, 2:31:59 PM",
    },
    {
      contant1: "#54,534",
      contant2: "2.76 MATIC",
      contant3: "12/4/2023, 2:31:59 PM",
    },
    {
      contant1: "#54,534",
      contant2: "2.76 MATIC",
      contant3: "12/4/2023, 2:31:59 PM",
    },
    {
      contant1: "#54,534",
      contant2: "2.76 MATIC",
      contant3: "12/4/2023, 2:31:59 PM",
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-5 px-40 py-10 max-lg:px-5 lg:px-20">
        <div className="grid grid-cols-4 max-sm:grid-cols-2 justify-between gap-3 max-xl:text-xs">
          <div className="text-white flex justify-between items-center rounded-lg ring-1 ring-white w-full max-xl:p-1 p-2 max-sm:p-1">
            <h1 className="font-bold">Owner</h1>
            <h1>0xd3................c21a</h1>
            <img src={copy} alt="copy" className="w-5" />
          </div>
          <div className="text-white flex justify-between items-center rounded-lg ring-1 ring-white w-full max-xl:p-1 p-2 max-sm:p-1">
            <h1 className="font-bold">Signer</h1>
            <h1>0xd3................c21a</h1>
            <img src={copy} alt="copy" className="w-5" />
          </div>
          <div className="text-white flex justify-between items-center rounded-lg ring-1 ring-white w-full max-xl:p-1 p-2 max-sm:p-1">
            <img src={trophy} alt="trophy" className="w-5" />
            <h1>Checkpoints Signed</h1>
            <h1 className="font-bold">100%</h1>
          </div>
          <div className="text-white flex justify-between items-center rounded-lg ring-1 ring-white w-full max-xl:p-1 p-2 max-sm:p-1">
            <img src={trophy} alt="trophy" className="w-5" />
            <h1>Commission</h1>
            <h1 className="font-bold">10%</h1>
          </div>
        </div>
        <div className="bg-[#00030CCC] rounded-2xl">
          <h1 className="text-white text-center special:text-4xl">
            Staking Overview
          </h1>
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
        <div className="flex justify-between">
          <div className="flex max-sm:text-xs">
            <button className="bg-[#064986] rounded-lg text-sm text-white px-3 py-2 special:text-2xl md:whitespace-nowrap">
              Delegators
            </button>
            <button className=" rounded-lg text-sm text-white px-3 py-2 special:text-2xl md:whitespace-nowrap">
              Checkpoints Signed
            </button>
          </div>
          <div className="flex max-sm:gap-1 gap-5">
            <button className="bg-[#064986] rounded-lg text-sm text-white px-3 py-2 special:text-2xl md:whitespace-nowrap">
              Become a Delegator
            </button>
          </div>
        </div>
        <div>
          {/* <div className="flex items-center justify-between text-white p-3 max-sm:text-xs gap-3 text-left">
            <h1>Latest Checkpoints Signed</h1>
            <h1>Rewards</h1>
            <h1>Timestamp</h1>
          </div> */}
          <div>
            <Overview3table TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
          </div>
        </div>
        <div className="flex justify-center">
          <PaginationNav1Presentation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Overview3;
