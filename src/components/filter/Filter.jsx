import React from "react";
import { BsSearch } from "react-icons/bs";

const Filter = () => {
  return (
    <section className="bg-slate-200 text-[14px] font-poppins sticky top-[65px] border-b-2 border-b-slate-300">
      <div className="container">
        <div className="h-[55px] flex justify-between items-center">
          <div className=" space-x-2 flex items-center">
            <label htmlFor="filter" className="text-[12px]">
              Filter:
            </label>
            <select
              name="filter"
              className="px-2 py-[5px] outline-none w-[150px] bg-slate-100 text-[14px] text-gray-500 ring-1 ring-slate-300 ring-inset"
            >
              <option value="">select...</option>
              <option value="brand">Brand</option>
              <option value="Model">Model</option>
              <option value="ROM">ROM</option>
              <option value="RAM">RAM</option>
            </select>
            <input
              type="text"
              placeholder="specify..."
              className="w-[250px] px-2 py-[6px] text-[13px] outline-none bg-slate-100 ring-1 ring-slate-300 ring-inset"
            />
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="search..."
              className="text-[13px] py-[6px] px-2 w-[300px] outline-none bg-slate-100 ring-1 ring-slate-300 ring-inset"
            />
            <span className="flex justify-center items-center px-[10px] bg-slate-300 text-gray-400 cursor-pointer">
              <BsSearch size={16} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
