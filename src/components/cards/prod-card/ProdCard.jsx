import React from "react";
import { currencyFormat } from "../../../utils/format/intl-format";
import { createSearchParams, useNavigate, useLocation } from "react-router-dom";

const ProdCard = (data) => {
  const img = import.meta.env.VITE_BASE_URL + "/" + data.image;
  const navigate = useNavigate();
  const location = useLocation();

  function handleClickImage(e, data) {
    e.preventDefault();
    const params = { id: data.id };
    navigate({
      pathname: `${location.pathname}/details`,
      search: createSearchParams(params).toString(),
    });
  }

  return (
    <section className="bg-slate-200 w-[200px] h-[330px] ring-1 ring-slate-400 hover:shadow-2xl transition-all duration-300">
      <div className="">
        <img
          src={img}
          alt="Product Image"
          width={200}
          className="p-1 hover:cursor-pointer"
          onClick={(e) => handleClickImage(e, { id: data.id })}
        />
      </div>
      <div className="w-full px-3 flex justify-start items-center space-x-1 text-[12px] font-poppins font-semibold mt-2">
        <p>{data.brand}</p>
        <p className="truncate">{data.model}</p>
      </div>
      <p className="w-full px-3 text-[11px] font-poppins truncate">
        {data.desc}
      </p>
      <p className="w-full px-3 text-[11px] font-poppins truncate">
        ROM: {data.rom} RAM: {data.ram}
      </p>
      <p className="px-3 text-[11px] font-semibold font-poppins text-orange-600">
        {currencyFormat(data.price)}
      </p>
    </section>
  );
};

export default ProdCard;
