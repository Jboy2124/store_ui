import React, { useEffect, useState } from "react";
import { db } from "../../../db";
import {
  useGetProductListWhereInMutation,
  useAddToDBCartMutation,
} from "../../../endpoints/handlers/product-handler";
import { useUpdateCartMutation } from "../../../endpoints/handlers/cart-handler";
import { useNewTransactionMutation } from "../../../endpoints/handlers/transaction-handler";
import { currencyFormat } from "../../../utils/format/intl-format";
import { useDispatch } from "react-redux";
import { verifyStatus } from "../../../endpoints/slices/logged-status-slice";
import { BsTrash, BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";

const ProductCart = () => {
  const [btnCheckout, setBtnCheckout] = useState(true);
  const [total, setTotal] = useState(0);
  const [itemSelected, setItemSelected] = useState([]);
  const [codChecked, setCodChecked] = useState(false);
  const [gcashChecked, setGcashChecked] = useState(false);
  const [cardChecked, setCardChecked] = useState(false);
  const [qty, setQty] = useState(0);
  const [getProductListWhereIn, { data = [] }] =
    useGetProductListWhereInMutation();
  const [updateCart] = useUpdateCartMutation();
  const [addToDBCart] = useAddToDBCartMutation();
  const [newTransaction] = useNewTransactionMutation();
  const dispatch = useDispatch();

  //fetching the products from the cart
  //the data is stored at the indexeddb
  async function cartItems() {
    const cartList = await db.cart.toArray();
    const users = await db.personal.toArray();

    let arr = [];

    if (cartList.length > 0) {
      arr = cartList.map((items) => {
        return items.prodId;
      });
      getProductListWhereIn({ userId: users[0].userId, prodId: arr });
    } else {
      getProductListWhereIn({ userId: 1, prodId: ["empty"] });
    }
    dispatch(verifyStatus(true));
  }

  useEffect(() => {
    cartItems();
  }, []);

  function handleChangeQty(e) {
    console.log(e.target.value);
  }

  function handleCODChekced() {
    setCodChecked(true);
    setGcashChecked(false);
    setCardChecked(false);
  }

  function handleGcashChecked() {
    setCodChecked(false);
    setGcashChecked(true);
    setCardChecked(false);
  }

  function handleCardChecked() {
    setCodChecked(false);
    setGcashChecked(false);
    setCardChecked(true);
  }

  async function handleRemoveFromSelectAll(e) {
    e.preventDefault();

    const cartProducts = await db.cart.toArray();
    const user = await db.personal.toArray();

    itemSelected.forEach((prodId) => {
      updateCart({
        prodId: prodId,
        userId: user[0]?.userId,
      });

      cartProducts.forEach((key) => {
        if (key.prodId === prodId) {
          const id = key.idCart;
          db.cart.delete(id);
        }
      });
    });

    setItemSelected([]);
    cartItems();
  }

  async function handleRemoveIndividual(e, prodId) {
    e.preventDefault();
    const didExist = await db.cart.where({ prodId: prodId }).toArray();
    const user = await db.personal.toArray();
    db.cart.delete(didExist[0]?.idCart);
    updateCart({
      userId: user[0]?.userId,
      prodId: prodId,
    });

    cartItems();
  }

  function handleSelectAll(e) {
    setItemSelected(e.target.checked ? data.map((items) => items.prodId) : []);
  }

  function handleSelectIndividual(e, prod) {
    setItemSelected((prev) =>
      e.target.checked
        ? [...itemSelected, prod]
        : prev.filter((item) => item !== prod)
    );
  }

  const orderSummary = {
    totalPrice: () => {
      let total = 0;
      itemSelected.forEach((items) => {
        for (let i = 0; i < data.length; i++) {
          if (items === data[i].prodId) {
            total += data[i].inventory[0].amount * data[i].cart[0].count;
          } else {
            total += 0;
          }
        }
      });
      return total;
    },

    totalItems: () => {
      let total = 0;
      itemSelected.forEach((items) => {
        for (let i = 0; i < data.length; i++) {
          if (items === data[i].prodId) {
            total += data[i].cart[0].count;
          } else {
            total += 0;
          }
        }
      });
      return total;
    },

    shippingFee: () => {
      let total = 0;
      itemSelected.forEach((items) => {
        for (let i = 0; i < data.length; i++) {
          if (items === data[i].prodId) {
            total += data[i].cart[0].count * 45;
          } else {
            total += 0;
          }
        }
      });
      return total;
    },
  };

  useEffect(() => {
    setTotal(orderSummary.totalPrice() + orderSummary.shippingFee());
    if (orderSummary.totalPrice() === 0) {
      setBtnCheckout(true);
      setCodChecked(false);
      setCardChecked(false);
      setGcashChecked(false);
    } else setBtnCheckout(false);
  }, [orderSummary]);

  function handleClickedAddQty(e, id) {
    e.preventDefault();
    changeQty(id, "add");
  }

  function handleClickedMinusQty(e, id) {
    e.preventDefault();
    changeQty(id, "minus");
  }

  async function changeQty(id, opType) {
    const user = await db.personal.toArray();
    const isExisting = await db.cart.where({ prodId: id }).toArray();

    if (isExisting.length > 0) {
      const cnt = isExisting[0]?.count;
      await db.cart.update(isExisting[0]?.idCart, {
        count: opType === "add" ? cnt + 1 : cnt === 1 ? 1 : cnt - 1,
      });

      addToDBCart({
        userId: user[0]?.userId,
        prodId: id,
        currentCount: 1,
        operation: opType === "add" ? "increment" : "decrement",
      });
    }
    dispatch(verifyStatus(true));
    cartItems();
  }

  async function handlePlaceOrder(e) {
    e.preventDefault();
    let payload;
    let arr = [];
    const profile = await db.personal.toArray();
    const user = profile[0].userId;

    itemSelected.forEach((id) => {
      for (let i = 0; i < data.length; i++) {
        if (id === data[i].prodId) {
          arr.push({
            prodId: id,
            qty: data[i].cart[0]?.count,
            price: data[i].inventory[0]?.amount,
            shipping: 45,
          });
        }
      }
    });

    payload = {
      userId: user,
      obj: arr,
    };

    newTransaction(payload);
    handleRemoveFromSelectAll(e);
  }

  return (
    <main className="bg-slate-100 font-poppins">
      <div className="container px-24">
        <div className="min-h-screen flex justify-between items-start px-32 py-5 space-x-2">
          <div className="w-full h-screen overflow-y-auto py-5 bg-slate-200">
            <div className="flex flex-col items-center gap-2">
              <div className="w-[600px] h-[40px] bg-white ring-1 ring-slate-300 ring-inset flex justify-between items-center">
                <div className="flex justify-center items-center px-2 space-x-1">
                  <input
                    type="checkbox"
                    id="select-all"
                    name="select-all"
                    className="w-4 h-4 ml-1 cursor-pointer"
                    checked={
                      itemSelected.length === data.length && data.length !== 0
                    }
                    onChange={handleSelectAll}
                  />
                  <label htmlFor="select-all" className="text-[13px]">
                    Select All
                  </label>
                </div>
                <div className="px-2">
                  <span
                    className="text-[13px] hover:text-orange-600 cursor-pointer pr-3"
                    onClick={(e) => handleRemoveFromSelectAll(e)}
                  >
                    Remove
                  </span>
                </div>
              </div>
              {data.length > 0 ? (
                data.map((items, index) => {
                  // value={items?.cart[0]?.count}
                  // setQty(items?.cart[0]?.count);
                  let q = items?.cart[0]?.count;
                  return (
                    <div
                      key={index}
                      className="w-[600px] h-[130px] bg-white ring-1 ring-slate-300 ring-inset flex items-center"
                    >
                      <div className="mx-3">
                        <input
                          type="checkbox"
                          name="chk"
                          value={items?.prodId}
                          checked={itemSelected.includes(items?.prodId)}
                          className="w-4 h-4 cursor-pointer"
                          onChange={(e) =>
                            handleSelectIndividual(e, items?.prodId)
                          }
                        />
                      </div>
                      <div className="w-[100px] py-1 flex justify-center items-center mr-2">
                        <img
                          src={`${import.meta.env.VITE_BASE_URL}/${
                            items?.image
                          }`}
                          alt="Product"
                        />
                      </div>
                      <div className="w-[300px] h-[130px] flex flex-col items-start py-3">
                        <div className="flex font-semibold text-[18px] space-x-2">
                          <p>{items?.brand}</p>
                          <p>{items?.model}</p>
                          <p>{items?.desc}</p>
                        </div>
                        <p className="text-[13px]">{items?.color}</p>
                        <div className="flex text-[12px] space-x-5">
                          <p>ROM: {items?.rom}</p>
                          <p>RAM: {items?.ram}</p>
                        </div>
                      </div>
                      <div className="w-[140px] h-[130px] flex flex-col items-end py-3">
                        <p className="text-[18px] text-orange-600 font-semibold pr-2">
                          {currencyFormat(
                            items?.inventory[0]?.amount
                              ? items?.inventory[0]?.amount
                              : 0
                          )}
                        </p>
                        <div className="w-full flex justify-end mt-3 pr-2">
                          <button
                            type="button"
                            className="px-3 py-1 bg-slate-100 flex justify-center items-center hover:ring-1 ring-slate-300 ring-inset active:bg-slate-200"
                            onClick={(e) =>
                              handleClickedMinusQty(e, items?.prodId)
                            }
                          >
                            <BsCaretDownFill
                              size={20}
                              className="text-slate-400"
                            />
                          </button>
                          <input
                            type="text"
                            // value={items?.cart[0]?.count}
                            value={q}
                            className="w-[50px] py-1 text-center outline-none hover:ring-1 ring-slate-300 ring-inset"
                            onChange={handleChangeQty}
                          />
                          <button
                            type="button"
                            className="px-3 py-1 bg-slate-100 flex justify-center items-center hover:ring-1 ring-slate-300 ring-inset active:bg-slate-200"
                            onClick={(e) =>
                              handleClickedAddQty(e, items?.prodId)
                            }
                          >
                            <BsCaretUpFill
                              size={20}
                              className="text-slate-400"
                            />
                          </button>
                        </div>
                        <div className="w-full flex justify-end px-2 mt-3 space-x-2 text-gray-400">
                          <p>
                            <BsTrash
                              title="Delete Item"
                              size={22}
                              className="hover:text-orange-600 duration-300 cursor-pointer "
                              onClick={(e) =>
                                handleRemoveIndividual(e, items?.prodId)
                              }
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>No data</div>
              )}
            </div>
          </div>
          <div className="w-[65%] bg-slate-200">
            <div className="w-full h-screen flex justify-center items-start py-5">
              <div className="w-[390px] h-[580px] bg-white ring-1 ring-slate-300 ring-inset">
                <div className="w-full">
                  <p className="text-center mt-8 font-semibold text-[18px]">
                    Order Summary
                  </p>
                  <p className="text-center mb-8 text-[11px] text-orange-600">
                    All items are VAT inclusive
                  </p>
                  <div className="flex justify-between items-end mt-10 px-10 text-[14px]">
                    <p>Number of Item(s):</p>
                    {/* totalItems */}
                    <p>{orderSummary.totalItems()}</p>
                  </div>
                  <div className="flex justify-between items-end mt-1 px-10 text-[14px]">
                    <p>Sub-total:</p>
                    <p>{currencyFormat(orderSummary.totalPrice())}</p>
                  </div>
                  <div className="flex justify-between items-end mt-1 px-10 text-[14px]">
                    <p>Shipping Fee:</p>
                    {/* shippingFee */}
                    <p>{currencyFormat(orderSummary.shippingFee())}</p>
                  </div>
                  <div className="flex justify-between items-end mt-1 px-10 text-[14px]">
                    <p>Discount:</p>
                    <p>{currencyFormat(0)}</p>
                  </div>
                  <div className="px-10 mt-2">
                    <hr />
                  </div>
                  <div className="flex justify-between items-end mt-1 px-10 text-[14px] font-semibold">
                    <p>Total:</p>
                    <p className="text-orange-600">{currencyFormat(total)}</p>
                  </div>
                  <div className="flex flex-col items-start mt-10 px-10 text-[14px]">
                    <p className=" font-semibold mb-3">Mode of Payment</p>
                    <div className="pl-3 flex justify-start items-center space-x-1">
                      <input
                        type="radio"
                        id="cod"
                        name="mode"
                        value="cod"
                        className="w-4 h-4 cursor-pointer"
                        checked={codChecked}
                        onChange={handleCODChekced}
                      />
                      <label
                        htmlFor="cod"
                        className={`${
                          gcashChecked || cardChecked ? "line-through" : ""
                        }`}
                      >
                        Cash on Delivery (COD)
                      </label>
                    </div>
                    <div className="pl-3 flex justify-start items-center space-x-1">
                      <input
                        type="radio"
                        id="gcash"
                        name="mode"
                        value="gcash"
                        className="w-4 h-4 cursor-pointer"
                        checked={gcashChecked}
                        onChange={handleGcashChecked}
                      />
                      <label
                        htmlFor="gcash"
                        className={`${
                          codChecked || cardChecked ? "line-through" : ""
                        }`}
                      >
                        via GCash
                      </label>
                    </div>
                    <div className="pl-3 flex justify-start items-center space-x-1">
                      <input
                        type="radio"
                        id="card"
                        name="mode"
                        value="card"
                        className="w-4 h-4 cursor-pointer"
                        checked={cardChecked}
                        onChange={handleCardChecked}
                      />
                      <label
                        htmlFor="gcash"
                        className={`${
                          codChecked || gcashChecked ? "line-through" : ""
                        }`}
                      >
                        Debit/Credit Card
                      </label>
                    </div>
                  </div>
                  <div className="text-center mt-14 mb-5">
                    <button
                      type="button"
                      className="px-20 py-2 bg-orange-600 text-white active:bg-orange-700 duration-300 text-[15px] disabled:bg-slate-300 disabled:text-gray-700"
                      disabled={btnCheckout}
                      onClick={(e) => handlePlaceOrder(e)}
                    >
                      Place your Order(s)
                    </button>
                  </div>
                  <div className="w-full px-16 text-center">
                    <p className="text-[11px] text-orange-600">
                      Note: After placing your order, you have exactly One (1)
                      day to cancel your order(s), otherwise it will proceed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductCart;
