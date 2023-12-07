import React from 'react'
import CardIcon from "../../assets/images/card/cardIcon.png";


const OverviewTable = ({TABLE_HEAD, TABLE_ROWS, onDelegateClick}) => {
    
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
          <tr className="text-gray-400 hover:text-white">
            <td className='flex items-center max-sm:flex-col'><img src={CardIcon} alt="CardIcon" className='w-10 max-sm:w-5'/>{details.Blockchain}</td>
            <td>{details.Stake}</td>
            <td>{details.Commission}</td>
            <td>{details.Checkpoints}</td>
            <td>{details.Health}</td>
            <td><button className="p-3 max-sm:p-1 max-sm:py-2 bg-[#064986] rounded-2xl w-full text-white hover:bg-white hover:text-[#064986]" onClick={onDelegateClick}>Delegate</button></td>
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
  )
}

export default OverviewTable
