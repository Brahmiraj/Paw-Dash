import React from 'react'
import token from '../../assets/images/Overview2/token.png.png'

const Overview2Card = ({contant1, contant2}) => {
  return (
    <div>

    <div className='flex items-center justify-between text-white p-3 max-sm:text-xs gap-5'>
      <div className='flex gap-3 justify-center items-center'><img src={token} alt="token" /><h1 className='truncate'>{contant1}</h1></div>
      <div><h1>{contant2}</h1></div>
    </div>
      <hr />
    </div>
  )
}

export default Overview2Card
