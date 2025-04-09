import React, { useState, useEffect, useRef, use } from "react";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom'
import LazyImage from "../components/LazyImage";

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
    <div className="bgSkin textBrown">
      <Navbar />
      {/* Hero Section */}
      <div className="font2 w-full h-[85vh] flex items-center justify-start">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text on the Left */}
          <motion.div
            className="text-left w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <Typewriter
                options={{
                  strings: ["Grow", "Advertise", "Expand"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              with
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Mediatryx
            </h1>

            {/* Explore Our Services Button */}
            <Link
              to="/services"
              className="inline-block mt-8 px-8 py-3 bgBrown textSkin font3 text-lg rounded-lg hover:bg-opacity-90 transition-all"
            >
              Explore Our Services
            </Link>
          </motion.div>

  

          <div className="w-full md:w-1/2 items-center justify-center hidden md:flex">
            <LazyImage
              src="/herosection.png"
              className="rounded-lg"
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
        src="/media/herosection.png" 
        alt="Hero Section" 
        className='w-full h-auto max-w-lg object-cover'
      />
    </motion.div> */}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-50 h-[2px] bgBrown opacity-70"></div>
      </div>


      {/* Our Mission Section */}
      <div className="font3 w-full  p-8">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <motion.div
            className="max-w-2xl w-full md:w-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font2 text-4xl md:text-5xl">
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
            <LazyImage
              src="/ourmission.png"
              className="w-full h-auto max-w-lg object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-50 h-[2px] bgBrown opacity-70"></div>
      </div>

      {/* Our Expertise Section */}
      <div className="w-full p-8 flex flex-col items-center">
        <h2 className="font2 text-4xl md:text-5xl">
          Our <span className="font3">Expertise</span>
        </h2>
        <motion.div
          className="text-2xl md:text-4xl mt-8"
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

      <div className="w-full p-8 overflow-hidden">
        <div className="w-[90%] mx-auto">
          <h2 className="font2 text-4xl md:text-5xl">
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
                  <LazyImage
                    src={client.logo}
                    className="w-20 h-20"
                  />
                  <p className="mt-2">{client.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="w-full py-12">
        <div className="w-[90%] mx-auto">
          {/* Heading */}
          <h2 className="font2 text-4xl md:text-5xl text-center mb-8">
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

      {/* Sections */}
      <div className="space-y-5 w-[90%] mx-auto">
              {/* 1. Website & SEO */}
              <motion.div
                className="w-full py-12 flex flex-col items-center text-center justify-around"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="font2 text-4xl sm:text-5xl">Website and SEO</h2>
                <p className="font3 text-lg sm:text-xl mt-3">
                  The importance of having a well-designed website.<br />
                  The role of SEO in optimizing websites for:
                </p>

                {/* Image Section */}
                <div className="w-full flex flex-col sm:flex-row  mt-8 justify-evenly items-center">
                  {["ws1.png", "ws2.png", "ws3.png"].map((img, index) => (
                    <div key={index} className="flex flex-col items-center justify-between p-5 h-[250px] rounded-lg">
                      <LazyImage src={img} className="w-[100px] h-[100px] object-contain" />
                      <p className="bgBrown textSkin px-5 py-2 rounded-full text-sm sm:text-base">
                        {["Search engines", "Increasing visibility", "Enhancing Organic Traffic"][index]}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 2. Social Media Marketing */}
              <motion.div
                className="w-full py-12 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold font2">Social Media Marketing (SMM)</h2>
                <div className="w-full flex flex-col sm:flex-row justify-evenly items-center gap-16 mt-10">
                  {["sm1.png", "sm2.png"].map((img, index) => (
                    <div key={index} className="flex flex-col items-center max-w-[300px]">
                      <LazyImage src={img} className="w-16 h-16 mb-4" />
                      <p className="text-lg font-medium font3">
                        {["The appeal of social media platforms creating engaging content", "Two-way communication Utilizing analytics for better outcomes"][index]}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 3. Email Marketing */}
              <motion.div
                  className="w-full sm:w-[90%] mx-auto py-12 flex flex-col lg:flex-row items-center gap-y-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  >
                  {/* Left Side - Heading */}
                  <h2 className="font2 text-4xl sm:text-5xl font-bold sm:w-1/3">
                      Email Marketing
                  </h2>

                  {/* Right Side - List with Checkmarks & Dotted Lines */}
                  <div className="sm:w-2/3 w-full mt-8 sm:mt-0 ">
                      <ul className="text-lg w-full relative font3">
                      {[
                          "Effectiveness of email marketing",
                          "Building an email list",
                          "Creating personalized and targeted campaigns",
                          "Analyzing email metrics"
                      ].map((item, index) => (
                          <li key={index} className="flex items-center space-x-4 py-3 relative w-full">
                          <span className="text-[#00C1D4] text-2xl">✔</span>
                          <span className="flex-1">{item}</span>
                          
                          {/* Dotted line above the first item */}
                          {index === 0 && (
                              <span className="absolute top-0 left-0 w-full border-t-2 border-dotted border-black"></span>
                          )}

                          {/* Dotted line below all items */}
                          <span className="absolute bottom-0 left-0 w-full border-t-2 border-dotted border-black"></span>
                          </li>
                      ))}
                      </ul>
                  </div>
              </motion.div>


              {/* 4. Content Marketing */}
              <motion.div
                className="w-full sm:w-[90%] mx-auto py-12 flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="font2 text-4xl sm:text-5xl font-bold mb-6 text-center">Content Marketing</h2>
                <div className="bgBrown textSkin p-6 sm:p-8 rounded-lg shadow-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                    {[
                      "The significance of content marketing",
                      "Building brand authority",
                      "Providing valuable information",
                      "Creating and distributing relevant and engaging content"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-white text-2xl">✔</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* 5. Pay-Per-Click Advertising */}
              <motion.div
              className="w-full sm:w-[90%] mx-auto py-12 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
      >
                  {/* Heading */}
                  <h2 className="text-4xl sm:text-5xl font-bold font2">
                    Pay-Per-Click <br className="sm:hidden" /> (PPC) Advertising
                  </h2>

                  {/* Bordered Box - Content */}
                  <div className="border-2 border-[#772c47] mt-6 p-6 sm:p-8 rounded-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg text-left font3">
                      {[
                        "The concept of PPC-based advertising",
                        "Generating immediate and targeted traffic",
                        "Advertising platforms",
                        "Campaign setup",
                        "Keyword optimization",
                        "Performance monitoring"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <span className="text-xl">▶</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
              </motion.div>


              {/* 6. Influencer Marketing */}
              <motion.div
                className="w-full py-12 flex flex-col lg:flex-row gap-y-4 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold font2 sm:w-1/3 text-center">Influencer Marketing</h2>
                <div className="sm:w-2/3 w-full bg-amber-200/[0.3] rounded-md shadow-md font3">
                  <ul className="text-lg">
                    {[
                      "The increasing influence of influencers",
                      "Collaborating with relevant influencers",
                      "Reaching and engaging with specific target audiences",
                      "The importance of authenticity and long-term relationships"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3 px-6 py-4 relative">
                        <span className="text-xl">•</span>
                        <span className="flex-1">{item}</span>
                        {index !== 3 && <span className="absolute bottom-0 left-0 w-full border-t border-black"></span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
      
      </div>

      <Contactus/>
      <Footer/>


    </div>
  );
};
