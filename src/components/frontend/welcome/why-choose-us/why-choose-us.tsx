'use client';
import * as React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

type Procedure = {
  desc: string;
  img: string;
  title: string;
};

export default function Whychooseus() {
  const procedures: Procedure[] = [
    {
      desc: 'Specializing in laparoscopic, endoscopic, and microscopic surgeries, the hospital offers cutting-edge treatments with minimal recovery time and reduced post-operative pain.',
      img: '/advanced-minimally-invasive-procedures.jpg (1).avif',
      title: 'Advanced Minimally Invasive Procedures',
    },
    {
      desc: 'The center provides a wide range of surgical specialties, including general surgery, urology, gynecology, and pediatric surgeries, ensuring comprehensive care for various medical needs.',
      img: '/comprehensive-surgical-services-1024x683.jpg.avif',
      title: 'Comprehensive Surgical Services',
    },
    {
      desc: 'Equipped with two modern operation theatres and a 22-bed facility, the hospital ensures high standards of patient care and comfort, with accommodations ranging from deluxe rooms to general wards.',
      img: '/state-of-the-art-facilities-1-1024x683.jpg.avif',
      title: 'State-of-the-Art Facilities',
    },
  ];

  return (
    <div className={`${poppins.className} bg-[#1d3d6d] space-y-16 py-5 px-8 pb-15`}>
      <div className="flex justify-center items-start mt-10 text-white">
        <h1 className="text-[32px] font-semibold leading-[38px]">Why Choose Us?</h1>
      </div>
      {procedures.map((item, idx) => (
        <div
          className={`max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center ${
            idx === 1 ? 'lg:flex-row-reverse' : ''
          }`}
          key={idx}
        >
          {/* Image Section */}
          <div className="relative z-10">
            <Image
              alt={item.title}
              className=" w-[700px] h-auto sm:w-[700px] sm:h-auto md:w-[950px] md:h-auto lg:w-[600px] lg:h-auto rounded-sm"
              height={400} // desktop
              src={item.img}
              width={600} // desktop
            />
          </div>

          {/* Text Section */}
          {/* Text Section */}
          <div
            className={`bg-white shadow-lg z-20 
  w-[85%] sm:w-[85%] md:w-[90%] lg:w-[50%] 
  h-auto
  flex flex-col justify-center 
  ${idx === 0 ? 'py-6 px-5 lg:py-8 lg:px-8' : 'py-6 px-5 lg:py-8 lg:px-8'}
  ${idx === 1 ? 'lg:-mr-28 -mt-10 lg:mt-0' : 'lg:-ml-28 -mt-10 lg:mt-0'}`}
          >
            <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-medium text-[#24426E] mb-2 lg:mb-4 leading-snug">
              {item.title}
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#000000de] leading-normal font-normal">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
