import React from 'react'
import Navbar from '../components/Navbar'
import { ServiceCard } from '../components/ServiceCard'
import {motion} from 'framer-motion'

export const Services = () => {

  const services=[
    {
      al: "left",
      heading: "Web Design",
      image: "web_design.png",
      content: "Your website is often the first impression potential customers have of your business. Our web design services focus on creating visually appealing, user-friendly, and responsive websites that reflect your brand and engage your audience. We prioritize functionality and aesthetics, ensuring that your website not only looks great but also provides a seamless user experience. Our goal is to convert visitors into customers through effective design and intuitive navigation.",
      routeName: "/web-design"
    },
    {
      al: "right",
      heading: "SEO Optimization",
      image: "seo.png",
      content: "Search Engine Optimization (SEO) is at the core of our digital marketing strategy. Our SEO services aim to increase your website’s visibility on search engines, driving organic traffic and improving your online presence. We conduct thorough keyword research, optimize your website’s content and structure, and implement effective link-building strategies. Our goal is to help you rank higher on search engines, attract more visitors, and convert them into loyal customers.",
      routeName: "/seo-opt"
    },
    {
      al: "left",
      heading: "Content Creation",
      image: "content_crt.png",
      content: "Compelling content is key to engaging your audience and driving conversions. Our content creation services include crafting high-quality blog posts, articles, social media updates, and multimedia content that resonate with your target audience. We focus on creating content that not only informs and entertains but also aligns with your brand’s voice and objectives. By consistently delivering valuable content, we help you build trust and authority in your industry.",
      routeName: "/content-creation"
    },
    {
      al: "right",
      heading:"Social Media",
      image: "social_media.png",
      content:"Social media connects you with your audience and builds brand awareness. Our services include strategy development, content creation, community management, and paid advertising tailored to each platform. We ensure your brand message is consistent and engaging, maximizing reach and impact through analytics and audience interaction.",
      routeName: "/social-media"
    },
    {
      al: "left",
      heading:`PPC Advertising`,
      image: "PPC-Advertising.png",
      content:"Pay-Per-Click (PPC) advertising is an effective way to drive targeted traffic to your website. Our PPC services include creating and managing campaigns on platforms like social media. We focus on optimizing your ad spend to achieve the highest return on investment (ROI). Our team continuously monitors and adjusts your campaigns to ensure optimal performance, helping you reach your target audience and achieve your marketing goals.",
      routeName: "/ppc-advertising"
    },
    {
      al: "right",
      heading:"Email Marketing",
      image: "email_marketing.png",
      content:"Email marketing nurtures leads and engages your audience. Our services cover strategy, list management, and personalized campaigns. We create automated email sequences to deliver timely messages, analyze performance, and optimize content to build strong subscriber relationships and drive conversions.",
      routeName: "/email-marketing"
    },
    {
      al: "left",
      heading:"Analytics & Reporting",
      image: "analysis.png",
      content:"Data is at the heart of our digital marketing strategies. Our analytics and reporting services provide you with detailed insights into your marketing performance. We track key metrics, analyze user behavior, and measure the effectiveness of your campaigns. By translating data into actionable insights, we help you make informed decisions and continuously optimize your marketing efforts to achieve better results.",
      routeName: "/analytics-report"
    },
    {
      al: "right",
      heading:"Conversion Optimization",
      image: "conversion.png",
      content:"We turn visitors into customers by improving your website's user experience. Our conversion optimization services include analyzing user behavior, identifying barriers, and implementing strategies like A/B testing to enhance site performance and increase conversion rates.",
      routeName: "/consulting-training"
    }
  ]

  return (
    <div className="color1 bgColor min-h-screen w-full">
      <Navbar />


      <div className="w-full flex flex-col items-center mt-6 px-4 text-center">
        {/* Animated Heading */}
        <motion.h2
          className="font2 text-4xl sm:text-5xl md:text-6xl text-[#772c47]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our <span className="font3 text-[#5a1f32]">Services</span>
        </motion.h2>

        {/* Animated Subheading */}
        <motion.p
          className="text-[#772c47] text-base sm:text-lg italic mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Empowering businesses with top-notch solutions
        </motion.p>

        {/* Animated Divider Line */}
        <motion.p
          className="h-[2px] w-12 sm:w-16 bg-[#772c47] mt-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        ></motion.p>
      </div>

      <div className="font2 fontColor w-[90%] sm:w-[80%] mx-auto py-5 text-3xl sm:text-4xl flex flex-col gap-y-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  )
}
