import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock data for blogs (replace with your actual data source)
const blogs = [
  {
    id: '1',
    title: 'How to Grow Your Business',
    photo: '/blog1.jpg',
    content: `
      Growing your business requires a combination of strategic planning, effective marketing, and strong customer relationships. 
      Start by identifying your target audience and understanding their needs. Use data-driven insights to refine your products 
      or services and ensure they meet market demands. Invest in digital marketing strategies such as SEO, social media, and 
      email campaigns to reach a wider audience. Additionally, focus on building a loyal customer base by providing exceptional 
      customer service and engaging with your audience regularly. Remember, growth is a continuous process, so always be open to 
      feedback and willing to adapt to changing market trends.
    `,
  },
  {
    id: '2',
    title: 'The Power of Advertising',
    photo: '/blog2.jpg',
    content: `
      Advertising is a powerful tool that can significantly impact your brand's visibility and sales. A well-crafted advertising 
      campaign can help you reach new customers, build brand awareness, and drive conversions. Start by defining your advertising 
      goals and identifying your target audience. Choose the right platforms for your campaigns, whether it's social media, search 
      engines, or traditional media. Create compelling and visually appealing ads that resonate with your audience and communicate 
      your brand's message effectively. Monitor the performance of your campaigns and make adjustments as needed to maximize ROI. 
      Remember, consistency is key in advertising, so ensure your messaging aligns with your brand identity.
    `,
  },
];

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === id);
  const navigate = useNavigate();

  if (!blog) {
    return (
      <motion.div 
        className='w-full h-full bgSkin py-12 flex justify-center items-center font3 text-2xl textBrown'
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Blog not found!
      </motion.div>
    );
  }

  return (
    <motion.div 
      className='w-full bgSkin min-h-screen textBrown'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar/>
      <motion.div 
        className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto p-6 rounded-lg shadow-lg border border-[#772c47] mt-4'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Back Button */}
        <motion.button
          className='mb-6 font3 text-lg flex items-center gap-2 hover:text-[#5a1d33] transition cursor-pointer'
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
        >
          ← Back
        </motion.button>

        {/* Blog Title */}
        <motion.h1 
          className='font2 text-4xl md:text-5xl text-center mb-8'
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {blog.title}
        </motion.h1>

        {/* Blog Image */}
        <motion.div 
          className='w-full h-64 md:h-96 overflow-hidden rounded-lg mb-8 shadow-lg border border-[#772c47]'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img
            src={blog.photo}
            alt={blog.title}
            className='w-full h-full object-cover'
          />
        </motion.div>

        {/* Blog Content */}
        <motion.div 
          className='p-8 rounded-lg shadow-lg border border-[#772c47]'
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className='font3 text-lg leading-relaxed'>
            {blog.content}
          </p>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div 
          className='mt-8 text-center'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button
            onClick={() => navigate('/')}
            className='inline-block px-8 py-3 bgBrown textSkin font3 text-lg rounded-lg hover:bg-opacity-90 transition cursor-pointer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </motion.div>
      <Footer/>
    </motion.div>
  );
};

export default BlogPage;
