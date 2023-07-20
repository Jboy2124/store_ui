import React from "react";

const Profile = () => {
  return (
    <div className="w-[270px] shadow-xl h-[30px] hover:h-[400px] hover:shadow-xl rounded-b-lg cursor-pointer bg-slate-300 transition-all duration-500">
      <div className="container">
        <div className="text-center text-[13px] text-slate-800 pt-[2px]">Profile</div>
        <div className="h-[380px] flex justify-center items-center">
          <p className="text-black">Center</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
