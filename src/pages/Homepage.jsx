import React, { useState, useEffect, useRef, use } from "react";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";

export const Homepage = () => {
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const expertiseWords = [
    "Advertising",
    "Influencer Marketing",
    "Social Media Marketing",
    "Outdoor Ads",
    "Broker Coverage",
    "Wapp and Tele",
    "E-Media Printing",
    "Paid Ads",
  ];

  const clients = [
    { name: "Client 1", logo: "https://via.placeholder.com/100" },
    { name: "Client 2", logo: "https://via.placeholder.com/100" },
    { name: "Client 3", logo: "https://via.placeholder.com/100" },
    { name: "Client 4", logo: "https://via.placeholder.com/100" },
    { name: "Client 5", logo: "https://via.placeholder.com/100" },
    { name: "Client 6", logo: "https://via.placeholder.com/100" },
    { name: "Client 7", logo: "https://via.placeholder.com/100" },
    { name: "Client 8", logo: "https://via.placeholder.com/100" },
    { name: "Client 9", logo: "https://via.placeholder.com/100" },
    { name: "Client 10", logo: "https://via.placeholder.com/100" },
    { name: "Client 1", logo: "https://via.placeholder.com/100" },
    { name: "Client 2", logo: "https://via.placeholder.com/100" },
    { name: "Client 3", logo: "https://via.placeholder.com/100" },
    { name: "Client 4", logo: "https://via.placeholder.com/100" },
    { name: "Client 5", logo: "https://via.placeholder.com/100" },
    { name: "Client 6", logo: "https://via.placeholder.com/100" },
    { name: "Client 7", logo: "https://via.placeholder.com/100" },
    { name: "Client 8", logo: "https://via.placeholder.com/100" },
    { name: "Client 9", logo: "https://via.placeholder.com/100" },
    { name: "Client 10", logo: "https://via.placeholder.com/100" },
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
    <div className="bgColor">
      <Navbar />
      {/* Hero Section */}
      <div className="font2 w-full h-[85vh] bg-[#ffeecd] flex items-center justify-start">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text on the Left */}
          <motion.div
            className="text-left w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[#772c47] text-5xl md:text-7xl font-bold leading-tight">
              <Typewriter
                options={{
                  strings: ["Grow", "Advertise", "Expand"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </h1>
            <h1 className="text-[#772c47] text-5xl md:text-7xl font-bold leading-tight">
              with
            </h1>
            <h1 className="text-[#772c47] text-5xl md:text-7xl font-bold leading-tight">
              Mediatryx
            </h1>

            {/* Explore Our Services Button */}
            <a
              href="/services"
              className="inline-block mt-8 px-8 py-3 bg-[#772c47] text-[#ffeecd] font3 text-lg rounded-lg hover:bg-opacity-90 transition-all"
            >
              Explore Our Services
            </a>
          </motion.div>

  

          <div className="w-full md:w-1/2 items-center justify-center hidden md:flex">
            <img
              src="/herosection.png"
              alt="Hero Section"
              className="w-full h-auto max-w-lg object-contain scale-120"
            />
          </div>
          {/* <motion.div
      className='w-full md:w-1/2 flex items-center justify-center'
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
        </div>
      </div>

      <div className="w-full flex justify-center bg-[#ffeecd]">
        <div className="w-50 h-[2px] bg-[#772c47] opacity-70"></div>
      </div>


      {/* Our Mission Section */}
      <div className="font3 w-full bg-[#ffeecd] p-8">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <motion.div
            className="text-[#772c47] max-w-2xl w-full md:w-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font2 text-4xl md:text-5xl text-[#772c47]">
              Our <span className="font3">Mission</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              To provide end-to-end services for all your Investor Relations
              (IR), Public Relations (PR), and investment-related activities,
              ensuring compliance with SEBI guidelines.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 h-64 flex items-center justify-center mt-6 md:mt-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <img
              src="/ourmission.png"
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full flex justify-center bg-[#ffeecd]">
        <div className="w-50 h-[2px] bg-[#772c47] opacity-70"></div>
      </div>

      {/* Our Expertise Section */}
      <div className="w-full bg-[#ffeecd] p-8 flex flex-col items-center">
        <h2 className="font2 text-4xl md:text-5xl text-[#772c47]">
          Our <span className="font3">Expertise</span>
        </h2>
        <motion.div
          className="text-[#772c47] text-2xl md:text-4xl mt-8"
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {expertiseWords[currentIndex]}
        </motion.div>
      </div>

      {/* Clientele Section */}

      <div className="w-full bg-[#ffeecd] p-8 overflow-hidden">
        <div className="w-[90%] mx-auto">
          <h2 className="font2 text-4xl md:text-5xl text-[#772c47]">
            Our <span className="font3">Clientele</span>
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
                <div
                  key={index}
                  className="min-w-[120px] flex flex-col items-center"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-20 h-20"
                  />
                  <p className="text-[#772c47] mt-2">{client.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="w-full bg-[#ffeecd] py-12">
        <div className="w-[90%] mx-auto">
          {/* Heading */}
          <h2 className="font2 text-4xl md:text-5xl text-[#772c47] text-center mb-8">
            Latest Blogs
          </h2>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Blog Card 1 */}
            <BlogCard
              id="1"
              title="How to Grow Your Business"
              photo="/ws1.png"
              content="Learn the best strategies to grow your business and reach new heights. Whether you are a startup or an established business, these tips will help you scale effectively..."
            />

            {/* Blog Card 2 */}
            <BlogCard
              id="2"
              title="The Power of Advertising"
              photo="/ws1.png"
              content="Advertising is a powerful tool to increase brand awareness and drive sales. Discover how to create impactful campaigns that resonate with your audience..."
            />

            {/* Blog Card 3 */}
            <BlogCard
              id="3"
              title="Expanding Your Market Reach"
              photo="/ws1.png"
              content="Expanding your market reach is essential for long-term success. Explore the steps you need to take to enter new markets and attract a global audience..."
            />

            {/* Blog Card 4 */}
            <BlogCard
              id="4"
              title="Effective Investor Relations"
              photo="/ws1.png"
              content="Building strong relationships with investors is key to securing funding and growing your business. Learn how to communicate effectively and build trust..."
            />
          </div>
        </div>
      </div>

      <Contactus />
      <Footer/>


    </div>
  );
};
