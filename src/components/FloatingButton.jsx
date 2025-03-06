import React from "react";

const FloatingButton = () => {
  return (
    <a
      href="/contact" // Change this to your contact page route
      className="fixed bottom-20 right-10 bg-[#772c47] text-white px-5 py-3 rounded-full shadow-lg text-lg font-semibold transition duration-200 
                 hover:bg-[#772c48d2] hover:shadow-xl z-50 
                 "
    >
      Let's Connect
    </a>
  );
};

export default FloatingButton;
