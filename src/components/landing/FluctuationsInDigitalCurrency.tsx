import { fluctuationsInDigitalCurrency } from '@/helpers/utils/data'
import React from 'react'
import CardFluctuationsInDigitalCurrency from './CardFluctuationsInDigitalCurrency'

const FluctuationsInDigitalCurrency = () => {
  return (
    <div className='pt-6 lg:pt-5'>
        <h1 className='text-2xl w-fit text-mode font-extrabold relative after:absolute after:w-[80%] after:-bottom-3 after:rounded-xl after:right-0 after:h-px after:bg-green-500'>نوسانات ارز دیجیتال</h1>
        <p className='text-mode text-xs mt-8'>در 24 ساعت گذشته</p>
        <div className='flex flex-col lg:flex-row mt-5 lg:mt-3 items-center justify-between gap-6'>
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