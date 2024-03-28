"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'
import Navbar from '../Navbar'

function Links() {


    const session:Boolean=false;
    const isAdmin:Boolean=false;

const links = [
    {
        title:'home',
        path:'/'
    },
    {
        title:'about',
        path:'/about'
    },
    {
        title:'blogs',
        path:'/blogs'
    },
    {
        title:'contact',
        path:'/contact'
    },

    
    
]


  return (
    <>

    <div className='flex justify-center items-center w-full mt-4 bg-gray'>
    <div className='flex items-center justify-between space-x-20'>
       {links.map(link=>(
       <Navbar item={link} />
       ))}
       {
       session ? (
       <>
       {isAdmin && <Navbar item={{title:"admin",path:'/admin'}}/>}
        <button>Logout</button>
    
       </>
       ):
       
       (
       <>
       <Navbar item ={{title:"login",path:"/login"}}/>
       </>
       
       )
       }
    </div>
    </div>
    </>
  )
}

export default Links
