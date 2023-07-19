import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent text-black font-poppins">
      <section className="container">
        <div className="h-[60px] flex justify-between items-center">
          <div className="text-[28px]">
            <span className=" text-textPrimary">online</span>
            <span>store</span>
          </div>
          <div>Menu</div>
          <div>
            <button className="active:scale-75 text-white text-[14px] bg-orange-600 duration-500 rounded hover:bg-blue-400">
              Login
            </button>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
