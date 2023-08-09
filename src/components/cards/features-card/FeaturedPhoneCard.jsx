import React from "react";
import ImageContainer from "../../container/ImageContainer";
import { useNavigate } from "react-router-dom";

const FeaturedPhoneCard = ({ image }) => {
  const navigate = useNavigate();

  function handleShopClick(e) {
    navigate("/products");
  }

  return (
    <div className="relative w-[250px] h-[305px] bg-slate-200 ring-1 ring-slate-300 hover:shadow-2xl duration-300 group">
      <div className="absolute w-[250px] h-[305px] p-1 group-hover:opacity-50 group-hover:bg-gray-500 transition-all duration-200 rounded">
        <ImageContainer
          imagePath={image}
          width={250}
          height={0}
          className="rounded"
        />
      </div>
      <span className="absolute w-full mt-32 text-center hidden group-hover:block group-hover:duration-200">
        <button
          className="px-6 py-2 ring-1 ring-orange-600 ring-inset text-orange-600 bg-slate-200 text-[13px]"
          onClick={(e) => handleShopClick(e)}
        >
          Shop Now
        </button>
      </span>
    </div>
  );
};

export default FeaturedPhoneCard;
