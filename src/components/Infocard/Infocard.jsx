import React from 'react'
import infoImg from '../../assets/images/info/infocircle.svg'

const Infocard = ({contant1, contant2, contant3}) => {
  return (
    <div className='text-gray-600 p-5 w-full'>
    <div className='flex justify-between gap-5 max-xl:text-xs special:text-3xl'><h1>{contant1}</h1><img src={infoImg} alt="infoImg" className='special:w-8' /></div>
    <div><h1 className='text-white special:text-xl'>{contant2}</h1></div>
    <div><h1 className='max-xl:text-xs special:text-3xl'>{contant3}</h1></div>
  </div>
  )
}

export default Infocard
