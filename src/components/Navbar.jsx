import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets_admin/assets";

const Navbar = () => {
  const [token, setToken] = useState(true);
  const navigate = useNavigate();

  const logout = () => {
    setToken(false);
    navigate("/login");
  };
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b border-gray-100 bg-white absolute top-0 left-0 right-0 z-10">
      <div className="flex items-center gap-2 text-xs">
        <img src={assets.admin_logo} className="w-36 sm:w-40 cursor-pointer" />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          admin
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-[#5F6FFF] text-white text-sm px-10 py-2 rounded-full cursor-pointer"
      >
        logout
      </button>
    </div>
  );
};

export default Navbar;
