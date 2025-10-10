// app/page.js or pages/index.js
'use client';
import Image from 'next/image';
import * as React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
export default function Homehero() {
  return (
    <div className="relative w-full md:h-[677px] h-full mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="Background"
          className="object-cover"
          src="/Gemini_Generated_Image_rctj8xrctj8xrctj.png"
          fill
          priority
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full max-w-[1200px] mx-auto px-4 md:px-8 gap-10">
        {/* Left Text */}
        <div className="md:text-left md:w-1/2">
          <div className={poppins.className}>
            <h1 className="text-[27px] md:text-[40px] md:leading-[48px] leading-tight font-bold text-[rgb(19,34,36)] md:mb-20 mt-20">
              Redefining Surgical Excellence with Advanced Laparoscopic Solutions
            </h1>
          </div>

          <div className={`hidden md:block ${poppins.className}`}>
            <div className="text-gray-800 font-semibold text-lg md:text-[23px] md:mt-0 mt-5 ">
              <p className="bg-gray-900 text-[rgb(255,255,255)] md:p-3 md:pr-5 px-2 py-1 rounded-r-3xl  w-fit">
                Dr. Medhavi and Dr. Monika Tomar
              </p>
            </div>

            <div>
              {' '}
              <p className="text-[rgba(0, 0, 0, 0.87)] bg-white font-normal text-base md:text-[16px] rounded-br-2xl px-3 w-fit leading-[26px] text-[#000000ee]">
                Laparoscopic Surgeons
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className=" relative w-full h-[350px] md:w-[590px] md:h-[720px] md:-mt-10  -mt-20 flex justify-end items-end">
          <Image
            alt="Doctors"
            className="object-contain object-bottom"
            src="/Medhavi-and-monika-Tomar-photo-for-website.png (1).avif"
            fill
          />
        </div>
        {/* mobile bottom text with sticky image bottom  */}
        <div className="md:hidden -mt-10 ml-4 mb-15">
          {/* Main Title */}
          <div
            className={`inline-block bg-[#0f2646] rounded-r-3xl px-4 py-4 w-80 ${poppins.className}`}
          >
            <p className="text-white font-semibold text-[23px]">
              Dr. Medhavi and Dr.
              <br />
              Monika Tomar
            </p>
          </div>

          {/* Sub Title */}
          <div
            className={`inline-block bg-white rounded-br-3xl px-4 py-[6px] ${poppins.className}`}
          >
            <p className="text-[16px] text-[#000000de] font-normal leading-5">
              Laparoscopic Surgeons
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
