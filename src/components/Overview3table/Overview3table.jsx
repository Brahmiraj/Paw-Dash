import React from "react";

const Overview3table = ({ TABLE_ROWS }) => {
  return (
    <table className="table-fixed text-left w-full gap-3 max-sm:text-[10px] max-sm:table-auto special:text-3xl">
      <thead>
        <tr className="text-white">
          {/* {TABLE_HEAD.map((details, key) => (
              <th scope="col" key={key}>
                {details}
              </th>
            ))} */}
            <th>Latest Checkpoints Signed</th>
            <th className="pl-[10%] max-lg:pl-[5%] max-md:pl-[0%]">Rewards</th>
            <th className="pl-[20%] max-xl:pl-[10%]">Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map((details, key) => (
          <React.Fragment key={key}>
            <tr className="text-gray-400 hover:text-white">
              <td>{details.contant1}</td>
              <td className="pl-[10%] max-lg:pl-[5%] max-md:pl-[0%]">{details.contant2}</td>
              <td className="pl-[20%] max-xl:pl-[10%]">{details.contant3}</td>
            </tr>
            <tr></tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
    // <div>
    //   <div className="flex items-center justify-between text-white p-3 max-sm:text-xs gap-3">
    //     <h1 className="text-left">{contant1}</h1>
    //     <h1 className="text-left">{contant2}</h1>
    //     <h1 className="text-right">{contant3}</h1>
    //   </div>
    //   <hr />
    // </div>
  );
};

export default Overview3table;
