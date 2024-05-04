import { kyc } from '@/helpers/utils/data'
import React from 'react'
const Page = () => {
    return (
        <div className='flex overflow-auto  pb-24 items-center justify-between gap-20 lg:gap-[25px] px-5 lg:px-10 mt-10 mb-10 lg:mb-0'>
            {
                kyc.map((item, idx) => (
                    <div className='dark:bg-dark_deep w-full p-3 rounded-xl bg-[#eee]' key={idx}>
                        <h1 className='text-center  font-extrabold text-2xl'>{item.status}</h1>
                        <ul className='py-8 space-y-2'>
                            {item.options.map((option, idx) => (
                                <li className=' text-[14px]' key={idx}>{option}</li>
                            ))}
                        </ul>
                        <div className='bg-white dark:bg-dark_deep w-[95%] p-4 rounded-xl mx-auto z-30 relative -mt-4'>
                            <div>
                                <h6 className='w-fit bg-gray-200  dark:bg-black mt-4 p-2 px-5 rounded-lg text-xs'>{item.transaction.title}</h6>
                                <ul className='flex  gap-3 flex-col mt-5 '>
                                    {item.transaction.options.map((option, idx) => (
                                        <li key={idx} className='flex items-center gap-2'>
                                            <span className='font-medium text-xs'>{option}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-7'>
                                <h6 className='w-fit bg-gray-200 dark:bg-black mt-4 p-2 px-5 rounded-lg text-xs'>{item.wage.title}</h6>
                                <ul className='flex  gap-3 flex-col mt-5 '>
                                    {item.wage.options.map((option, idx) => (
                                        <li key={idx} className='flex items-center gap-2'>
                                            <span className='font-medium text-xs'>{option}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-7'>
                                <h6 className='w-fit bg-gray-200 dark:bg-black mt-4 p-2 px-5 rounded-lg text-xs'>{item.financialOperations.title}</h6>
                                <ul className='flex  gap-3 flex-col mt-5 '>
                                    {item.financialOperations.options.map((option, idx) => (
                                        <li key={idx} className='flex items-center gap-2'>
                                            <span className='font-medium text-xs'>{option}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-7'>
                                <h6 className='w-fit bg-gray-200 dark:bg-black mt-4 p-2 px-5 rounded-lg text-xs'>{item.account.title}</h6>
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