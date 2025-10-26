'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const pressImages = [
  '/live-operative-workshop-1.png',
  '/live-operative-workshop-2.png',
  '/live-operative-workshop-3.png',
  '/live-operative-workshop-4.png',
  '/live-operative-workshop-5.png',
  '/live-operative-workshop-6.png',
];

const COLPOSCOPY = [
  '/colpocopy-cme-cum-workshop-1.png',
  '/colpocopy-cme-cum-workshop-2.png',
  '/colpocopy-cme-cum-workshop-3.png',
  '/colpocopy-cme-cum-workshop-4.png',
  '/colpocopy-cme-cum-workshop-5.png',
  '/colpocopy-cme-cum-workshop-6.png',
];
const MIPH = ['/imph-1.png', '/imph-2.png'];
const SAGES = ['/sages-1.png', '/sages-2.png', '/sages-3.png'];
const AIIMS = ['/aiims.png'];

const Videos = [
  {
    caption: 'CA Rectum-Laparoscopic colostomy',
    src: '/CA-Rectum-Laparoscopic-colostomy.png',
    videoUrl: 'https://www.youtube.com/watch?v=GHcogXI7lro', // internal URL
  },
  {
    caption: 'Laparoscopic Appendicetomy',
    src: '/Laparoscopic-Appendicetomy.png',
    videoUrl: 'https://www.youtube.com/watch?v=fD__NLI4N-s', // internal URL
  },
  {
    caption: 'Laparoscopic-Myomectomy',
    src: '/Laparoscopic-Myomectomy.png',
    videoUrl: 'https://www.youtube.com/watch?v=rgfFTy3eOfA', // internal URL
  },
  {
    caption: 'Laparoscopic Ovarian Dermoid',
    src: '/Laparoscopic-Ovarian-Dermoid.png',
    videoUrl: 'https://www.youtube.com/watch?v=NzRC_U6Mcpc', // internal URL
  },
  {
    caption: 'Laproscopic Splenectomy',
    src: '/Laproscopic-Splenectomy.png',
    videoUrl: 'https://www.youtube.com/watch?v=5vdRETyl6ak', // internal URL
  },
  {
    caption: 'Laparoscopic Ureterolithotomy',
    src: '/Laparoscopic-Ureterolithotomy.png',
    videoUrl: 'https://www.youtube.com/watch?v=gw4lced-Tpg', // internal URL
  },
  {
    caption: 'Lap Nephrectomy Rt',
    src: '/Lap-Nephrectomy-Rt.png',
    videoUrl: 'https://www.youtube.com/watch?v=IpwBAyvK2jw', // internal URL
  },
  {
    caption: 'Pyelolithotomy in ectopic Kidney',
    src: '/Pyelolithotomy-in-ectopic-Kidney.png',
    videoUrl: 'https://www.youtube.com/watch?v=WKH90fwgZQY', // internal URL
  },
  {
    caption: 'Liver-Laceration',
    src: '/Liver-Laceration.png',
    videoUrl: 'https://www.youtube.com/watch?v=yk5_rfx46Yk', // internal URL
  },
  {
    caption: 'Laparoscopic-TEP ',
    src: '/Laparoscopic-TEP (1).png',
    videoUrl: 'https://www.youtube.com/watch?v=a8UZUwnRFxc', // internal URL
  },
  {
    caption: 'Tubal-Conservation-Right-Ectopic',
    src: '/Tubal-Conservation-Right-Ectopic.png',
    videoUrl: 'https://www.youtube.com/watch?v=0YDO6X_Ab2k', // internal URL
  },
  {
    caption: 'Umbilical-Hernia',
    src: '/Umbilical-Hernia.png',
    videoUrl: 'https://www.youtube.com/watch?v=lUY8nLG2DsE', // internal URL
  },
  {
    caption: 'Interesting-videos',
    src: '/Interesting-videos.png',
    videoUrl: 'https://www.youtube.com/watch?v=hLLQ28Vb9YU', // internal URL
  },
];
export default function News() {
  const [activeIndex, setActiveIndex] = React.useState<null | number>(null);
  const renderImageGrid = (images: string[]) => (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div
          className="w-full aspect-[4/3] relative rounded-lg overflow-hidden group shadow-[0px_0px_9px_0px_#2d5289]"
          key={i}
          onTouchStart={() => setActiveIndex(i)}
        >
          <Image
            className={`object-cover transform transition-transform duration-300 ${
              activeIndex === i ? 'scale-110' : 'scale-100'
            } group-hover:scale-110`}
            alt={`Image ${i + 1}`}
            src={src}
            fill
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-[1200px] mx-auto pt-10 px-4 md:px-8 flex flex-col gap-10 mt-20 ">
      {/* section 1 */}
      <div className="py-10">
        <h1 className="text-2xl font-medium text-[#0f2239] mb-4">LIVE OPERATIVE WORKSHOP</h1>
        {renderImageGrid(pressImages)}
      </div>

      {/* section 2 */}
      <div className="py-10">
        <h1 className="text-2xl font-medium text-[#0f2239] mb-4">COLPOSCOPY CME CUM WORKSHOP</h1>
        {renderImageGrid(COLPOSCOPY)}
      </div>

      {/* section 3 */}
      <div className="py-10">
        <h1 className="text-2xl font-medium text-[#0f2239] mb-4">MIPH</h1>
        {renderImageGrid(MIPH)}
      </div>

      {/* section 4 */}
      <div className="py-10">
        <h1 className="text-2xl font-medium text-[#0f2239] mb-4">SAGES</h1>
        {renderImageGrid(SAGES)}
      </div>

      {/* section 5 */}
      <div className="py-10">
        <h1 className="text-2xl font-medium text-[#0f2239] mb-4">AIIMS</h1>
        {renderImageGrid(AIIMS)}
      </div>
      {/* section 6 */}
      <div className="flex-1 pt-10">
        <div className="mb-6">
          <h1 className="text-2xl font-medium text-[#0f2239] mb-2">Videos</h1>
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
