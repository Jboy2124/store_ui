import React from "react";

const ProdCard = ({ model, brand, desc, price }) => {
  return (
    <section className="bg-slate-200 w-[250px] h-[350px] ring-1 ring-slate-400 hover:shadow-2xl transition-all duration-300">
      <div className="w-full h-[260px] bg-gray-300"></div>
      <div className="w-full px-3 flex justify-start items-center space-x-1 text-[12px] font-poppins font-semibold mt-2">
        <p>{brand}</p>
        <p className="truncate">{model}</p>
      </div>
      <p className="w-full px-3 text-[11px] font-poppins truncate">{desc}</p>
      <p className="px-3 text-[11px] font-poppins text-orange-600">{price}</p>
    </section>
  );
};

export default ProdCard;
