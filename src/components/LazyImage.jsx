import React, { useState } from "react";

const LazyImage = ({ src, alt, className, placeholder }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Skeleton Loading Effect (Only shows before image loads) */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200/[0.5] animate-pulse z-10">
          {/* Optional: Shimmer Effect (Uncomment if needed) */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" /> */}
        </div>
      )}

      {/* Low-quality placeholder (blur effect) - Kept as before */}
      <img
        src={placeholder || "/placeholder.jpg"}
        alt={alt}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-0" : "opacity-100 blur-sm"
        }`}
      />

      {/* Actual Image - Kept as before */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

export default LazyImage;