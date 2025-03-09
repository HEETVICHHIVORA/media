import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import FloatingButton from '../components/FloatingButton'

export const Services2 = () => {
  return (
    <div className="color1 bgColor min-h-screen w-full">
        <FloatingButton />
      <Navbar />

      {/* Page Heading */}
      <motion.div
        className="w-[90%] sm:w-[80%] mx-auto py-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font2 text-4xl sm:text-5xl md:text-6xl text-[#772c47]">
          Our <span className="font3 text-[#5a1f32]">Services</span>
        </h2>
        <p className="text-[#772c47] text-base sm:text-lg italic mt-2">
          Empowering businesses with top-notch solutions
        </p>
        <div className="h-[2px] w-12 sm:w-16 bg-[#772c47] mt-2"></div>
      </motion.div>

      {/* Sections */}
      <div className="space-y-20">
        {/* 1. Website & SEO */}
        <motion.div
          className="w-[90%] sm:w-[80%] mx-auto py-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font2 text-4xl sm:text-5xl  fontColor">Website and SEO</h2>
          <p className="font3 text-lg sm:text-xl mt-3 fontColor">
            The importance of having a well-designed website.<br />
            The role of SEO in optimizing websites for:
          </p>

          {/* Image Section */}
          <div className="flex flex-col sm:flex-row gap-6 mt-8 justify-evenly items-center">
            {["ws1.png", "ws2.png", "ws3.png"].map((img, index) => (
              <div key={index} className="flex flex-col items-center justify-between p-5 h-[250px] rounded-lg">
                <img src={img} alt="" className="w-[100px] h-[100px] object-contain" />
                <p className="bg-[#772c47] text-[#ffeecd] px-5 py-2 rounded-full text-sm sm:text-base">
                  {["Search engines", "Increasing visibility", "Enhancing Organic Traffic"][index]}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2. Social Media Marketing */}
        <motion.div
          className="w-[90%] sm:w-[80%] mx-auto py-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold fontColor font2">Social Media Marketing (SMM)</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-16 mt-10">
            {["sm1.png", "sm2.png"].map((img, index) => (
              <div key={index} className="flex flex-col items-center max-w-[300px]">
                <img src={img} alt="" className="w-16 h-16 mb-4" />
                <p className="text-lg text-black font-medium font3 fontColor">
                  {["The appeal of social media platforms creating engaging content", "Two-way communication Utilizing analytics for better outcomes"][index]}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3. Email Marketing */}
        <motion.div
            className="w-[90%] sm:w-[80%] mx-auto py-12 flex flex-col sm:flex-row items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            >
            {/* Left Side - Heading */}
            <h2 className="font2 fontColor text-4xl sm:text-5xl font-bold sm:w-1/3">
                Email <br /> Marketing
            </h2>

            {/* Right Side - List with Checkmarks & Dotted Lines */}
            <div className="sm:w-2/3 w-full mt-8 sm:mt-0">
                <ul className="text-lg w-full relative font3 fontColor">
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
          className="w-[90%] sm:w-[80%] mx-auto py-12 flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font2 fontColor text-4xl sm:text-5xl font-bold text-black mb-6 text-center">Content Marketing</h2>
          <div className="bg-[#772c47] text-white p-6 sm:p-8 rounded-lg shadow-lg">
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
  className="w-[90%] sm:w-[80%] mx-auto py-12 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {/* Heading */}
  <h2 className="text-4xl sm:text-5xl font-bold font2 fontColor">
    Pay-Per-Click <br className="sm:hidden" /> (PPC) Advertising
  </h2>

  {/* Bordered Box - Content */}
  <div className="border-2 border-[#772c47] mt-6 p-6 sm:p-8 rounded-md">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg text-left font3 fontColor">
      {[
        "The concept of PPC-based advertising",
        "Generating immediate and targeted traffic",
        "Advertising platforms",
        "Campaign setup",
        "Keyword optimization",
        "Performance monitoring"
      ].map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <span className="fontColor text-xl">▶</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
        </motion.div>


        {/* 6. Influencer Marketing */}
        <motion.div
          className="w-[90%] sm:w-[80%] mx-auto py-12 flex flex-col sm:flex-row items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font2 fontColor sm:w-1/3 text-center">Influencer Marketing</h2>
          <div className="sm:w-2/3 w-full bg-amber-200/[0.3] rounded-md shadow-md font3 fontColor">
            <ul className="text-lg">
              {[
                "The increasing influence of influencers",
                "Collaborating with relevant influencers",
                "Reaching and engaging with specific target audiences",
                "The importance of authenticity and long-term relationships"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3 px-6 py-4 relative">
                  <span className="fontColor text-xl">•</span>
                  <span className="flex-1">{item}</span>
                  {index !== 3 && <span className="absolute bottom-0 left-0 w-full border-t border-black"></span>}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      
      </div>
    </div>
  )
}
