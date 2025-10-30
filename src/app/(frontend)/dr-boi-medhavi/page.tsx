'use client';
import * as React from 'react';
import Image from 'next/image';
import { Poppins, Heebo } from 'next/font/google';

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // optional
});

export default function DrMehdhavi() {
  return (
    <div>
      {/* Section 1: Image + Text */}
      <div className="bg-[rgb(234,237,243)] flex flex-col md:flex-row items-start justify-between  p-7 pt-15 mt-20 lg:p-15 lg:pt-20  gap-8 xl:gap-15">
        {/* Left: Image */}
        <div className="flex justify-start lg:justify-start">
          <Image
            alt="doctor"
            className="w-[600px] h-auto sm:w-[600x] sm:h-[600px] md:w-[400px] md:h-[450px] lg:w-[400px] lg:h-[450px]  xl:w-[400px] xl:h-[490px] rounded-2xl object-cover"
            height={320}
            src="/Medhavi-Tomar.png.avif"
            width={300}
          />
        </div>

        {/* Right: Text */}
        <div className="text-left md:w-2/3">
          <h6
            className={`text-[13px] text-[#000000de] font-medium ${poppins.className} mb-3 md:pt-2`}
          >
            Laparoscopic Surgeon
          </h6>
          <h1
            className={`${heebo.className} text-[40px]  text-[#000000de]`}
            style={{ fontFamily: `"Heebo", "Lora", sans-serif` }}
          >
            Dr. Medhavi Tomar
          </h1>
          <h4 className={`text-[16px] text-[#000000de] mb-5 font-semibold ${poppins.className}`}>
            M.B.B.S., M.S (Gen. Surgery)
          </h4>
          <p className={`text-[16px] text-[#00000099] mb-5 ${poppins.className} leading-[25px]`}>
            Dr. Medhavi Tomar is a distinguished Consultant Surgeon with expertise in laparoscopic
            and minimal access surgery. With over 30 years of experience, Dr. Tomar has pioneered
            numerous advancements in minimally invasive surgical techniques, providing superior
            outcomes for his patients.
          </p>
          <p className={`text-[16px] text-[#00000099] mb-5 ${poppins.className} leading-[25px]`}>
            As the Head of the Department of General & Minimal Access Surgery at Star Hospital &
            Laparoscopic Surgical Centre, Dr. Tomar leads a team focused on offering cutting-edge,
            minimally invasive procedures with minimal recovery time. He is also a consultant at
            Anand Hospital, Meerut, and the Managing Director & Chief Consultant Surgeon at K.M.
            Hospital, Khatauli, Muzaffarnagar.
          </p>
          <p className={`text-[16px] text-[#00000099] ${poppins.className} leading-[25px] pb-5`}>
            His expertise spans across a wide range of conditions, including gastrointestinal,
            urological, and gynecological surgeries. Dr. Tomar is known for his patient-first
            approach, combining technical proficiency with compassionate care.
          </p>
        </div>
      </div>

      {/* Section 2: Mission Quote */}
      <div className="bg-white p-5 py-15 lg:p-15 flex ">
        <div className="border-l-4 border-[#22426e] mr-4 lg:ml-30" />
        <p
          className={`text-[24px] md:text-[28px] text-[#000000cc] italic leading-tight font-medium lg:pr-30 ${poppins.className}`}
        >
          “My mission is to provide exceptional laparoscopic care with a focus on minimally invasive
          techniques, ensuring faster recovery, minimal discomfort, and the best possible outcomes
          for every patient.”
        </p>
      </div>

      {/* Section 3: Gray Section with Boxes */}
      <div className={`bg-gray-300  p-5  lg:p-15`}>
        <p
          className={`text-[40px]  mb-2 text-[#000000de] leading-[48px] ${heebo.className}`}
          style={{ fontFamily: `"Heebo", "Lora", sans-serif` }}
        >
          Consultant Surgeon & Head, Department <br /> of General & Minimal Access Surgery
        </p>

        <p
          className={`text-[16px] text-[#000000de] mb-5 ${poppins.className} font-semibold leading-[27px]`}
        >
          Star Hospital & Laparoscopic Surgical Centre, Meerut, U.P.
        </p>
        <p className={`text-[16px] text-[#00000099] mb-5  ${poppins.className}`}>
          Dr. Medhavi Tomar is a highly skilled Consultant Surgeon and the Head of the Department of{' '}
          <br className="hidden lg:block" /> General & Minimal Access Surgery at Star Hospital &
          Laparoscopic Surgical Centre, Meerut. With <br className="hidden lg:block" /> a deep
          expertise in laparoscopic surgery, general surgery, and minimal access surgery, Dr.{' '}
          <br className="hidden lg:block" />
          Tomar specializes in advanced surgical procedures that minimize recovery time and enhance{' '}
          <br className="hidden lg:block" /> patient outcomes. His proficiency in handling complex
          cases and performing state-of-the-art <br className="hidden lg:block" />
          surgeries ensures that patients receive the highest standard of care.
        </p>

        {/* 3 Boxes */}
        <div className="flex flex-col lg:flex-row justify-start text-center gap-8 lg:w-auto lg:h-max[300px] pt-5 pb-10">
          <div className={`bg-white rounded-2xl p-6 flex-1 shadow-md ${poppins.className}`}>
            <h1 className="text-[24px] font-semibold mb-3 text-[#132238]">Laparoscopic Surgery</h1>
            <p className="text-[16px] text-[#00000099] leading-relaxed">
              Laparoscopic surgery is a minimally invasive technique that uses small incisions and
              specialized instruments for faster recovery. It offers precise results with minimal
              scarring and quicker healing times.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 flex-1 shadow-md">
            <h1 className={`text-[24px] font-semibold mb-3 text-[#132238] ${poppins.className}`}>
              General Surgery
            </h1>
            <p className="text-[16px] text-[#00000099] leading-relaxed">
              General surgery encompasses a wide range of procedures to treat conditions affecting
              various body parts. Surgeons focus on both common and complex surgeries to improve
              patient health and quality of life.
            </p>
          </div>

          <div className={`bg-white rounded-2xl p-6  flex-1 shadow-md ${poppins.className}`}>
            <h1 className="text-[24px] font-semibold mb-3 text-[#132238]">
              Minimal Access Surgery
            </h1>
            <p className="text-[16px] text-[#00000099] leading-relaxed">
              Minimal access surgery involves using tiny incisions to perform procedures with
              minimal disruption to tissues. This approach reduces pain, shortens recovery periods,
              and minimizes infection risks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
