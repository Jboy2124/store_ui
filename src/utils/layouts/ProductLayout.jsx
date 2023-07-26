import React from "react";
import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <div className="bg-slate-200">
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductLayout;
