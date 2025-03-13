import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, photo, content }) => {
  return (
    <Link to={`/blog/${id}`} className="w-full textBrown">
      <div className="w-full bgSkin rounded-xl overflow-hidden shadow-lg border border-[#d9b99b] 
          transition-all duration-300 transform hover:scale-105 hover:shadow-xl 
          hover:ring-1 hover:ring-[#772c47] cursor-pointer flex flex-col h-full">
        
        {/* Image Section */}
        <div className="w-full h-44 md:h-52 lg:h-60 relative overflow-hidden">
          <img
            src={photo || 'https://via.placeholder.com/600x400?text=No+Image'}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="font2 text-2xl md:text-3xl mb-3 font-semibold tracking-wide">
            {title}
          </h3>

          {/* Limited Content */}
          <p className="font3 text-lg  line-clamp-3 flex-grow">
            {content}
          </p>

          {/* Read More Button */}
          <div className="mt-auto">
            <span className="font-semibold underline text-lg hover:text-[#5a1d33] transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
