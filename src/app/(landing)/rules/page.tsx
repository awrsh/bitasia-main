import Accordion from '@/components/common/Accordion'
import { rules } from '@/helpers/utils/data'
import React from 'react'
import RuleImg from "@/../public/images/rules.png"
import Image from 'next/image'

const Page = () => {
    return (
        <div className='w-[95%] lg:w-[80%] mx-auto'>
            <h1 className='bg-green-500 w-fit text-white mx-auto mt-10 px-14 py-3 rounded-lg'>قوانین و مقررات</h1>
            <div className='mt-10 flex flex-col gap-5 lg:gap-10'>
                {
                    rules.map((rule, idx) => (
                        <Accordion key={idx} title={rule.title} description={rule.description} />
                    ))
                }
            </div>
            <div className='w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] mx-auto my-10 lg:my-20 relative'>
                <Image src={RuleImg} alt='' fill />
            </div>
        </div>
    )
}

export default Page