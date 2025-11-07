'use client';
import * as React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';

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
      img: '/welcome/advanced-minimally-invasive-procedures.jpg (1).avif',
      title: 'Advanced Minimally Invasive Procedures',
    },
    {
      desc: 'The center provides a wide range of surgical specialties, including general surgery, urology, gynecology, and pediatric surgeries, ensuring comprehensive care for various medical needs.',
      img: '/welcome/comprehensive-surgical-services-1024x683.jpg.avif',
      title: 'Comprehensive Surgical Services',
    },
    {
      desc: 'Equipped with two modern operation theatres and a 22-bed facility, the hospital ensures high standards of patient care and comfort, with accommodations ranging from deluxe rooms to general wards.',
      img: '/welcome/state-of-the-art-facilities-1-1024x683.jpg.avif',
      title: 'State-of-the-Art Facilities',
    },
  ];

  return (
    <div className={`${poppins.className} bg-[#1d3d6d] space-y-16 py-5 px-6 pb-15 lg:px-6 xl:px-6`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-center items-center mt-10 text-white">
          <h1 className="text-[32px] font-semibold leading-[38px]">Why Choose Us?</h1>
        </div>
      </motion.div>

      {procedures.map((item, idx) => (
        <motion.div
          className={`max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-start ${
            idx === 1 ? 'lg:flex-row-reverse' : ''
          }`}
          initial={{ opacity: 0, y: 40 }}
          key={idx}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3, once: false }} // ye tab tab chalega jab card view me aaye
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* Image Section */}
          <div className="relative z-10">
            <Image
              alt={item.title}
              className=" w-[700px] h-auto sm:w-[700px] sm:h-auto md:w-[950px] md:h-auto lg:w-[600px] lg:h-auto xl:w-[650px] xl:h-auto rounded-sm"
              height={400} // desktop
              src={item.img}
              width={600} // desktop
            />
          </div>

          {/* Text Section */}
          {/* Text Section */}
          <div
            className={`bg-white shadow-lg z-20 
  w-[85%] sm:w-[85%] md:w-[90%] lg:w-[50%] xl:w-[55%] 
  h-auto
  flex flex-col justify-center 
  ${idx === 0 ? 'p-8' : 'p-8'}
  ${idx === 1 ? 'lg:-mr-28 -mt-10 lg:mt-0' : 'lg:-ml-28 -mt-10 lg:mt-0'}`}
          >
            <h2 className="text-[28px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-medium text-[#24426E] mb-2 lg:mb-4 leading-snug">
              {item.title}
            </h2>
            <p className=" text-[16px] sm:text-[15px] md:text-[16px] text-[#000000de] leading-normal font-normal">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
