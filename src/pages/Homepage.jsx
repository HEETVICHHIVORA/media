import React, { useState, useEffect, useRef } from "react";
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
    { name: "NSE", logo: "https://via.placeholder.com/100" },
    { name: "Scholar Sharks", logo: "https://via.placeholder.com/100" },
    { name: "Lex5nance", logo: "https://via.placeholder.com/100" },
    { name: "LearnEng", logo: "https://via.placeholder.com/100" },
    { name: "Lasa Supergenics", logo: "https://via.placeholder.com/100" },
    { name: "Prabhhans Industries", logo: "https://via.placeholder.com/100" },
  ];

  // Video data for the new section
  const videos = [
    {
      id: 1,
      title: "Digital Marketing Strategy",
      embedId: "dQw4w9WgXcQ", // Replace with actual video IDs
      description: "Complete guide to digital marketing strategies for modern businesses"
    },
    {
      id: 2,
      title: "Social Media Growth",
      embedId: "dQw4w9WgXcQ",
      description: "How to grow your social media presence and engage your audience"
    },
    {
      id: 3,
      title: "Content Marketing Mastery",
      embedId: "dQw4w9WgXcQ",
      description: "Creating compelling content that converts and builds brand authority"
    },
    {
      id: 4,
      title: "SEO Best Practices",
      embedId: "dQw4w9WgXcQ",
      description: "Latest SEO techniques to improve your website's search rankings"
    },
    {
      id: 5,
      title: "Paid Advertising ROI",
      embedId: "dQw4w9WgXcQ",
      description: "Maximizing return on investment with strategic paid advertising campaigns"
    }
  ];

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
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-50 h-[2px] bgBrown opacity-70"></div>
      </div>

      {/* Our Mission Section */}
      <div className="font3 w-full p-8">
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
          <h2 className="font2 text-4xl md:text-5xl mb-8">
            Our <span className="font3">Clientele</span>
          </h2>

          {/* Marquee Wrapper */}
          <div className="relative flex overflow-hidden w-full">
            <motion.div
              className="flex items-center gap-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ 
                ease: "linear", 
                duration: 20,
                repeat: Infinity 
              }}
              style={{ 
                display: "flex", 
                whiteSpace: "nowrap",
                minWidth: "200%"
              }}
            >
              {/* First set of clients */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="min-w-[150px] flex flex-col items-center justify-center flex-shrink-0 mx-4"
                >
                  <div className="w-24 h-24 mb-3 flex items-center justify-center bg-white rounded-lg shadow-md">
                    <LazyImage
                      src={client.logo}
                      alt={client.name}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <p className="text-center text-sm font-medium">{client.name}</p>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="min-w-[150px] flex flex-col items-center justify-center flex-shrink-0 mx-4"
                >
                  <div className="w-24 h-24 mb-3 flex items-center justify-center bg-white rounded-lg shadow-md">
                    <LazyImage
                      src={client.logo}
                      alt={client.name}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <p className="text-center text-sm font-medium">{client.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog Cards Section */}
<div className="w-full py-16 bg-gradient-to-b from-bgSkin to-white">
  <div className="w-[90%] mx-auto">
    {/* Enhanced Heading Section */}
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="font2 text-4xl md:text-5xl textBrown mb-4">
        Latest <span className="font3">Insights</span>
      </h2>
      <p className="font3 text-lg textBrown opacity-80 max-w-2xl mx-auto">
        Stay ahead with our expert insights on digital marketing trends, 
        strategies, and industry best practices
      </p>
      <div className="w-20 h-[3px] bgBrown mx-auto mt-6 rounded-full"></div>
    </motion.div>

    {/* Enhanced Blog Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Blog Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="group"
      >
        <BlogCard
          id="1"
          title="How to Grow Your Business"
          photo="/ws1.png"
          content="Learn the best strategies to grow your business and reach new heights. Whether you are a startup or an established business, these tips will help you scale effectively..."
          author="Marketing Team"
          date="Dec 15, 2024"
          readTime="5 min read"
          category="Business Growth"
        />
      </motion.div>

      {/* Blog Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="group"
      >
        <BlogCard
          id="2"
          title="The Power of Advertising"
          photo="/ws1.png"
          content="Advertising is a powerful tool to increase brand awareness and drive sales. Discover how to create impactful campaigns that resonate with your audience..."
          author="Creative Team"
          date="Dec 12, 2024"
          readTime="7 min read"
          category="Advertising"
        />
      </motion.div>

      {/* Blog Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="group"
      >
        <BlogCard
          id="3"
          title="Expanding Your Market Reach"
          photo="/ws1.png"
          content="Expanding your market reach is essential for long-term success. Explore the steps you need to take to enter new markets and attract a global audience..."
          author="Strategy Team"
          date="Dec 10, 2024"
          readTime="6 min read"
          category="Market Expansion"
        />
      </motion.div>

      {/* Blog Card 4 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="group"
      >
        <BlogCard
          id="4"
          title="Effective Investor Relations"
          photo="/ws1.png"
          content="Building strong relationships with investors is key to securing funding and growing your business. Learn how to communicate effectively and build trust..."
          author="IR Team"
          date="Dec 8, 2024"
          readTime="8 min read"
          category="Investor Relations"
        />
      </motion.div>
    </div>

    {/* View All Blogs CTA */}
    <motion.div 
      className="text-center mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Link 
        to="/blogs" 
        className="inline-flex items-center px-8 py-4 bgBrown textSkin font3 text-lg rounded-lg hover:bg-opacity-90 transition-all shadow-lg group"
      >
        View All Articles
        <svg 
          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </motion.div>
  </div>
</div>


      {/* Service Sections */}
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

          <div className="w-full flex flex-col sm:flex-row mt-8 justify-evenly items-center">
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
          <h2 className="font2 text-4xl sm:text-5xl font-bold sm:w-1/3">
            Email Marketing
          </h2>

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
                  
                  {index === 0 && (
                    <span className="absolute top-0 left-0 w-full border-t-2 border-dotted border-black"></span>
                  )}

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
          <h2 className="text-4xl sm:text-5xl font-bold font2">
            Pay-Per-Click <br className="sm:hidden" /> (PPC) Advertising
          </h2>

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

      {/* NEW: Video Showcase Section */}
      <motion.div 
        className="w-full py-16 bgBrown"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-[90%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font2 text-4xl md:text-5xl textSkin mb-4">
              Watch Our <span className="font3">Success Stories</span>
            </h2>
            <p className="font3 text-lg textSkin opacity-90 max-w-2xl mx-auto">
              Discover how we've transformed businesses through innovative digital marketing strategies. 
              See our expertise in action through these comprehensive case studies and tutorials.
            </p>
          </div>

          <div className="video-grid">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="bg-white rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="video-container mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="font2 text-xl textBrown mb-2">{video.title}</h3>
                <p className="font3 text-gray-600 text-sm mb-4">{video.description}</p>
                <Link 
                  to="/services" 
                  className="video-cta-button font3 text-sm"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className="inline-block px-8 py-4 bg-white textBrown font3 text-lg rounded-lg hover:bg-opacity-90 transition-all shadow-lg font-semibold"
            >
              View Complete Portfolio
            </Link>
          </div>
        </div>
      </motion.div>

      <Contactus/>
      <Footer/>
    </div>
  );
};
