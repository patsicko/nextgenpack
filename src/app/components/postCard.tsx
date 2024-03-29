import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function PostCard() {
    const timestamp = Date.now();
    const formattedDate = new Date(timestamp).toLocaleString();

  return (
    <div className='mb-8'> 
      
        <div className='flex items-center justify-center'>
            <div className='h-[300px] w-[300px] relative'  >
                <Image src={'https://media.istockphoto.com/id/519328889/photo/kigali-parliament-building-and-convention-centre.jpg?s=2048x2048&w=is&k=20&c=Z6sZEVNeX-qDu-gzurIcKTU1oJHIGnR58aVSZpEGMn4='} alt='' layout='fill'  objectFit='cover'/>
            </div>
            <div className='transform rotate-[270deg]'>
                {formattedDate}
            </div>
        </div>

        <div>
            <div className='text-2xl font-bold'>Title</div>
            <div>Description</div>
            <Link href={''} className='text-blue-600'>Read more</Link>
        </div>
     
    </div>
  )
}

export default PostCard
