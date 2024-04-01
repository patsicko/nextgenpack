
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import PostCard, { Post } from '../components/postCard'
import { getPosts } from '../lib/data'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blogs",
    description: "These are tech blogs",
  };
  


const fetchPost = async()=>{
    const data = await fetch('http://localhost:3000/api/blogs',{cache:'no-store'})

    if(!data){
        throw new Error('something went wrong')
    }
    return await data.json()
}


async function BlogPage() {

    

    const posts = await fetchPost();

// const posts = await getPosts()
    
    
   
  return (
  <>
 
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-16'>

    { 
    posts.map((post: Post)=>(
        <PostCard key={post.title} post={post}  />
    ))
        
    }
     
     
   </div>
  </>
  )
}

export default BlogPage
