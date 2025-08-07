import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Fixed Navbar */}
      <nav className='font2 w-full h-20 bgSkin textBrown flex items-center justify-between px-6 shadow-lg fixed top-0 z-50 backdrop-blur-sm border-b border-white/20'>
        {/* Brand Name on the Left */}
        <motion.div 
          className='font-bold text-2xl md:text-3xl cursor-pointer select-none'
          onClick={() => { navigate('/') }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Mediatryx
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <motion.div 
          className='md:hidden cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors'
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} className='text-[#772c47]' />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} className='text-[#772c47]' />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Links for Desktop View on the Right */}
        <div className='font3 hidden md:flex space-x-8 ml-auto'>
          {[
            { to: '/aboutmediatryx', label: 'About' },
            { to: '/services', label: 'Services' },
            { to: '/testimonials', label: 'Testimonials' },
            { to: '/contactus', label: 'Contact Us' }
          ].map((link, index) => (
            <motion.div key={link.to}>
              <Link 
                to={link.to} 
                className='relative text-xl hover:text-[#5a1f32] transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10 group'
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#772c47] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md flex flex-col shadow-2xl md:hidden z-50 border-t border-white/30'
              >
                <div className="p-6 space-y-4">
                  {[
                    { to: '/aboutmediatryx', label: 'About' },
                    { to: '/services', label: 'Services' },
                    { to: '/testimonials', label: 'Testimonials' },
                    { to: '/contactus', label: 'Contact Us' }
                  ].map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link 
                        to={link.to} 
                        className='block textBrown hover:text-[#5a1f32] transition-all duration-300 text-lg py-3 px-4 rounded-lg hover:bg-[#772c47]/10 border-b border-[#772c47]/10 last:border-0'
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer div to prevent content from being covered by fixed navbar */}
      <div className="h-20 w-full"></div>
    </>
  );
};

export default Navbar;
