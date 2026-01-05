import React from 'react'

const SkillCard = ({skillName,imgSrc}) => {
  return (
    <div className='border-1 border-black h-[100px] w-[100px] rounded-lg items-center flex flex-col justify-center'>
        <img className='max-h-[30px]' src={imgSrc} alt="" />
        <p>{skillName}</p>
    </div>
  )
}

export default SkillCard