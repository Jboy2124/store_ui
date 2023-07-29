import React, { useEffect, useState } from "react";
import { db } from "../../../db";
import CartCard from "../../../components/cards/cart-card/CartCard";

const ProductCart = () => {
  const [data, setData] = useState([]);

  async function cartItems() {
    const result = await db.cart.toArray();
    console.log(result);
    setData(result);
  }

  useEffect(() => {
    cartItems();
  }, []);

  return (
    <main className="bg-slate-100">
      <div className="container">
        <div className="min-h-screen flex justify-between items-start">
          <div className="w-full py-16 bg-red-200">
            <div className="flex flex-col justify-center items-center gap-2">
              {data.length > 0 ? (
                data.map((items, index) => {
                  return <CartCard key={index} />;
                })
              ) : (
                <div>No selected item(s) in your cart.</div>
              )}
            </div>
          </div>
          <div className="w-full py-16">Right</div>
        </div>
      </div>
    </main>
  );
};

export default ProductCart;
