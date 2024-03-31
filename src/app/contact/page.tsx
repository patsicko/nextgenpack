import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'
import styles from './contact.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
 title:'contact',
  description: "These are tech blogs"
};


function ContactPage() {
  return (
   <>
 
    <div className={styles.backgroundContainer}>
   
      <div>
      ContactPage is working
        </div> 

    </div>
   </>
  )
}

export default ContactPage
