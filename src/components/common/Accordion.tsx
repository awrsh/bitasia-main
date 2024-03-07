"use client";
import * as React from 'react';
import AccordionMui from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoIosArrowUp } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

type Props = {
    title: string,
    description: string,
}
export default function Accordion({ title, description }: Props) {
    return (
        <div>
            <AccordionMui className='!shadow' style={{ borderRadius: "16px", boxShadow: "none", border: "1px solid #eee" }}>
                <AccordionSummary
                    expandIcon={<IoIosArrowUp />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className='flex items-center gap-4'>
                        <span className='bg-green-500 w-10 flex justify-center items-center h-10  rounded-full'>
                            <LuPlus size={20} className='text-white' />
                        </span>
                        <span className='font-bold'>{title}</span>
                    </div>
                </AccordionSummary>
                <AccordionDetails className='text-justify text-gray-700 text-[14px]'>
                    {description}
                </AccordionDetails>
            </AccordionMui>

        </div>
    );
}
