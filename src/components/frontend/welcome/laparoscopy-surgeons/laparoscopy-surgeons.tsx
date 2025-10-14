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
    <div className="bg-gray-300 ">
      <div className="max-w-[1400px] mx-auto lg:px-20 lg:py-20 p-5 sm:px-8 sm:py-20 px-8 py-20 ">
        {/* Parent Flex Container */}
        <div className="flex flex-col md:flex-row  items-start justify-between lg:gap-10 md:gap-16 gap-10">
          {/* Left Section */}
          <div className={`${poppins.className} lg:w-1/2 flex flex-col justify-start mt-0`}>
            <h1 className="text-[14px] lg:text-[16px] font-semibold mb-4 text-[#24426e] leading-[24px]">
              Laparoscopy Surgeons
            </h1>
            <p className="text-[32px] lg:text-[32px] mb-3 text-[#000000de] font-medium leading-[38px]">
              Your Expert in Minimally Invasive Surgery
            </p>
            <p className="text-[16px] lg:text-[16px] text-[#00000099] leading-[26px]">
              A team of dedicated laparoscopic surgeons with extensive experience, offering
              advanced, minimally invasive procedures to ensure faster recovery and improved patient
              outcomes.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex flex-col gap-6 md:gap-6  justify-center md:justify-end md:items-end pt-5 md:pt-0 ">
            {/* Doctor 1 */}
            <div className="relative xl:w-[490px] xl:h-[170px] lg:w-[390px] lg:h-[170px] md:w-[330px] md:h-auto  sm:w-[608px] sm:h-[225px] w-full h-full bg-white rounded-3xl shadow-lg overflow-visible flex flex-col items-center md:block md:mr-0 md:mt-0 lg:-mr-0">
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
                className="hidden md:block rounded-full lg:h-30 lg:w-30 md:h-25 md:w-25 absolute -left-12 top-1/2 transform -translate-y-1/2 border-2 border-[#24426d] z-10"
                height={96}
                src="/Medhavi-Tomar.png.avif"
                width={96}
              />

              <div
                className={`${poppins.className} px-6 py-8 pl-5 md:px-6 lg:pl-23 md:pl-10    h-full flex flex-col justify-center text-center  md:text-left`}
              >
                <h1 className="font-semibold text-[20px] text-[#00000099] md:pb-2  sm:mt-10 md:mt-0 pb-2 mt-10">
                  Dr. Medhavi Tomar
                </h1>
                <p className="text-[16px] text-[#00000099] md:pb-2 font-normal ">
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
            <div className="relative md:w-[330px] md:h-auto lg:w-[390px] lg:h-[170px] xl:w-[490px] xl:h-[190px]  sm:w-[608px] sm:h-[235px] w-full h-full bg-white rounded-3xl shadow-lg overflow-visible flex flex-col items-center md:block mt-12 md:mt-0">
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
                className="hidden md:block rounded-full lg:h-30 lg:w-30 md:h-25 md:w-25 absolute -left-12 top-1/2 transform -translate-y-1/2 border-2 border-[#24426d] z-10"
                height={96}
                src="/Monika-tomar.png.avif"
                width={96}
              />

              <div
                className={`${poppins.className} px-6 py-6 lg:pl-23 md:pl-10 pl-5 h-full flex flex-col justify-center text-center lg:text-left`}
              >
                <h1 className="font-semibold text-[20px] text-[#00000099] lg:pb-2 pt-8 lg:pt-0 lg:mt-0 pb-3 ">
                  Dr. Monika Tomar
                </h1>
                <p className="text-[16px] text-[#00000099] lg:pb-2 font-normal">
                  M.B.B.S., M.S (Gen. Surgery)
                </p>
                <p className="lg:block text-[16px] text-[#00000099] pb-2 font-normal lg:leading-tight leading-normal">
                  Chief Consultant – Obstetrics & Gynaecology
                </p>
                <a
                  className="flex items-center justify-center lg:justify-start gap-1 mt-2 text-[#24426d]"
                  href="/components/frontend/dr-boi-monika/dr-boi-medhavi"
                >
                  <span className="hover:underline text-[16px] font-medium lg:ml-5 ml-0">
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
