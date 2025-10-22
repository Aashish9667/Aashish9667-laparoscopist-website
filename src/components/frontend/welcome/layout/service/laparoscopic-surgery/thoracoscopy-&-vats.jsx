"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const surgeries = [
  {
    title: "Mediastinal Lymphnode Biopsy",
    desc: "Lymphnodes from within the chest are removed for the purpose of arriving at an accurate diagnosis after histopathological examination.",
    img: "/19565.jpg",
  },
  {
    title: "Thoracoscopic Decortication",
    desc: "Removal of thickened covering layer of lung to facilitate it’s expansion is called Decortication. Thoracoscopic decortications is a fairly commonly performed procedure and is a good alternative to open thoracotomy and decortications.",
    img: "/vats.jpg",
  },
  {
    title: "Thymus removal",
    desc: "VATS is now the method of choice for removal of thymus tumours.",
    img: "/Thymus-removal-768x870.png",
  },
];

export default function LaparoscopicSurgery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="m-5 md:m-0 md:p-20 p-0 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-normal md:tracking-wide">
        Thoracoscopy & VATS
      </h2>
      <p className="text-gray-600 mb-10 md:leading-relaxed text-[20px] md:tracking-wide leading-tight">
        Video Assisted Thoracic Surgery or thoracoscopic surgery is the method
        to do surgery inside the chest with the help of instruments inserted
        through small holes in the chest wall, without opening the chest.
        Procedures which are done thoracoscopilly commonly are-
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
      <div className="flex justify-center mt-2 mb-16 md:mt-10 gap-2">
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
