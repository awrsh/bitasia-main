import { property } from '@/helpers/utils/data'
import Image from 'next/image'
import React from 'react'

const Property = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between mt-20 items-center gap-10'>
      <div>
        <p className='font-extrabold text-[#407bff] text-2xl'>برترین ویژگی های بیت آسیا</p>
        <p className='font-medium text-gray-500 leading-8 pt-4 text-[14px]'> 
        پلتفرم بیت‌آسیا تمامی امکاناتی که شما برای تشکیل سبد سرمایه گذاری ارز دیجیتال خود نیاز دارید ، در اختیار شما میگذارد.
        </p>
      </div>
      <div className='bg-propert bg-center grid lg:grid-cols-2 gap-7  bg-no-repeat'>
        {
          property.map((property, idx) => (
            <div className={`bg-white border dark:bg-[#192330] overflow-hidden rounded-xl p-4`} key={idx}
            >
              <property.icon className='mx-auto text-[#407bff]' size={76} />
              <p className='text-center pt-3 font-bold text-2xl text-gray-800 dark:text-white'>{property.name}</p>
              <p className='font-bold text-center pt-3 text-[11px] leading-6 text-gray-800 dark:text-white'>{property.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Property