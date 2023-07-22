import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-slate-200 font-poppins text-gray-600">
      <section className="container">
        <div className="min-h-screen flex justify-center items-center space-x-10">
          <div className="text-[60px]">404</div>
          <div className="flex flex-col justify-start">
            <span className="text-[25px]">Page not found</span>
            <p className="text-[13px]">
              Navigate to{" "}
              <span
                className="text-orange-600 hover:underline underline-offset-4 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Homepage
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
