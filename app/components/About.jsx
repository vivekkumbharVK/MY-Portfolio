"use client"
import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import {motion} from 'motion/react'

const About = ({isDarkMode}) => {
  return (
    <motion.div
     initial={{x:-100 , opacity:0}}
                 whileInView={{x:0,opacity:100}}
                 transition={{duration:1, type:'smooth' }}
                 
    > 
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'> 
         <motion.h4
          initial={{y:30, opacity:0}}
                 whileInView={{y:0,opacity:100}}
                 transition={{duration:1,delay:.5, type:'smooth' }}
          className='text-lg mb-2 text-center font-Ovo '>Introduction</motion.h4>
         <motion.h2 
          initial={{y:30, opacity:0}}
                 whileInView={{y:0,opacity:100}}
                 transition={{duration:1,delay:1, type:'smooth' }}
         className='text-center text-5xl font-Ovo'>About Me</motion.h2>
        </div>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 px-20 my-20'>
            <motion.div
             initial={{x:-100, opacity:0}}
                 whileInView={{x:0,opacity:100}}
                 transition={{duration:1,delay:.5, type:'smooth' }}
             className='w-64 sm:w-80 rounded-3xl max-w-none '>
               <Image src={assets.user_image} alt='error' className='w-full rounded-3xl'/>
            </motion.div>

            <div className='flex-1'>
                <motion.p
                 initial={{y:30, opacity:0}}
                 whileInView={{y:0,opacity:100}}
                 transition={{duration:1,delay:.5, type:'smooth' }}
                 className='mb-10 max-w-2xl font-Ovo'>I am an aspiring front end developer who is seeking opportunities. I am a person who has the potential 
                to lead people. I am a tech enthusiast</motion.p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                  {infoList.map(({icon,iconDark,title,description},index)=>(
                         <motion.li
                          initial={{y:30, opacity:0}}
                          whileInView={{y:0,opacity:100}}
                          transition={{duration:1,delay:.5, type:'smooth' }}

                           key={index} className='border-[0.5px] border-gray-400
                          rounded-xl p-6 cursor-pointer hover:bg-lighthover 
                          hover:-translate-y-1 duration-500
                          hover:shadow-black dark:border-white dark:hover:shadow-white
                          dark:hover:bg-darkhover/50'>
                            <Image src={isDarkMode?iconDark:icon} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                         </motion.li>
                  ))}
                </ul>

                <motion.h4
                 initial={{y:30, opacity:0}}
                 whileInView={{y:0,opacity:100}}
                 transition={{duration:1,delay:.5, type:'smooth' }}
                 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>
                    Tools I use 
                </motion.h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool,index)=>(
                        <motion.li
                         initial={{y:30, opacity:0}}
                         whileInView={{y:0,opacity:100}}
                         transition={{duration:1,delay:.5, type:'smooth' }}
                         className='flex items-center justify-center w-12 sm:w-14 aspect-square
                        border border-gray-400 rounded-lg cursor-pointer 
                        hover:-translate-y-1 duration-200 
                        hover:shadow-black dark:border-white dark:hover:shadow-white
                          dark:hover:bg-darkhover/50'
                         key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    </motion.div>
  )
}

export default About