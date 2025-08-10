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
        <div className="flex flex-col items-center text-center">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-12 mt-8">
            {["sm1.png", "sm2.png"].map((img, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center max-w-[400px] w-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/30 hover:border-white/50 shadow-xl group"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-white/30 to-white/15 rounded-full flex items-center justify-center mb-8 group-hover:shadow-lg transition-all duration-300">
                  <LazyImage src={img} className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-lg font-medium font3 leading-relaxed text-center">
                  {["The appeal of social media platforms creating engaging content", "Two-way communication Utilizing analytics for better outcomes"][index]}
                </p>
              </motion.div>
            ))}
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
                    <div className="w-8 h-8 bg-[#00C1D4] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
            <div className="bgBrown textSkin p-10 rounded-2xl shadow-2xl border-2 border-white/20 relative overflow-hidden">
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="w-3 h-10 bg-white/40 rounded-full mr-4"></div>
                  <h3 className="font2 text-2xl">Our Approach</h3>
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
                      className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/40 transition-all duration-300">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="text-base sm:text-lg">{item}</span>
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
      id: 4,
      title: "Pay-Per-Click (PPC) Advertising",
      icon: "💰",
      content: (
        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border-2 border-[#772c47]/50 p-10 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
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
            <div className="bg-gradient-to-br from-amber-200/40 to-amber-100/20 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-300/40 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-300/50 to-amber-500/50"></div>
              
              <div className="p-10">
                <div className="flex items-center mb-8">
                  <div className="w-3 h-10 bg-amber-600 rounded-full mr-4"></div>
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
                      <div className="w-3 h-3 bg-amber-600 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
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
    <div className="w-[90%] max-w-6xl mx-auto py-12">
      {/* Tab Navigation - Click Only */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {services.map((service) => (
          <motion.button
            key={service.id}
            className={`px-6 py-4 rounded-xl font3 text-sm md:text-base transition-all duration-300 border ${
              activeTab === service.id
                ? 'bgBrown textSkin shadow-xl border-white/30'
                : 'bg-white/10 textBrown hover:bg-white/20 border-white/20 hover:border-white/40'
            }`}
            onClick={() => setActiveTab(service.id)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-3 text-lg">{service.icon}</span>
            <span className="hidden sm:inline">{service.title}</span>
            <span className="sm:hidden">{service.title.split(' ')[0]}</span>
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="min-h-[500px]"
        >
          {/* Header for active service */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 className="font2 text-3xl md:text-5xl mb-6 flex items-center justify-center gap-4">
              <span className="text-4xl">{services[activeTab].icon}</span>
              {services[activeTab].title}
            </h2>
            <div className="w-24 h-1 bgBrown rounded-full mx-auto"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {services[activeTab].content}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-12 space-x-3">
        {services.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeTab === index ? 'bgBrown w-10' : 'bg-current/30 w-2 hover:w-6 hover:bg-current/50'
            }`}
            onClick={() => setActiveTab(index)}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceTabs;
