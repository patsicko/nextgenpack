import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface Post {
    id:number,
    userId:number,
    title:string,
    desc:string
    body:string,
    img:string,
    slug:string
}

function PostCard({post}:{post:Post}) {
    const timestamp = Date.now();
    const formattedDate = new Date(timestamp).toLocaleString();

  return (
    <div className='mb-8 w-4/5 p-4 mx-4'> 
      
        <div className='flex  items-center justify-center ' >
           {post.img &&  <div className='h-[300px] w-[500px] relative'  >
                <Image src={post.img} alt='' priority  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill/>
            </div>}
            <div className='transform rotate-[270deg]'>
                {formattedDate}
            </div>
        </div>

        <div className='w-4/5'>
            <div className='text-2xl font-bold'>{post.title}</div>
            <div>{post.body}</div>
            <Link href={`/blogs/${post.slug}`} className='text-blue-600'>Read more</Link>
        </div>
     
    </div>
  )
}

export default PostCard
