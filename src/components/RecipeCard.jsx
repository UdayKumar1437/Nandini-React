import React from 'react'

const RecipeCard = ({img,rating,name,uday}) => {
  return (
    <div className='border w-[280px] flex flex-col items-center justify-center'>
        <img className='h-[250px]' src={img} alt="" />
        <div className='flex gap-2'>
            <p>{name}</p>
            <p className='bg-yellow-300 px-2 py-[1px] rounded-lg'>{rating}</p>
        </div>
        <p>{uday}</p>
        {/* <button>Add To cart</button> */}
    </div>
  )
}

export default RecipeCard