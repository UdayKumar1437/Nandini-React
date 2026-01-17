import React from 'react'

const Card = ({imgSrc,title}) => {
  return (
    <div className='border rounded-lg h-[400px] w-[400px] flex flex-col justify-center items-center'>
        <img src={imgSrc} alt="" />
        <h1>{title}</h1>
    </div>
  )
}

export default Card