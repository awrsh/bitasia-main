"use client";
import React from 'react'
import Table from '../common/Table'
import { currentPriceOfCurrency } from '@/helpers/utils/data'
import { StyledTableCell, StyledTableRow } from '@/helpers/utils/mui'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Link from 'next/link';
import { Currency } from '@/types/Home';
import Image from 'next/image';
type Props = {
    currency: Currency[]
}
const CurrentPriceOfCurrency = ({ currency }: Props) => {
    return (
        <div className='mt-14'>
            <h1 className='text-2xl w-fit text-mode font-extrabold relative after:absolute after:w-[80%] after:-bottom-3 after:rounded-xl after:right-0 after:h-px after:bg-[#407bff] mb-8'>قیمت لحظه ای ارز</h1>
            <Table header={["نام‌ارز", "قیمت", "تغیرت 24 ساعت", "نمودار", ""]}>
                {currency?.slice(1,50).map((currency, idx) => {
                    if(Number(currency.price_info.price) === 0) return null
                    return (
                        (
                            <StyledTableRow key={idx}>
                                <StyledTableCell width={200} align='center'>
                                    <div className='flex items-center gap-3'>
                                        <Image width={30} height={30} src={currency.image} alt='' />
                                        <p className='flex flex-col gap-2'>
                                            <span className='font-bold'>{currency.title_fa}</span>
                                            <span className='text-xs text-start'>{currency.title}</span>
                                        </p>

                                    </div>


                                </StyledTableCell>
                                <StyledTableCell align='center'>{Number(currency.price_info.price).toLocaleString()}</StyledTableCell>
                                <StyledTableCell dir='ltr' className={`${currency.price_info.change > 0 ? "!text-[#20c997]" : "!text-[#dc3545]"}`} align='center'>{Number(currency.price_info.change).toFixed(2)}</StyledTableCell>
                                <StyledTableCell width={200} className='!min-w-[120px]' align='center'>
                                    {/* @ts-ignore */}
                                    <Sparklines data={[...currency.price_info.price!]}>
                                        <SparklinesLine style={{ height: "20px" }} color={currency.price_info.change > 0 ? "#20c997" : "#dc3545"} />
                                    </Sparklines>
                                </StyledTableCell>
                                <StyledTableCell width={200} align='center'>
                                    <Link className='font-bold p-2 px-7 whitespace-nowrap rounded-lg text-green-500 border border-green-500' href={"https://dashboard.bitasia.ir/exchange"} target='_blank'>خرید / فروش</Link>
                                </StyledTableCell>
                            </StyledTableRow>
                        )
                    )
                })}
            </Table>
        </div>
    )
}

export default CurrentPriceOfCurrency