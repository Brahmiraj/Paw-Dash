import React from "react";

const PublicTable = ({TABLE_ROWS}) => {
  return (
      <table className="table-fixed w-full text-left gap-3 max-sm:text-[10px] max-sm:table-auto special:text-3xl">
        <thead>
          <tr className="text-white">
            {/* {TABLE_HEAD.map((details, key) => (
              <th scope="col" key={key}>
                {details}
              </th>
            ))} */}
            <th className="w-32 max-lg:w-20 max-sm:w-10">#ID</th>
            <th className="text-left">Title</th>
            <th className="text-start pl-[10%] max-xl:pl-[5%]">Validator Name</th>
            <th className="text-start pl-[17%] max-xl:pl-[7%]">Notice Time</th>
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((details, key) => (
            <React.Fragment key={key}>
              <tr className="text-gray-400 hover:text-white">
                <td className="p-2 max-lg:w-20 max-sm:w-10">{details.id}</td>
                <td>{details.title}</td>
                <td className="text-start pl-[10%] max-xl:pl-[5%]">{details.name}</td>
                <td className="text-start pl-[17%] max-xl:pl-[7%]">{details.time}</td>
              </tr>
              <tr>
                {/* <td colSpan={TABLE_HEAD.length}>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                </td> */}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
  );
};

export default PublicTable;