"use client"
import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import {motion} from 'motion/react'

const Service = ({isDarkMode}) => {
  return (
    <div
     
     >

      <div id='services' className='w-full px-[12%] py-14 scroll-mt-20'>
      <motion.h4
       initial={{y:30, opacity:0}}
                 whileInView={{y:0,opacity:100}}
                 transition={{duration:1,delay:1.5, type:'smooth' }}
       className='text-lg mb-2 text-center font-Ovo '>What i offer</motion.h4>
      <motion.h2
       initial={{y:30, opacity:0}}
                 whileInView={{y:0,opacity:100}}
                 transition={{duration:1,delay:1.5, type:'smooth' }}
       className='text-center text-5xl font-Ovo'>My Services</motion.h2>
      <motion.p
       initial={{y:30, opacity:0}}
                 whileInView={{y:0,opacity:100}}
                 transition={{duration:1,delay:1.5, type:'smooth' }}
       className='text-center text-md mt-2 py-2 font-Ovo'>
        I am an aspiring Front End Developer from Pune seeking opportunities for 
        growing my career. 
      </motion.p>
      </div>

      <div className='flex w-full flex-col lg:flex-row items-center justify-center gap-20 px-20  '>
        <ul className='grid grid-cols-auto gap-6 w-full my-10'>
            {serviceData.map(({icon,title,description},index)=>(
                <motion.li
                 initial={{y:40, opacity:0}}
                 whileInView={{y:0,opacity:100 ,}}
                 transition={{duration:1,delay:1, type:'smooth' }}

                 key={index} className='border-[0.5px] border-gray-200
                          rounded-xl px-8 py-8 cursor-pointer hover:bg-lighthover 
                          hover:-translate-y-1 duration-500
                          hover:shadow-black
                          dark:border-white 
                          dark:hover:bg-darkhover/50'>
                    <Image src={icon} alt='ICON' className='w-8'/>
                    <motion.h2
                      initial={{y:30, opacity:0}}
                      whileInView={{y:0,opacity:100 }}
                      transition={{duration:.8,delay:1, type:'smooth' }}

                     className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</motion.h2>

                    <motion.p
                    initial={{y:30, opacity:0}}
                    whileInView={{y:0,opacity:100 ,}}
                    transition={{duration:.8,delay:1, type:'smooth' }}

                     className='my-4 text-gray-400 text-sm font-Outfit py-2 dark:text-white/70'>
                    {description}
                    </motion.p>
                    <motion.a
                     initial={{scale:0, opacity:0}}
                     whileInView={{scale:1,opacity:100,type:'spring' }}
                     transition={{duration:.5,delay:1 }}                    
                     className='flex hover:border-gray-400 duration-200 items-center gap-4 text-sm
                     text-gray-600 border-[0.5px] border-gray-200 rounded-full max-w-[150px] p-2  
                     dark:border-white/80 dark:text-white/80 '>
                     Read More
                     <Image src={isDarkMode?assets.right_arrow_white:assets.right_arrow} alt='ARROW' className='w-4 h-2'/></motion.a>
                </motion.li>

            ))}
        </ul>
      </div>


    </div>
  )
}

export default Service