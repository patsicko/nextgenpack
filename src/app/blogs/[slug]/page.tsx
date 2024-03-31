
import React, { Suspense } from 'react';
import Image from 'next/image';
import PostUser from '@/app/components/postUser';
import { getSinglePost } from '@/app/lib/data';
import { Post } from '@/app/components/postCard';

export const generateMetadata = async({params}:{params:any})=>{

  const {slug} = params;

  const post = await getSinglePost(slug);

  return {
    title:post.title,
    description:post.desc
  }

}

const getPost = async(slug:number) =>{

    const post = await fetch(`http://localhost:3000/api/blogs/${slug}`,{cache:'no-store'});

    if(!post.ok){
        throw new Error('something went wrong');
    }

    return await post.json();
}

async function SinglePost({params}:{params:any}) {

const {slug} = params;


const post :any = await getPost(slug);



  return (
    <div className='w-full justify-center items-center border '>
      <div className='flex  gap-20 m-8 '>
        {post.img && 

         <div className='w-1/4'>
          <Image src={post.img} alt='' priority  width={500} height={500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  />
        </div>}

              <div className='w-3/4'>

                  <h1 className='text-3xl font-bold'>{post.title}</h1>

                  <div>
                  <Suspense fallback={<div>Loading...</div>}>
                  <PostUser userId={post.userId} />
                  </Suspense>
                </div>

                <div>{post.createdAt.toString().slice(0,16)}</div>
                <div className='text-2xl font-medium text-gray-500'>This is Description</div>
           
               <div>{post.desc} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus hic debitis, enim commodi neque reiciendis eius aliquid inventore possimus, aliquam veritatis, 
               eum tenetur corrupti odit nemo amet impedit ratione cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus assumenda impedit eaque at alias omnis corporis! Sit deleniti aspernatur dolorem libero, eos id, optio tempore in velit, at beatae.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit voluptate minima natus sequi, tenetur voluptatum? Ex quidem est amet unde sed illum! Ipsa nostrum fuga sint modi tempora, non aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sunt. Non, culpa. Saepe doloremque, accusantium praesentium dolore repellendus corporis 
               quasi dignissimos autem exercitationem aperiam eius at maiores alias. Eligendi, eum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad qui excepturi eius, ut laborum dicta unde dolorum recusandae est dolor molestiae cupiditate perferendis
                nihil optio harum quis sunt. Dolorum, assumenda? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cumque sequi totam aliquam laboriosam, ipsam esse mollitia eaque voluptates obcaecati nesciunt assumenda alias 
                fuga dolorem exercitationem minus perspiciatis dolore modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a autem architecto suscipit eius rem ullam harum! Aut alias officia molestias sequi mollitia itaque, 
                praesentium harum quasi, dolor porro in. 
                </div>
                
              </div>  
      
      </div>
    </div>
  )
}

export default SinglePost
