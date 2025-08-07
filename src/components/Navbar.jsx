import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='font2 w-full h-[10%] bgSkin textBrown flex items-center justify-between p-4 shadow-md relative'>
      {/* Brand Name on the Left */}
      <div className='font-bold text-3xl cursor-pointer' onClick={() => { navigate('/') }}>Mediatryx</div>

      {/* Hamburger Menu for Mobile */}
      <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
        <Menu size={28} className='text-[#772c47]' />
      </div>

      {/* Links for Desktop View on the Right */}
      <div className='font3 hidden md:flex space-x-8 ml-auto'>
        <Link to='/aboutmediatryx' className='text-xl hover:text-[#5a1f32] transition-colors'>About</Link>
        <Link to='/services' className='text-xl hover:text-[#5a1f32] transition-colors'>Services</Link>
        <Link to='/testimonials' className='text-xl hover:text-[#5a1f32] transition-colors'>Testimonials</Link>
        <Link to='/contactus' className='text-xl hover:text-[#5a1f32] transition-colors'>Contact Us</Link>
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
            <Link to='/aboutmediatryx' className='textBrown hover:text-[#5a1f32] transition-colors' onClick={() => setIsOpen(false)}>About</Link>
            <Link to='/services' className='textBrown hover:text-[#5a1f32] transition-colors' onClick={() => setIsOpen(false)}>Services</Link>
            <Link to='/testimonials' className='textBrown hover:text-[#5a1f32] transition-colors' onClick={() => setIsOpen(false)}>Testimonials</Link>
            <Link to='/contactus' className='textBrown hover:text-[#5a1f32] transition-colors' onClick={() => setIsOpen(false)}>Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
