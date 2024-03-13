import { options } from '@/helpers/utils/data'
import Image from 'next/image'
import React from 'react'

const Options = () => {
  return (
    <div className='mt-10 lg:mt-28'>
        <h1 className='text-mode text-center after:-translate-x-1/2 text-3xl relative after:absolute after:w-[300px] after:left-1/2 after:-bottom-6 after:h-px after:bg-green-500'>ورود به دنیای ارز دیجیتال با بیت آسیا</h1>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-5 mt-10 lg:mt-24'>
            {options.map((option,idx)=>(
                <div key={idx}>
                  <option.icon className='mx-auto text-[#4DEEA1]' size={40}/>
                    <p className='mt-3  text-xs text-mode'>{option.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Options