import React, { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { verifyStatus } from "../../endpoints/slices/logged-status-slice";
import { db } from "../../db";

const Profile = ({ user, cartCount }) => {
  const count = useSelector((state) => state.cart.basket);
  const dispatch = useDispatch();

  function handleClickCart(e) {
    e.preventDefault();
    alert("Cart Clicked");
  }

  async function handleUserClicked(e) {
    e.preventDefault();
    await db.personal.clear();
    await db.cart.clear();
    dispatch(verifyStatus(false));
  }

  return (
    <div className="flex justify-center items-center space-x-6">
      <div className="relative flex justify-center items-center">
        <span
          className="absolute p-2 hover:bg-gray-100 hover:bg-opacity-20 rounded-full duration-300 cursor-pointer peer"
          onClick={(e) => handleClickCart(e)}
        >
          <BsCart2 size={22} className=" text-white" />
        </span>
        <div
          className={`absolute flex justify-center items-center pt-[1px] pr-[1px] w-5 h-5 rounded-full bg-red-600 cursor-pointer top-[-20px] right-[-20px] ring-2 ring-[#9336B4] peer-hover:ring-1 peer-hover:ring-gray-100 peer-hover:ring-opacity-40 peer-hover:duration-300 ${
            cartCount > 0 ? "block" : "hidden"
          }`}
        >
          <span className={`${cartCount > 99 ? "text-[9px]" : "text-[11px]"}`}>
            {cartCount > 99 ? "99+" : cartCount}
          </span>
        </div>
      </div>

      <div className="">
        Hi,{" "}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="px-1 cursor-pointer hover:underline underline-offset-8"
          >
            {user}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 bg-slate-100 w-52 mt-[6px] shadow-2xl text-gray-600 font-normal"
          >
            {/* <li className="">
              <a></a>
            </li> */}
            <li onClick={(e) => handleUserClicked(e)}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
