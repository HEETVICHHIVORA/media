import React from "react";
import { useNavigate } from "react-router-dom";

const UseServiceButton = ({routeName}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(routeName)}
      className="w-fit bgBrown hover:bg-[#772c48d7] textSkin cursor-pointer font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-lg"
      
    >
      Let's connect
    </button>
  );
};

export default UseServiceButton;

