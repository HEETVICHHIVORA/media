import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const blogs = [
  {
    id: '1',
    title: 'How to Grow Your Business',
    photo: '/ws1.png',
    content: 'Learn the best strategies to grow your business and reach new heights. Whether you are a startup or an established business, these tips will help you scale effectively...',
  },
  {
    id: '2',
    title: 'The Power of Advertising',
    photo: '/ws2.png',
    content: 'Advertising is a powerful tool to increase brand awareness and drive sales. Discover how to create impactful campaigns that resonate with your audience...',
  },
];

const BlogPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const blog = blogs.find((blog) => blog.id === id); 

  if (!blog) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-[#772c47] text-2xl">
        Blog not found!
      </div>
    );
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
        <h1 className="font2 text-4xl md:text-5xl text-[#772c47] font-bold mb-8 leading-snug">
          {blog.title}
        </h1>

        {/* Blog Image */}
        <div className="w-full h-34 md:h-66 overflow-hidden rounded-lg mb-8 ">
          <img
            src={blog.photo}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog Content */}
        <p className="font3 text-lg text-[#772c47] leading-relaxed text-justify">
          {blog.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
