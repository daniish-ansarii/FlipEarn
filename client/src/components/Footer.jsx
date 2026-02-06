import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
        <footer className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#F1EAFF]  text-gray-800 mt-32">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img src={assets.logo} />
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed text-slate-500">
                    flipearn is a social media marketplace . We are the leading social media marketplace that connects brands with their customers with our user-friendly interface.
                </p>
            </div>
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    ©2025. All rights reserved.
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
