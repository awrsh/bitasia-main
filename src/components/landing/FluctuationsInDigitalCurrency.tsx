import { fluctuationsInDigitalCurrency } from '@/helpers/utils/data'
import React from 'react'
import CardFluctuationsInDigitalCurrency from './CardFluctuationsInDigitalCurrency'

const FluctuationsInDigitalCurrency = () => {
  return (
    <div className='pt-6 lg:pt-0'>
        <h1 className='text-2xl w-fit text-white font-extrabold relative after:absolute after:w-[80%] after:-bottom-5 after:rounded-xl after:right-0 after:h-px after:bg-green-500'>نوسانات ارز دیجیتال</h1>
        <p className='text-gray-500 text-xs mt-10'>در 24 ساعت گذشته</p>
        <div className='flex flex-col lg:flex-row mt-5 lg:mt-0 items-center justify-between gap-6'>
            {
                fluctuationsInDigitalCurrency.map((currency,idx)=>(
                    <CardFluctuationsInDigitalCurrency key={idx} currency={currency}/>
                ))
            }
        </div>
    </div>
  )
}

export default FluctuationsInDigitalCurrency