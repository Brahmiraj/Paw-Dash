import React from "react";

const Overview3table = ({ TABLE_ROWS }) => {
  return (
    <table className="table-fixed text-left w-full gap-3 max-sm:text-[10px] max-sm:table-auto special:text-3xl">
      <thead>
        <tr className="text-white">
          <th>Latest Checkpoints Signed</th>
          <th className="pl-[10%] max-lg:pl-[5%] max-md:pl-[0%]">Rewards</th>
          <th className="pl-[20%] max-xl:pl-[10%] max-sm:pl-[5%]">Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map((details, key) => (
          <React.Fragment key={key}>
            <tr className="text-gray-400 hover:text-white">
              <td>{details.contant1}</td>
              <td className="pl-[10%] max-lg:pl-[5%] max-md:pl-[0%]">
                {details.contant2}
              </td>
              <td className="pl-[20%] max-xl:pl-[10%] max-sm:pl-[5%]">
                {details.contant3}
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Overview3table;
