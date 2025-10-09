"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const surgeries = [
  {
    title: "Pyelolithotomy",
    desc: "Laparoscopic Pyelolithotomy, using a retroperitoneal approach, treats solitary renal pelvic stones without entering the abdominal cavity, avoiding kidney tissue disruption compared to the percutaneous method.",
    img: "/Pyelolithotomy.png",
  },
  {
    title: "Nephrectomy",
    desc: "Non-functioning kidneys are removed to prevent infections, tumors, or hypertension. Laparoscopy, including in radical nephrectomy and donor nephrectomy, is the preferred method for kidney removal and transplant procedures.",
    img: "/nephrectomy.jpg.avif",
  },
  {
    title: "Ureterolithotomy",
    desc: "Transperitoneal and retroperitoneal Ureterolithotomy has its role in large stones of the ureter which are difficult to remove by ureterorenoscopy (URS).",
    img: "/Ureterolithotomy.png",
  },
  {
    title: "Pyeloplasty",
    desc: "Laparoscopic trans-abdominal pyeloplasty (Classical Anderson Hynes or Y-V Plasty) is a routine laparoscopic procedure with comparable results as with open surgery.",
    img: "/Pyeloplasty.webp",
  },
];

export default function LaparoscopicSurgery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="m-0 md:m-0 md:p-20 p-10 bg-gray-300">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-normal md:tracking-wide">
        Laparoscopic Urology
      </h2>
      <p className="text-gray-600 mb-10 md:leading-relaxed text-[20px] md:tracking-wide leading-tight">
        Commonly performed laparoscopic urology procedures:
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 3 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ✅ update active index
      >
        {surgeries.map((surgery, index) => (
          <SwiperSlide key={index}>
            <div className="md:w-[350px] md:h-[500px] w-[342px] h-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4">
              <div className="flex justify-center items-center w-full h-[240px] mb-4 md:mb10">
                <img
                  src={surgery.img}
                  alt={surgery.title}
                  className="rounded-md object-contain w-[262px] h-[240px] md:w-[320px] md:h-[240px]"
                />
              </div>
              <h3 className="text-[20px] font-semibold mb-2 text-gray-900 text-left md:mt-5">
                {surgery.title}
              </h3>
              <p className="text-gray-600 text-[16px] leading-relaxed text-left">
                {surgery.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom Pagination Dots */}
      <div className="flex justify-center mt-6 mb-16 md:mt-10 gap-2">
        {surgeries.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              activeIndex === i ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
