import React from "react";
import { doctors } from "../assets_frontend/assets";

const DoctorList = () => {
  return (
    <div className="px-8 py-15">
      <p className="font-medium mb-5 text-l">All Doctors</p>
      <div className="w-full grid gap-5 grid-cols-4">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] transition-all duration-500"
          >
            <img src={item.image} alt="" className="bg-blue-50 blur-xs" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-xs">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
