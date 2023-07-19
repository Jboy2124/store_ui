import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-gradient-to-b from-primary to-secondary text-white font-poppins">
      <section className="container mx-auto">
        <div className="h-[70vh] flex justify-between items-start pt-5">
          <div>Logo</div>
          <div>Menu</div>
          <div>Profile</div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
