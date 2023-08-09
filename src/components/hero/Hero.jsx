import React from "react";
import PhoneImg from "../../assets/hero2.png";
import { styles } from "../../utils/styles/styles";

const Hero = () => {
  return (
    <section className="relative bg-slate-100 text-white font-poppins">
      <div className="h-[70vh]">
        <div className="absolute bg-gradient-to-r from-[#40128B] to-[#9336B4] w-full h-full skew-y-[-5deg] top-[-70px]"></div>
        <div className="container">
          <div className="relative flex justify-evenly items-start">
            <div className="w-full h-[70vh] flex flex-col justify-center items-center">
              <span className="text-[60px] text-center">Stay connected.</span>
              <span className="text-[40px]">"on-the-go"</span>
              <span className="text-[14px] text-center mt-2">
                Get the best phone with affordable price.
              </span>
              <button className={`${styles.btnSubmit} mt-5`}>Shop now</button>
            </div>
            <div className="w-full flex justify-center items-center mt-14">
              <img
                src={PhoneImg}
                alt="hero-image"
                className="h-[60vh] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
