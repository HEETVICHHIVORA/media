import React, { useState } from "react";

const LazyImage = ({ src, alt, className, placeholder }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative`}>
      {/* Low-quality placeholder (blur effect) */}
      <img
        src={placeholder || "/media/placeholder.jpg"} // Small, lightweight image
        alt={alt}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-0" : "opacity-100 blur-sm"}`}
      />

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

export default LazyImage;
