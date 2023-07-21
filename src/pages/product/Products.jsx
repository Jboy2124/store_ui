import React, { useEffect } from "react";
import Filter from "../../components/filter/Filter";
import { useAllProductsQuery } from "../../endpoints/handlers/product-handler";
import ProdCard from "../../components/cards/prod-card/ProdCard";
import { styles } from "../../utils/styles/styles";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const { data = [], isSuccess } = useAllProductsQuery();
  const { role } = useSelector((state) => state.authenticate.role);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(role);
  // }, [data]);

  return (
    <main className="bg-slate-100">
      <Filter />
      <section className="container">
        <div className="mt-5">
          <button
            className={`${styles.btnSubmit} ${
              role === "ADMIN" ? "block" : "hidden"
            }`}
            onClick={() => navigate("/products/add")}
          >
            Create Product
          </button>
        </div>
        <Outlet />
        <div className="min-h-screen flex justify-center items-start mt-10">
          <div className="grid grid-cols-3 gap-5 mt-5 mb-14">
            {data.map((items, index) => {
              return (
                <ProdCard
                  key={index}
                  brand={items?.brand}
                  model={items?.model}
                  desc={items?.desc}
                  price={items?.inventory?.amount}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
