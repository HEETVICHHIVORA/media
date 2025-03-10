import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#772c48] text-[#ffeecd] p-4">

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Location Section */}
        <div className="flex items-center gap-2 text-lg">
          <FaLocationDot />
          <p className="font3">Mumbai</p>
        </div>
        
        {/* Copyright Information */}
        <p className="text-center text-sm md:text-base font3 flex-1 md:flex-none">
          © 2025 Mediatryx - Best Digital Agency in Mumbai, India. All rights reserved.
        </p>

        {/* Add social media or other links here if needed */}
        <div className="flex items-center gap-4">
          <FaInstagram className='text-2xl'/>
          <FaLinkedin className='text-2xl'/>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
