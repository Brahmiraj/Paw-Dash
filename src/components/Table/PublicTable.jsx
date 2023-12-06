import React from "react";

const PublicTable = ({TABLE_HEAD, TABLE_ROWS}) => {
  return (
      <table className="table-fixed w-full text-left gap-3 max-sm:text-xs max-sm:table-auto special:text-3xl">
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
              <tr className="text-gray-400">
                <td className="p-2">{details.id}</td>
                <td>{details.title}</td>
                <td>{details.name}</td>
                <td>{details.time}</td>
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
  );
};

export default PublicTable;