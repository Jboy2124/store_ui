import React, { useEffect, useState } from "react";
import { navMenu } from "../../utils/const/nav-menu";
import { NavLink } from "react-router-dom";
import Profile from "../profile/Profile";
import ProfileAuth from "../profile/ProfileAuth";
import { db } from "../../db/index";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [statusVerified, setStatusVerified] = useState("");
  const verifiedSelector = useSelector((state) => state.status.verified);
  const [loggedUser, setLoggedUser] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setStatusVerified(verifiedSelector);
    fetchUser();
  }, [statusVerified]);

  const fetchUser = async () => {
    let total = 0;
    const user = await db.personal.toArray();
    const cart = await db.cart.toArray();

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].count;
    }

    if (user && cart) {
      setLoggedUser(user);
      setCartTotal(total);
      setStatusVerified("");
    }
  };

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
            {loggedUser[0]?.profId ? (
              <Profile user={loggedUser[0]?.user} cartCount={cartTotal} />
            ) : (
              <ProfileAuth />
            )}
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
