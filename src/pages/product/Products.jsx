import React, { useEffect } from "react";
import Filter from "../../components/filter/Filter";
import { useAllProductsQuery } from "../../endpoints/handlers/product-handler";
import ProdCard from "../../components/cards/prod-card/ProdCard";

const Products = () => {
  const { data = [], isSuccess } = useAllProductsQuery();

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

  return (
    <main className="bg-slate-200">
      <Filter />
      <section className="container">
        <div className="min-h-screen flex flex-wrap justify-center items-start mt-10">
          <div className="grid grid-cols-3 gap-5">
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
