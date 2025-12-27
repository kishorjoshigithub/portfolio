'use client';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import {motion} from "motion/react"

const Contact = (isDarkMode) => {
    const [result, setResult] = React.useState("");

    const [hydrated, setHydrated] = React.useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "5d5f2bd7-740c-4d86-a340-a085554a0561");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    if (!hydrated) return null;

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1}}
    
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        
        className='text-center mb-2 text-lg font-Ovo'>Connect With Me</motion.h4>
         <motion.h2
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.5 }}
         
         className='text-center text-5xl font-Ovo'>Get In Touch</motion.h2>

         <motion.p
         
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.7 }}
         
         className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus id cumque nulla blanditiis excepturi ad et, aliquam, sequi atque rem quaerat..</motion.p>
      
      <motion.form
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.9 }}
      
      onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <motion.input 
            
            initial={{ opacity: 0 , x:-50 }}
            whileInView={{ opacity: 1 , x:0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            
            name='name' type="text" placeholder='Enter your name'  required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'/>
            <motion.input
             initial={{ opacity: 0 , x:50 }}
             whileInView={{ opacity: 1 , x:0 }}
             transition={{ duration: 0.6, delay: 1.2 }}

            name='email' type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' />
        </div>
        <motion.textarea 
        
        initial={{ opacity: 0 , y:100 }}
        whileInView={{ opacity: 1 , y:0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        
        name="message" rows="6" placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 resize-none dark:bg-darkHover/30 dark:border-white/90'></motion.textarea>

        <motion.button 
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
        
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' type='submit'>
        Submit now
        <Image priority src={assets.right_arrow} className='w-4' alt="right arrow" />
        </motion.button>

        <p className='text-center mt-5 text-gray-600'>{result}</p>

      </motion.form>
    </motion.div>
  )
}

export default Contact
