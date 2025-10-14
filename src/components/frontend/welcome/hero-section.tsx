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
    <div className="relative w-full md:h-[677px] lg:h-[677px] h-full mt-20 px-4 md:px-8 sm:px-8 gap-10 lg:px-8 ">
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
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full max-w-[1200px] mx-auto sm:justify-start sm:items-start">
        {/* Left Text */}
        <div className="lg:text-lft lg:w-1/2 md:text-left md:w-4/2 sm:text-left md:mt-30">
          <div className={poppins.className}>
            <h1 className="text-[#132238] text-[27px] leading-tight font-bold mt-20 pl-3 md:text-[40px] md:leading-[48px] md:mb-20 md:mt-20 lg:leading-[48px] lg:text-[40px] lg:mb-20 lg:mt-20 sm:pl-0">
              Redefining Surgical Excellence with <br className="hidden md:hidden sm:block" />{' '}
              Advanced Laparoscopic Solutions
            </h1>
          </div>

          <div className={`hidden sm:hidden md:block ${poppins.className}`}>
            <div className="text-gray-800 font-semibold text-lg md:text-[23px] md:-mt-10 ">
              <p className="bg-[#132238] text-[rgb(255,255,255)] md:p-3 md:pr-5 px-2 py-1 rounded-r-3xl whitespace-nowrap w-fit">
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

        <div className=" relative w-full h-[350px] lg:w-[590px] lg:h-[720px] md:w-[990px] md:h-[720px] sm:w-[750px] sm:h-[550px]  md:-mt-10  -mt-20 flex justify-start items-start sm:justify-start sm:items-start">
          <Image
            alt="Doctors"
            className="object-contain md:object-bottom sm:object-left-top"
            src="/Medhavi-and-monika-Tomar-photo-for-website.png (1).avif"
            fill
          />
        </div>
        {/* mobile bottom text with sticky image bottom  */}
        <div className="md:hidden flex flex-col justify-start items-start mb-15 mt-0 ml-0 sm:ml-0 sm:mt-0">
          {/* Main Title */}
          <div
            className={`inline-block bg-[#132238] rounded-r-3xl sm:px-4 sm:py-4 sm:w-150 px-4 py-4 w-110 ${poppins.className}`}
          >
            <p className="text-white font-semibold text-[23px]">
              Dr. Medhavi and Dr.
              <br className="sm:hidden" />
              Monika Tomar
            </p>
          </div>

          {/* Sub Title */}
          <div
            className={`inline-block bg-white rounded-br-3xl sm:px-4 sm:py-[6px] px-4 py-[6px] w-fit ${poppins.className}`}
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
