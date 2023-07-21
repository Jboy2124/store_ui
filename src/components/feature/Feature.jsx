import React from "react";
import FeaturedPhoneCard from "../cards/features-card/FeaturedPhoneCard";

const Feature = () => {
  const featureMobile = ["Apple", "Samsung", "Huawei", "Oppo"];
  return (
    <div className="bg-slate-100 mt-20 font-poppins">
      <div className="container">
        <div className="text-center">
          <p className="text-[25px]">Feature</p>
        </div>
        <div className="h-[55vh] flex justify-center items-start py-5">
          <div className="grid grid-cols-4 place-items-center gap-5">
            {featureMobile.map((items, index) => {
              return <FeaturedPhoneCard key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
