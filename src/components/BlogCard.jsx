// components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

const BlogCard = ({ 
  id, 
  title, 
  photo, 
  content, 
  author = "Mediatryx Team", 
  date = "Recent", 
  readTime = "5 min read",
  category = "General"
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100"
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <LazyImage
          src={photo}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bgBrown textSkin px-3 py-1 rounded-full text-xs font-semibold font3">
            {category}
          </span>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm textBrown opacity-70 mb-3">
          <span className="font3">{author}</span>
          <span className="font3">{readTime}</span>
        </div>

        {/* Title */}
        <h3 className="font2 text-xl textBrown mb-3 group-hover:text-[#5a1f32] transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Content Preview */}
        <p className="font3 textBrown opacity-80 text-sm leading-relaxed mb-4 line-clamp-3">
          {content}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs textBrown opacity-60 font3">{date}</span>
          <Link 
            to={`/blog/${id}`}
            className="inline-flex items-center textBrown hover:text-[#5a1f32] font3 text-sm font-semibold group/link"
          >
            Read More
            <svg 
              className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
