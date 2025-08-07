import React from 'react'
import { motion } from 'framer-motion'
import UseServiceButton from './UseServiceButton'
import LazyImage from './LazyImage'

export const ServiceCard = ({ al, heading, image, content, routeName }) => {
  return (
    <motion.div 
      className="relative m-5 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-current/5 to-transparent rounded-3xl"></div>
      
      {/* Main card container */}
      <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 group-hover:bg-white/15">
        
        {/* Header Section */}
        <motion.div 
          className="relative mb-8"
          initial={{ opacity: 0, x: al === 'left' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className={`flex items-center ${al === 'left' ? 'justify-start' : 'justify-end'} mb-4`}>
            <div className={`w-12 h-1 bgBrown rounded-full ${al === 'left' ? 'mr-4' : 'ml-4 order-first'}`}></div>
            <div className="w-3 h-3 bgBrown rounded-full"></div>
          </div>
          
          <h2 className={`font1 text-3xl lg:text-5xl xl:text-6xl ${al === 'left' ? 'text-left' : 'text-right'} mb-2 relative`}>
            {heading}
            {/* Animated underline */}
            <motion.div 
              className="absolute -bottom-2 left-0 h-[3px] bgBrown rounded-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            />
          </h2>
        </motion.div>

        {/* Content Section */}
        <div className={`flex flex-col lg:flex-row ${al === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
          
          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2 group/image"
          >
            {/* Image decorative frame */}
            <div className="absolute -inset-2 bg-gradient-to-br from-current/20 to-transparent rounded-2xl opacity-50 group-hover/image:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 border-2 border-current/20 rounded-2xl group-hover/image:border-current/40 transition-all duration-300"></div>
            
            <div className="relative bg-white/20 backdrop-blur-sm rounded-xl p-4 overflow-hidden">
              <LazyImage 
                src={image} 
                className="w-full h-[280px] lg:h-[320px] rounded-lg object-cover transition-transform duration-500 group-hover/image:scale-105" 
                alt={heading}
              />
            </div>
            
            {/* Floating accent */}
            <div className={`absolute -top-4 ${al === 'left' ? '-right-4' : '-left-4'} w-8 h-8 bgBrown/20 rounded-full`}></div>
            <div className={`absolute -bottom-4 ${al === 'left' ? '-left-4' : '-right-4'} w-6 h-6 bgBrown/30 rounded-full`}></div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div 
            className={`w-full lg:w-1/2 flex flex-col ${al === 'left' ? 'lg:items-start' : 'lg:items-end'} gap-6`}
            initial={{ opacity: 0, x: al === 'left' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Content wrapper with glass effect */}
            <div className={`bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg ${al === 'left' ? 'text-left' : 'text-right'} w-full`}>
              <div className={`flex items-center mb-4 ${al === 'left' ? 'justify-start' : 'justify-end'}`}>
                <div className="w-2 h-6 bgBrown rounded-full"></div>
                <div className={`w-16 h-[2px] bgBrown/50 ${al === 'left' ? 'ml-2' : 'mr-2'}`}></div>
              </div>
              
              <p className="font3 text-base lg:text-lg xl:text-xl leading-relaxed text-justify opacity-90 mb-6">
                {content}
              </p>
              
              {/* Enhanced button container */}
              <div className={`flex ${al === 'left' ? 'justify-start' : 'justify-end'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <UseServiceButton routeName={routeName} />
                </motion.div>
              </div>
            </div>

            {/* Side accent elements */}
            <div className={`hidden lg:flex flex-col space-y-2 ${al === 'left' ? 'items-start' : 'items-end'}`}>
              <div className="w-8 h-[2px] bgBrown/40 rounded-full"></div>
              <div className="w-12 h-[2px] bgBrown/60 rounded-full"></div>
              <div className="w-6 h-[2px] bgBrown/40 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Corner decorative elements */}
      <div className={`absolute top-4 ${al === 'left' ? 'right-4' : 'left-4'} w-16 h-16 border-t-2 border-r-2 border-current/20 ${al === 'left' ? '' : 'rotate-180'} opacity-60`}></div>
      <div className={`absolute bottom-4 ${al === 'left' ? 'left-4' : 'right-4'} w-16 h-16 border-b-2 border-l-2 border-current/20 ${al === 'left' ? '' : 'rotate-180'} opacity-60`}></div>
    </motion.div>
  )
}
