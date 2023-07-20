import React from "react";
import { navMenu, profileMenu } from "../../utils/const/nav-menu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#205E61] to-[#3F979B] text-white text-[15px] font-poppins sticky top-0">
      <section className="container">
        <div className="h-[65px] flex justify-between items-center">
          <div className="flex justify-start items-center space-x-16">
            <div className="text-[28px]">
              <span className=" text-orange-500">mobile</span>
              <span>shop</span>
            </div>
            <ul className="flex items-center space-x-5">
              {navMenu.map((items) => {
                return (
                  <NavLink
                    key={items.id}
                    to={items.link}
                    className={({ isActive }) => {
                      return `px-2 py-2 ${
                        isActive
                          ? "ring-1 ring-slate-300 bg-gray-500"
                          : ""
                      }`;
                    }}
                  >
                    {items.name}
                  </NavLink>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="flex items-center space-x-6">
              {profileMenu.map((i) => {
                return (
                  <NavLink key={i.id} to={i.link}>
                    {i.name}
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
