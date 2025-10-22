"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const surgeries = [
  {
    title: "Inguinal Hernia",
    desc: "Laparoscopic inguinal hernia surgery offers better outcomes than open surgery, treating the defect at its origin. It also covers inguinal, obturator, and femoral sites with mesh, unlike open surgery.",
    img: "/ingunial-hernia-1.jpg.avif",
  },
  {
    title: "Umbilical Hernia",
    desc: "Simple Procedure done laparoscopically which obviates the need for a lot of dissection which is required in open surgery thus reducing the operative time, the recovery time and the pain associated with surgery.",
    img: "/umbilical-hernia.jpg.avif",
  },
  {
    title: "Diaphragmatic Hernia",
    desc: "Laparoscopic surgery is a boon for patients having Diaphragmatic hernia or defects. As laparoscopic assess to this area is much easier and better then open surgery for which a very large incision is required.",
    img: "/Diaphragmatic-Hernia.png",
  },
  {
    title: "Epigastric Hernia",
    desc: "Simple procedure done laparoscopically where a prosthetic mesh is applied from within to cover the hernia defect. Less dissection is required, early recovery and less peri-operative pain",
    img: "/epigastric-hernia.jpg.avif",
  },
  {
    title: "Incisional Hernia",
    desc: "Any incisional or ventral hernia irrespective of it’s size and location can be repaired laparoscopically with rewarding results .A prosthetic mesh is applied from within to cover the hernia defect and fixed in place with the help of tacker and stitches.",
    img: "/incisional-hernia.jpg.avif",
  },
  {
    title: "Hiatus Hernia",
    desc: "Hiatus hernia occurs when part of the stomach slides into the chest through the diaphragm. Laparoscopic surgery repairs the defect and wraps the fundus around the lower esophagus.",
    img: "/hiatus-hernia.jpg.avif",
  },
];

export default function LaparoscopicSurgery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="m-0 md:m-0 md:p-20 p-10 bg-gray-300">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-normal md:tracking-wide">
        Laparoscopic Hernia Surgery
      </h2>
      <p className="text-gray-600 mb-10 md:leading-relaxed text-[20px] md:tracking-wide leading-tight">
        Commonly performed laparoscopic hernia surgery procedures:
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
