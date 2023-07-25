import React from "react";

const FeaturedPhoneCard = ({ image }) => {
  const img = import.meta.env.VITE_BASE_URL + "/" + image;
  return (
    <div className="w-[250px] h-[320px] bg-slate-200 ring-1 ring-slate-300 hover:shadow-2xl duration-300">
      <div className="w-[100px]">
        <img src={img} alt="Featured Phone" />
      </div>
    </div>
  );
};

export default FeaturedPhoneCard;
