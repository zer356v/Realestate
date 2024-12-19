import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8e5a81dc-a136-4ff7-a731-7ccb8e4b4136");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("")
        toast.success("Email sent Success")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };

  return (
    <motion.div
    initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1,y: 0}}
        viewport={{once:true}}className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden 
    ' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2
        text-center'>Contact <span className='underline underline-offset-4 decoration-2
        under font-light'>With Us </span></h1>
        <p className='text-center text-gray-500 mb-24 max-w-90
        mx-auto'>Ready to take a move? Let's Build Your future Together</p>

    <form onSubmit={onSubmit} className='max-w-4xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name
                <input className='w-full border border-gray-300 rounded py-3
                px-4 mt-2' name='Name' type="text" placeholder='Enter your name'
                required />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                Your Email
                <input className='w-full border border-gray-300 rounded py-3
                px-4 mt-2' name='Email' type="email" placeholder='Enter your Email'
                required />
            </div>
        </div>
        <div className='my-6 text-left'>
            Message
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Enter Your Message' required></textarea>
        </div>
        <button type='submit' className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : "Send Message" }</button>
    </form>




    </motion.div>
  )
}

export default Contact