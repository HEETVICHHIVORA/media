import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

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

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AboutMediatryx = () => {
  React.useEffect(() => window.scrollTo(0, 0), []); // One liner
  return (
    <div className="w-full bgSkin textBrown min-h-screen">
      <Navbar/>
      
      {/* Hero Section */}
      <div className="relative py-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-gradient-to-br from-transparent via-current to-transparent"></div>
        </div>
        
        <div className="relative w-[90%] max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="font3 text-xl md:text-3xl opacity-80 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Transforming businesses through strategic communication
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col-reverse lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-16">
            
            {/* Left Side: Agency Information */}
            <motion.div
              className="w-full lg:w-3/5 space-y-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Agency Description Card */}
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30"
                variants={fadeInLeft}
              >
                <motion.h2
                  className="font2 text-2xl md:text-3xl mb-4 flex items-center"
                  variants={fadeInUp}
                >
                  <span className="w-2 h-8 bgBrown rounded-full mr-4"></span>
                  Who We Are
                </motion.h2>
                <motion.p
                  className="font3 text-base md:text-lg leading-relaxed text-justify"
                  variants={fadeInUp}
                >
                  Mediatryx is a leading agency specializing in Investor Relations (IR), Public Relations (PR), and strategic communication services. Our experienced professionals help businesses grow, advertise, and expand by crafting compelling narratives and building strong stakeholder relationships.
                </motion.p>
              </motion.div>

              {/* Mission Statement Card */}
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30"
                variants={fadeInLeft}
              >
                <motion.h2
                  className="font2 text-2xl md:text-3xl mb-4 flex items-center"
                  variants={fadeInUp}
                >
                  <span className="w-2 h-8 bgBrown rounded-full mr-4"></span>
                  Our Mission
                </motion.h2>
                <motion.p
                  className="font3 text-base md:text-lg leading-relaxed text-justify"
                  variants={fadeInUp}
                >
                  Our mission is to provide end-to-end services that ensure compliance with SEBI guidelines while helping businesses achieve their communication and growth goals. We deliver innovative solutions that drive results and create lasting value for our clients.
                </motion.p>
              </motion.div>

              {/* Core Values Card */}
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30"
                variants={fadeInLeft}
              >
                <motion.h2
                  className="font2 text-2xl md:text-3xl mb-6 flex items-center"
                  variants={fadeInUp}
                >
                  <span className="w-2 h-8 bgBrown rounded-full mr-4"></span>
                  Our Core Values
                </motion.h2>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={stagger}
                >
                  {[
                    'Integrity and Transparency',
                    'Client-Centric Approach',
                    'Innovation and Creativity',
                    'Commitment to Excellence'
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white/10"
                      variants={fadeInUp}
                    >
                      <div className="w-3 h-3 bgBrown rounded-full flex-shrink-0"></div>
                      <span className="font3 text-base md:text-lg">{value}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                className="flex justify-center lg:justify-start"
                variants={fadeInUp}
              >
                <Link
                  to="/services"
                  className="group relative inline-flex items-center px-8 py-4 bgBrown textSkin font3 text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">Explore Our Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side: Photo */}
            <motion.div
              className="w-full lg:w-2/5 flex items-center justify-center lg:sticky lg:top-8"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-md">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-current opacity-20 rounded-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bgBrown opacity-10 rounded-full"></div>
                
                <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/30">
                  <LazyImage
                    src="/aboutuspic.png"
                    className="w-full h-80 md:h-96 object-cover rounded-xl"
                    alt="About Mediatryx"
                  />
                </div>
                
                {/* Floating stats or badges */}
                {/* <motion.div
                  className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50"
                  variants={fadeInUp}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-center">
                    <div className="font2 text-2xl textBrown">10+</div>
                    <div className="font3 text-sm textBrown opacity-70">Years Experience</div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50"
                  variants={fadeInUp}
                  transition={{ delay: 0.7 }}
                >
                  <div className="text-center">
                    <div className="font2 text-2xl textBrown">100+</div>
                    <div className="font3 text-sm textBrown opacity-70">Happy Clients</div>
                  </div>
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default AboutMediatryx;
