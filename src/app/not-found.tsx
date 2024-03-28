import Link from 'next/link'
import React from 'react'

function Notfound() {
  return (
    <div className='flex flex-col items-center justify-center w-full mt-[50px]'>
      <h1 className='text-[60px] font-bold'>Page not found</h1>
       <div>
       <Link href="/" className='text-blue-500 '>Return home</Link>
       </div>
     
    </div>
  )
}

export default Notfound
