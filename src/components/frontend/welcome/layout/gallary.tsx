'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const pressImages = [
  '/press-release-7.png',
  '/press-release-7.png',
  '/press-release-7.png',
  '/press-release-7.png',
  '/press-release-7.png',
  '/press-release-7.png',
];
const COLPOSCOPY = [
  '/press-release-7.png',
  '/press-release-7.png',
  '/press-release-7.png',
  '/press-release-7.png',
  '/press-release-7.png',
  '/press-release-7.png',
];
const MIPH = ['/press-release-7.png', '/press-release-7.png'];
const SAGES = ['/press-release-7.png', '/press-release-7.png', '/press-release-7.png'];
const AIIMS = ['/press-release-7.png'];

const Videos = [
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Tubal Conservation Right Ectopic',
    src: '/Laparoscopic-TEP.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
];

export default function News() {
  return (
    <div className="max-w-[1200px] mx-auto py-8 px-4 md:px-8 flex flex-col  gap-10">
      {/* Left side */}
      <div className="flex1 py-10">
        {/* Title 1 */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#0f2239] mb-2">LIVE OPERATIVE WORKSHOP</h1>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-col-3 gap-4">
          {pressImages.map((src, i) => (
            <div
              className="w-full aspect-[4/3] relative rounded-lg overflow-hidden group shadow-[0px_0px_9px_0px_#2d5289]"
              key={i}
            >
              <Image
                alt={`Press Release ${i + 1}`}
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={src}
                fill
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 py-10">
        {/* Title 2 */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#0f2239] mb-2">
            COLPOSCOPY CME CUM WORKSHOP
          </h1>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
          {COLPOSCOPY.map((src, i) => (
            <div
              className="w-full aspect-[4/3] relative rounded-lg overflow-hidden group shadow-[0px_0px_9px_0px_#2d5289]"
              key={i}
            >
              <Image
                alt={`Press Release ${i + 1}`}
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={src}
                fill
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 py-10">
        {/* Title 3 */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#0f2239] mb-2">MIPH</h1>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
          {MIPH.map((src, i) => (
            <div
              className="w-full aspect-[4/3] relative rounded-lg overflow-hidden group shadow-[0px_0px_9px_0px_#2d5289]"
              key={i}
            >
              <Image
                alt={`Press Release ${i + 1}`}
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={src}
                fill
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 py-10">
        {/* Title 4 */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#0f2239] mb-2">SAGES</h1>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
          {SAGES.map((src, i) => (
            <div
              className="w-full aspect-[4/3] relative rounded-lg overflow-hidden group shadow-[0px_0px_9px_0px_#2d5289]"
              key={i}
            >
              <Image
                alt={`Press Release ${i + 1}`}
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={src}
                fill
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 py-10">
        {/* Title 5 */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#0f2239] mb-2">AIIMS</h1>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
          {AIIMS.map((src, i) => (
            <div
              className="w-full aspect-[4/3] relative rounded-lg overflow-hidden group shadow-[0px_0px_9px_0px_#2d5289]"
              key={i}
            >
              <Image
                alt={`Press Release ${i + 1}`}
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={src}
                fill
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 py-10">
        {/* Title 6 */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#0f2239] mb-2">Videos</h1>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 gap-y-8">
          {Videos.map((video, i) => (
            <div className="flex flex-col items-center [text-shadow:0_0_1.5px_#000]" key={i}>
              <Link
                className="w-full relative rounded-lg overflow-hidden"
                href={video.videoUrl}
                rel="noopener noreferrer" // security ke liye
                target="_blank" // ye zaruri hai YouTube open karne ke liye
              >
                <Image
                  alt={video.caption}
                  className="object-cover rounded-lg shadow-2xl "
                  height={1000} // ya jo height chahiye
                  src={video.src}
                  width={1000} // ya jo width chahiye
                />
              </Link>

              {/* Caption below the image */}
              <p className="text-center mt-2 text-sm text-[rgba(0,0,0,0.6)] [text-shadow:0_0_1.5px_#000]">
                {video.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
