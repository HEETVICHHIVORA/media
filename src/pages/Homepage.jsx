import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom'
import LazyImage from "../components/LazyImage";
import { AnimatePresence } from "framer-motion";
import ServiceTabs from "../components/ServiceTabs";
export const Homepage = () => {
  React.useEffect(() => window.scrollTo(0, 0), []); // One liner
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
    { name: "NSE", logo: "/NSE LOGO.jpg" },
    { name: "Scholar Sharks", logo: "/Shcolor Shark.jpeg" },
    { name: "Lex5nance", logo: "/Lex5nance Logo.png" },
    { name: "LearnEng", logo: "https://via.placeholder.com/100" },
    { name: "Lasa Supergenics", logo: "/LASA Logo.jpg" },
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
      <div className="font2 w-full min-h-[70vh] relative overflow-hidden bgSkin">
        {/* Background Graphics */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
          
          {/* Floating Shapes */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-current/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-current/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-current/10 rounded-full"></div>
          
          {/* Decorative Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-current/20 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-current/10 to-transparent"></div>
        </div>

        <div className="relative w-[90%] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between py-12 lg:py-16 min-h-[70vh]">
          {/* Image on the Left (Desktop) */}
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Image Container with Enhanced Styling */}
              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/30">
                <LazyImage
                  src="/herosection.png"
                  className="rounded-2xl w-full max-w-md lg:max-w-lg"
                  alt="Mediatryx Services"
                />
                
                {/* Decorative Elements around Image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bgBrown/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-current/20 rounded-full"></div>
              </div>
              
              {/* Floating Stats/Badges */}
              <motion.div
                className="absolute -bottom-6 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="text-center">
                  <div className="font2 text-xl textBrown">500+</div>
                  <div className="font3 text-xs textBrown opacity-70">Projects</div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="text-center">
                  <div className="font2 text-xl textBrown">24/7</div>
                  <div className="font3 text-xs textBrown opacity-70">Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text on the Right (Desktop) */}
          <motion.div
            className="text-center lg:text-left w-full lg:w-1/2 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Enhanced Typography Section */}
            <div className="relative mb-8">
              {/* Decorative Line Above Text */}
              <motion.div
                className="w-20 h-1 bgBrown rounded-full mb-6 mx-auto lg:mx-0"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <Typewriter
                  options={{
                    strings: ["Grow", "Advertise", "Expand"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                with
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 relative">
                Mediatryx
                {/* Underline Effect */}
                <motion.div
                  className="absolute -bottom-2 left-0 lg:left-0 w-full h-2 bgBrown/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </h1>

              {/* Subtitle */}
              <motion.p
                className="font3 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Transform your business with strategic communication, innovative marketing, and proven growth solutions.
              </motion.p>
            </div>

            {/* Enhanced Button Section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link
                to="/services"
                className="group relative inline-block px-8 py-4 bgBrown textSkin font3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>

              <Link
                to="/contactus"
                className="inline-block px-8 py-4 bg-white/20 backdrop-blur-sm textBrown font3 text-lg rounded-xl border-2 border-current/30 hover:bg-white/30 hover:border-current/50 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-8 mt-8 text-sm opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font3">SEBI Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bgBrown rounded-full"></div>
                <span className="font3">Expert Team</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
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

      {/* Our Expertise Section - Lightweight Version with Animated Grid */}
      <div className="w-full p-8 md:p-16 bgSkin textBrown">
        <div className="w-[90%] max-w-6xl mx-auto">
          {/* Simplified heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font2 text-4xl md:text-6xl mb-4">
              Our <span className="font3 relative">
                Expertise
                <div className="absolute -bottom-2 left-0 w-full h-1 bgBrown rounded-full"></div>
              </span>
            </h2>
            
            <p className="font3 text-lg opacity-70 mt-4">
              Discover our core competencies that drive business success
            </p>
          </motion.div>

          {/* Simplified expertise display */}
          <div className="relative flex flex-col items-center justify-center min-h-[200px] md:min-h-[250px]">
            {/* Simple background circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 border border-current/20 rounded-full"></div>
            </div>

            {/* Main expertise word - simple fade transition */}
            <div className="relative z-10 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 md:px-8 md:py-6 border border-white/30"
                >
                  <h3 className="poppins-bold text-2xl md:text-4xl lg:text-5xl font-bold">
                    {expertiseWords[currentIndex]}
                  </h3>
                </motion.div>
              </AnimatePresence>

              {/* Simple progress dots */}
              <div className="flex justify-center items-center mt-6 space-x-2">
                {expertiseWords.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bgBrown w-6' : 'bg-current/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Grid with original animations restored */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {expertiseWords.slice(0, 3).map((expertise, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bgBrown rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  <h4 className="font2 text-lg md:text-xl">{expertise}</h4>
                </div>
                <p className="font3 text-sm md:text-base opacity-70 leading-relaxed">
                  Excellence in {expertise.toLowerCase()} through innovative strategies and proven methodologies.
                </p>
                <div className="w-0 h-[2px] bgBrown mt-4 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


      {/* Clientele Section */}
      <div className="w-full p-8 overflow-hidden bgSkin textBrown">
        <div className="w-[90%] mx-auto">
          <motion.h2 
            className="font2 text-4xl md:text-5xl mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="font3 relative">
              Clientele
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bgBrown rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          {/* Enhanced Marquee Wrapper */}
          <div className="relative w-full">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[var(--bg-skin)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[var(--bg-skin)] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex overflow-hidden w-full py-4">
              <motion.div
                className="flex items-center gap-12"
                animate={{ x: [0, -100 * clients.length] }}
                transition={{ 
                  ease: "linear", 
                  duration: clients.length *3, // Adjust speed based on number of clients
                  repeat: Infinity 
                }}
                style={{ 
                  display: "flex",
                  width: `${200 * clients.length}px` // Dynamic width based on client count
                }}
              >
                {/* Create multiple sets for true seamless effect */}
                {[...Array(3)].map((_, setIndex) => (
                  <React.Fragment key={setIndex}>
                    {clients.map((client, index) => (
                      <motion.div
                        key={`set-${setIndex}-${index}`}
                        className="min-w-[200px] flex flex-col items-center justify-center flex-shrink-0 group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Enhanced client card */}
                        <div className="relative w-28 h-28 mb-4 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 group-hover:shadow-xl group-hover:bg-white/30 transition-all duration-300">
                          {/* Decorative corner elements */}
                          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-current/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-current/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <LazyImage
                            src={client.logo}
                            alt={client.name}
                            className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                          
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-current/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        {/* Client name with enhanced styling */}
                        <div className="text-center">
                          <p className="font3 text-sm md:text-base font-medium mb-1 group-hover:text-current/80 transition-colors duration-300">
                            {client.name}
                          </p>
                          <div className="w-8 h-0.5 bg-current/40 mx-auto rounded-full group-hover:w-12 group-hover:bg-current/60 transition-all duration-300"></div>
                        </div>
                      </motion.div>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Optional: Client stats or additional info */}
          <motion.div 
            className="flex justify-center items-center mt-8 space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="font2 text-2xl md:text-3xl textBrown">{clients.length}+</div>
              <div className="font3 text-sm text-current/70">Trusted Clients</div>
            </div>
            <div className="w-px h-12 bg-current/30"></div>
            <div className="text-center">
              <div className="font2 text-2xl md:text-3xl textBrown">100%</div>
              <div className="font3 text-sm text-current/70">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>
      </div>

       <Contactus/>


      {/* Blog Cards Section */}
      <div className="w-full py-16 bg-gradient-to-b bgBrown">
        <div className="w-[90%] mx-auto">
          {/* Enhanced Heading Section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font2 text-4xl md:text-5xl textSkin mb-4">
              Latest <span className="font3">Insights</span>
            </h2>
            <p className="font3 text-lg textSkin opacity-80 max-w-2xl mx-auto">
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
              to="/aboutmediatryx" 
              className="inline-flex items-center px-8 py-4 bgSkin textBrown font3 text-lg rounded-lg hover:bg-opacity-90 transition-all shadow-lg group"
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


      {/* Service Tabs Section */}
      <ServiceTabs />
      
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
              to="/services" 
              className="inline-block px-8 py-4 bg-white textBrown font3 text-lg rounded-lg hover:bg-opacity-90 transition-all shadow-lg font-semibold"
            >
              View Complete Portfolio
            </Link>
          </div>
        </div>
      </motion.div>

      <Footer/>
    </div>
  );
};
