import { options } from '@/helpers/utils/data'
import Image from 'next/image'
import React from 'react'

const Options = () => {
  return (
    <div className='mt-10 lg:mt-28'>
      <h1 className=' text-center after:-translate-x-1/2 font-extrabold  text-[#407bff] text-3xl relative after:absolute after:w-[300px] after:left-1/2 after:-bottom-6 after:h-px after:bg-[#407bff]'>ورود به دنیای ارز دیجیتال با بیت آسیا</h1>
      <div className='flex flex-col lg:flex-row items-center justify-around gap-5 mt-10 lg:mt-24'>
        {options.map((option, idx) => (
          <div key={idx}>
            <option.icon className='mx-auto text-[#407bff]' size={40} />
            <p className='mt-3  text-1xs text-mode'>{option.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Options