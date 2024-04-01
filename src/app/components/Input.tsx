import { Field, useField } from 'formik';
import React from 'react'

interface InputProps {
    type: string;
    name: string;
    placeholder?: string;
    className?: string;
    icon?:any
  }

const Input:React.FC<InputProps> = ({icon, ...props}) =>{

    const [field,meta]=useField(props);

    return ( 
    <>
       <div className='border w-full mb-3'>

       <div className='flex item-center justify-between bg-white w-full p-3 rounded-md'>
       <input
        {...field} {...props}
        />
        <span>{icon}</span>
       </div>
        
        {meta.touched && meta.error? <div className='text-red-600'>{meta.error}</div>:''}
       </div>
        </>
      );
}

export default Input
