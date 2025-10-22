"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const surgeries = [
  {
    title: "Congenital Hernia",
    desc: "Laparoscopy offers a very good approach for Herniotomy in Paediatric age group .The contra-lateral side can also be assessed simultaneously and dealt with if impending herniation is detected.",
    img: "/inguinal-hernia.jpg",
  },
  {
    title: "Pyeloplasty",
    desc: "Laparoscopic transabdominal pyeloplasty (Anderson Hynes or Y-V Plasty) offers results comparable to open surgery, with the added benefit of faster recovery, especially in pediatric patients who struggle with prolonged rest.",
    img: "/pyeloplasty.jpg.avif",
  },
  {
    title: "Appendectomy",
    desc: "Removal of Appendix is called Appendectomy or Appendicectomy. Lap. Appendectomy is a common safe and cost effective method of removing the diseased appendix. ",
    img: "/appendix.jpg (3).avif",
  },
  {
    title: "Colectomy for Mega Colon",
    desc: " The Colon can be mobilized laparoscopically and a perineal anastomosis can be performed with a circular stapling device. A proximal colostomy can be done under laparoscopic guidance for additional safety without opening the abdomen.",
    img: "/mega-colon.jpg.avif",
  },
  {
    title: "Abdominal Lymph Node Biopsy",
    desc: "A simple procedure which avoids a laparotomy and gives us the liberty to choose the best lymph node which can be taken and subjected to histo-pathological examination to reach a diagnosis of the disease process.",
    img: "/Abdominal-Lymph-Node-Biopsy.png",
  },
   {
    title: "Orchipexy",
    desc: "Laparoscopic mobilization of intra-abdominal testes allows easier, single-stage descent, compared to open surgery, which often requires a two-stage procedure for similar results.",
    img: "/Orchipexy-768x895.jpg",
  },
];

export default function LaparoscopicSurgery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="m-5 md:m-0 md:p-20 p-0 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-normal md:tracking-wide">
        Paediatric Laparoscopic
      </h2>
      <p className="text-gray-600 mb-10 md:leading-relaxed text-[20px] md:tracking-wide leading-tight">
       Commonly performed paediatric laparoscopic procedures:
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
