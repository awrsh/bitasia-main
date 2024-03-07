import Accordion from '@/components/common/Accordion'
import { rules } from '@/helpers/utils/data'
import Image from 'next/image'
import React from 'react'
import RuleImg from "@/../public/images/rules.png"

const Page = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='bg-green-500 w-fit text-white mx-auto mt-10 px-14 py-3 rounded-lg'>حساب کاربری و اجراز هویت</h1>
            <div className='mt-10 flex flex-col gap-10'>
                {
                    rules.map((rule, idx) => (
                        <Accordion key={idx} title={rule.title} description={rule.description} />
                    ))
                }
            </div>
            <h1 className='bg-green-500 w-fit text-white mx-auto mt-10 px-14 py-3 rounded-lg'>خرید و فروش</h1>
            <div className='mt-10 flex flex-col gap-10'>
                {
                    rules.map((rule, idx) => (
                        <Accordion key={idx} title={rule.title} description={rule.description} />
                    ))
                }
            </div>
            <div className='w-[500px] h-[500px] mx-auto my-20 relative'>
                <Image src={RuleImg} alt='' fill />
            </div>
        </div>
    )
}

export default Page