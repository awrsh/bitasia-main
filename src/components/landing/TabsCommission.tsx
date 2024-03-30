"use client"
import React, { useState } from 'react'
import TransactionFees from './TransactionFees'
import RialWithdrawalSchedule from './RialWithdrawalSchedule'
import CurrentPriceOfCurrency from './CurrentPriceOfCurrency'


const TabsCommission = () => {
    const [select, setSelect] = useState(0)
    return (
        <div className='my-[140px]'>
            <div className='flex items-center gap-10'>
                {
                    ["کارمزد معاملات", "کارمزد برداشت رمز ارز", "زمان بندی برداشت ریالی"].map((tab, idx) => (
                        <button onClick={() => setSelect(idx)} className={`dark:text-white border-b pb-3 ${select === idx ? "border-green-500" : "border-transparent"}`}>{tab}</button>
                    ))
                }
            </div>

            {select === 0 ? <TransactionFees /> : null}
            {select === 1 ? <CurrentPriceOfCurrency currency={[]} showTitle={false} /> : null}
            {select === 2 ? <RialWithdrawalSchedule /> : null}


            <ul className='space-y-5 mt-14'>
                <li className='relative pr-4  before:absolute before:right-0 before:top-[6px] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>
                    منظور از حجم دارایی مجموع ارزش تمامی رمزارزها و موجودی تومانی شما در بیت‌آسیا است. حجم دارایی در ساعت ۲۳:۵۹ هر شب محاسبه شده و برای محاسبات کارمزدی ۲۴ ساعت بعدی استفاده می‌شود.
                </li>
                <li className='relative  pr-4  before:absolute before:right-0 before:top-[6px] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>
                    کارمزد از هر طرف معامله، از میزان کل دارایی معامله‌شده کسر می‌شود.
                </li>
                <li className='relative  pr-4  before:absolute before:right-0 before:top-[6px] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>
                    کارمزدهای ذکر شده در جدول بالا برای بازارهای پایه تومانی و تتری یکسان است. منظور از بازارهای پایه تومانی، بازارهایی است که شما با تومان در آن‌‌ها خرید می‌کنید، مثل بازار بیت‌کوین/تومان یا تتر/تومان. همچنین بازارهای پایه تتر بازارهایی هستند که یک طرف معاملات در آن‌ها تتر است. مثل بازار بیت‌کوین/تتر.
                </li>
            </ul>

        </div>

    )
}

export default TabsCommission