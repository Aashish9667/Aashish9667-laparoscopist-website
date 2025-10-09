"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const surgeries = [
  {
    title: "Cholecystectomy",
    desc: "Laparoscopic cholecystectomy is the gold standard, cost-effective, and safe treatment for gallbladder stones, making it one of the most frequently performed laparoscopic procedures.",
    img: "/laparoscopic-cholecystectomy.jpeg",
  },
  {
    title: "Appendectomy",
    desc: "Appendectomy, the removal of the appendix, is a safe, common, and cost-effective procedure. Laparoscopic appendectomy is widely preferred for treating a diseased appendix due to its minimal invasiveness.",
    img: "/appendix.jpg.avif",
  },
  {
    title: "CBD Exploration",
    desc: "Laparoscopic removal of common bile duct stones is an advanced procedure using a flexible fiber optic choledochoscope for direct visualization and extraction under laparoscopic guidance.",
    img: "/C14-FF1-3.jpg",
  },
  {
    title: "Liver Abscess",
    desc: "Laparoscopic drainage of Liver Abscess is an established treatment option for Abscesses which cannot be aspirated under ultrasound guidance because of their size and site.",
    img: "/Liver-Abscess-300x193.png",
  },
  {
    title: "Colonic Resectiony",
    desc: "Laparoscopic removal of part or complete colon as required in cancer of large intestine is being done successfully all over the world. It has a great advantage of early recovery without compromising the principles of cancer surgery.",
    img: "/Colonic-Resection-300x245.png",
  },
  {
    title: "Rectopexy",
    desc: "The Rectum is anchored to the sacral promontory laparoscopically to prevent it’s sliding down and prolapse. This can be done by using a prosthetic mesh or simple stitches. It is a very successful procedure for treatment of Rectal prolapse.",
    img: "/rectopexy.jpg.avif",
  },
  {
    title: "Fundoplication",
    desc: "Nissen’s Fundoplication is the most accepted procedure for GERD and Hiatus Hernia. Laparoscopic Fundoplication is a routine procedure in most advanced laparoscopic surgery programmes.",
    img: "/fundoplication.jpg.avif",
  },
  {
    title: "Achalasia",
    desc: "Laparoscopic treatment for achalasia, known as Heller myotomy, involves cutting the lower esophageal sphincter to improve swallowing by allowing food to pass more easily into the stomach, minimizing symptoms.",
    img: "/dilation_000-1920w.jpg",
  },
];

export default function LaparoscopicSurgery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="m-5 md:m-0 md:p-20 p-0 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-normal md:tracking-wide">
        Laparoscopic General Surgery
      </h2>
      <p className="text-gray-600 mb-10 md:leading-relaxed text-[20px] md:tracking-wide leading-tight">
        Commonly performed laparoscopic general surgery procedures:
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
