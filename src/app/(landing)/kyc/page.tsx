import { kyc } from '@/helpers/utils/data'
import React from 'react'
import ArrowBig from "@/../public/images/arrow-big.png"
import ArrowSmall from "@/../public/images/small-arrow.png"
import Image from 'next/image'
const Page = () => {
    return (
        <div className='flex overflow-auto items-center justify-between gap-3 lg:gap-[5px] px-5 lg:px-10 mt-10 mb-10 lg:mb-0'>
            {
                kyc.map((item, idx) => (
                    <div className='bg-[#0099b0] min-w-[23%] p-3 w-full rounded-xl' key={idx}>
                        <h1 className='text-center text-white font-extrabold text-2xl'>{item.status}</h1>
                        <ul className='py-8 space-y-2'>
                            {item.options.map((option, idx) => (
                                <li className='text-white text-[14px]' key={idx}>{option}</li>
                            ))}
                        </ul>
                        <div className='bg-white w-[95%] p-4 rounded-xl mx-auto z-30 relative -mt-4'>
                            <div>
                                <h6 className='w-fit bg-gray-200 mt-4 p-2 px-5 rounded-lg text-xs'>{item.transaction.title}</h6>
                                <ul className='flex  gap-3 flex-col mt-5 '>
                                    {item.transaction.options.map((option, idx) => (
                                        <li key={idx} className='flex items-center gap-2'>
                                            <span className='font-medium text-xs'>{option}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-7'>
                                <h6 className='w-fit bg-gray-200 mt-4 p-2 px-5 rounded-lg text-xs'>{item.wage.title}</h6>
                                <ul className='flex  gap-3 flex-col mt-5 '>
                                    {item.wage.options.map((option, idx) => (
                                        <li key={idx} className='flex items-center gap-2'>
                                            <span className='font-medium text-xs'>{option}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-7'>
                                <h6 className='w-fit bg-gray-200 mt-4 p-2 px-5 rounded-lg text-xs'>{item.financialOperations.title}</h6>
                                <ul className='flex  gap-3 flex-col mt-5 '>
                                    {item.financialOperations.options.map((option, idx) => (
                                        <li key={idx} className='flex items-center gap-2'>
                                            <span className='font-medium text-xs'>{option}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-7'>
                                <h6 className='w-fit bg-gray-200 mt-4 p-2 px-5 rounded-lg text-xs'>{item.account.title}</h6>
                                <ul className='flex  gap-3 flex-col mt-5 '>
                                    {item.account.options.map((option, idx) => (
                                        <li key={idx} className='flex items-center gap-2'>
                                            <span className='font-medium text-xs'>{option}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Page