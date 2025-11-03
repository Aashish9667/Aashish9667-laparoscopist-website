'use client';
import * as React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function LaparoscopySurgeons() {
  return (
    <div className="bg-[rgb(234,237,243)]">
      <div className="max-w-[1200px] mx-auto lg:px-6 lg:py-20 p-5 sm:px-6 sm:py-20 px-6 py-20 ">
        {/* Parent Flex Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-0 md:gap-16">
          {/* Left Section */}
          <div className={`${poppins.className} flex flex-col justify-start mt-0`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-[14px] font-semibold mb-4 text-[#24426e] leading-[24px]">
                Laparoscopy Surgeons
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-[32px] mb-3 text-[#000000de] font-medium leading-[38px]">
                Your Expert in Minimally Invasive Surgery
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-[16px] text-[#00000099] leading-[26px]">
                A team of dedicated laparoscopic surgeons with extensive experience, offering
                advanced, minimally invasive procedures to ensure faster recovery and improved
                patient outcomes.
              </p>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className=" flex flex-col gap-6 md:gap-6  justify-center md:justify-end md:items-end pt-5 md:pt-0 ">
            {/* Doctor 1 */}
            <motion.div
              className="relative lg:w-[435px] lg:h-auto md:max-w-[435px] md:h-auto w-full h-full bg-white rounded-3xl shadow-lg overflow-visible flex flex-col items-center md:block md:mr-0 md:mt-0 lg:-mr-0"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
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
                className={`${poppins.className} px-6 py-8 pl-5 md:px-6 lg:pl-23 md:pl-20  h-full flex flex-col justify-center text-center md:text-left`}
              >
                <h1 className="font-semibold text-[20px] text-[#00000099] md:pb-2 sm:mt-10 md:mt-0 pb-2 mt-10">
                  Dr. Medhavi Tomar
                </h1>
                <p className="text-[16px] text-[#00000099] md:pb-2 font-normal ">
                  M.B.B.S., M.S (Gen. Surgery)
                </p>
                <a
                  className="flex items-center justify-center md:justify-start gap-1 md:pt-2 pt-4 text-[#24426d]"
                  href="/dr-boi-medhavi"
                >
                  <span className="hover:underline text-[16px] font-medium md:ml-5 ml-0">
                    View full bio
                  </span>
                  <span>›</span>
                </a>
              </div>
            </motion.div>

            {/* Doctor 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="relative  lg:w-[435px] lg:h-auto   w-full h-full bg-white rounded-3xl shadow-lg overflow-visible flex flex-col items-center md:block mt-12 md:mt-0">
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
                  className={`${poppins.className} px-6 py-6 lg:pl-23 md:pl-20 pl-5 h-full flex flex-col justify-center text-center md:text-left`}
                >
                  <h1 className="font-semibold text-[20px] text-[#00000099] lg:pb-2 pt-12 md:pt-2 md:pb-2 lg:pt-0 lg:mt-0 pb-3 ">
                    Dr. Monika Tomar
                  </h1>
                  <p className="text-[16px] text-[#00000099] lg:pb-2 font-normal">
                    M.B.B.S., M.S (Gen. Surgery)
                  </p>
                  <p className="lg:block text-[16px] text-[#00000099] pb-2 font-normal lg:leading-tight leading-normal">
                    Chief Consultant – Obstetrics & Gynaecology
                  </p>
                  <a
                    className="flex items-center justify-center md:justify-start gap-1 mt-2 text-[#24426d]"
                    href="/dr-boi-monika"
                  >
                    <span className="hover:underline text-[16px] font-medium lg:ml-5 md:ml-5 md:pb-2 ml-0">
                      View full bio
                    </span>
                    <span>›</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
