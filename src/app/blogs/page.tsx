
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import PostCard, { Post } from '../components/postCard'


const fetchPost = async()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/posts',{next:{revalidate:3600}})

    if(!data){
        throw new Error('something went wrong')
    }
    return await data.json()
}


async function BlogPage() {

    

    const posts:Post[] = await fetchPost();
    
    
   
  return (
  <>
 
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-16'>

    { 
    posts.map(post=>(
        <PostCard post={post} key={post.id} />
    ))
        
    }
     
     
   </div>
  </>
  )
}

export default BlogPage
