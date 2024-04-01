import React from 'react'
import Links from './navlinks/Links'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { auth } from '@/app/lib/auth';

interface Item {
    title: string;
    path: string;
  }

async function Navbar({item}:{item:Item}) {

  

    const pathName=usePathname()

  return (
    <div className=' '>
   <Link href={item.path}>
    <div className={`hover:text-blue-500 px-4 py-1 rounded-md ${pathName==item.path? 'bg-emerald-700':''}`}>
    {item.title}
    </div>

   </Link>
  
      
    </div>
  )
}

export default Navbar
 