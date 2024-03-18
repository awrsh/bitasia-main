import { fluctuationsInDigitalCurrency } from '@/helpers/utils/data'
import React from 'react'
import CardFluctuationsInDigitalCurrency from './CardFluctuationsInDigitalCurrency'
import { Currency } from '@/types/Home'
type Props = {
  currency: Currency[]
}
const FluctuationsInDigitalCurrency = ({ currency }: Props) => {
  return (
    <div className='pt-6 lg:pt-5'>
      <h1 className='text-2xl w-fit text-mode font-extrabold relative after:absolute after:w-[80%] after:-bottom-3 after:rounded-xl after:right-0 after:h-px after:bg-[#407bff]'>نوسانات ارز دیجیتال</h1>
      <p className='text-mode text-xs mt-8'>در 24 ساعت گذشته</p>
      <div className='flex flex-col lg:flex-row mt-5 lg:mt-3 items-center justify-between gap-6'>
        {
          currency.slice(1,7).map((currency, idx) => {
            if(Number(currency.price_info.price) === 0) return null
            return (
              <CardFluctuationsInDigitalCurrency key={idx} currency={currency} />
            )
          })
        }
      </div>
    </div>
  )
}

export default FluctuationsInDigitalCurrency