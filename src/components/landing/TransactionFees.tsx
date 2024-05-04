import React from 'react'
import Table from '../common/Table'
import { StyledTableCell, StyledTableRow } from '@/helpers/utils/mui'

const TransactionFees = () => {
    const data = [
        {
            level: "سطح‌پایه1",
            amountAssets: "کمتر از 1 میلیارد تومان",
            condition: "و",
            turnover: "کمتر از 100 میلیون تومان",
            orderCost: "0.30",
            customizableFee: "0.35"
        },
        {
            level: "سطح‌پایه2",
            amountAssets: "کمتر از 1 میلیارد تومان",
            condition: "و",
            turnover: "بین  100  تا 300 میلیون تومان",
            orderCost: "0.28",
            customizableFee: "0.32"
        },
        {
            level: "سطح‌پایه3",
            amountAssets: "کمتر از 1 میلیارد تومان",
            condition: "و",
            turnover: "بین  300  تا 1 میلیارد تومان",
            orderCost: "0.25",
            customizableFee: "0.30"
        },
        {
            level: "سطح‌پایه4",
            amountAssets: "کمتر از 1 میلیارد تومان",
            condition: "و",
            turnover: "بین  1  تا 5 میلیارد تومان",
            orderCost: "0.22",
            customizableFee: "0.28"
        },
        {
            level: "سطح ویژه1",
            amountAssets: "کمتر از 1 میلیارد تومان",
            condition: "و",
            turnover: "بین  100  تا 300 میلیون تومان",
            orderCost: "0.28",
            customizableFee: "0.32"
        },
        {
            level: "سطح ویژه1",
            amountAssets: "بین 1 تا 2 میلیارد تومان",
            condition: "یا",
            turnover: "بین  5  تا 20 میلیارد  تومان",
            orderCost: "0.08",
            customizableFee: "0.135"
        },
        {
            level: "سطح ویژه2",
            amountAssets: "بین 2 تا 5 میلیارد تومان",
            condition: "یا",
            turnover: "بین  20  تا 50 میلیارد  تومان",
            orderCost: "0.08",
            customizableFee: "0.135"
        },
        {
            level: "سطح ویژه3",
            amountAssets: "بین 5 تا 10 میلیارد تومان",
            condition: "یا",
            turnover: "بین  10  تا 100 میلیارد  تومان",
            orderCost: "0.06",
            customizableFee: "0.11"
        },
        {
            level: "سطح ویژه4",
            amountAssets: "بین 10 تا 30 میلیارد تومان",
            condition: "یا",
            turnover: "بین  100  تا 500 میلیارد  تومان",
            orderCost: "0.03",
            customizableFee: "0.08"
        },
        {
            level: "سطح ویژه5",
            amountAssets: "بین 30 تا 100 میلیارد تومان",
            condition: "یا",
            turnover: "بین  500  تا 1000 میلیارد  تومان",
            orderCost: "0",
            customizableFee: "0.05"
        },
        {
            level: "سطح ویژه6",
            amountAssets: "بین 100 تا 2 میلیارد تومان",
            condition: "یا",
            turnover: "بالاتر از 1000 میلیارد تومان",
            orderCost: "0",
            customizableFee: "0.03"
        },

    ]
    return (
        <div className='mt-10'>
            <Table header={["سطح معملاتی", "حجم دارایی", "شرط", "حجم معاملات", "کارمز سفارش‌گذار", "کارمزد سفارش‌پذبر"]}>
                {
                    data.map((item, idx) => (
                        <StyledTableRow key={idx}>
                            <StyledTableCell className='text-center'>{item.level}</StyledTableCell>
                            <StyledTableCell className='text-center'>{item.amountAssets}</StyledTableCell>
                            <StyledTableCell className='text-center'>{item.condition}</StyledTableCell>
                            <StyledTableCell className='text-center'>{item.turnover}</StyledTableCell>
                            <StyledTableCell className='text-center'> % {item.orderCost}</StyledTableCell>
                            <StyledTableCell className='text-center'> % {item.customizableFee} </StyledTableCell>
                        </StyledTableRow>
                    ))
                }
            </Table>
        </div>
    )
}

export default TransactionFees