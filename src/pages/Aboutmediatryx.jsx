import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const AboutMediatryx = () => {
  return (
    <div className="w-full bg-[#ffeecd] pt-10">
      <div className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Left Side: Agency Information */}
        <motion.div
          className="w-full md:w-1/2"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="font2 text-3xl md:text-5xl text-[#772c47] mb-6 underline-offset-4 underline"
            variants={fadeInUp}
          >
            About Mediatryx
          </motion.h1>

          {/* Agency Description */}
          <motion.p
            className="font3 text-base md:text-lg text-[#772c47] leading-relaxed mb-6"
            variants={fadeInUp}
          >
            Mediatryx is a leading agency specializing in Investor Relations (IR), Public Relations (PR), and strategic communication services. Our experienced professionals help businesses grow, advertise, and expand by crafting compelling narratives and building strong stakeholder relationships.
          </motion.p>

          {/* Mission Statement */}
          <motion.h2
            className="font2 text-2xl md:text-3xl text-[#772c47] mb-4"
            variants={fadeInUp}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="font3 text-base md:text-lg text-[#772c47] leading-relaxed mb-6"
            variants={fadeInUp}
          >
            Our mission is to provide end-to-end services that ensure compliance with SEBI guidelines while helping businesses achieve their communication and growth goals. We deliver innovative solutions that drive results and create lasting value for our clients.
          </motion.p>

          {/* Core Values */}
          <motion.h2
            className="font2 text-2xl md:text-3xl text-[#772c47] mb-4"
            variants={fadeInUp}
          >
            Our Core Values
          </motion.h2>
          <motion.ul
            className="font3 text-base md:text-lg text-[#772c47] leading-relaxed list-disc list-inside mb-6"
            variants={fadeInUp}
          >
            <li>Integrity and Transparency</li>
            <li>Client-Centric Approach</li>
            <li>Innovation and Creativity</li>
            <li>Commitment to Excellence</li>
          </motion.ul>

          {/* Call to Action */}
          <motion.div className="mt-8" variants={fadeInUp}>
            <a
              href="/services"
              className="inline-block px-6 py-3 bg-[#772c47] text-[#ffeecd] font3 text-lg rounded-lg hover:bg-opacity-90 transition-all"
            >
              Explore Our Services
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Photo */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-full max-w-md h-80 md:h-96">
            <img
              src="/aboutuspic.png"
              alt="About Mediatryx"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>
        
      </div>

      <Footer/>
    </div>
  );
};

export default AboutMediatryx;
