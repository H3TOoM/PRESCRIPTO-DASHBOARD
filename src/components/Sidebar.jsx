import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { assets } from "../assets_admin/assets";
const Sidebar = () => {
  return (
    <div className="min-h-screen bg-white border-r border-gray-100 w-1/5 py-5 mt-10">
      <ul className="text-[#515151] w-1/5">
        <NavLink
          to="/dashboard"
          className="flex items-center gap-2 py-3.5 md:px-9 md:min-w-67 cursor-pointer"
        >
          <img src={assets.home_icon} className="min-w-5" />{" "}
          <p class="hidden md:block">Dashboard</p>
        </NavLink>
        <NavLink
          to="/all-appointment"
          className="flex items-center gap-2 py-3.5 md:px-9 md:min-w-67 cursor-pointer"
        >
          <img src={assets.appointment_icon} className="min-w-5"/>{" "}
          <p class="hidden md:block">Appointments</p>
        </NavLink>
        <NavLink
          to="/add-doctor"
          className=" flex items-center gap-2 py-3.5 md:px-9 md:min-w-67 cursor-pointer"
        >
          <img src={assets.add_icon} className="min-w-5"/>{" "}
          <p class="hidden md:block">Add Doctor</p>
        </NavLink>
        <NavLink
          to="/doctor-list"
          className="flex items-center gap-2 py-3.5 md:px-9 md:min-w-67 cursor-pointer"
        >
          <img src={assets.people_icon} className="min-w-5"/>{" "}
          <p class="hidden md:block">Doctors List</p>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
