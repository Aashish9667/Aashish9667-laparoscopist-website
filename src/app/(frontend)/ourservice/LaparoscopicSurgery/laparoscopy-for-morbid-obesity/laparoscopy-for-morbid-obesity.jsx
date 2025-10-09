import React from "react";
import Image from "next/image";

export default function SingleIncisionLaparoscopicSurgery() {
  return (
    <div className="md:p-20 p-10 bg-gray-300">
      {/* ✅ Centered container for desktop */}
      <div className="max-w-[1200px] mx-auto">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-20">
          {/* Left Side Text */}
          <div className="md:w-1/2">
            <h1 className="text-[32px] mb-5 font-semibold text-gray-900 md:tracking-wide md:whitespace-nowrap">
              Laparoscopy For Morbid Obesity
            </h1>

            {/* Image between h1 and p only on mobile */}
            <div className="block md:hidden mb-5 bg-white rounded-2xl">
              <img
                src="/Laparoscopy_for_morbid_Obesity.png"
                alt="Surgery"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            <p className="text-[20px] text-[#00000099] mb-5 leading-relaxed md:w-[600px] text-justify">
              The patients with morbid obesity or obesity with metabolic
              disorders like diabetes have a surgical option to help them
              overcome their problems. The diabetes goes into remission
              immediately after surgery.
            </p>

            <p className="text-[20px] text-[#00000099] mb-5">
              The procedures available are :-
            </p>
            <ul className="text-[16px] text-[#00000099] mb-5 list-disc ml-6">
              <li>Sleeve Gastrectomy</li>
              <li>Gastric Bypass</li>
              <li>Gastric Banding</li>
            </ul>
            <p className="text-[20px] text-[#00000099] mb-5">
              Surgery is reserved for patients who have exhausted all other
              options for weight loss. Proper counseling is done by the
              bariatric team to decide the best procedure for each patient.
            </p>
          </div>

          {/* Right Side Image (Hidden on mobile, shown on desktop) */}
          <div className="hidden  md:w-1/2 md:flex justify-center">
            <img
              src="/Laparoscopy_for_morbid_Obesity.png"
              alt="Surgery"
              className="rounded-2xl w-[300px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
