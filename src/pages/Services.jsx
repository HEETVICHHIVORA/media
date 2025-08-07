import React from 'react'
import Navbar from '../components/Navbar'
import { ServiceCard } from '../components/ServiceCard'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export const Services = () => {
  const services = [
    {
      al: "left",
      heading: "Web Design",
      image: "web_design.png",
      content: "Your website is often the first impression potential customers have of your business. Our web design services focus on creating visually appealing, user-friendly, and responsive websites that reflect your brand and engage your audience. We prioritize functionality and aesthetics, ensuring that your website not only looks great but also provides a seamless user experience. Our goal is to convert visitors into customers through effective design and intuitive navigation.",
      routeName: "contactus/Web-design"
    },
    {
      al: "right",
      heading: "SEO Optimization",
      image: "seo.png",
      content: "Search Engine Optimization (SEO) is at the core of our digital marketing strategy. Our SEO services aim to increase your website's visibility on search engines, driving organic traffic and improving your online presence. We conduct thorough keyword research, optimize your website's content and structure, and implement effective link-building strategies. Our goal is to help you rank higher on search engines, attract more visitors, and convert them into loyal customers.",
      routeName: "contactus/SEO-optimization"
    },
    {
      al: "left",
      heading: "Content Creation",
      image: "content_crt.png",
      content: "Compelling content is key to engaging your audience and driving conversions. Our content creation services include crafting high-quality blog posts, articles, social media updates, and multimedia content that resonate with your target audience. We focus on creating content that not only informs and entertains but also aligns with your brand's voice and objectives. By consistently delivering valuable content, we help you build trust and authority in your industry.",
      routeName: "contactus/Content-creation"
    },
    {
      al: "right",
      heading: "Social Media",
      image: "social_media.png",
      content: "Social media connects you with your audience and builds brand awareness. Our services include strategy development, content creation, community management, and paid advertising tailored to each platform. We ensure your brand message is consistent and engaging, maximizing reach and impact through analytics and audience interaction.",
      routeName: "contactus/Social-media"
    },
    {
      al: "left",
      heading: "PPC Advertising",
      image: "PPC-Advertising.png",
      content: "Pay-Per-Click (PPC) advertising is an effective way to drive targeted traffic to your website. Our PPC services include creating and managing campaigns on platforms like social media. We focus on optimizing your ad spend to achieve the highest return on investment (ROI). Our team continuously monitors and adjusts your campaigns to ensure optimal performance, helping you reach your target audience and achieve your marketing goals.",
      routeName: "contactus/PPC-advertising"
    },
    {
      al: "right",
      heading: "Email Marketing",
      image: "email_marketing.png",
      content: "Email marketing nurtures leads and engages your audience. Our services cover strategy, list management, and personalized campaigns. We create automated email sequences to deliver timely messages, analyze performance, and optimize content to build strong subscriber relationships and drive conversions.",
      routeName: "contactus/Email-marketing"
    },
    {
      al: "left",
      heading: "Analytics & Reporting",
      image: "analysis.png",
      content: "Data is at the heart of our digital marketing strategies. Our analytics and reporting services provide you with detailed insights into your marketing performance. We track key metrics, analyze user behavior, and measure the effectiveness of your campaigns. By translating data into actionable insights, we help you make informed decisions and continuously optimize your marketing efforts to achieve better results.",
      routeName: "contactus/Analytics-report"
    },
    {
      al: "right",
      heading: "Conversion Optimization",
      image: "conversion.png",
      content: "We turn visitors into customers by improving your website's user experience. Our conversion optimization services include analyzing user behavior, identifying barriers, and implementing strategies like A/B testing to enhance site performance and increase conversion rates.",
      routeName: "contactus/Conversion-optimization"
    }
  ]

  const serviceHighlights = [
    { number: "8+", label: "Core Services", icon: "🎯" },
    { number: "100%", label: "Custom Solutions", icon: "🚀" },
    { number: "24/7", label: "Support Available", icon: "💼" },
    { number: "ROI", label: "Focused Results", icon: "📈" }
  ]

  return (
    <div className="color1 bgSkin min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center mt-6 px-4 text-center">
        {/* Animated Heading */}
        <motion.h1
          className="font2 text-4xl sm:text-5xl md:text-6xl textBrown"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our <span className="font3 text-[#5a1f32]">Services</span>
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          className="textBrown text-base sm:text-lg italic mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Empowering businesses with comprehensive digital solutions
        </motion.p>

        {/* Animated Divider Line */}
        <motion.div
          className="h-[2px] w-12 sm:w-16 bgBrown mt-4 mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        />

        {/* Value Proposition */}
        <motion.p
          className="font3 textBrown text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          From strategic planning to execution, we deliver end-to-end digital marketing solutions 
          that drive growth, enhance brand visibility, and maximize ROI for businesses of all sizes.
        </motion.p>
      </div>

      {/* Service Highlights */}
      <motion.div 
        className="w-[90%] mx-auto py-8 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {serviceHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bgBrown rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-2">{highlight.icon}</div>
              <div className="font2 text-2xl textSkin mb-1">{highlight.number}</div>
              <div className="font3 textSkin text-sm">{highlight.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services List */}
      <div className="font2 textBrown w-[90%] sm:w-[80%] mx-auto py-5 text-3xl sm:text-4xl flex flex-col gap-y-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <motion.div 
        className="w-full bgBrown py-16 mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-[90%] mx-auto text-center">
          <h2 className="font2 text-4xl md:text-5xl textSkin mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="font3 text-lg textSkin opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive digital marketing services can help you 
            achieve your business goals and drive sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-white textBrown font3 text-lg rounded-lg hover:bg-opacity-90 transition-all shadow-lg font-semibold"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-block px-8 py-4 border-2 border-white textSkin font3 text-lg rounded-lg hover:bg-white hover:textBrown transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}
