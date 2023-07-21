import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-slate-300 font-poppins">
      <section className="container mx-auto">
        <div className="h-[200px] flex justify-evenly items-center">
          <p>Footer</p>
          <p
            className="cursor-pointer hover:underline underline-offset-4 text-[14px]"
            onClick={() => navigate("/products/add")}
          >
            Add New Products
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
