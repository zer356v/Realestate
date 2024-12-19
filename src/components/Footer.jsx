import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-700 w-full overflow-hidden ' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row
      justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="" />
          <p className='text-gray-400 mt-4'>Real estate is property consisting of land and the buildings on it, along with its natural resources such as growing crops (e.g. timber), minerals or water, and wild animals; immovable property of this nature;</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About</a>
            <a href="#Contact" className='hover:text-white'>Contact Us</a>
            <a href="#" className='hover:text-white'>Privacy Policy</a>
          </ul>
        </div>
        <div className='w-full md:w-1/5'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsLetter</h3>
            <p className='text-gray-400 max-w-80 mb-4'>The latest news, articles, and resource, sent to your inbox weekly.</p>
            <div>
              <input type="email" placeholder='Enter your Email' className='p-2 rounded bg-gray-800
              text-gray-400 border mb-3 border-gray-700 focus:outline-none w-full md:w-auto' name="" id="" />
              <button className='py-2 px-4 rounded bg-blue-500 text-white '>get into Touch</button>
            </div>
        </div>
      </div>
      <div className='border-t border-gray-300 py-4 mt-10 text-center text-gray-400'>
      <p className="text-sm">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer