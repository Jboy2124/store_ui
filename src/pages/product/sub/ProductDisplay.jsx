import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetProductsByIdQuery } from "../../../endpoints/handlers/product-handler";
import ImageContainer from "../../../components/container/ImageContainer";
import { currencyFormat } from "../../../utils/format/intl-format";
import { scrollTop } from "../../../utils/scroll/ScrollToTop";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../endpoints/slices/cart-slice";

const ProductDisplay = () => {
  const [cartVal, setCartValue] = useState(0);
  const [searchParams] = useSearchParams();
  const paramsId = searchParams.get("id");
  const { data = [] } = useGetProductsByIdQuery(paramsId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    scrollTop(0);
  }, []);

  function handleAddToCart(e, prodId) {
    e.preventDefault();
    const sessionId = sessionStorage.getItem("session.id");

    if (!sessionId) {
      navigate("/login");
    } else {
      setCartValue((val) => val + 1);
      dispatch(addToCart(cartVal));
    }
  }

  return (
    <section className="bg-slate-100 font-poppins">
      <div className="container">
        <div className="min-h-screen flex justify-evenly items-start pt-20">
          <div className="w-full flex justify-center items-center">
            <ImageContainer imagePath={data.image} width={500} height={0} />
          </div>
          <div className="w-full mt-12 flex flex-col justify-start items-start text-[20px]">
            <p className="">SKU#: {data?.sku}</p>
            <p className="font-semibold text-[25px]">Brand: {data?.brand}</p>
            <p className="">
              Model: {data?.model} {data?.desc}
            </p>
            <p className="">Color: {data?.color} </p>
            <p>ROM: {data?.rom}</p>
            <p>RAM: {data?.ram}</p>
            <p>
              Price:{" "}
              <span className="text-orange-600">
                {currencyFormat(data?.inventory?.amount)}
              </span>
            </p>
            <div className="flex justify-evenly items-center space-x-5 mt-10">
              <button className="px-16 py-2 ring-1 ring-orange-600 ring-inset">
                Favorites
              </button>
              <button
                className="px-16 py-2 bg-orange-600 text-white"
                onClick={(e) => handleAddToCart(e, paramsId)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
