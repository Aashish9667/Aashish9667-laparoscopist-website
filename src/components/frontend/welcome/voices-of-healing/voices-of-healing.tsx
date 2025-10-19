// 'use client';
// import * as React from 'react';
// import { Poppins } from 'next/font/google';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
// });
// export default function Voicesofhealing() {
//   const testimonials = [
//     {
//       author: '– Vikram S., Patient',
//       text: 'From the initial consultation to post-surgery follow-ups, Dr. Medhavi Tomar and Dr. Monika Tomar provided exceptional care. Their attention to detail and patient-first approach truly set them apart. I highly recommend them!',
//     },
//     {
//       author: '– Nisha M., Patient',
//       text: 'I felt confident and safe in the hands of Dr. Medhavi Tomar and Dr. Monika Tomar. Their laparoscopic surgery was not only successful but also left me with minimal scars. They are the epitome of excellence in healthcare!',
//     },
//     {
//       author: '– Aditi R., Patient',
//       text: 'Dr. Medhavi and Dr. Monika eased my anxiety about surgery with their expertise in laparoscopic techniques. The process was seamless, with minimal pain and quick recovery. Grateful for their compassion and professionalism.',
//     },
//     {
//       author: '– Shalini T., Patient',
//       text: 'The minimally invasive surgery performed by Dr. Medhavi and Dr. Monika exceeded my expectations. I was back on my feet in no time! Their skills and advanced techniques are unmatched.',
//     },
//     {
//       author: '– Ravi K., Patient',
//       text: 'Dr. Medhavi and Dr. Monika Tomar are exceptional surgeons. Their precise, innovative approach and compassionate care during my laparoscopic procedure made the experience seamless. Truly outstanding professionals!',
//     },
//   ];

//   return (
//     <div className={`${poppins.className}`}>
//       {/* 🔹 Outer Container to Keep Everything Centered */}
//       <div className="max-w-[1200px] mx-auto flex flex-col items-start justify-start gap-10 px-8 lg:px-8 py-20 sm:px-8">
//         {/* Left Side */}
//         <div className="flex flex-col justify-center text-left md:text-left">
//           <h1 className="text-[#24426e] text-[14px] font-semibold leading-[24px] mb-2 ">
//             Testimonials
//           </h1>
//           <p className="font-medium text-[#000000ee] text-[32px] mb-2 leading-[38px]  ">
//             Voices of Healing
//           </p>
//           <p className="text-[14px] text-[#00000099]  md:whitespace-nowrap sm:whitespace-normal leading-[24px] font-normal">
//             Read inspiring stories from our patients who have experienced transformative kidney
//             care.
//           </p>
//         </div>

//         {/* Right Side */}
//         <div className="w-full flex items-center px-5 py-5">
//           <Swiper
//             autoplay={{
//               delay: 1200,
//               disableOnInteraction: false,
//             }}
//             breakpoints={{
//               0: { slidesPerView: 1 },
//               1024: { slidesPerView: 2 },
//               770: { slidesPerView: 2 },
//             }}
//             className="h-auto"
//             modules={[Autoplay]}
//             spaceBetween={20}
//             loop
//           >
//             {testimonials.map((t, index) => (
//               <SwiperSlide className="h-full" key={index}>
//                 <div className="flex justify-center items-stretch h-full">
//                   <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between w-full max-w-[550px] h-full">
//                     <p className="text-[#00000099] text-[16px] mb-4 tracking-wide leading-[26px]">
//                       {t.text}
//                     </p>
//                     <h1 className="font-bold text-[#00000099] text-[18px]">{t.author}</h1>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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

export default function Testimonials() {
  return (
    <div>
      <div className=" flex flex-col mt-20 max-w-[1200px] mx-auto">
        <div className="px-8">
          <h1 className="text-[#24426e] text-[14px] font-semibold leading-[24px] mb-6">
            Testimonials
          </h1>
        </div>
        <div className="px-8">
          <p className="font-medium text-[#000000ee] text-[32px] mb-2 leading-[38px]">
            Voices of Healing
          </p>
        </div>
        <div className="px-8">
          <p className="text-[14px] text-[#00000099]  md:whitespace-nowrap sm:whitespace-normal leading-[24px] font-normal">
            Read inspiring stories from our patients who have experienced transformative kidney
            care.
          </p>
        </div>

        <div className="w-full flex justify-center py-15 px-4  overflow-hidden">
          <div className="w-full max-w-[1200px] mx-auto px-5">
            <Swiper
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
              }}
              modules={[Autoplay]}
              spaceBetween={15}
              loop
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center h-full px-5 py-4 pb-4">
                    <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] mb-2 py-4 px-6  min-h-[210px] flex flex-col justify-between transition-transform duration-300">
                      <p className="text-[#00000099] text-[16px] leading-[26px] mb-4">{t.text}</p>
                      <h3 className="font-semibold text-[#00000099] text-[18px]">{t.author}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
