"use client"
import Image from 'next/image'
import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

type Props = {
    currency: {
        name: string,
        price: string,
        precent: number,
        enName: string,
        url: any

    }
}
const CardFluctuationsInDigitalCurrency = ({ currency }: Props) => {
    return (
        <div className='bg-white border dark:border-none dark:bg-[#192330] w-full rounded-xl flex justify-between items-center px-4  h-[180px]'>
            <div className='min-w-[130px]'>
                <Image alt='' src={currency.url} />
                <div className='mt-2'>
                    <p className='font-bold text-mode'>{currency.name}</p>
                    <span className='text-xs text-mode'>{currency.enName}</span>
                </div>
            </div>
            <div className='flex-1'>
                <p className={`text-left  [direction:ltr] ${currency.precent < 0?"text-[#20c997]":"text-[#dc3545]"}`}>% {currency.precent}</p>
                <p className='text-mode mb-3 text-left'>{currency.price} تومان</p>
                <Sparklines  height={90} data={[0,5, 20, 25, 20,15,10,5,0]}>
                    <SparklinesLine color={currency.precent < 0 ?"#20c997":"#dc3545"} />
                </Sparklines>
            </div>
        </div>
    )
}

export default CardFluctuationsInDigitalCurrency