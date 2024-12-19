import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0, y:100}}
      transition={{duration: 1.5}}
        whileInView={{opacity: 1,y: 0}}
        viewport={{once:true}}
    className='flex flex-col items-center justify-center container
     mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About' >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-2 under font-light'>Our Brand</span></h1>
      <p className='text-gray-400 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center md:items-start mt-10 text-grey-600 '>
          <div className='grid grid-cols-2 gap-6 ms:gap-10 w-full 2xl:pr-28'>
            <div className='text-center'>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div  className='text-center'>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Projects Completed</p>
            </div>
            <div  className='text-center'>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div >
            <div  className='text-center'>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div >
          <p className='my-10 max-w-lg ml-8'>Real estate is property consisting of land and the buildings on it, along with its natural resources such as growing crops (e.g. timber), minerals or water, and wild animals; immovable property of this nature;</p>
          <button className=' bg-blue-600 text-white px-8 py-2 ml-8 rounded'>Learn More</button>
        </div>
      </div>
     </motion.div>
  )
}

export default About