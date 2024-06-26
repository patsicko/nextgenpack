import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'
import { connectDB } from '../lib/utils'

function HomePage() {

 
  return (

    <div className=' w-[100vw] flex items-center justify-center '>
       
  <div className='border w-full'>
  <div className=' flex  p-4 '>
          <div className=' text-3xl md:text-5xl font-bold  flex justify-center items-center text-gray-500 p-4'>
              Innovate, Elevate, <br /> <br /> Discover endless opportunity
          </div> 
          <div className='h-[500] w-auto'>
        <Image className='rounded-lg ' src={'https://i.pinimg.com/originals/b3/59/eb/b359eb60775b16e7edd8c5fa1ecf2ba7.gif'} width={500} height={500} alt=""/>
        </div>
        </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>  
          <div className='p-4 relative'>
          <Image src={'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600'} height={500} width={500} alt=""/>
          <div className=''>
              <h1 className='font-bold'>Coding made simple with next</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis deleniti perferendis,<br />
                  quis, debitis quisquam odio labore nisi officiis voluptas <br />
                  facilis accusantium! Laboriosam hic aliquid molestiae illum modi provident error!</p>
          </div>
          </div>
          <div className='p-4 relative'>
          <Image src={'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} height={500} width={500} alt="" />
          <div className=''>
              <h1 className='font-bold'>Coding made simple with next</h1>
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis deleniti perferendis,<br />
                  quis, debitis quisquam odio labore nisi officiis voluptas <br />
                  facilis accusantium! Laboriosam hic aliquid molestiae illum modi provident error!</p>
          </div>
          </div>
          <div className='p-4 relative'>
          <Image src={'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=600'} height={500} width={500} alt=""/>
          <div className=''>
              <h1 className='font-bold'>Coding made simple with next</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis deleniti perferendis,<br />
                  quis, debitis quisquam odio labore nisi officiis voluptas <br />
                  facilis accusantium! Laboriosam hic aliquid molestiae illum modi provident error!</p>
          </div>
          </div>

          <div className='p-4 relative'>
          <Image src={'https://images.pexels.com/photos/70069/pexels-photo-70069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} height={500} width={500} alt=""/>
          <div className=''>
              <h1 className='font-bold'>Coding made simple with next</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis deleniti perferendis,<br />
                  quis, debitis quisquam odio labore nisi officiis voluptas <br />
                  facilis accusantium! Laboriosam hic aliquid molestiae illum modi provident error!</p>
          </div>
          </div>


          <div className='p-4 relative'>
          <Image src={'https://media.istockphoto.com/id/1140180462/photo/roof-boat-anchored-at-the-coast-with-rwandan-village-in-the-background-kivu-lake-rwanda.jpg?b=1&s=612x612&w=0&k=20&c=0XtSQC2khpLaS6KHYeqhMxxiGkXKRhaK8PnWPCGCW8Y='} height={500} width={500} priority alt=""/>
          <div className=''>
              <h1 className='font-bold'>Coding made simple with next</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis deleniti perferendis,<br />
                  quis, debitis quisquam odio labore nisi officiis voluptas <br />
                  facilis accusantium! Laboriosam hic aliquid molestiae illum modi provident error!</p>
          </div>
          </div>

          <div className='p-4 relative'>
          <Image src={'https://i.pinimg.com/originals/f7/0b/18/f70b1806d7128b4843d81a5a62bb3b07.gif'} height={500} width={500} priority alt=""/>
          <div className=''>
              <h1 className='font-bold'>Coding made simple with next</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis deleniti perferendis,<br />
                  quis, debitis quisquam odio labore nisi officiis voluptas <br />
                  facilis accusantium! Laboriosam hic aliquid molestiae illum modi provident error!</p>
          </div>
          </div>
          </div>
  </div>

    </div>
  )
}

export default HomePage

