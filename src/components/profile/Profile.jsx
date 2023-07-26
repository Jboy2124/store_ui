import React from "react";
import { BsCart2 } from "react-icons/bs";

const Profile = () => {
  const count = 0;
  return (
    <div className="flex justify-center items-center space-x-6">
      <div className="relative flex justify-center items-center">
        <span className="absolute p-2 hover:bg-gray-100 hover:bg-opacity-20 rounded-full duration-300 cursor-pointer peer">
          <BsCart2 size={22} className=" text-white" />
        </span>
        <div
          className={`relative w-5 h-5 rounded-full bg-red-600 cursor-pointer top-[-10px] right-[-10px] ring-2 ring-[#9336B4] flex justify-center items-center peer-hover:ring-1 peer-hover:ring-gray-100 peer-hover:ring-opacity-40 peer-hover:duration-300 ${
            count > 0 ? "block" : "hidden"
          }`}
        >
          <span className={`${count > 99 ? "text-[9px]" : "text-[11px]"}`}>
            {count > 99 ? "99+" : count}
          </span>
        </div>
      </div>

      <div>Profile</div>
    </div>
  );
};

export default Profile;
