"use client"
import { Input } from 'postcss'
import React from 'react'
import {motion} from 'motion/react'
import { useState } from 'react'

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e60ef13d-4a5f-4dc6-befe-b9da7fa00975");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Thank you for contacting me 😀...");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div
     id='contact' className='w-full px-[10%] py-14 scroll-mt-20 bg-[`${isDarkMode?bg-transparent:url("/footer-bg-color.png")}`] bg-no-repeat 
    bg-center bg-[length:90%_auto]'>
         <motion.h4
          initial={{y:30, opacity:0}}
                 whileInView={{y:0,opacity:100 ,}}
                 transition={{duration:.8,delay:.5, type:'smooth' }}
          className='text-lg mb-2 text-center font-Ovo '>Connect with me</motion.h4>
           <motion.h2
            initial={{y:30, opacity:0}}
                 whileInView={{y:0,opacity:100 ,}}
                 transition={{duration:.8,delay:.5, type:'smooth' }}
            className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>
           <motion.p
            initial={{y:30, opacity:0}}
                 whileInView={{y:0,opacity:100 ,}}
                 transition={{duration:.8,delay:.5, type:'smooth' }}
            className='text-center text-md mt-2 py-2 font-Ovo md:px-[20%]'>
             I would love to hear from you! If you have any questions or feedback 
             feel free to connect with me😁. Please use the form below.  
           </motion.p> 


           <form onSubmit={onSubmit}  className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input type='text' placeholder='Enter your Name' required name='name'
                className='flex-1 p-3 outline-none border-[.5px] border-gray-400 
                rounded-md bg-white dark:bg-darkhover'/>
                <input type='email' placeholder='Enter your Email' required name="email"
                    className='flex-1 p-3 outline-none border-[.5px] border-gray-400 
                    rounded-md bg-white dark:bg-darkhover'
                />
            </div>
            <textarea rows={6} placeholder='Enter your response ' required name="message"
                      className='w-full p-4 outline-none border-[.5px] border-gray-400 
                      rounded-md bg-white dark:bg-darkhover'>                 
            </textarea>

            <motion.button
             initial={{scale:0, opacity:0}}
                 whileInView={{scale:1,opacity:100 ,}}
                 transition={{duration:.8,delay:1, type:'smooth' }}
             type='submit' 
              className='py-3 px-6 border-2 border-gray-400 bg-slate-800 rounded-2xl 
              text-md text-bold text-white hover:bg-gray-600 dark:bg-darkhover'>
              Send Me ಠ_ಠ
            </motion.button>

            <motion.p 
             initial={{y:30, opacity:0}}
                 whileInView={{y:0,opacity:100 ,}}
                 transition={{duration:.8, type:'smooth' }}
             className='mt-4 text-center'>{result}</motion.p>
           </form>
    </div>
  )
}

export default Contact