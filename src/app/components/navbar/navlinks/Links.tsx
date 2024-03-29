"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React, { useState } from 'react'
import Navbar from '../Navbar'

function Links() {

    const session:Boolean=true;
    const isAdmin:Boolean=true;

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

const [isOpen, setIsOpen]=useState(false)

  return (
    <>
    <div>

    <div className='hidden lg:flex justify-center items-center w-full mt-4 bg-gray'>
    <div className='flex items-center justify-between space-x-20'>
       {links.map(link=>(
       <Navbar item={link}  key={link.title}/>
       ))}
       {
       session ? (
       <>
       {isAdmin && <Navbar item={{title:"admin",path:'/admin'}}/>}
        <button className='p-[10px cursor-pointer'>Logout</button>
    
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
    <button className='flex lg:hidden' onClick={()=>setIsOpen(prev=>!prev)}>Menu</button>
    {
        isOpen && <div className='w-[100px]'>{links.map(link=>(
            <Navbar item={link} key={link.title}/>
        ))}</div>
    }
      {
      isOpen && (session ? (
       <>
       {isAdmin && <div className='w-[100px]'><Navbar item={{title:"admin",path:'/admin'}}/></div>}
        <button className='ml-[10px]'>Logout</button>
    
       </>
       ):
       
       (
       <>
       <Navbar item ={{title:"login",path:"/login"}}/>
       </>
       
       ))
       }
    </div>
    </>
  )
}

export default Links
