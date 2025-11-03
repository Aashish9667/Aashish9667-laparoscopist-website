'use client';
import * as React from 'react';
import Image from 'next/image';
import { Poppins, Heebo } from 'next/font/google';
import { motion } from 'framer-motion';

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
    <div className="bg-[rgb(234,237,243)]">
      {/* Section 1: Image + Text */}
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-start justify-between  p-6 pt-15 mt-20 lg:p-15 lg:pt-20  gap-8 xl:gap-15">
        {/* Left: Image */}
        <motion.div
          className="flex justify-center lg:justify-start sm:max-w-full w-full  md:w-fit"
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            alt="doctor"
            className="w-[600px] h-auto sm:w-full sm:h-[600px] md:w-[400px] md:h-[450px] lg:w-[400px] lg:h-[450px]  xl:w-[400px] xl:h-[490px] rounded-2xl object-cover"
            height={320}
            src="/Medhavi-Tomar.png.avif"
            width={300}
          />
        </motion.div>

        {/* Right: Text */}
        <div className="text-left md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h6
              className={`text-[13px] text-[#000000de] font-medium ${poppins.className} mb-3 md:pt-2`}
            >
              Laparoscopic Surgeon
            </h6>
          </motion.div>
          <h1 className="text-[39px] text-[#000000de] font-sans leading-10 mb-3">
            Dr. Medhavi Tomar
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className={`text-[16px] text-[#000000de] mb-5 font-semibold ${poppins.className}`}>
              M.B.B.S., M.S (Gen. Surgery)
            </h4>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className={`text-[16px] text-[#00000099] mb-5 ${poppins.className} leading-[25px]`}>
              Dr. Medhavi Tomar is a distinguished Consultant Surgeon with expertise in laparoscopic
              and minimal access surgery. With over 30 years of experience, Dr. Tomar has pioneered
              numerous advancements in minimally invasive surgical techniques, providing superior
              outcomes for his patients.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className={`text-[16px] text-[#00000099] mb-5 ${poppins.className} leading-[25px]`}>
              As the Head of the Department of General & Minimal Access Surgery at Star Hospital &
              Laparoscopic Surgical Centre, Dr. Tomar leads a team focused on offering cutting-edge,
              minimally invasive procedures with minimal recovery time. He is also a consultant at
              Anand Hospital, Meerut, and the Managing Director & Chief Consultant Surgeon at K.M.
              Hospital, Khatauli, Muzaffarnagar.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className={`text-[16px] text-[#00000099] ${poppins.className} leading-[25px] pb-5`}>
              His expertise spans across a wide range of conditions, including gastrointestinal,
              urological, and gynecological surgeries. Dr. Tomar is known for his patient-first
              approach, combining technical proficiency with compassionate care.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section 2: Mission Quote */}

      <div className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className=" p-5 py-15 lg:p-15 flex mx-auto max-w-[1200px]">
            <div className="border-l-4 border-[#22426e] mr-4 lg:ml-30" />

            <p
              className={`text-[24px] md:text-[28px] text-[#000000cc] italic leading-tight font-medium lg:pr-30 ${poppins.className}`}
            >
              “My mission is to provide exceptional laparoscopic care with a focus on minimally
              invasive techniques, ensuring faster recovery, minimal discomfort, and the best
              possible outcomes for every patient.”
            </p>
          </div>
        </motion.div>
      </div>

      {/* Section 3: Gray Section with Boxes */}
      <div className="bg-[rgb(234,237,243)]" />
      <div className={`mx-auto max-w-[1200px]  p-5  lg:p-15 lg:pt-10`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p
            className={`text-[40px] pt-5 mb-2 text-[#000000de] leading-[48px] ${heebo.className}`}
            style={{ fontFamily: `"Heebo", "Lora", sans-serif` }}
          >
            Consultant Surgeon & Head, Department <br /> of General & Minimal Access Surgery
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p
            className={`text-[16px] text-[#000000de] mb-5 ${poppins.className} font-semibold leading-[27px]`}
          >
            Star Hospital & Laparoscopic Surgical Centre, Meerut, U.P.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className={`text-[16px] text-[#00000099] mb-5  ${poppins.className}`}>
            Dr. Medhavi Tomar is a highly skilled Consultant Surgeon and the Head of the Department
            of <br className="hidden lg:block" /> General & Minimal Access Surgery at Star Hospital
            & Laparoscopic Surgical Centre, Meerut. With <br className="hidden lg:block" /> a deep
            expertise in laparoscopic surgery, general surgery, and minimal access surgery, Dr.{' '}
            <br className="hidden lg:block" />
            Tomar specializes in advanced surgical procedures that minimize recovery time and
            enhance <br className="hidden lg:block" /> patient outcomes. His proficiency in handling
            complex cases and performing state-of-the-art <br className="hidden lg:block" />
            surgeries ensures that patients receive the highest standard of care.
          </p>
        </motion.div>

        {/* 3 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5 pb-10 text-center">
          <motion.div
            className={`bg-white rounded-2xl p-6 flex-1 shadow-md ${poppins.className}`}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div>
              <h1 className="text-[24px] font-semibold mb-3 text-[#132238]">
                Laparoscopic Surgery
              </h1>
              <p className="text-[16px] text-[#00000099] leading-relaxed">
                Laparoscopic surgery is a minimally invasive technique that uses small incisions and
                specialized instruments for faster recovery. It offers precise results with minimal
                scarring and quicker healing times.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl p-6 flex-1 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div>
              <h1 className={`text-[24px] font-semibold mb-3 text-[#132238] ${poppins.className}`}>
                General Surgery
              </h1>
              <p className="text-[16px] text-[#00000099] leading-relaxed">
                General surgery encompasses a wide range of procedures to treat conditions affecting
                various body parts. Surgeons focus on both common and complex surgeries to improve
                patient health and quality of life.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={`bg-white rounded-2xl p-6  flex-1 shadow-md ${poppins.className} md:col-span-2 md:mx-auto md:max-w-[450px]   lg:col-span-1 lg:mx-0 lg:max-w-none`}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div>
              <h1 className="text-[24px] font-semibold mb-3 text-[#132238]">
                Minimal Access Surgery
              </h1>
              <p className="text-[16px] text-[#00000099] leading-relaxed">
                Minimal access surgery involves using tiny incisions to perform procedures with
                minimal disruption to tissues. This approach reduces pain, shortens recovery
                periods, and minimizes infection risks.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
