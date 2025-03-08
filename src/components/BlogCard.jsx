import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, photo, content }) => {
  return (
    <Link to={`/blog/${id}`} className='w-full'>
      <div className='w-full bg-[#ffeecd] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer'>
        {/* Image Section */}
        <div className='w-full h-48 md:h-56 lg:h-64 overflow-hidden'>
          <img
            src={photo}
            alt={title}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Content Section */}
        <div className='p-6'>
          {/* Title */}
          <h3 className='font2 text-2xl md:text-3xl text-[#772c47] mb-4'>
            {title}
          </h3>

          {/* Limited Content */}
          <p className='font3 text-lg text-[#772c47] line-clamp-3'>
            {content}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;