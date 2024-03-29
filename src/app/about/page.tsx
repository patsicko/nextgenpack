import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'

function AboutPage() {
  return (
    <div className='grid grid-cols-3 gap-2'>  
    <div className='p-4'>
    <Image src={'/coder.png'} height={500} width={500} alt=""/>
    <div className=''>
        <h1 className='font-bold'>Coding made simple with next</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis deleniti perferendis,<br />
             quis, debitis quisquam odio labore nisi officiis voluptas <br />
             facilis accusantium! Laboriosam hic aliquid molestiae illum modi provident error!</p>
    </div>
    </div>
    <div className='p-4'>
    <Image src={'/coder.png'} height={500} width={500} alt="" />
    <div className=''>
        <h1 className='font-bold'>Coding made simple with next</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis deleniti perferendis,<br />
             quis, debitis quisquam odio labore nisi officiis voluptas <br />
             facilis accusantium! Laboriosam hic aliquid molestiae illum modi provident error!</p>
    </div>
    </div>
    <div className='p-4'>
    <Image src={'/coder.png'} height={500} width={500} alt=""/>
    <div className=''>
        <h1 className='font-bold'>Coding made simple with next</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis deleniti perferendis,<br />
             quis, debitis quisquam odio labore nisi officiis voluptas <br />
             facilis accusantium! Laboriosam hic aliquid molestiae illum modi provident error!</p>
    </div>
    </div>
    
    </div>
  )
}

export default AboutPage
