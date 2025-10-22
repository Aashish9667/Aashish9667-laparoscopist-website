import React from "react";
import Image from "next/image";

export default function SingleIncisionLaparoscopicSurgery() {
  return (
    <div className="md:p-20 p-10">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-12">
        {/* Left Side Text */}
        <div className="md:w-1/2">
          <h1 className="text-[32px] mb-5 font-semibold text-gray-900 md:tracking-wide md:whitespace-nowrap">
            Single Incision Laparoscopic Surgery
          </h1>

          {/*  Image between h1 and p only on mobile */}
          <div className="block md:hidden mb-5">
            <img
              src="/Single-Incision-Laparoscopic-Surgery.png"
              alt="Surgery"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          <p className="text-[20px] text-[#00000099] mb-5 leading-relaxed">
            Single Incision Laparoscopic surgery (SILS) is a further advancement
            in laparoscopic surgery. It is now possible to do almost all
            laparoscopic procedures through a single incision instead of the
            multiple incisions used in conventional multi-port laparoscopy.
            Special instruments are required for these procedures. The most
            commonly performed SILS procedures are:
          </p>

          <ul className="text-[#00000099] text-[16px] list-disc ml-6 md:ml-10 space-y-1">
            <li>Cholecystectomy</li>
            <li>Hysterectomy</li>
            <li>Ovarian Cystectomy</li>
            <li>Appendectomy</li>
          </ul>
        </div>

        {/* Right Side Image (Hidden on mobile, shown on desktop) */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/Single-Incision-Laparoscopic-Surgery.png"
            alt="Surgery"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
