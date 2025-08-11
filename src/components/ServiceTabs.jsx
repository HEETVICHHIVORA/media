import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from './LazyImage';

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 0,
      title: "Website and SEO",
      icon: "🌐",
      content: (
        <div className="flex flex-col items-center text-center">
          <p className="font3 text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed">
            The importance of having a well-designed website.<br />
            The role of SEO in optimizing websites for:
          </p>
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
            {["ws1.png", "ws3.png", "ws2.png"].map((img, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center justify-between p-8 h-[320px] w-full max-w-[280px] bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-500 shadow-xl group"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-[140px] h-[140px] bg-gradient-to-br from-white/25 to-white/10 rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                  <LazyImage src={img} className="w-[110px] h-[110px] object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex-1 flex items-end">
                  <p className="bgBrown textSkin px-6 py-3 rounded-full text-sm sm:text-base font-medium shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {["Search engines", "Enhancing Organic Traffic", "Increasing visibility"][index]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Social Media Marketing (SMM)",
      icon: "📱",
      content: (
        <div className="w-full">
          {/* Introduction Text */}
          <div className="text-center mb-12">
            <p className="font3 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed textBrown">
              Harness the power of social media platforms to build meaningful connections with your audience 
              and drive business growth through strategic content and engagement.
            </p>
          </div>

          {/* Main Content Cards */}
          <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-8">
            {[
              {
                img: "sm1.png",
                title: "Content Strategy & Creation",
                description: "The appeal of social media platforms creating engaging content that resonates with your target audience and builds brand awareness"
              },
              {
                img: "sm2.png", 
                title: "Analytics & Optimization",
                description: "Two-way communication utilizing analytics for better outcomes and continuous improvement of your social media performance"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center w-full max-w-[450px] bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/30 hover:border-white/50 shadow-xl group"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon Container */}
                <div className="w-28 h-28 bg-gradient-to-br from-white/30 to-white/15 rounded-full flex items-center justify-center mb-8 group-hover:shadow-lg transition-all duration-300">
                  <LazyImage src={item.img} className="w-20 h-20 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h4 className="font2 text-xl textBrown mb-4 text-center">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-base font3 leading-relaxed text-center textBrown opacity-90">
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div className="w-16 h-1 bgBrown rounded-full mt-6 opacity-60"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Features Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <div className="flex items-center justify-center mb-6">
                <div className="w-3 h-8 bgBrown rounded-full mr-3"></div>
                <h4 className="font2 text-xl textBrown">Our SMM Approach</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Platform Strategy",
                  "Content Creation", 
                  "Community Management",
                  "Performance Analytics"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font3 text-center textBrown text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Email Marketing",
      icon: "✉️",
      content: (
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/30 shadow-xl">
              <div className="flex items-center mb-8">
                <div className="w-3 h-10 bgBrown rounded-full mr-4"></div>
                <h3 className="font2 text-2xl">Key Features</h3>
              </div>
              <ul className="text-lg w-full font3 space-y-6">
                {[
                  "Effectiveness of email marketing",
                  "Building an email list",
                  "Creating personalized and targeted campaigns",
                  "Analyzing email metrics"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center space-x-6 py-4 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-8 h-8 bgBrown rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="flex-1 text-base sm:text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
  id: 3,
  title: "Content Marketing",
  icon: "📝",
  content: (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-5xl">
        {/* Changed from dark brown to light theme */}
        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 relative overflow-hidden">
          {/* Changed decorative elements to brown instead of white */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#772c47]/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#772c47]/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative p-10">
            <div className="flex items-center mb-8">
              {/* Changed from white to brown accent */}
              <div className="w-3 h-10 bgBrown rounded-full mr-4"></div>
              {/* Changed text color from textSkin to textBrown */}
              <h3 className="font2 text-2xl textBrown">Our Approach</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                "The significance of content marketing",
                "Building brand authority",
                "Providing valuable information",
                "Creating and distributing relevant and engaging content"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Changed from white to brown checkmarks */}
                  <div className="w-8 h-8 bgBrown rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  {/* Changed text color from textSkin to textBrown */}
                  <span className="text-base sm:text-lg textBrown">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
,
    {
      id: 4,
      title: "Pay-Per-Click (PPC) Advertising",
      icon: "💰",
      content: (
        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border-2 border-[#772c47]/50 p-10 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-[#772c47]/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#772c47]/20 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="w-3 h-10 bgBrown rounded-full mr-4"></div>
                  <h3 className="font2 text-2xl">PPC Strategy Components</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[
                    "The concept of PPC-based advertising",
                    "Generating immediate and targeted traffic",
                    "Advertising platforms",
                    "Campaign setup",
                    "Keyword optimization",
                    "Performance monitoring"
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group border border-white/20"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-4 h-4 bgBrown rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-base sm:text-lg font3">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Influencer Marketing",
      icon: "👥",
      content: (
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#772c47]/50 to-[#772c47]/30"></div>
              
              <div className="p-10">
                <div className="flex items-center mb-8">
                  <div className="w-3 h-10 bgBrown rounded-full mr-4"></div>
                  <h3 className="font2 text-2xl textBrown">Strategy Framework</h3>
                </div>
                <ul className="text-lg font3 space-y-2">
                  {[
                    "The increasing influence of influencers",
                    "Collaborating with relevant influencers", 
                    "Reaching and engaging with specific target audiences",
                    "The importance of authenticity and long-term relationships"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center space-x-4 px-6 py-6 bg-white/30 rounded-xl hover:bg-white/40 transition-all duration-300 group border border-white/20"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-3 h-3 bgBrown rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="flex-1 text-base sm:text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-12">
      <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
        
        {/* Left Side - Tab Navigation with Hover */}
        <div className="lg:w-1/3 xl:w-1/4 flex flex-col">
          <div className="sticky top-24">
            <h2 className="font2 text-2xl md:text-3xl textBrown mb-8 text-center lg:text-left">
              Our Services
            </h2>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className={`px-6 py-5 rounded-xl font3 text-base transition-all duration-300 border cursor-pointer ${
                    activeTab === service.id
                      ? 'bgBrown textSkin shadow-xl border-white/30 scale-105'
                      : 'bg-white/10 textBrown hover:bg-white/20 border-white/20 hover:border-white/40 hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveTab(service.id)}
                  whileHover={{ x: activeTab === service.id ? 0 : 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center">
                    <span className="text-xl mr-4 flex-shrink-0">{service.icon}</span>
                    <span className="font-medium leading-tight">{service.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Content Area */}
        <div className="lg:w-2/3 xl:w-3/4 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="min-h-[500px]"
            >
              {/* Header for active service */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font2 text-2xl md:text-4xl mb-6 flex items-center gap-4 textBrown">
                  <span className="text-3xl md:text-4xl">{services[activeTab].icon}</span>
                  {services[activeTab].title}
                </h3>
                <div className="w-20 h-1 bgBrown rounded-full"></div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {services[activeTab].content}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;
