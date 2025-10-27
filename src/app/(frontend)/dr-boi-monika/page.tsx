import * as React from 'react';
import Image from 'next/image';

export default function Page555() {
  return (
    <div>
      {/* Section 1: Image + Text */}
      <div className="bg-gray-300 flex flex-col md:flex-row items-start justify-between p-7 pt-15 mt-24 lg:p-15 lg:pt-20 gap-8">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            alt="doctor"
            className="w-full h-[320px] md:w-[390px] md:h-[450px] rounded-2xl object-cover"
            height={320}
            src="/Monika-Tomar.png.avif"
            width={300}
          />
        </div>

        {/* Right: Text */}
        <div className="text-left md:w-2/3 pb-10">
          <h6 className="text-[16px] text-[#000000cc] font-medium">
            Precision. Compassion. Innovation – Redefining Women’s Healthcare
          </h6>
          <h1 className="text-[32px]  text-[#000000cc] mb-1">Dr. Monika Tomar</h1>
          <h4 className="text-[16px] font-semibold text-[#000000cc] mb-4">
            Chief Consultant – Obstetrics & Gynaecology
          </h4>
          <p className="text-[16px] text-[#00000099] mb-3">
            Dr. Monika Singh Tomar is a highly experienced and trusted name in the field of
            Obstetrics and Gynaecology, serving the women of Meerut and surrounding regions for over
            25 years. She currently leads as the Chief Consultant at{' '}
            <strong className="font-semibold">Star Hospital & Laparoscopic Surgical Centre,</strong>{' '}
            where she specializes in advanced laparoscopic surgeries, high-risk pregnancies, and
            comprehensive women’s health management.
          </p>
          <p className="text-[16px] text-[#00000099] mb-3">
            With an MBBS and MD (Obs. & Gynae) from the prestigious{' '}
            <strong className="font-semibold">LLRM Medical College, Meerut,</strong>
            Dr. Tomar began her journey in medicine with academic distinction, securing honors in
            Pharmacology and Pathology and being awarded the Dr. K.L. Chopra Scholarship during her
            postgraduate studies. Her pursuit of excellence led her to receive specialized training
            in Gynaecological Laparoscopy from{' '}
            <strong className="font-semibold">KEIL, Germany,</strong> adding global expertise to her
            clinical approach.
          </p>
          <p className="text-[16px] text-[#00000099]">
            Dr. Tomar’s commitment to advancing minimally invasive surgical techniques has made her
            a pioneer in{' '}
            <strong className="font-semibold">
              Laparoscopic Infertility Surgery, Laparoscopic Hysterectomy, and Myomectomy.
            </strong>{' '}
            She also excels in managing{' '}
            <strong className="font-semibold">ectopic pregnancies, colposcopy procedures,</strong>{' '}
            and hysteroscopic surgeries, offering patients faster recovery times with greater
            precision and safety.
          </p>
          <h1 className="text-[26px] text-[rgb(51,51,51)] font-extralight mt-5">
            Areas of Expertise
          </h1>
          <ul className="list-disc pl-6  text-[16px] text-[#00000099] mt-2">
            <li>Laparoscopic Gynaecological Surgeries</li>
            <li>Infertility Management & Treatment</li>
            <li>High-Risk Pregnancy Care</li>
            <li>Colposcopy & Cervical Screening</li>
            <li>Hysteroscopy and Advanced Uterine Procedures</li>
            <li>Postpartum and Postabortal Contraceptive Solutions</li>
          </ul>
          <h1 className="text-[26px] text-[rgb(51,51,51)] font-normal mt-5">
            Professional Experience
          </h1>
          <p className="text-[16px] text-[#00000099] mt-2">
            Dr. Tomar has served across multiple reputed institutions, including{' '}
            <strong className="font-semibold">KM Hospital Khatauli, Anand Hospital,</strong> and
            various charitable setups. She has been a cornerstone of women’s health at Star Hospital
            since its inception, where she continues to blend cutting-edge technology with
            personalized care.
          </p>
        </div>
      </div>
    </div>
  );
}
