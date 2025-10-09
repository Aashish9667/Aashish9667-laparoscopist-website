"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const surgeries = [
  {
    title: "Splenectomy",
    desc: "Elective laparoscopic splenectomy is a very feasible alternative to open splenectomy .It is usually done in patients of splenic enlargement caused by medical disorders.",
    img: "/Splenectomy.jpg",
  },
  {
    title: "Adrenalectomy",
    desc: "Laparoscopic removal of adrenal tumours is a safe and better procedure than open surgery where a large incision is necessary.",
    img: "/Adrenalectomy.jpg",
  },
  {
    title: "Nephrectomy",
    desc: "Non-functioning kidneys are removed to prevent infections, tumors, or hypertension, often laparoscopically. Types include radical (whole kidney for tumors), donor (healthy kidney for transplant), and partial (diseased part to preserve function).",
     img: "/Nephrectomy-1.png",
  },
];

export default function LaparoscopicSurgery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="m-5 md:m-0 md:p-20 p-0 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-normal md:tracking-wide">
        Laparascopic Solid Organ Surgery
      </h2>
      <p className="text-gray-600 mb-10 md:leading-relaxed text-[20px] md:tracking-wide leading-tight">
        Commonly performed laparoscopic solid organ surgery procedures:
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
              <div className="flex justify-center items-center w-full h-[240px] mb-4 md:mb-10">
                <img
                  src={surgery.img}
                  alt={surgery.title}
                  className="rounded-md object-contain w-[262px] h-[240px] md:w-[320px] md:h-[240px]"
                />
              </div>
              <h3 className="text-[20px] md:text-[20px] font-semibold mb-2 md:mt-5 text-gray-900 text-left">
                {surgery.title}
              </h3>
              <p className="text-gray-600 text-[16px] mdtext-[16px] leading-relaxed text-left">
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
