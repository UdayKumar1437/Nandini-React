import React from 'react'
import ComponentOne from '../components/ComponentOne'
import ComponentTwo from '../components/ComponentTwo'
import IntroLeft from '../components/IntroLeft'
import IntroRight from '../components/IntroRight'

const ContainerOne = () => {
  return (
    <div className='flex bg-[#FFF3EA]'>
        <div className='w-1/2'>
            <IntroLeft/>
        </div>
        <div className='w-1/2'>
            <IntroRight/>
        </div>
    </div>
  )
}

export default ContainerOne