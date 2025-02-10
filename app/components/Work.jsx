"use client"
import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import {motion} from 'motion/react'

const Work = ({isDarkMode}) => {
  return (
    <div
   
     id='work' className='w-full px-[10%] py-14 scroll-mt-20'>
           <h4 className='text-lg mb-2 text-center font-Ovo '>My portfolio</h4>
           <h2 className='text-center text-5xl font-Ovo'>My latest works</h2>
           <p className='text-center text-md mt-2 py-2 font-Ovo'>
             Welcome to my portfolio Here are some of the works that i did. 
           </p>
       
       <div className='grid grid-cols-auto gap-6 w-full my-10'>
        {workData.map((project,index)=>(
            <motion.div
            initial={{y:30, opacity:0}}
                 whileInView={{y:0,opacity:100 , }}
                 transition={{duration:.8,delay:1, type:'smooth' }}
             className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg
            relative cursor-pointer group'  
             key={index} style={{backgroundImage:`url(${project.bgImage})`}}>

             <div className='coverdiv w-full h-full rounded-lg 
             overflow-hidden group-hover:backdrop-blur-sm duration-300 group-hover:bg-slate-900/50'></div>

               <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
               -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 
               group-hover:bottom-7 dark:bg-darkhover/90'>
                  <div>
                     <h2 className='text-sm text-gray-800 dark:text-white'>{project.title}</h2>
                     <p className='font-Outfit text-md text-bold text-slate-900 dark:text-white/80'>{project.description}</p>
                  </div>
                    <div>
                       <a href={project.link} target='_blank'> <Image src={assets.send_icon} alt='sendIcon'
                        className='w-8 rounded-full  border-[.5px] border-blue-300 p-2 bg-slate-900/30
                        hover:scale-125 duration-300 hover:rotate-90 dark:bg-yellow-500/90'/></a>
                    </div>
               </div>
            </motion.div>
        ))}

       
       </div>
       <motion.a
       initial={{scale:0, opacity:0}}
                 whileInView={{scale:1,opacity:100 , type:'spring'}}
                 transition={{duration:.8,delay:1, type:'smooth' }}
        className='w-max flex items-center justify-center gap-2 text-gray-700
       border-[.5px] rounded-full py-3 px-10 mx-auto  my-20 hover:bg-lighthover duration-500 dark:text-white
       dark:hover:bg-darkhover/50'
       >Show more <Image src={isDarkMode?assets.right_arrow_bold_dark:assets.right_arrow_bold} alt='error'
        className='w-4'
       /></motion.a>
    </div>
  )
}

export default Work