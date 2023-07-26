import React, { useEffect, useState } from "react";
import { navMenu } from "../../utils/const/nav-menu";
import { NavLink } from "react-router-dom";
import Profile from "../profile/Profile";
import ProfileAuth from "../profile/ProfileAuth";

const Navbar = () => {
  const [sessionId, setSessionId] = useState("");
  const [sessionUser, setSessionUser] = useState("");

  useEffect(() => {
    setSessionId(sessionStorage.getItem("session.id"));
    setSessionUser(sessionStorage.getItem("session.user"));
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#40128B] to-[#9336B4] text-white text-[15px] font-poppins sticky top-0 z-20">
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
                          ? " border-b-2 border-orange-500"
                          : " border-b-2 border-transparent"
                      }`;
                    }}
                  >
                    {items.name}
                  </NavLink>
                );
              })}
            </ul>
          </div>
          <div className="">
            {sessionId ? <Profile user={sessionUser} /> : <ProfileAuth />}
            {/* <ProfileAuth /> */}
            {/* <Profile /> */}
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
