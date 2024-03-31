
import { auth, signIn } from '@/app/lib/auth'
import React from 'react'

async function Login() {
  
  const session = await auth();

  console.log(session)

  const handleGithubLogin = async()=>{
 "use server"
 await signIn("github")

  }



  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with github</button>
      </form>
    </div>
  )
}

export default Login
