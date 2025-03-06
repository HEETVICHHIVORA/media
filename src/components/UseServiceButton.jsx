import React from "react";
import { useNavigate } from "react-router-dom";

const UseServiceButton = ({routeName}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(routeName)}
      className="w-fit bg-[#772c47] hover:bg-[#772c48d7] text-[#ffeecd] cursor-pointer font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-lg"
    >
      Explore
    </button>
  );
};

export default UseServiceButton;
