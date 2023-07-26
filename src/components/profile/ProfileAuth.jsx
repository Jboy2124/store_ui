import React from "react";
import { NavLink } from "react-router-dom";

const ProfileAuth = () => {
  return (
    <ul className="flex items-center space-x-6">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </ul>
  );
};

export default ProfileAuth;
