import { error } from 'console';
import React from 'react';
import { getUser } from '../lib/data';
import Image from 'next/image';

// const getPostUser = async(userId:number) =>{


//     const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:'no-store'});



//     if(!user.ok){
//         throw new Error('Unable to get this user')
//     }

//     return await user.json()
// }



async function PostUser({userId}:{userId:any}) {

    const postUser= await getUser(userId) ;

  


  return (
    <div className='flex items-center justify-start gap-4'>
      <div>
        <Image src={'/avatar.png'} width={50} className='rounded-full' height={50} alt=""/>
       </div>
         <div>
         {postUser.username}
        </div>     
     
    </div>
  )
}

export default PostUser
