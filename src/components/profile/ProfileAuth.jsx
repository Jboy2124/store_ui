import React from "react";
import { NavLink } from "react-router-dom";

const ProfileAuth = () => {
  return (
    <ul className="flex items-center space-x-5">
      <NavLink to="/login" className="hover:underline underline-offset-8">
        Login
      </NavLink>
      <NavLink to="/register" className="hover:underline underline-offset-8">
        Register
      </NavLink>
    </ul>
  );
};

export default ProfileAuth;
