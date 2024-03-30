import Accordion from '@/components/common/Accordion'
import { rules } from '@/helpers/utils/data'
import Image from 'next/image'
import React from 'react'
import RuleImg from "@/../public/images/FAQs-rafiki.svg"

const Page = () => {
    return (
        <>
            <div className='w-[95%] lg:w-[90%] mx-auto flex gap-12'>
                <div className='mt-10 flex flex-col gap-5 lg:gap-10'>
                    <h1 className='bg-[#407bff] w-fit text-white mx-auto mt-10 px-14 py-3 rounded-lg'>حساب کاربری و احراز هویت</h1>

                    {
                        rules.map((rule, idx) => (
                            <Accordion key={idx} title={rule.title} description={rule.description} />
                        ))
                    }
                </div>
                <div className='mt-10 flex flex-col gap-5 lg:gap-10'>
                    <h1 className='bg-[#407bff] w-fit text-white mx-auto mt-10 px-14 py-3 rounded-lg'>خرید و فروش</h1>
                    {
                        rules.map((rule, idx) => (
                            <Accordion key={idx} title={rule.title} description={rule.description} />
                        ))
                    }
                </div>
            </div>
            <div className='w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] mx-auto my-10 lg:my-20 relative'>
                <Image src={RuleImg} alt='' fill />
            </div>
        </>
    )
}

export default Page