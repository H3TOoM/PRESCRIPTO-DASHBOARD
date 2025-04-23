import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddDoctor from "./pages/AddDoctor";
import DoctorList from "./pages/DoctorList";
import AllApointments from "./pages/AllApointments";

const App = () => {
  return (
    <div className="bg-zinc-50">
      <Navbar />
      <div className="flex gap-2 sm:gap-2 mt-5">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctor-list" element={<DoctorList />} />
          <Route path="/all-appointment" element={<AllApointments />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
