import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-transparent text-black font-poppins sticky top-0">
      <section className="container">
        <div className="h-[60px] flex justify-between items-center">
          <div className="text-[28px]">
            <span className=" text-textPrimary">online</span>
            <span>store</span>
          </div>
          <div>Menu</div>
          <div>Profile</div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
