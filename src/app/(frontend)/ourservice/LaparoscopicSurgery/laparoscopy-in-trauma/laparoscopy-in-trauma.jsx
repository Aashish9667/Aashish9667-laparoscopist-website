import React from "react";
import Image from "next/image";

export default function SingleIncisionLaparoscopicSurgery() {
  return (
    <div className="md:p-20 p-10 bg-gray-300">
      {/* ✅ Centered container for desktop */}
      <div className="max-w-[1200px] mx-auto">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-40">
          {/* Left Side Text */}
          <div className="md:w-1/2">
            <h1 className="text-[32px] mb-5 font-semibold text-gray-900 md:tracking-wide md:whitespace-nowrap">
              Laparoscopy in Trauma
            </h1>

            {/* Image between h1 and p only on mobile */}
            <div className="block md:hidden mb-5 bg-white rounded-2xl">
              <img
                src="/Haematoma-_-Haemoperitonium-Drainage-768x768.png"
                alt="Surgery"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            <p className="text-[20px] text-[#00000099] mb-5 leading-relaxed">
              Haematoma / Haemoperitonium Drainage
            </p>
            <p className="text-[20px] text-[#00000099] mb-5 md:w-[600px] text-justify">
              Laparoscopic surgery is emerging as an alternative in patients with
              abdominal injuries. It helps to quantify the injury correctly in
              haemodynamically stable patients with abdominal trauma. Blood in
              the abdominal cavity can be drained and bleeding controlled. In
              addition to this, damaged spleen can also be removed.
            </p>
          </div>

          {/* Right Side Image (Hidden on mobile, shown on desktop) */}
          <div className="hidden  md:w-1/2 bg-white rounded-2xl md:flex justify-center">
            <img
              src="/Haematoma-_-Haemoperitonium-Drainage-768x768.png"
              alt="Surgery"
              className="rounded-2xl w-[300px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
