import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
  // Add more blogs here
];

const BlogPage = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const blog = blogs.find((blog) => blog.id === id); // Find the blog by ID

  if (!blog) {
    return <div className='w-full bg-[#ffeecd] py-12 text-center font3 text-2xl text-[#772c47]'>Blog not found!</div>;
  }

  return (
    <div className="w-full bg-[#fff7e6] py-12 h-full">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto p-6 bg-white rounded-lg shadow-lg">

        {/* Back Button */}
        <button 
          className="mb-6 text-[#772c47] font-semibold text-lg flex items-center gap-2 hover:text-[#5a1d33] transition-all"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Blog Title */}
        <h1 className='font2 text-4xl md:text-5xl text-[#772c47] text-center mb-8'>
          {blog.title}
        </h1>

        {/* Blog Image */}
        <div className='w-full h-64 md:h-96 overflow-hidden rounded-lg mb-8 shadow-lg'>
          <img
            src={blog.photo}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className='bg-white p-8 rounded-lg shadow-lg'>
          <p className='font3 text-lg text-[#772c47] leading-relaxed'>
            {blog.content}
          </p>
        </div>

        {/* Back Button */}
        <div className='mt-8 text-center'>
          <a
            href='/'
            className='inline-block px-8 py-3 bg-[#772c47] text-[#ffeecd] font3 text-lg rounded-lg hover:bg-opacity-90 transition-all'
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
