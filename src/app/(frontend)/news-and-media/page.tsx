'use client';
import * as React from 'react';
import Image from 'next/image';
import { AiOutlineFile } from 'react-icons/ai';

const pressImages = [
  '/press-release-1.png',
  '/press-release-2.png',
  '/press-release-3.png',
  '/press-release-4.png',
  '/press-release-5.png',
  '/press-release-6.png',
  '/press-release-7.png',
  '/press-release-8.png',
  '/press-release-9.png',
  '/press-release-10.png',
];

export default function News() {
  return (
    <div className="max-w-[1200px] mx-auto md:py-20 py-15 px-4 md:px-4 flex flex-col md:flex-row justify-between gap-10 md:gap-10 mt-20">
      {/* Left side */}
      <div className="flex-1">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-[32px] font-medium text-[#0f2239] mb-2">Press Release</h1>
          <p className="text-[#00000099] text-[16px]">
            News, Updates, and Breakthroughs from Our Medical Experts
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          {pressImages.map((src, i) => (
            <div
              className="group w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-[0px_0px_9px_0px_#2d5289]"
              key={i}
            >
              <Image
                alt={`Press Release ${i + 1}`}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                src={src}
                fill
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right side (visible only on md and above) */}
      <div className="hidden md:block w-[30%] pl-5">
        <div className="flex flex-col gap-5 leading-[25px]">
          <h1 className="text-xl font-medium text-[#0f2239] text-[32px]">Latest News</h1>

          {[
            'Delivered a talk on “Laparo-endoscopic Single Site Surgery (LESS) –An Indian experience “in North Zone-Asicon at AIIMS New Delhi on 25-01-200',
            'Presented a video on SILS at SILSCON Mumbai on 29th April 2011.',
            'Delivered a talk on Single Incision Laparoscopic Surgery at IMA Amroha Branch CME on 4-4-2009.',
            'Participated in Technical discussion on ‘Best practice guidelines and State of the art in Single Incision Laparoscopic Surgery ‘at the SAGES meeting 2009 at Phoenix Arizona U.S.A.',
            'Conducted a live surgical workshop on Single Incision Laparoscopic Surgery at Barelli on 30 August 2009',
          ].map((text, i) => (
            <div
              className="rounded-md bg-[#22446b] p-3 flex items-start gap-3 overflow-hidden"
              key={i}
            >
              <AiOutlineFile className="text-white w-6 h-6 flex-shrink-0" />
              <p className="text-white text-[14px]">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side (mobile) */}
      <div className="block md:hidden w-full mt-10">
        <div className="flex flex-col gap-5 text-[14px] leading-[25px]">
          <h1 className="text-xl font-medium text-[#0f2239]">Latest News</h1>

          {[
            'Delivered a talk on “Laparo-endoscopic Single Site Surgery (LESS) –An Indian experience “in North Zone-Asicon at AIIMS New Delhi on 25-01-200',
            'Presented a video on SILS at SILSCON Mumbai on 29th April 2011.',
            'Delivered a talk on Single Incision Laparoscopic Surgery at IMA Amroha Branch CME on 4-4-2009.',
            'Participated in Technical discussion on ‘Best practice guidelines and State of the art in Single Incision Laparoscopic Surgery ‘at the SAGES meeting 2009 at Phoenix Arizona U.S.A.',
            'Conducted a live surgical workshop on Single Incision Laparoscopic Surgery at Barelli on 30 August 2009',
          ].map((text, i) => (
            <div
              className="rounded-md bg-[#22446b] p-3 flex items-start gap-3 overflow-hidden"
              key={i}
            >
              <AiOutlineFile className="text-white w-6 h-6 flex-shrink-0" />
              <p className="text-white text-[14px]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
