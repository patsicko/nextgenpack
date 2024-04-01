import { auth } from '@/app/lib/auth';
import React from 'react'
import Links from './navlinks/Links';

async function Nav() {

    const session =  await auth();
    console.log("sesssiooooon",session)
  return (
    <div>
       <Links session={session}/>
    </div>
  )
}

export default Nav
