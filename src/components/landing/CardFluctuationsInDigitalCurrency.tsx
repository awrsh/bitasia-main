"use client"
import { Currency } from '@/types/Home';
import Image from 'next/image'
import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

type Props = {
    currency: Currency
}
const CardFluctuationsInDigitalCurrency = ({ currency }: Props) => {
    return (
        <div className='bg-white border dark:border-none dark:bg-[#192330] w-full rounded-xl flex justify-between items-center px-4  h-[180px]'>
            <div className='min-w-[130px]'>
                <Image width={40} height={40} alt='' src={currency.image} />
                <div className='mt-2'>
                    <p className='font-bold text-mode'>{currency.title}</p>
                    <span className='text-xs text-mode'>{currency.title_fa}</span>
                </div>
            </div>
            <div className='flex-1'>
                <p className={`text-left  [direction:ltr] ${currency.price_info.change > 0 ? "text-[#20c997]" : "text-[#dc3545]"}`}>% {currency.price_info.change.toFixed(2)}</p>
                <p className='text-mode mb-3 text-left'>{currency.price_info.price} تومان</p>
                <div className='max-w-[150px] min-w-[150px]'>
                {/* @ts-ignore */}
                    <Sparklines data={[...currency.price_info.price]}>
                        <SparklinesLine style={{ height: "20px" }} color={currency.price_info.change > 0 ? "#20c997" : "#dc3545"} />
                    </Sparklines>
                </div>
            </div>
        </div>
    )
}

export default CardFluctuationsInDigitalCurrency