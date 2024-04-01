"use client"
import Input from '@/app/components/Input';
import { auth } from '@/app/lib/auth'
import { handleGithubLogin } from '@/app/lib/serverAction';
import { Form, Formik } from 'formik';
import React, { FormEvent, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import * as yup from "yup"

 function Login() {

  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

 const  schema=yup.object().shape({
   email:yup.string().required(),
   password:yup.string().required()
  })

 const initialValues={
    email:'',
    password:'',
    
  }
  

  const handleSubmit = (values:{email:string, password:string})=>{
    
  console.log(values)
  }


  return (
    <div className='w-1/2 flex flex-col items-center justify-center'>
      <form action={handleGithubLogin}>
        <button className='p-3 bg-blue-300 text-orange-600 text-2xl font-bold rounded-md m-4'>Login with github</button>
      </form>

 <Formik 
 initialValues={initialValues}
 onSubmit={handleSubmit}
 validationSchema={schema}
 >
<Form className='w-1/3'>
  <Input type="email" name="email" placeholder='email'  className='w-full border-none outline-none  bg-white'  />
  <div className='relative'>
            <Input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              className='w-full border-none outline-none bg-white pr-10'
            />
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute top-1/2 transform -translate-y-1/2 right-2 focus:outline-none'
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
  <div>
    <button type="submit" className='bg-blue-600 p-2 rounded-md w-full text-white font-bold'>Login</button>
  </div>
</Form>

 
 </Formik>
   
    </div>
  )
}

export default Login
