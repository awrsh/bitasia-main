import React from 'react'
type Props = {
    title?: string;
    required?: boolean
}
const Textare = ({required,title}:Props) => {
    return (
        <div>
            <label className='font-medium text-[14px]'>
                {
                    required &&
                    <span className='text-red-500'>*</span>
                }
                {" "}
                {title} :
            </label>
            <div className='bg-gray-100/60 py-2 rounded-lg mt-1 overflow-hidden'>
                <textarea rows={6} className='bg-transparent resize-none px-2 w-full outline-none' />
            </div>
        </div>
    )
}

export default Textare