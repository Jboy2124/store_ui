import React from "react";
import FeaturedPhoneCard from "../cards/features-card/FeaturedPhoneCard";
import { useGetFeaturedProductsQuery } from "../../endpoints/handlers/product-handler";

const Feature = () => {
  const { data = [] } = useGetFeaturedProductsQuery();

  return (
    <div className="bg-slate-100 mt-20 font-poppins">
      <div className="container">
        <div className="text-center">
          <p className="text-[25px]">Feature</p>
        </div>
        <div className="h-[65vh] flex justify-center items-start py-5">
          <div className="grid grid-cols-4 place-items-center gap-24">
            {data?.map((items, index) => {
              return <FeaturedPhoneCard key={index} image={items.image} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
