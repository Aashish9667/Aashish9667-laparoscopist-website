import * as React from 'react';
import Image from 'next/image';

export default function DrMehdhavi() {
  return (
    <div>
      {/* Section 1: Image + Text */}
      <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between  p-20 gap-8">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            alt="doctor"
            className="w-[300px] h-[320px] md:w-[390px] md:h-[450px] rounded-2xl object-cover"
            src="/Medhavi-Tomar.png.avif"
          />
        </div>

        {/* Right: Text */}
        <div className="text-left md:w-2/3">
          <h6 className="text-[16px] text-[#24426e] font-semibold">Laparoscopic Surgeon</h6>
          <h1 className="text-[32px] font-bold text-[#000000cc] mb-1">Dr. Medhavi Tomar</h1>
          <h4 className="text-[16px] text-[#00000099] mb-4">M.B.B.S., M.S (Gen. Surgery)</h4>
          <p className="text-[16px] text-[#00000099] mb-3">
            Dr. Medhavi Tomar is a distinguished Consultant Surgeon with expertise in laparoscopic
            and minimal access surgery. With over 30 years of experience, Dr. Tomar has pioneered
            numerous advancements in minimally invasive surgical techniques, providing superior
            outcomes for his patients.
          </p>
          <p className="text-[16px] text-[#00000099] mb-3">
            As the Head of the Department of General & Minimal Access Surgery at Star Hospital &
            Laparoscopic Surgical Centre, Dr. Tomar leads a team focused on offering cutting-edge,
            minimally invasive procedures with minimal recovery time. He is also a consultant at
            Anand Hospital, Meerut, and the Managing Director & Chief Consultant Surgeon at K.M.
            Hospital, Khatauli, Muzaffarnagar.
          </p>
          <p className="text-[16px] text-[#00000099]">
            His expertise spans across a wide range of conditions, including gastrointestinal,
            urological, and gynecological surgeries. Dr. Tomar is known for his patient-first
            approach, combining technical proficiency with compassionate care.
          </p>
        </div>
      </div>

      {/* Section 2: Mission Quote */}
      <div className="bg-white  my-10 p-20 ">
        <p className="text-[24px] md:text-[28px] text-[#000000cc] italic leading-relaxed">
          “My mission is to provide exceptional laparoscopic care with a focus on minimally invasive
          techniques, ensuring faster recovery, minimal discomfort, and the best possible outcomes
          for every patient.”
        </p>
      </div>

      {/* Section 3: Gray Section with Boxes */}
      <div className="bg-gray-300  p-20">
        <p className="text-[40px]  mb-2 text-[#24426e] leading-[45px] ">
          Consultant Surgeon & Head, Department <br /> of General & Minimal Access Surgery
        </p>
        <p className="text-[16px] text-[#00000099] mb-4">
          Star Hospital & Laparoscopic Surgical Centre, Meerut, U.P.
        </p>
        <p className="text-[16px] text-[#00000099] mb-6">
          Dr. Medhavi Tomar is a highly skilled Consultant Surgeon and the Head of the Department of{' '}
          <br /> General & Minimal Access Surgery at Star Hospital & Laparoscopic Surgical Centre,
          Meerut. With <br /> a deep expertise in laparoscopic surgery, general surgery, and minimal
          access surgery, Dr. <br />
          Tomar specializes in advanced surgical procedures that minimize recovery time and enhance{' '}
          <br /> patient outcomes. His proficiency in handling complex cases and performing
          state-of-the-art <br />
          surgeries ensures that patients receive the highest standard of care.
        </p>

        {/* 3 Boxes */}
        <div className="flex flex-col md:flex-row justify-start text-center gap-8 md:h-[350px] p-10">
          <div className="bg-white rounded-2xl p-6 flex-1 shadow-md">
            <h1 className="text-[24px] font-semibold mb-3 text-[#24426e]">Laparoscopic Surgery</h1>
            <p className="text-[16px] text-[#00000099] leading-relaxed">
              Laparoscopic surgery is a minimally invasive technique that uses small incisions and
              specialized instruments for faster recovery. It offers precise results with minimal
              scarring and quicker healing times.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 flex-1 shadow-md">
            <h1 className="text-[24px] font-semibold mb-3 text-[#24426e]">General Surgery</h1>
            <p className="text-[16px] text-[#00000099] leading-relaxed">
              General surgery encompasses a wide range of procedures to treat conditions affecting
              various body parts. Surgeons focus on both common and complex surgeries to improve
              patient health and quality of life.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 flex-1 shadow-md">
            <h1 className="text-[24px] font-semibold mb-3 text-[#24426e]">
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
