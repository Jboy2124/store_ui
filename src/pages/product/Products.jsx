import React, { useEffect, useState } from "react";
import Filter from "../../components/filter/Filter";
import {
  useAllProductsQuery,
  useGetTotalProductsQuery,
} from "../../endpoints/handlers/product-handler";
import { useSearchParams } from "react-router-dom";
import ProdCard from "../../components/cards/prod-card/ProdCard";
import Pagination from "../../components/paginate/Pagination";
import { scrollTop } from "../../utils/scroll/ScrollToTop";

const Products = () => {
  const initialPage = 1;
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParams = searchParams.get("page") || initialPage;
  const { data: total = [] || 0 } = useGetTotalProductsQuery();
  const { data = [] } = useAllProductsQuery(pageParams);

  function handlePageOnChange(event) {
    setSearchParams({ page: event.selected + 1 });
    scrollTop(0);
  }

  useEffect(() => {
    scrollTop(0);
    setSearchParams({ page: Number(pageParams) });
  }, []);

  return (
    <main className="bg-slate-100 font-poppins">
      <Filter />
      <section className="container py-10">
        <div className="min-h-screen flex justify-center items-start">
          <div className="grid grid-cols-4 gap-5 mt-10">
            {data.map((items, index) => {
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
        <div className="w-full flex justify-center items-center mt-20">
          <Pagination
            total={Number(total)}
            currentPage={Number(pageParams)}
            handlePageClick={handlePageOnChange}
          />
        </div>
      </section>
    </main>
  );
};

export default Products;
