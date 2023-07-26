import React from "react";
import ImageContainer from "../../container/ImageContainer";

const FeaturedPhoneCard = ({ image }) => {
  function handleShopClick(e) {
    alert("Click");
  }

  return (
    <div className="relative w-[250px] h-[400px] bg-slate-200 ring-1 ring-slate-300 hover:shadow-2xl duration-300 group">
      <div className="absolute w-[250px] p-1 group-hover:opacity-70 group-hover:bg-gray-500 transition-all duration-200">
        <ImageContainer imagePath={image} width={250} height={0} />
      </div>
      <span className="absolute w-full mt-44 text-center hidden group-hover:block group-hover:duration-200">
        <button
          className="px-14 py-2 bg-orange-600 text-white"
          onClick={(e) => handleShopClick(e)}
        >
          Shop Now
        </button>
      </span>
    </div>
  );
};

export default FeaturedPhoneCard;
