import React from 'react'
import { font } from './font/font'

const Footer = () => {
  return (
    <div className={`${font.className} bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 md:px-20 pb-12 pt-16 w-full border-t-4 border-yellow-500`}>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto'>
        {/* Footer Links Section */}
        <div className='bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-xl p-8 mb-12 border border-yellow-500/20 backdrop-blur-sm'>
          <div className='flex flex-wrap justify-center md:justify-start gap-6 md:gap-8'>
            <div className='group'>
              <p className='cursor-pointer text-yellow-400 font-semibold hover:text-yellow-300 transition-all duration-300 hover:scale-105 hover:drop-shadow-md text-sm md:text-base border-b-2 border-transparent hover:border-yellow-400 pb-1'>
                Privacy Policy
              </p>
            </div>
            <div className='group'>
              <p className='cursor-pointer text-yellow-400 font-semibold hover:text-yellow-300 transition-all duration-300 hover:scale-105 hover:drop-shadow-md text-sm md:text-base border-b-2 border-transparent hover:border-yellow-400 pb-1'>
                Terms & Conditions
              </p>
            </div>
            <div className='group'>
              <p className='cursor-pointer text-yellow-400 font-semibold hover:text-yellow-300 transition-all duration-300 hover:scale-105 hover:drop-shadow-md text-sm md:text-base border-b-2 border-transparent hover:border-yellow-400 pb-1'>
                Security
              </p>
            </div>
            <div className='group'>
              <p className='cursor-pointer text-yellow-400 font-semibold hover:text-yellow-300 transition-all duration-300 hover:scale-105 hover:drop-shadow-md text-sm md:text-base border-b-2 border-transparent hover:border-yellow-400 pb-1'>
                Remove Your Data
              </p>
            </div>
            <div className='group'>
              <p className='cursor-pointer text-yellow-400 font-semibold hover:text-yellow-300 transition-all duration-300 hover:scale-105 hover:drop-shadow-md text-sm md:text-base border-b-2 border-transparent hover:border-yellow-400 pb-1'>
                Refund Policy
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className='relative mb-12'>
          <hr className='border-2 border-gradient-to-r from-transparent via-yellow-500 to-transparent w-full'/>
          <div className='absolute inset-0 flex justify-center items-center'>
            <div className='bg-yellow-500 w-3 h-3 rounded-full shadow-lg shadow-yellow-500/50'></div>
          </div>
          {/* Gradient line effect */}
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent h-0.5 top-1/2 transform -translate-y-1/2'></div>
        </div>

        {/* Copyright Section */}
        <div className='text-center space-y-4'>
          <div className='bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-full px-8 py-4 mx-auto inline-block border border-yellow-500/30'>
            <p className='text-yellow-200 font-bold text-base md:text-lg tracking-wide'>
              © 2024 Vehicle Scanner. All Rights Reserved.
            </p>
          </div>
          
          {/* Additional branding */}
          <div className='flex justify-center items-center space-x-2 text-yellow-400/70 text-sm'>
            <span>Powered by</span>
            <span className='font-semibold text-yellow-300'>Advanced Vehicle Technology</span>
            <div className='w-2 h-2 bg-yellow-500 rounded-full animate-pulse'></div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-yellow-500/5 to-transparent pointer-events-none'></div>
        
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-10 left-10 w-20 h-20 border-2 border-yellow-500 rounded-full'></div>
          <div className='absolute top-20 right-20 w-16 h-16 border-2 border-amber-500 rounded-full'></div>
          <div className='absolute bottom-20 left-1/4 w-12 h-12 border-2 border-yellow-400 rounded-full'></div>
          <div className='absolute bottom-10 right-1/3 w-14 h-14 border-2 border-amber-400 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer