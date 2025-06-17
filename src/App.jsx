import React, { useContext } from "react";
import Login from "./pages/Login";
import { AdminContext } from "./Context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { DoctorContext } from "./Context/DoctorContext";
import Dashboard from "./pages/admin/Dashboard";
import AllAppointments from "./pages/admin/AllApointments";
import AddDoctor from "./pages/admin/AddDoctor";
import DoctorsList from "./pages/admin/DoctorList";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorAppointments from "./pages/doctor/DoctorAppointment";
import DoctorProfile from "./pages/doctor/DoctorProfile";



const App = () => {
  // const { aToken } = useContext(AdminContext);
  // const { dToken } = useContext(DoctorContext);
  return  (
    <div className="bg-[#F8F9FD]">

      <Navbar />
      <div className="flex items-start pt-5">
        <Sidebar />
        <Routes className="pt-5">
          {/* Admin Route */}
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllAppointments />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctor-list" element={<DoctorsList />} />

          {/* Doctor Route */} 
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor-appointments" element={<DoctorAppointments />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  ) 
  
};

export default App;
