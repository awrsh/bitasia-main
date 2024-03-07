import { options } from '@/helpers/utils/data'
import Image from 'next/image'
import React from 'react'

const Options = () => {
  return (
    <div className='mt-28'>
        <h1 className='text-white text-center after:-translate-x-1/2 text-3xl relative after:absolute after:w-[300px] after:left-1/2 after:-bottom-6 after:h-px after:bg-green-500'>ورود به دنیای ارز دیجیتال با بیت آسیا</h1>
        <div className='flex items-center justify-between mt-24'>
            {options.map((option,idx)=>(
                <div key={idx}>
                    <Image className='mx-auto' width={90} height={90} src={option.image} alt=''/>
                    <p className='mt-3  text-xs text-gray-300'>{option.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Options