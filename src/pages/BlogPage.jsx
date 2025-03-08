import React from 'react';
import { useParams } from 'react-router-dom';

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
  const blog = blogs.find((blog) => blog.id === id); 

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className='w-full bg-[#ffeecd] py-12'>
      <div className='w-[90%] mx-auto'>
        {/* Blog Title */}
        <h1 className='font2 text-4xl md:text-5xl text-[#772c47] mb-8'>
          {blog.title}
        </h1>

        {/* Blog Image */}
        <div className='w-full h-64 md:h-96 overflow-hidden rounded-lg mb-8'>
          <img
            src={blog.photo}
            alt={blog.title}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Blog Content */}
        <p className='font3 text-lg text-[#772c47] leading-relaxed'>
          {blog.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPage;