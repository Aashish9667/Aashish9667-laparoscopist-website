'use client';
import Image from 'next/image';
import * as React from 'react';
import { Poppins } from 'next/font/google';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Homehero() {
  const { scrollY } = useScroll();
  const [show, setShow] = React.useState(true);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (previous < latest) {
      // scrolling DOWN → SHOW
      setShow(true);
    } else {
      // scrolling UP → HIDE
      setShow(false);
    }
  });

  return (
    <div className="relative px-4 md:px-8 lg:px-8 mx-auto overflow-hidden md:mt-0 mt-20 md:pt-10 pt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="Background"
          className="object-cover hidden sm:block"
          src="/background-desktop.jpg"
          fill
          priority
        />
        <Image
          alt="Background"
          className="object-cover md:hidden w-auto h-auto"
          src="/background-mobile.jpg"
          fill
          priority
        />
      </div>

      {/* Overlay Content */}
      <div
        className={`relative z-10 grid grid-cols-1 md:grid-cols-2 items-end justify-between max-w-[1200px] mx-auto ${poppins.className}`}
      >
        {/* Left Content */}
        <div className="grid grid-col justify-center md:justify-start px-2 md:pb-35 pb-0">
          <h1 className="text-[#132238] text-[27px] md:text-[40px] leading-tight font-bold md:mb-16 mt-15 md:mt-25">
            Redefining Surgical Excellence with Advanced Laparoscopic Solutions
          </h1>

          <div className="relative md:hidden block w-full mt-8">
            <Image
              alt="Doctors"
              className="object-contain"
              height={600}
              src="/Medhavi-and-monika-Tomar-photo-for-website-1.png (1).avif"
              width={600}
              priority
            />
          </div>
          <motion.div
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-10">
              <p className="bg-[#132238] text-white font-semibold text-[23px] md:p-3 md:pr-5 px-2 py-3 rounded-r-3xl w-full sm:w-auto md:w-fit">
                Dr. Medhavi and Dr. Monika Tomar
              </p>
              <p className="text-[#000000ee] bg-white font-normal text-[16px] rounded-br-2xl px-3 py-1 w-fit leading-[26px]">
                Laparoscopic Surgeons
              </p>
            </div>
          </motion.div>
        </div>
        {/* Right Image */}
        <div className="relative flex items-end justify-center h-full">
          <div className="relative hidden md:block w-full">
            <Image
              alt="Doctors"
              className="object-contain md:object-bottom"
              height={600}
              src="/Medhavi-and-monika-Tomar-photo-for-website.png (1).avif"
              width={600}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
