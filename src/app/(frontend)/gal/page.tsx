'use client';
import * as React from 'react';
import Image from 'next/image';
// --- All your arrays same रहेंगे (pressImages, COLPOSCOPY, etc.) ---

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

export default function News() {
  // 👉 यह state हर image के zoom index को track करेगी
  const [touchedIndex, setTouchedIndex] = React.useState<null | number>(null);

  // 🔹 यह helper function हर section के लिए काम करेगा
  const renderImageGrid = (images: string[]) => (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div
          onTouchStart={() => {
            setTouchedIndex(i);
            setTimeout(() => setTouchedIndex(null), 300); // zoom 0.3s तक
          }}
          className="w-full aspect-[4/3] relative rounded-lg overflow-hidden group shadow-[0px_0px_9px_0px_#2d5289]"
          key={i}
        >
          <Image
            className={`object-cover transform transition-transform duration-300 ${
              touchedIndex === i ? 'scale-110' : ''
            } group-hover:scale-110`}
            alt={`Press Image ${i + 1}`}
            src={src}
            fill
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-[1200px] mx-auto md:py-10 py-5 px-4 md:px-8 flex flex-col gap-10 mt-20">
      {/* Section 1 */}
      <div className="py-10">
        <h1 className="text-2xl font-medium text-[#0f2239] mb-2">LIVE OPERATIVE WORKSHOP</h1>
        {renderImageGrid(pressImages)}
      </div>

      {/* Section 2 */}
      <div className="py-10">
        <h1 className="text-2xl font-medium text-[#0f2239] mb-2">COLPOSCOPY CME CUM WORKSHOP</h1>
        {renderImageGrid(COLPOSCOPY)}
      </div>

      {/* Section 3 */}
      <div className="py-10">
        <h1 className="text-2xl font-medium text-[#0f2239] mb-2">MIPH</h1>
        {renderImageGrid(MIPH)}
      </div>

      {/* Section 4 */}
      <div className="py-10">
        <h1 className="text-2xl font-medium text-[#0f2239] mb-2">SAGES</h1>
        {renderImageGrid(SAGES)}
      </div>

      {/* Section 5 */}
      <div className="py-10">
        <h1 className="text-2xl font-medium text-[#0f2239] mb-2">AIIMS</h1>
        {renderImageGrid(AIIMS)}
      </div>
    </div>
  );
}
