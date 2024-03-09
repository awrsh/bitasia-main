import { trads } from '@/helpers/utils/data'
import Image from 'next/image'
import React from 'react'

const Trades = () => {
  return (
    <div className='bg-[#0b1520] flex flex-col lg:flex-row items-center py-10 lg:py-24 justify-center gap-10 lg:gap-28'>
        {trads.map((trade,idx)=>(
            <div key={idx}>
                <Image className='mx-auto' src={trade.img} alt=''/>
                <p className='text-white text-center py-3'>{trade.price}</p>
                <p className='text-white text-center'>{trade.name}</p>
            </div>
        ))}
    </div>
  )
}

export default Trades