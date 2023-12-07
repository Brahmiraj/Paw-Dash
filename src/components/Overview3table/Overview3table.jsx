import React from "react";

const Overview3table = ({TABLE_HEAD, TABLE_ROWS}) => {
  return (
    <table className="table-fixed text-left w-full gap-3 max-sm:text-xs max-sm:table-auto special:text-3xl">
        <thead>
          <tr className="text-white">
            {TABLE_HEAD.map((details, key) => (
              <th scope="col" key={key}>
                {details}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((details, key) => (
            <React.Fragment key={key}>
              <tr className="text-gray-400 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                <td>{details.contant1}</td>
                <td>{details.contant2}</td>
                <td>{details.contant3}</td>
              </tr>
              <tr>
                <td colSpan={TABLE_HEAD.length}>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                </td>
              </tr>
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
