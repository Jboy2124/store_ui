import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  useGetProductsByIdQuery,
  useAddToDBCartMutation,
} from "../../../endpoints/handlers/product-handler";
import ImageContainer from "../../../components/container/ImageContainer";
import { currencyFormat } from "../../../utils/format/intl-format";
import { scrollTop } from "../../../utils/scroll/ScrollToTop";
import { useDispatch } from "react-redux";
import { db } from "../../../db";
import { verifyStatus } from "../../../endpoints/slices/logged-status-slice";

const ProductDisplay = () => {
  const [user, setUser] = useState([]);
  const [searchParams] = useSearchParams();
  const paramsId = searchParams.get("id");
  const { data = [] } = useGetProductsByIdQuery(paramsId);
  const [addToDBCart] = useAddToDBCartMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    scrollTop(0);
    getUser();
  }, []);

  const getUser = async () => {
    const info = await db.personal.toArray();
    if (info) setUser(info);
  };

  async function handleAddToCart(e, prodId) {
    e.preventDefault();

    if (!user[0]?.profId) {
      navigate("/login");
    } else {
      await db.cart.add({
        prodId: prodId,
        count: 1,
      });
      addToDBCart({
        userId: user[0]?.userId,
        prodId: prodId,
        currentCount: 1,
        operation: "increment",
      });
      dispatch(verifyStatus(true));
    }
  }

  return (
    <section className="bg-slate-100 font-poppins">
      <div className="container">
        <div className="min-h-screen flex justify-evenly items-start pt-20">
          <div className="w-full flex justify-center items-center">
            <ImageContainer
              imagePath={data && data.image}
              width={500}
              height={0}
            />
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
