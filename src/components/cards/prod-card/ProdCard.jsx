import React from "react";
import { currencyFormat } from "../../../utils/format/intl-format";

const ProdCard = ({ image, model, brand, desc, rom, ram, price }) => {
  return (
    <section className="bg-slate-200 w-[200px] h-[350px] ring-1 ring-slate-400 hover:shadow-2xl transition-all duration-300">
      <div className="">
        <img
          src={`http://localhost:8000/${image}`}
          alt="image pic"
          width={200}
          className="p-1 bg-transparent"
        />
      </div>
      <div className="w-full px-3 flex justify-start items-center space-x-1 text-[12px] font-poppins font-semibold mt-2">
        <p>{brand}</p>
        <p className="truncate">{model}</p>
      </div>
      <p className="w-full px-3 text-[11px] font-poppins truncate">{desc}</p>
      <p className="w-full px-3 text-[11px] font-poppins truncate">
        ROM: {rom} RAM: {ram}
      </p>
      <p className="px-3 text-[11px] font-semibold font-poppins text-orange-600">
        {currencyFormat(price)}
      </p>
    </section>
  );
};

export default ProdCard;
