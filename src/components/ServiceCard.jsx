import React from 'react'
import { motion } from 'framer-motion'
import UseServiceButton from './UseServiceButton'

export const ServiceCard = ({ al, heading, image, content, routeName }) => {
  return (
    <motion.div 
      className="flex flex-col m-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="font1 relative"
        initial={{ opacity: 0, x: al === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className={`text-4xl md:text-6xl ${al === 'left' ? 'text-left' : 'text-right'} text-center`}>{heading}</p>
        <div className="h-[2px] bg-[#772c47] mt-1 rounded-full w-full"></div>
      </motion.div>

      <div className={`relative flex flex-col md:flex-row ${al === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 m-3 justify-between items-center`}>
        <motion.img 
          src={image} 
          className="w-full md:w-[500px] h-[300px] rounded-lg object-contain aspect-[4/3] p-2" 
          alt="" 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        
        <motion.div 
          className="flex flex-col justify-between items-center md:items-start gap-y-5 text-center md:text-lef  t"
          initial={{ opacity: 0, x: al === 'left' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="font3 text-lg md:text-xl">{content}</p>
          <UseServiceButton routeName={routeName} />
        </motion.div>
      </div>
    </motion.div>
  )
}
