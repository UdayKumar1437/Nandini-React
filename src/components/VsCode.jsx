import React from 'react'

const VsCode = () => {
  return (
    <div className='flex bg-gradient-to-r from-[#CCE1BB] via-[#E9EAFB] via-[#FAFAFA] to-[#89A2E9] h-[150px] w-[80%] px-[40px] justify-between items-center border rounded-xl'>
        <h1>Use AI features in VS Code for free</h1>
        <div className='flex flex-col items-start'>
            <p>No trial. No credit card required. Just your GitHub account.</p>
            <button className='border px-[3px] py-[1px]'>Try free</button>
        </div>
    </div>
  )
}

export default VsCode