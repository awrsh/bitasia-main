import { trads } from '@/helpers/utils/data'
import Image from 'next/image'
import React from 'react'

const Trades = () => {
  return (
    <div className='dark:bg-[#0b1520] flex flex-col lg:flex-row items-center py-10 lg:py-24 justify-center gap-10 lg:gap-28'>
        {trads.map((trade,idx)=>(
            <div key={idx}>
                <trade.icon className='mx-auto text-[#407bff]' size={90}/>
                <p className=' text-mode text-center py-3 pt-6'>{trade.price}</p>
                <p className=' text-mode text-center'>{trade.name}</p>
            </div>
        ))}
    </div>
  )
}

export default Trades