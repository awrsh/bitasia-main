"use client";
import React from 'react'
import Table from '../common/Table'
import { currentPriceOfCurrency } from '@/helpers/utils/data'
import { StyledTableCell, StyledTableRow } from '@/helpers/utils/mui'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Link from 'next/link';

const CurrentPriceOfCurrency = ({ showTitle = true }: { showTitle?: boolean }) => {
    return (
        <div className='mt-14'>
            {
                showTitle ?
                    <h1 className='text-2xl text-white font-extrabold pb-10'>قیمت لحظه ای ارز</h1>
                    : null
            }
            <Table header={["نام‌ارز", "قیمت(تتر)", "قیمت(تومان)", "قیمت(تغیرات)", "نمودار", ""]}>
                {currentPriceOfCurrency.map((currency, idx) => (
                    <StyledTableRow key={idx}>
                        <StyledTableCell align='center'>{currency.name}</StyledTableCell>
                        <StyledTableCell align='center'>{currency.price_tether}</StyledTableCell>
                        <StyledTableCell align='center'>{currency.price_toman}</StyledTableCell>
                        <StyledTableCell align='center'>{currency.percent}</StyledTableCell>
                        <StyledTableCell width={200} className='!min-w-[120px]' align='center'>
                            <Sparklines data={[0, 5, 20, 25, 20, 15, 10, 5, 0]}>
                                <SparklinesLine style={{ height: "20px" }} color={currency.percent < 0 ? "#20c997" : "#dc3545"} />
                            </Sparklines>
                        </StyledTableCell>
                        <StyledTableCell width={200} align='center'>
                            <Link className='font-bold p-2 px-7 whitespace-nowrap rounded-lg text-green-500 border border-green-500' href={"#"}>خرید / فروش</Link>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
            </Table>
        </div>
    )
}

export default CurrentPriceOfCurrency