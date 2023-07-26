import React, { useEffect, useState } from "react";
import Filter from "../../components/filter/Filter";
import {
  useAllProductsQuery,
  useGetTotalProductsQuery,
} from "../../endpoints/handlers/product-handler";
import ProdCard from "../../components/cards/prod-card/ProdCard";

const Products = () => {
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState([]);
  const { data: total = [] } = useGetTotalProductsQuery();
  const { data = [] } = useAllProductsQuery(page);

  useEffect(() => {
    setResponse([...response, ...data]);
  }, [data]);

  return (
    <main className="bg-slate-100 font-poppins">
      <Filter />
      <section className="container">
        <div className="min-h-[80vh] flex justify-center items-start">
          <div className="grid grid-cols-4 gap-5 mt-10">
            {response.map((items, index) => {
              return (
                <ProdCard
                  key={index}
                  id={items?.prodId}
                  image={items?.image}
                  brand={items?.brand}
                  model={items?.model}
                  desc={items?.desc}
                  rom={items?.rom}
                  ram={items?.ram}
                  price={items?.inventory?.amount}
                />
              );
            })}
          </div>
        </div>
        <div className="h-[15vh] flex justify-center items-center">
          {response.length < total ? (
            <button
              type="button"
              className={`px-24 py-2 bg-orange-600 text-white text-[14px]`}
              onClick={() => setPage((pageNum) => pageNum + 1)}
            >
              Load more...
            </button>
          ) : (
            <p className="text-center text-[13px]">No more data to display</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Products;
