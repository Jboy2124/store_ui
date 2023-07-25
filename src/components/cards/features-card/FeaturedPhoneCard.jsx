import React from "react";

const FeaturedPhoneCard = ({ image }) => {
  return (
    <div className="w-[250px] h-[320px] bg-slate-200 ring-1 ring-slate-300 hover:shadow-2xl duration-300">
      <img src={`http://localhost:8000/${image}`} />
    </div>
  );
};

export default FeaturedPhoneCard;
