import React from 'react'
import Navbar from '../components/navbar/Navbar'
import PostCard from '../components/postCard'

function BlogPage() {
  return (
  <>
 
   <div className='grid grid-cols-3'>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
   </div>
  </>
  )
}

export default BlogPage
