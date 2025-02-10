"use client"
import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import {motion} from 'motion/react'


const Footer = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity:0}}
                 whileInView={{opacity:100 , }}
                 transition={{duration:.8,delay:1, type:'smooth' }}
     className='mt-20 '>
        <div className='text-center'>
          <Image src={isDarkMode?assets.logo_dark:assets.logo} alt='logo' className='w-36 mx-auto
          mb-2'/>

          <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            vivekkumbharvpk2004@gmail.com
          </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t 
        border-gray-400 mx-[10%] mt-12 py-6'>
            <p>@2025 Vivek Kumbhar. All rights reserved </p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 '>
                <li><a href='https://github.com/vivekkumbharVK' target='_blank'>Github</a></li>
                <li><a href='https://www.linkedin.com/in/vivek-kumbhar-5693552a1/' target='_blank'>LinkedIn</a></li>
                
            </ul>
        </div>


    </motion.div>
  )
}

export default Footer