import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const expertiseWords = [
    'Advertising',
    'Influencer Marketing',
    'Social Media Marketing',
    'Outdoor Ads',
    'Broker Coverage',
    'Wapp and Tele',
    'E-Media Printing',
    'Paid Ads'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % expertiseWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className='font2 w-full h-[85vh] bg-[#ffeecd] flex items-center justify-start p-4'>
        <motion.div
          className='text-left'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className='text-[#772c47] text-5xl md:text-7xl font-bold leading-tight'>
            <Typewriter
              options={{
                strings: ['Grow', 'Advertise', 'Expand'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <h1 className='text-[#772c47] text-5xl md:text-7xl font-bold leading-tight'>
            with
          </h1>
          <h1 className='text-[#772c47] text-5xl md:text-7xl font-bold leading-tight'>
            Mediatryx
          </h1>
        </motion.div>
      </div>

      {/* Our Mission Section */}
      <div className='font3 w-full bg-[#ffeecd] p-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
        <motion.div
          className='text-[#772c47] max-w-2xl'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>Our Mission</h2>
          <p className='text-lg md:text-xl leading-relaxed'>
            To provide end-to-end services for all your Investor Relations (IR), Public Relations (PR),
            and investment-related activities, ensuring compliance with SEBI guidelines.
          </p>
        </motion.div>
        <motion.div
          className='w-full md:w-1/2 h-64 bg-[#772c47] bg-opacity-20 flex items-center justify-center'
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className='text-[#772c47] text-xl'>Photo Placeholder</p>
        </motion.div>
      </div>

      {/* Our Expertise Section */}
      <div className='w-full bg-[#ffeecd] p-8 flex flex-col items-center'>
        <h2 className='font2 text-4xl md:text-5xl text-[#772c47]'>Our <span className='font3'>Expertise</span></h2>
        <motion.div
          className='text-[#772c47] text-2xl md:text-4xl mt-8'
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {expertiseWords[currentIndex]}
        </motion.div>
      </div>
    </div>
  );
};
