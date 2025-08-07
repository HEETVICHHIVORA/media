import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';

// Enhanced mock data for blogs
const blogs = [
  {
    id: '1',
    title: 'How to Grow Your Business',
    photo: '/blog1.jpg',
    author: 'Mediatryx Team',
    publishDate: '2024-01-15',
    readTime: '5 min read',
    category: 'Business Growth',
    excerpt: 'Strategic insights and proven methods to scale your business effectively in today\'s competitive market.',
    content: `
      Growing your business requires a combination of strategic planning, effective marketing, and strong customer relationships. 
      Start by identifying your target audience and understanding their needs. Use data-driven insights to refine your products 
      or services and ensure they meet market demands. 
      
      Invest in digital marketing strategies such as SEO, social media, and email campaigns to reach a wider audience. Additionally, 
      focus on building a loyal customer base by providing exceptional customer service and engaging with your audience regularly. 
      
      Remember, growth is a continuous process, so always be open to feedback and willing to adapt to changing market trends. 
      Success comes from consistent effort, strategic thinking, and the ability to pivot when necessary.
    `,
  },
  {
    id: '2',
    title: 'The Power of Advertising',
    photo: '/blog2.jpg',
    author: 'Marketing Expert',
    publishDate: '2024-01-20',
    readTime: '7 min read',
    category: 'Digital Marketing',
    excerpt: 'Discover how effective advertising strategies can transform your brand visibility and drive meaningful results.',
    content: `
      Advertising is a powerful tool that can significantly impact your brand's visibility and sales. A well-crafted advertising 
      campaign can help you reach new customers, build brand awareness, and drive conversions. 
      
      Start by defining your advertising goals and identifying your target audience. Choose the right platforms for your campaigns, 
      whether it's social media, search engines, or traditional media. Create compelling and visually appealing ads that resonate 
      with your audience and communicate your brand's message effectively. 
      
      Monitor the performance of your campaigns and make adjustments as needed to maximize ROI. Remember, consistency is key in 
      advertising, so ensure your messaging aligns with your brand identity and speaks directly to your audience's needs.
    `,
  },
];

const BlogPage = () => {

  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === id);
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[id, navigate]);
  if (!blog) {
    return (
      <div className='w-full bgSkin min-h-screen textBrown flex flex-col'>
        <Navbar />
        <motion.div 
          className='flex-1 flex flex-col justify-center items-center p-8'
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <h1 className="font2 text-3xl md:text-4xl mb-4">Blog Not Found</h1>
            <p className="font3 text-lg opacity-70 mb-6">The blog post you're looking for doesn't exist.</p>
            <motion.button
              onClick={() => navigate('/')}
              className="px-6 py-3 bgBrown textSkin font3 text-lg rounded-lg hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Back to Home
            </motion.button>
          </div>
        </motion.div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className='w-full bgSkin min-h-screen textBrown'>
      <Navbar />
      
      <motion.article 
        className='w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] mx-auto py-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back Navigation */}
        <motion.div
          className='mb-8'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className='flex items-center gap-2 font3 text-lg hover:text-[#5a1d33] transition-colors group'
            onClick={() => navigate('/')}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} className="group-hover:translate-x-[-2px] transition-transform" />
            Back to Home
          </motion.button>
        </motion.div>

        {/* Blog Header */}
        <motion.header 
          className='text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Category Badge */}
          <motion.div
            className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/30"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="font3 text-sm font-medium">{blog.category}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            className='font2 text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {blog.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            className="font3 text-lg md:text-xl opacity-80 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {blog.excerpt}
          </motion.p>

          {/* Meta Information */}
          <motion.div 
            className='flex flex-wrap justify-center items-center gap-6 text-sm opacity-70'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="font3">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="font3">{formatDate(blog.publishDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="font3">{blog.readTime}</span>
            </div>
          </motion.div>
        </motion.header>

        {/* Featured Image */}
        <motion.div 
          className='relative w-full h-64 md:h-80 lg:h-96 mb-12 rounded-2xl overflow-hidden shadow-2xl'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative frame */}
          <div className="absolute -inset-2 bg-gradient-to-br from-current/20 to-transparent rounded-2xl opacity-50"></div>
          <div className="absolute -inset-1 border-2 border-current/20 rounded-2xl"></div>
          
          <div className="relative w-full h-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl overflow-hidden">
            <LazyImage
              src={blog.photo}
              alt={blog.title}
              className='w-full h-full object-cover'
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div 
          className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/30 mb-12'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Content header decoration */}
          <div className="flex items-center mb-8">
            <div className="w-2 h-8 bgBrown rounded-full mr-4"></div>
            <h2 className="font2 text-2xl md:text-3xl">Article Content</h2>
          </div>

          {/* Formatted content */}
          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <motion.p 
                key={index}
                className='font3 text-base md:text-lg leading-relaxed mb-6 text-justify'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {paragraph.trim()}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div 
          className='text-center bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="font2 text-2xl md:text-3xl mb-4">Enjoyed this article?</h3>
          <p className="font3 text-lg opacity-80 mb-6">
            Explore more insights and expert advice on our homepage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => navigate('/')}
              className='px-8 py-3 bgBrown textSkin font3 text-lg rounded-lg hover:bg-opacity-90 transition-all shadow-lg'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
            </motion.button>
            
            <motion.button
              onClick={() => navigate('/contactus')}
              className='px-8 py-3 bg-white/20 backdrop-blur-sm textBrown font3 text-lg rounded-lg hover:bg-white/30 transition-all border border-white/30'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </motion.article>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
