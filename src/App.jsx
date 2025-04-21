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
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-doctor" element={<AddDoctor/>} />
        <Route path="/doctor-list" element={<DoctorList/>} />
        <Route path="/all-appointment" element={<AllApointments/>} />
      </Routes>
    </div>
  );
};

export default App;
