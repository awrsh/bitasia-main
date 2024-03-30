import { security } from '@/helpers/utils/data'
import Link from 'next/link';
import React from 'react'
import { IoBook } from "react-icons/io5";

const Page = () => {

    return (
        <div className='w-[70%] mx-auto flex flex-col gap-10 my-20'>
            {
                security.map((sec, idx) => (
                    <Link href={sec.link} className='dark:bg-[#222] p-6 rounded-lg flex gap-10 bg-[#eee]' key={idx}>
                            <div>
                                <div className='flex items-center gap-2' key={idx}>
                                    <IoBook size={23} className='text-green-500' />
                                    <h1 className='text-xl'>{sec.title}</h1>
                                </div>
                                <p className='text-[12px] mt-3 py-3 text-justify text-ellipsis overflow-hidden  w-full'>{sec.description}</p>
                            </div>
                            <div className='w-[200px]'>
                                
                            </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Page