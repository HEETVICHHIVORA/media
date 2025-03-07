import React, { useState, useEffect, useRef } from 'react';
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

  const clients = [
    { name: 'Client 1', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 2', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 3', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 4', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 5', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 6', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 7', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 8', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 9', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 10', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 1', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 2', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 3', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 4', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 5', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 6', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 7', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 8', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 9', logo: 'https://via.placeholder.com/100' },
    { name: 'Client 10', logo: 'https://via.placeholder.com/100' }
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (marqueeRef.current) {
        marqueeRef.current.scrollLeft += 1;
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

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
<div className='font2 w-full h-[85vh] bg-[#ffeecd] flex items-center justify-start'>
  <div className='w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between'>
    {/* Text on the Left */}
    <motion.div
      className='text-left w-full md:w-1/2'
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

      {/* Explore Our Services Button */}
      <a
        href="/services"
        className='inline-block mt-8 px-8 py-3 bg-[#772c47] text-[#ffeecd] font3 text-lg rounded-lg hover:bg-opacity-90 transition-all'
      >
        Explore Our Services
      </a>
    </motion.div>

    {/* Image on the Right (Hidden on Mobile) */}
    {/* <motion.div
      className='w-full md:w-1/2 items-center justify-center hidden md:block'
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }} // Slight up-and-down motion
      transition={{
        duration: 2, // Duration of one loop
        repeat: Infinity, // Loop infinitely
        ease: 'easeInOut', // Smooth easing
      }}
    >
      <img 
        src="/herosection.png" 
        alt="Hero Section" 
        className='w-full h-auto max-w-lg object-cover'
      />
    </motion.div> */}

    <div className='w-full md:w-1/2 items-center justify-center hidden md:flex'>
    <img 
        src="/herosection.png" 
        alt="Hero Section" 
        className='w-full h-auto max-w-lg object-contain scale-120'
      />
    </div>
  </div>
</div>

<div className='w-full flex justify-center bg-[#ffeecd]'>
  <div className='w-50 h-[2px] bg-[#772c47] opacity-70'></div>
</div>

{/* <div className='w-full flex justify-center bg-[#ffeecd]'>
  <div className='w-50 h-[2px] bg-[#772c47] opacity-70'></div>
</div> */}

{/* Our Mission Section */}
<div className='font3 w-full bg-[#ffeecd] p-8'>
  <div className='w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
    <motion.div
      className='text-[#772c47] max-w-2xl w-full md:w-auto'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className='font2 text-4xl md:text-5xl text-[#772c47]'>Our <span className='font3'>Mission</span></h2>
      <p className='text-lg md:text-xl leading-relaxed'>
        To provide end-to-end services for all your Investor Relations (IR), Public Relations (PR),
        and investment-related activities, ensuring compliance with SEBI guidelines.
      </p>
    </motion.div>
    <motion.div
      className='w-full md:w-1/2 h-64 flex items-center justify-center mt-6 md:mt-0'
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <img 
        src="/ourmission.png" 
        alt="Our Mission" 
        className='w-full h-full object-cover' 
      />
    </motion.div>
  </div>
</div>



<div className='w-full flex justify-center bg-[#ffeecd]'>
  <div className='w-50 h-[2px] bg-[#772c47] opacity-70'></div>
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
      {/* Clientele Section */}
     

      <div className='w-full bg-[#ffeecd] p-8 overflow-hidden'>
        <div className='w-[90%] mx-auto'>
        <h2 className='font2 text-4xl md:text-5xl text-[#772c47]'>
        Our <span className='font3'>Clientele</span>
      </h2>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-hidden w-full mt-6">
        <motion.div
          className="flex items-center gap-6"
          animate={{ x: ["0%", "-50%"] }} // Move only half to avoid gaps
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {/* Triple duplication to ensure continuous flow */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={index} className="min-w-[120px] flex flex-col items-center">
              <img src={client.logo} alt={client.name} className="w-20 h-20" />
              <p className="text-[#772c47] mt-2">{client.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
        </div>
      

    </div>
    {/* Contact Us Section */}
<div className='w-full bg-[#ffeecd] p-8'>
  <div className='w-[90%] mx-auto'>
    {/* Heading */}
    <h2 className='font2 text-4xl md:text-5xl text-[#772c47]'>Get <span className='font3'>in touch</span></h2>

    {/* Content */}
    <div className='mt-8 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8'>
      {/* Image (Hidden on Mobile) */}
      <div className='w-full md:w-1/2 hidden md:block'>
        <img 
          src="/contactus.png" 
          alt="Contact Us" 
          className='w-full h-auto object-cover rounded-lg'
        />
      </div>

      {/* Input Fields */}
      <div className='w-full md:w-1/2 space-y-6'>
        <input
          type="text"
          placeholder="Name"
          className='w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47]'
        />
        <input
          type="email"
          placeholder="Email"
          className='w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47]'
        />
        <input
          type="text"
          placeholder="Subject"
          className='w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47]'
        />
        <textarea
          placeholder="Your Query"
          rows={4}
          className='w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47]'
        />
        <button
          type="submit"
          className='w-full md:w-auto px-6 py-3 bg-[#772c47] text-[#ffeecd] font3 rounded-lg hover:bg-opacity-90 transition-all'
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};
