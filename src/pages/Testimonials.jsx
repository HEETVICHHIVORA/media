// pages/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jonali Saikia",
      position: "Senior Manager Digital Marketing",
      company: "Columbia Pacific Communities",
      image: "https://via.placeholder.com/80",
      rating: 5,
      testimonial: "We at Columbia Pacific Communities are so pleased with the professionalism and talent that has been provided by Mediatryx. It's been more than 2 years Mediatryx is associated with us as our SEO partner and we would like to continue the relationship as we are receiving the desired output. Keep the good work team.",
      logo: "/client-logos/columbia-pacific.png"
    },
    {
      id: 2,
      name: "Suchismita Sharma",
      position: "Deputy General Manager",
      company: "Peerless Hospital",
      image: "https://via.placeholder.com/80",
      rating: 5,
      testimonial: "It's been a wonderful experience to have Mediatryx as our Digital Partner whose team is helping manage the Digital Marketing verticle of Peerless Hospital. The enthusiastic team is open to suggestions and welcomes client's inputs.",
      logo: "/client-logos/peerless-hospital.png"
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      position: "Marketing Director",
      company: "Scholar Sharks",
      image: "https://via.placeholder.com/80",
      rating: 5,
      testimonial: "Mediatryx has transformed our digital presence completely. Their strategic approach to social media marketing and SEO has increased our lead generation by 300%. The team is professional, responsive, and delivers results consistently.",
      logo: "/client-logos/scholar-sharks.png"
    },
    {
      id: 4,
      name: "Priya Patel",
      position: "CEO",
      company: "Lex5nance",
      image: "https://via.placeholder.com/80",
      rating: 5,
      testimonial: "Working with Mediatryx has been a game-changer for our fintech startup. Their expertise in PPC advertising and content marketing helped us achieve a 250% ROI within just 6 months. Highly recommend their services!",
      logo: "/client-logos/lex5nance.png"
    },
    {
      id: 5,
      name: "Amit Singh",
      position: "Founder",
      company: "LearnEng",
      image: "https://via.placeholder.com/80",
      rating: 5,
      testimonial: "The team at Mediatryx understands our educational platform needs perfectly. Their email marketing campaigns and analytics reporting have helped us improve student engagement by 180%. Excellent work!",
      logo: "/client-logos/learneng.png"
    },
    {
      id: 6,
      name: "Neha Agarwal",
      position: "Brand Manager",
      company: "Lasa Supergenics",
      image: "https://via.placeholder.com/80",
      rating: 5,
      testimonial: "Mediatryx's influencer marketing strategies have significantly boosted our brand awareness in the health and wellness sector. Their creative campaigns and data-driven approach delivered exceptional results for our product launches.",
      logo: "/client-logos/lasa-supergenics.png"
    }
  ];

  const stats = [
    { number: "50+", label: "Happy Clients", icon: "👥" },
    { number: "200+", label: "Projects Completed", icon: "🚀" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
    { number: "3x", label: "Average ROI", icon: "📈" }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bgSkin min-h-screen textBrown">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full py-16">
        <div className="w-[90%] mx-auto text-center">
          <motion.h1
            className="font2 text-4xl md:text-6xl textBrown mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Client <span className="font3 text-[#5a1f32]">Testimonials</span>
          </motion.h1>
          
          <motion.p
            className="font3 text-lg textBrown opacity-80 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Discover what our valued clients say about their experience working with Mediatryx. 
            Their success stories and feedback inspire us to deliver excellence in every project.
          </motion.p>

          <motion.div
            className="w-20 h-[3px] bgBrown mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="w-[90%] mx-auto py-12 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bgBrown rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="font2 text-3xl textSkin mb-2">{stat.number}</div>
              <div className="font3 textSkin text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="w-[90%] mx-auto py-16">
        <motion.h2
          className="font2 text-3xl md:text-4xl textBrown text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What Our <span className="font3">Clients Say</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="text-4xl textBrown opacity-20 mb-4">"</div>
              
              {/* Testimonial Text */}
              <p className="font3 textBrown text-sm leading-relaxed mb-6 italic">
                {testimonial.testimonial}
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                    <LazyImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font2 textBrown text-lg font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="font3 textBrown opacity-70 text-sm">
                      {testimonial.position}
                    </p>
                    <p className="font3 textBrown opacity-60 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Company Logo */}
                {testimonial.logo && (
                  <div className="w-16 h-12 flex items-center justify-center opacity-60">
                    <LazyImage
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="w-full bgBrown py-16 mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-[90%] mx-auto text-center">
          <h2 className="font2 text-4xl md:text-5xl textSkin mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="font3 text-lg textSkin opacity-90 mb-8 max-w-2xl mx-auto">
            Let's create your success story together. Get in touch with us to discuss 
            how we can help transform your digital presence and achieve exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/contactus"
              className="inline-block px-8 py-4 bg-white textBrown font3 text-lg rounded-lg hover:bg-opacity-90 transition-all shadow-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.a>
            <motion.a
              href="/services"
              className="inline-block px-8 py-4 border-2 border-white textSkin font3 text-lg rounded-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Services
            </motion.a>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Testimonials;
