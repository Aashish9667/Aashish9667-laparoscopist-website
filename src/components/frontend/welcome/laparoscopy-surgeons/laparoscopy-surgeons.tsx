'use client';
import * as React from 'react';
import Image from 'next/image';

export default function LaparoscopySurgeons() {
  return (
    <div className="bg-gray-300 md:p-20 p-8">
      {/* Parent Flex Container */}
      <div className="flex flex-col md:flex-row items-start justify-between">
        {/* Left Section */}
        <div
          className="md:w-1/2 flex flex-col justify-start md:pr-10"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <h1 className="sm:text-[14px] md:text-[16px] font-semibold mb-4 text-[#24426e] leading-[24px]">
            Laparoscopy Surgeons
          </h1>
          <p className="sm:text-[32px] md:text-[32px] mb-3 text-[#000000de] font-semibold leading-[38px]">
            Your Expert in Minimally Invasive Surgery
          </p>
          <p className="sm:text-[16px] md:text-[16px] text-[#00000099] leading-[26px]">
            A team of dedicated laparoscopic surgeons with extensive experience, offering advanced,
            minimally invasive procedures to ensure faster recovery and improved patient outcomes.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col gap-6 justify-center md:justify-end md:items-end pt-5 md:pt-0">
          {/* Doctor 1 */}
          <div className="relative md:w-[500px] md:h-[170px] w-80 bg-white rounded-3xl shadow-md overflow-visible flex flex-col items-center md:block mt-12 md:mt-0">
            {/* Image Overlapping Top (mobile) */}
            <div className="absolute md:hidden -top-10 flex justify-center w-full z-10">
              <Image
                alt="Dr. Medhavi"
                className="rounded-full border-2 border-[#24426d]"
                height={96}
                src="/Medhavi-Tomar.png.avif"
                width={96}
              />
            </div>

            {/* Desktop Overlapping (left) */}
            <Image
              alt="Dr. Medhavi"
              className="hidden md:block rounded-full h-30 w-30 absolute -left-12 top-1/2 transform -translate-y-1/2 border-2 border-[#24426d] z-10"
              height={96}
              src="/Medhavi-Tomar.png.avif"
              width={96}
            />

            <div className="px-6 py-6 md:pl-26 pl-5 h-full flex flex-col justify-center text-center md:text-left">
              <h1 className="font-semibold text-[20px] text-[#000000de] md:pb-2 mt-8 md:mt-0">
                Dr. Medhavi Tomar
              </h1>
              <p className="text-[16px] text-[#00000099] md:pb-2">M.B.B.S., M.S (Gen. Surgery)</p>
              <a
                className="flex items-center justify-center md:justify-start gap-1 mt-2 text-[#24426d]"
                href="/components/frontend/dr-boi-monika/dr-boi-medhavi"
              >
                <span className="hover:underline text-[16px] font-semibold">View full bio</span>
                <span>›</span>
              </a>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="relative md:w-[500px] md:h-[170px] w-80 bg-white rounded-3xl shadow-md overflow-visible flex flex-col items-center md:block mt-12 md:mt-0">
            {/* Image Overlapping Top (mobile) */}
            <div className="absolute md:hidden -top-10 flex justify-center w-full z-10">
              <Image
                alt="Dr. Monika"
                className="rounded-full border-2 border-[#24426d]"
                height={96}
                src="/Monika-Tomar.png.avif"
                width={96}
              />
            </div>

            {/* Desktop Overlapping (left) */}
            <Image
              alt="Dr. Monika"
              className="hidden md:block rounded-full h-30 w-30 absolute -left-12 top-1/2 transform -translate-y-1/2 border-2 border-[#24426d] z-10"
              height={96}
              src="/Monika-Tomar.png.avif"
              width={96}
            />

            <div className="px-6 py-6 md:pl-26 pl-5 h-full flex flex-col justify-center text-center md:text-left">
              <h1 className="font-semibold text-[20px] text-[#000000de] md:pb-2 mt-8 md:mt-0">
                Dr. Monika Tomar
              </h1>
              <p className="text-[16px] text-[#00000099] md:pb-2">M.B.B.S., M.S (Gen. Surgery)</p>
              <p className="hidden md:block text-[16px] text-[#00000099] pb-2">
                Chief Consultant – Obstetrics & Gynaecology
              </p>
              <a
                className="flex items-center justify-center md:justify-start gap-1 mt-2 text-[#24426d]"
                href="/components/frontend/dr-boi-monika/dr-boi-monika"
              >
                <span className="hover:underline text-[16px] font-semibold">View full bio</span>
                <span>›</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
