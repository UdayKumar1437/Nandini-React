import React from 'react'

const Card = ({imgSrc,title}) => {
  return (
    <div className='border rounded-lg h-[300px] w-[300px] flex flex-col justify-center items-center'>
        <img className='h-[200px]' src={imgSrc} alt="" />
        <h1>{title}</h1>
    </div>
  )
}

export default Card