import React from "react";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Profile = ({ user }) => {
  const count = useSelector((state) => state.cart.basket);
  // const count = ca;

  function handleClickCart(e) {
    e.preventDefault();
    alert(`Cart Value: ${count}`);
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
            count > 0 ? "block" : "hidden"
          }`}
        >
          <span className={`${count > 99 ? "text-[9px]" : "text-[11px]"}`}>
            {count > 99 ? "99+" : count}
          </span>
        </div>
      </div>

      <div className="font-semibold">
        Hi,{" "}
        <span className="hover:underline underline-offset-4 cursor-pointer">
          {user}
        </span>
      </div>
    </div>
  );
};

export default Profile;
