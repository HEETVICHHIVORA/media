import React from 'react'
import Navbar from '../components/Navbar'
import { ServiceCard } from '../components/ServiceCard'
import {motion} from 'framer-motion'
import Footer from '../components/Footer'

export const Services3 = () => {

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
      content: <div className="w-[90%] sm:w-[80%] py-6 flex flex-col">
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
              </div>,
      routeName: "/content-creation"
    },
    {
      al: "right",
      heading:"Social Media",
      image: "social_media.png",
      content:        <div
                className="w-[90%] sm:w-[80%] py-6 flex flex-col items-center text-center"
              >
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
              </div>,
      routeName: "/social-media"
    },
    {
      al: "left",
      heading:"PPC Advertising",
      image: "PPC-Advertising.png",
      content:<div
        className="w-[90%] sm:w-[80%] py-6 text-center"
      >
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
              </div>,
      routeName: "/ppc-advertising"
    },
    {
      al: "right",
      heading:"Email Marketing",
      image: "email_marketing.png",
      content:        <div
                  className="w-[90%] sm:w-[80%] py-6 flex flex-col sm:flex-row items-center"
                  >      
                  {/* Right Side - List with Checkmarks & Dotted Lines */}
                  <div className="w-full mt-8 sm:mt-0">
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
              </div>,
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
    <div className="color1 min-h-screen w-full">
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

      <Footer/>
    </div>
  )
}
