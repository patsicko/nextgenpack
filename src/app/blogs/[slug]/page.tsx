
import React from 'react';
import Image from 'next/image';

const getPost = async(slug:any) =>{
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

    if(!post.ok){
        throw new Error('something went wrong');
    }

    return await post.json();
}




async function SinglePost({params}:{params:any}) {

const {slug} = params;

const post = await getPost(slug)
    
  return (
    <div>
      <div className='flex items-center justify-center gap-20 m-8'>
        <div>
            
            <Image src={'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' priority  width={500} height={500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  />
        </div>
        <div>
            <h1 className='text-3xl font-bold'>{post.title}</h1>
            <div>{new Date(Date.now()).toLocaleString()}</div>
            <div className='text-2xl font-medium text-gray-500'>This is Description</div>
            <div>{post.body}</div>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
