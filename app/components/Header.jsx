"use client"
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from 'motion/react'

const Header = () => {
  return (
    <motion.div 
    initial={{scale:0 ,opacity:0}}
    whileInView={{scale:1 ,opacity:100, type:"smooth"}}
    transition={{duration:1}} 
     className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>
      <motion.div 
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:1, type:'smooth' ,stiffness:100}}
      >
          <Image src={assets.profile_img} alt='error' className='rounded-full h-32 object-cover object-top w-32'/>
         
      </motion.div>
      <motion.h3
        initial={{x:-100 ,opacity:0}}
        whileInView={{x:0,opacity:100 }}
        transition={{duration:0.7, delay:.5}}
       className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
          Hi! I am Vivek Kumbhar <Image src={assets.hand_icon} alt='error' className='w-6'/>
          </motion.h3>
        <motion.h1
         initial={{y:20 ,opacity:0}}
        whileInView={{y:0,opacity:100 }}
        transition={{duration:0.6, delay:1.2}}
         className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        I am a Front End Devloper
        </motion.h1>
        <motion.p
          initial={{y:20 ,opacity:0}}
        whileInView={{y:0,opacity:100 }}
        transition={{duration:0.6, delay:1.5}}
         className='max-w-2xl mx-auto font-Ovo'>
            I am an aspiring   Front end developer. I am a fresher with lots of knowledge about 
            Front end technologies. I am also a Graphic Designer.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        
                <motion.a href='#contact' 
                 initial={{scale:0}}
                 whileInView={{scale:1}}
                 transition={{duration:1,delay:2, type:'spring' ,stiffness:100}}
                className='px-10 py-3 border border-white bg-black text-white flex items-center gap-2 rounded-full
                dark:bg-transparent'>
                Contact Me <Image src={assets.right_arrow_white} alt=''
                    className='w-4'
                /></motion.a>
            
            <motion.a
             initial={{scale:0}}
                 whileInView={{scale:1}}
                 transition={{duration:1,delay:2.5, type:'spring' ,stiffness:100}}
            
             href="/vivek.pdf" download
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2
            dark:text-black bg-white'>
            My Resume<Image src={assets.download_icon} alt=''
                    className='w-4'
                /></motion.a>
        </div>
    </motion.div>
  )
}

export default Header