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
    <div className={`${poppins.className} bg-[#1d3d6d] py-10 space-y-16 px-10`}>
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
              className=" w-auto h-auto sm:w-[630px] sm:h-[400px] md:w-[700px] md:h-[400px] lg:w-[600px] lh:h-[400px] rounded-sm"
              height={400} // desktop
              src={item.img}
              width={600} // desktop
            />
          </div>

          {/* Text Section */}
          <div
            className={`bg-white shadow-lg z-20 
    w-[270px] h-[370px] md:w-max-[80%] md:h-[240px] sm:w-[80%] sm:h-[240px] lg:w-[51%] lg:h-[240px] flex flex-col justify-center 
    ${idx === 0 ? 'py-8 px-5 lg:py-1 lg:px-8 ' : 'py-6 px-5 lg:px-8 lg:py-1 '}
    ${idx === 1 ? 'lg:-mr-28 -mt-15 lg:-mt-0' : 'lg:-ml-28 -mt-15 lg:-mt-0'}`}
          >
            <h2 className="text-[28px] lg:text-[28px] font-medium text-[#24426E] mb-2 lg:mb-4 lg:leading[34px] leading-tight ">
              {item.title}
            </h2>
            <p className="text-[16px] text-[#000000de] leading-normal lg:leading[26px] font-normal">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
