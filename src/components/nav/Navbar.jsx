import React from "react";
import { navMenu } from "../../utils/const/nav-menu";
import { styles } from "../../utils/styles/styles";
import Profile from "../profile/Profile";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#205E61] to-[#3F979B] text-white font-poppins sticky top-0">
      <section className="container">
        <div className="h-[65px] flex justify-between items-center">
          <div className="flex justify-start items-center space-x-16">
            <div className="text-[28px]">
              <span className=" text-orange-500">mobile</span>
              <span>shop</span>
            </div>
            <ul className="flex items-center space-x-5">
              {navMenu.map((items) => {
                return <li key={items.id}>{items.name}</li>;
              })}
            </ul>
          </div>
          <div>
            <ul className="flex items-center space-x-3">
              <button className={styles.btn_secondary}>Login</button>
              <button className={styles.btn_primary}>Register</button>
            </ul>
          </div>
        </div>
        <div className="fixed top-[65px] right-52">
          <Profile />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
