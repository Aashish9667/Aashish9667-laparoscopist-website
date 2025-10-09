'use client';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Voicesofhealing() {
  const testimonials = [
    {
      author: '– Vikram S., Patient',
      text: 'From the initial consultation to post-surgery follow-ups, Dr. Medhavi Tomar and Dr. Monika Tomar provided exceptional care. Their attention to detail and patient-first approach truly set them apart. I highly recommend them!',
    },
    {
      author: '– Nisha M., Patient',
      text: 'I felt confident and safe in the hands of Dr. Medhavi Tomar and Dr. Monika Tomar. Their laparoscopic surgery was not only successful but also left me with minimal scars. They are the epitome of excellence in healthcare!',
    },
    {
      author: '– Aditi R., Patient',
      text: 'Dr. Medhavi and Dr. Monika eased my anxiety about surgery with their expertise in laparoscopic techniques. The process was seamless, with minimal pain and quick recovery. Grateful for their compassion and professionalism.',
    },
    {
      author: '– Shalini T., Patient',
      text: 'The minimally invasive surgery performed by Dr. Medhavi and Dr. Monika exceeded my expectations. I was back on my feet in no time! Their skills and advanced techniques are unmatched.',
    },
    {
      author: '– Ravi K., Patient',
      text: 'Dr. Medhavi and Dr. Monika Tomar are exceptional surgeons. Their precise, innovative approach and compassionate care during my laparoscopic procedure made the experience seamless. Truly outstanding professionals!',
    },
  ];

  return (
    <div className="flex flex-col md:flex-col items-start justify-start gap-10 px-4 py-16 bg-gray-100">
      {/* Left Side */}
      <div className="md:w-1/3 flex flex-col justify-center text-left md:text-left">
        <h1 className="text-[#24426e] text-[16px] font-bold mb-2">Testimonials</h1>
        <p className="font-bold text-[#00000099] text-[32px] mb-4">Voices of Healing</p>
        <p className="text-[16px] text-[#00000099]  md:whitespace-nowrap sm:whitespace-normal">
          Read inspiring stories from our patients who have experienced transformative kidney care.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full flex items-center">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          modules={[Autoplay]}
          spaceBetween={30}
          loop
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-8 h-full w-full md:min-h-[200px] flex flex-col justify-between">
                <p className="text-[#00000099] text-[16px] mb-4">{t.text}</p>
                <h1 className="font-bold text-[#00000099] text-[18px]">{t.author}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
