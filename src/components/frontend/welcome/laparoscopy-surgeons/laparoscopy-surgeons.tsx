'use client';
import * as React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function LaparoscopySurgeons() {
  return (
    <div className="bg-gray-300 md:px-20 md:py-15 p-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Parent Flex Container */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left Section */}
          <div className={`${poppins.className} md:w-1/2 flex flex-col justify-start`}>
            <h1 className="text-[14px] md:text-[16px] font-semibold mb-4 text-[#24426e] leading-[24px]">
              Laparoscopy Surgeons
            </h1>
            <p className="text-[32px] md:text-[32px] mb-3 text-[#000000de] font-medium leading-[38px]">
              Your Expert in Minimally Invasive Surgery
            </p>
            <p className="text-[16px] md:text-[16px] text-[#00000099] leading-[26px]">
              A team of dedicated laparoscopic surgeons with extensive experience, offering
              advanced, minimally invasive procedures to ensure faster recovery and improved patient
              outcomes.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex flex-col gap-6 justify-center md:justify-end md:items-end pt-5 md:pt-0">
            {/* Doctor 1 */}
            <div className="relative md:w-[490px] md:h-[170px] w-80 h-55 bg-white rounded-3xl shadow-md overflow-visible flex flex-col items-center md:block mt-12 md:mt-0">
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

              <div
                className={`${poppins.className} px-6 py-6 md:pl-23 pl-5 h-full flex flex-col justify-center text-center md:text-left`}
              >
                <h1 className="font-semibold text-[20px] text-[#00000099] md:pb-2 mt-8 md:mt-0 pb-2">
                  Dr. Medhavi Tomar
                </h1>
                <p className="text-[16px] text-[#00000099] md:pb-2 font-normal">
                  M.B.B.S., M.S (Gen. Surgery)
                </p>
                <a
                  className="flex items-center justify-center md:justify-start gap-1 md:pt-2 pt-4 text-[#24426d]"
                  href="/components/frontend/dr-boi-monika/dr-boi-medhavi"
                >
                  <span className="hover:underline text-[16px] font-medium md:ml-5 ml-0">
                    View full bio
                  </span>
                  <span>›</span>
                </a>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="relative md:w-[490px] md:h-[170px] w-80 h-70 bg-white rounded-3xl shadow-md overflow-visible flex flex-col items-center md:block mt-12 md:mt-0">
              {/* Image Overlapping Top (mobile) */}
              <div className="absolute md:hidden -top-10 flex justify-center w-full z-10">
                <Image
                  alt="Dr. Monika"
                  className="rounded-full border-2 border-[#24426d]"
                  height={96}
                  src="/Monika-tomar.png.avif"
                  width={96}
                />
              </div>

              {/* Desktop Overlapping (left) */}
              <Image
                alt="Dr. Monika"
                className="hidden md:block rounded-full h-30 w-30 absolute -left-12 top-1/2 transform -translate-y-1/2 border-2 border-[#24426d] z-10"
                height={96}
                src="/Monika-tomar.png.avif"
                width={96}
              />

              <div
                className={`${poppins.className} px-6 py-6 md:pl-23 pl-5 h-full flex flex-col justify-center text-center md:text-left`}
              >
                <h1 className="font-semibold text-[20px] text-[#00000099] md:pb-2 pt-8 md:mt-0 pb-3 ">
                  Dr. Monika Tomar
                </h1>
                <p className="text-[16px] text-[#00000099] md:pb-2 font-normal">
                  M.B.B.S., M.S (Gen. Surgery)
                </p>
                <p className="md:block text-[16px] text-[#00000099] pb-2 font-normal md:leading-tight leading-normal">
                  Chief Consultant – Obstetrics & Gynaecology
                </p>
                <a
                  className="flex items-center justify-center md:justify-start gap-1 mt-2 text-[#24426d]"
                  href="/components/frontend/dr-boi-monika/dr-boi-medhavi"
                >
                  <span className="hover:underline text-[16px] font-medium md:ml-5 ml-0">
                    View full bio
                  </span>
                  <span>›</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
