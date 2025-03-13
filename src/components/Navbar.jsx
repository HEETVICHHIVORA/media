import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();

  return (
    <div className='font2 w-full h-[10%] bgSkin textBrown flex items-center justify-between p-4 shadow-md relative'>
      {/* Brand Name on the Left */}
      <div className='font-bold text-3xl cursor-pointer' onClick={()=>{navigate('/')}}>Mediatryx</div>

      {/* Hamburger Menu for Mobile */}
      <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
        <Menu size={28} className='text-[#772c47]' />
      </div>

      {/* Links for Desktop View on the Right */}
      <div className='font3 hidden md:flex space-x-8 ml-auto'>
        <a href='/aboutmediatryx' className='text-xl'>About</a>
        <a href='/services' className='text-xl'>Services</a>
        <a href='/contactus' className='text-xl'>Contact Us</a>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='absolute top-20 bgSkin left-0 w-full flex flex-col items-center space-y-4 p-4 shadow-lg md:hidden z-50 font-thin'
          >
            <a href='/aboutmediatryx' className='textBrown' onClick={() => setIsOpen(false)}>About</a>
            <a href='/services' className='textBrown' onClick={() => setIsOpen(false)}>Services</a>
            <a href='/contactus' className='textBrown' onClick={() => setIsOpen(false)}>Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
