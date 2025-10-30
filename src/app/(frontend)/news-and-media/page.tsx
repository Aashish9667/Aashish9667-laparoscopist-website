'use client';

import * as React from 'react';
import Image from 'next/image';

import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css'; //
import { motion } from 'framer-motion';

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
const newsItems = [
  'Delivered a talk on “Laparo-endoscopic Single Site Surgery (LESS) –An Indian experience“ in North Zone-Asicon at AIIMS New Delhi on 25-01-200.',
  'Presented a video on SILS at SILSCON Mumbai on 29th April 2011.',
  'Delivered a talk on Single Incision Laparoscopic Surgery at IMA Amroha Branch CME on 4-4-2009.',
  'Participated in Technical discussion on ‘Best practice guidelines and State of the art in Single Incision Laparoscopic Surgery‘ at the SAGES meeting 2009 at Phoenix Arizona U.S.A.',
  'Conducted a live surgical workshop on Single Incision Laparoscopic Surgery at Barelli on 30 August 2009.',
  'Delivered a talk on Single Incision Laparoscopic Surgery at ASI Ghaziabad Meeting on 17 09 2009.',
  'Delivered a talk on ‘Laparoscopy –What beyond Cholecystectomy ‘at IMA Shamli Branch CME on 4-4-2010.',
  'Arranged & attended a proctorship programme on MIPH on 14-3-2010 & 23-04-2011.',
  'Delivered a talk on “Laparoscopy –What beyond Cholecystectomy” at IMA Mawana Branch CME on 2-6-2013.',
  'Delivered a talk on “Laparoscopy –What beyond Cholecystectomy” at IMA Meerut Branch CME on 12-6-2013.',
];

export default function News() {
  const [activeIndex, setActiveIndex] = React.useState<null | number>(null);

  React.useEffect(() => {
    // ✅ Lightbox setup
    const lightbox = new PhotoSwipeLightbox({
      children: 'a',
      gallery: '#press-gallery',
      padding: { bottom: 20, left: 20, right: 20, top: 20 },
      pswpModule: () => import('photoswipe'),
      showHideAnimationType: 'zoom', // smooth animation
      wheelToZoom: true, // zoom by wheel
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto md:pt-20 pt-15 px-4 md:px-4 flex flex-col md:flex-row justify-between gap-10 md:gap-10 my-20">
      {/* Left side */}
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-[32px] font-medium text-[#0f2239] mb-2 ">Press Release</h1>
          <p className="text-[#00000099] text-[16px]">
            News, Updates, and Breakthroughs from Our Medical Experts
          </p>
        </div>

        {/* ✅ Gallery for PhotoSwipe */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4" id="press-gallery">
          {pressImages.map((src, i) => (
            <a
              className="group w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-[0px_0px_9px_0px_#2d5289]"
              data-pswp-height="300"
              data-pswp-width="400"
              href={src}
              key={i}
              onTouchStart={() => setActiveIndex(i)}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                className={`object-fill transition-transform duration-500 transform ${
                  activeIndex === i ? 'scale-110' : 'scale-100'
                } group-hover:scale-110`}
                alt={`Press Release ${i + 1}`}
                src={src}
                fill
              />
            </a>
          ))}
        </div>
      </div>

      {/* Right side (Desktop) */}
      <div className="hidden md:block w-[33%] pl-2">
        <div className="flex flex-col gap-5">
          <h1 className="text-[32px] font-medium text-[#0f2239]">Latest News</h1>
          {newsItems.map((text, i) => (
            <motion.div
              className="rounded-md bg-[#22446b] p-4 flex items-start gap-3 overflow-hidden"
              initial={{ opacity: 0, y: 60 }}
              key={i}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ amount: 0.3, once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <HiOutlineMenuAlt2 className="text-white  flex-shrink-0 border rounded-[2px]" />
              <p className="text-white text-[14px]">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right side (Mobile) */}
      <div className="block md:hidden w-full mt-10">
        <div className="flex flex-col gap-5 text-[32px]">
          <h1 className="text-[32px] font-medium text-[#0f2239]">Latest News</h1>
          {newsItems.map((text, i) => (
            <motion.div
              className="rounded-md bg-[#22446b] p-4 flex items-start gap-3 overflow-hidden"
              initial={{ opacity: 0, y: 60 }}
              key={i}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ amount: 0.3, once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <HiOutlineMenuAlt2 className="text-white  flex-shrink-0 border rounded-[2px] w-4 h-4" />
              <p className="text-white text-[14px]">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
