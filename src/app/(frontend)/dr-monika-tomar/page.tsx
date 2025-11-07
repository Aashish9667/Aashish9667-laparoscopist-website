'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Page555() {
  return (
    <div className="bg-[rgb(234,237,243)] ">
      {/* Section 1: Image + Text */}
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-start justify-between p-6 pt-15 mt-20 lg:p-15 lg:pt-20 gap-8">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start w-full max-h-full sm:h-full aspect-710/500 md:w-[390px] md:h-[450px]">
          <motion.div
            className="flex justify-center lg:justify-start sm:max-w-full w-full  md:w-fit"
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              alt="doctor"
              className="w-full h-full md:w-[390px] md:h-[450px] rounded-2xl object-cover"
              height={320}
              src="/welcome/Monika-tomar.png"
              width={300}
            />
          </motion.div>
        </div>

        {/* Right: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-[14px] text-[#000000cc] pb-2 font-medium">
              Precision. Compassion. Innovation – <br className="sm:hidden" />
              Redefining Women’s Healthcare
            </h1>
          </motion.div>
          <h1 className="text-[40px]  text-[#000000cc] mb-1 font-sans">Dr. Monika Tomar</h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-[16px] font-semibold text-[#000000cc] mb-5">
              Chief Consultant – Obstetrics & Gynaecology
            </h4>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-[16px] text-[#00000099] mb-5">
              Dr. Monika Singh Tomar is a highly experienced and trusted name in the field of
              Obstetrics and Gynaecology, serving the women of Meerut and surrounding regions for
              over 25 years. She currently leads as the Chief Consultant at{' '}
              <strong className="font-semibold">
                Star Hospital & Laparoscopic Surgical Centre,
              </strong>{' '}
              where she specializes in advanced laparoscopic surgeries, high-risk pregnancies, and
              comprehensive women’s health management.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-[16px] text-[#00000099] mb-5">
              With an MBBS and MD (Obs. & Gynae) from the prestigious{' '}
              <strong className="font-semibold">LLRM Medical College, Meerut,</strong>
              Dr. Tomar began her journey in medicine with academic distinction, securing honors in
              Pharmacology and Pathology and being awarded the Dr. K.L. Chopra Scholarship during
              her postgraduate studies. Her pursuit of excellence led her to receive specialized
              training in Gynaecological Laparoscopy from{' '}
              <strong className="font-semibold">KEIL, Germany,</strong> adding global expertise to
              her clinical approach.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-[16px] text-[#00000099]">
              Dr. Tomar’s commitment to advancing minimally invasive surgical techniques has made
              her a pioneer in{' '}
              <strong className="font-semibold">
                Laparoscopic Infertility Surgery, Laparoscopic Hysterectomy, and Myomectomy.
              </strong>{' '}
              She also excels in managing{' '}
              <strong className="font-semibold">ectopic pregnancies, colposcopy procedures,</strong>{' '}
              and hysteroscopic surgeries, offering patients faster recovery times with greater
              precision and safety.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-[25px] text-[#333333]  mt-6 font-extralight">Areas of Expertise</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ul className="list-disc pl-10  text-[16px] text-[#00000099] mt-5">
              <li>Laparoscopic Gynaecological Surgeries</li>
              <li>Infertility Management & Treatment</li>
              <li>High-Risk Pregnancy Care</li>
              <li>Colposcopy & Cervical Screening</li>
              <li>Hysteroscopy and Advanced Uterine Procedures</li>
              <li>Postpartum and Postabortal Contraceptive Solutions</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-[25px] text-[#333333] font-extralight mt-6">
              Professional Experience
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-[16px] text-[#00000099] mt-5">
              Dr. Tomar has served across multiple reputed institutions, including{' '}
              <strong className="font-semibold">KM Hospital Khatauli, Anand Hospital,</strong> and
              various charitable setups. She has been a cornerstone of women’s health at Star
              Hospital since its inception, where she continues to blend cutting-edge technology
              with personalized care.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
