import React from 'react'
import { addPost, deletePost } from '../lib/serverAction'

function PostForm() {
  return (
    <div>

      <form action={addPost} >
      <div className='mb-3'>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" placeholder='title' />
      </div>

      <div className='mb-3'>
        <label htmlFor="userId">userId</label>
        <input type="text" name="userId" id="userId" placeholder='userId' />
      </div>

      <div className='mb-3'>
        <label htmlFor="desc">description</label>
        <input type="text" name="desc" id="desc" placeholder='description' />
      </div>

      <div className='mb-3'>
        <label htmlFor="slug">Title</label>
        <input type="text" name="slug" id="slug" placeholder='slug' />
      </div>

    <div>
      <button>Create</button>
    </div>

      </form>


      <form action={deletePost}>
        <input type="text" name="id" id="id" placeholder='userId' />
        <button type="submit">Delete</button>
      </form>
    </div>
  )
}

export default PostForm
