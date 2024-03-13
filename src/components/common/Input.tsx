import React from 'react'
type Props = {
    title?: string;
    required?: boolean
}
const Input = ({ title, required }: Props) => {
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
                <input  className='bg-transparent px-2 w-full outline-none'/>
            </div>
        </div>
    )
}

export default Input