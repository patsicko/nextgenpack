"use client"
import React,{FormEvent, useRef} from 'react'
import { createUser } from '../lib/serverAction'

function SignupComponent() {

    const formRef = useRef<HTMLFormElement>(null);

const handleSubmit=async (event:FormEvent<HTMLFormElement>)=>{

    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    await createUser(formData);

    formRef.current?.reset()


}


  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef} className='w-full flex  items-center justify-center pt-10 rounded-xl '>
      
      <div className='w-1/2 bg-white p-10 rounded-xl'>
       
       <div className='mb-4 text-3xl font-bold'> CREATE ACCOUNT </div>
       <div className='mb-3 w-full text-2xl'>
            <label htmlFor="username">Image</label>
           <input type="text" name="img" id="username" placeholder='username' className='w-full border-2 border-gray-600 b p-3 rounded-md outline-none ' />
        </div>
      <div className='mb-3 w-full text-2xl'>
            <label htmlFor="username">username</label>
           <input type="text" name="username" id="username" placeholder='username' className='w-full border-2 border-gray-600 b p-3 rounded-md outline-none ' />
        </div>

        <div className='mb-3 w-full text-2xl'>
            <label htmlFor="email">email</label>
           <input type="email" name="email" id="email" placeholder='email'className='w-full border border-gray-600  p-3 rounded-md outline-none ' />
        </div>

        <div className='mb-3 w-full text-2xl'>
            <label htmlFor="password">password</label>
           <input type="password" name="password" id="password" placeholder='password'className='w-full border border-black p-3 rounded-md outline-none ' />
        </div>
      <div className='w-full text-2xl'>
      <button className='w-full bg-blue-600 text-white p-3 rounded-md'>Register</button>
      </div>
      </div>
        
      </form>
    </div>
  )
}

export default SignupComponent
