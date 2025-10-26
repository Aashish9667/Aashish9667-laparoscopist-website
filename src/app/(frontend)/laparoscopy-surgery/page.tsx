'use client';
import * as React from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import 'swiper/css';

const generalSurgeries = [
  {
    desc: 'Laparoscopic cholecystectomy is the gold standard, cost-effective, and safe treatment for gallbladder stones, making it one of the most frequently performed laparoscopic procedures.',
    img: '/laparoscopic-cholecystectomy.jpeg',
    title: 'Cholecystectomy',
  },
  {
    desc: 'Appendectomy, the removal of the appendix, is a safe, common, and cost-effective procedure. Laparoscopic appendectomy is widely preferred for treating a diseased appendix due to its minimal invasiveness.',
    img: '/appendix.jpg (1).avif',
    title: 'Appendectomy',
  },
  {
    desc: 'Laparoscopic removal of common bile duct stones is an advanced procedure using a flexible fiber optic choledochoscope for direct visualization and extraction under laparoscopic guidance.',
    img: '/C14-FF1-3.jpg',
    title: 'CBD Exploration',
  },
  {
    desc: 'Laparoscopic drainage of Liver Abscess is an established treatment option for Abscesses which cannot be aspirated under ultrasound guidance because of their size and site.',
    img: '/Liver-Abscess-300x193.png',
    title: 'Liver Abscess',
  },
  {
    desc: 'Laparoscopic removal of part or complete colon as required in cancer of large intestine is being done successfully all over the world. It has a great advantage of early recovery without compromising the principles of cancer surgery.',
    img: '/Colonic-Resection-300x245.png',
    title: 'Colonic Resection',
  },
  {
    desc: 'The Rectum is anchored to the sacral promontory laparoscopically to prevent it’s sliding down and prolapse. This can be done by using a prosthetic mesh or simple stitches. It is a very successful procedure for treatment of Rectal prolapse.',
    img: '/rectopexy.jpg.avif',
    title: 'Rectopexy',
  },
  {
    desc: 'Nissen’s Fundoplication is the most accepted procedure for GERD and Hiatus Hernia. Laparoscopic Fundoplication is a routine procedure in most advanced laparoscopic surgery programmes.',
    img: '/fundoplication.jpg.avif',
    title: 'Fundoplication',
  },
  {
    desc: 'Laparoscopic treatment for achalasia, known as Heller myotomy, involves cutting the lower esophageal sphincter to improve swallowing by allowing food to pass more easily into the stomach, minimizing symptoms.',
    img: '/dilation_000-1920w.jpg',
    title: 'Achalasia',
  },
];
const herniaSurgeries = [
  {
    desc: 'Laparoscopic inguinal hernia surgery offers better outcomes than open surgery, treating the defect at its origin. It also covers inguinal, obturator, and femoral sites with mesh, unlike open surgery.',
    img: '/ingunial-hernia-1.jpg.avif',
    title: 'Inguinal Hernia',
  },
  {
    desc: 'Simple Procedure done laparoscopically which obviates the need for a lot of dissection which is required in open surgery thus reducing the operative time, the recovery time and the pain associated with surgery.',
    img: '/umbilical-hernia.jpg.avif',
    title: 'Umbilical Hernia',
  },
  {
    desc: 'Laparoscopic surgery is a boon for patients having Diaphragmatic hernia or defects. As laparoscopic assess to this area is much easier and better then open surgery for which a very large incision is required.',
    img: '/Diaphragmatic-Hernia.png',
    title: 'Diaphragmatic Hernia',
  },
  {
    desc: 'Simple procedure done laparoscopically where a prosthetic mesh is applied from within to cover the hernia defect. Less dissection is required, early recovery and less peri-operative pain',
    img: '/epigastric-hernia.jpg.avif',
    title: 'Epigastric Hernia',
  },
  {
    desc: 'Any incisional or ventral hernia irrespective of it’s size and location can be repaired laparoscopically with rewarding results .A prosthetic mesh is applied from within to cover the hernia defect and fixed in place with the help of tacker and stitches.',
    img: '/incisional-hernia.jpg.avif',
    title: 'Incisional Hernia',
  },
  {
    desc: 'Hiatus hernia occurs when part of the stomach slides into the chest through the diaphragm. Laparoscopic surgery repairs the defect and wraps the fundus around the lower esophagus.',
    img: '/hiatus-hernia.jpg.avif',
    title: 'Hiatus Hernia',
  },
];
const urologySurgeries = [
  {
    desc: 'Laparoscopic Pyelolithotomy, using a retroperitoneal approach, treats solitary renal pelvic stones without entering the abdominal cavity, avoiding kidney tissue disruption compared to the percutaneous method.',
    img: '/Pyelolithotomy.png',
    title: 'Pyelolithotomy',
  },
  {
    desc: 'Non-functioning kidneys are removed to prevent infections, tumors, or hypertension. Laparoscopy, including in radical nephrectomy and donor nephrectomy, is the preferred method for kidney removal and transplant procedures.',
    img: '/nephrectomy.jpg.avif',
    title: 'Nephrectomy',
  },
  {
    desc: 'Transperitoneal and retroperitoneal Ureterolithotomy has its role in large stones of the ureter which are difficult to remove by ureterorenoscopy (URS).',
    img: '/Ureterolithotomy.png',
    title: 'Ureterolithotomy',
  },
  {
    desc: 'Laparoscopic trans-abdominal pyeloplasty (Classical Anderson Hynes or Y-V Plasty) is a routine laparoscopic procedure with comparable results as with open surgery.',
    img: '/Pyeloplasty.webp',
    title: 'Pyeloplasty',
  },
];
const paediatric = [
  {
    desc: 'Laparoscopy offers a very good approach for Herniotomy in Paediatric age group .The contra-lateral side can also be assessed simultaneously and dealt with if impending herniation is detected.',
    img: '/inguinal-hernia.jpg',
    title: 'Congenital Hernia',
  },
  {
    desc: 'Laparoscopic transabdominal pyeloplasty (Anderson Hynes or Y-V Plasty) offers results comparable to open surgery, with the added benefit of faster recovery, especially in pediatric patients who struggle with prolonged rest.',
    img: '/pyeloplasty.jpg.avif',
    title: 'Pyeloplasty',
  },
  {
    desc: 'Removal of Appendix is called Appendectomy or Appendicectomy. Lap. Appendectomy is a common safe and cost effective method of removing the diseased appendix. ',
    img: '/appendix.jpg (3).avif',
    title: 'Appendectomy',
  },
  {
    desc: ' The Colon can be mobilized laparoscopically and a perineal anastomosis can be performed with a circular stapling device. A proximal colostomy can be done under laparoscopic guidance for additional safety without opening the abdomen.',
    img: '/mega-colon.jpg.avif',
    title: 'Colectomy for Mega Colon',
  },
  {
    desc: 'A simple procedure which avoids a laparotomy and gives us the liberty to choose the best lymph node which can be taken and subjected to histo-pathological examination to reach a diagnosis of the disease process.',
    img: '/Abdominal-Lymph-Node-Biopsy.png',
    title: 'Abdominal Lymph Node Biopsy',
  },
  {
    desc: 'Laparoscopic mobilization of intra-abdominal testes allows easier, single-stage descent, compared to open surgery, which often requires a two-stage procedure for similar results.',
    img: '/Orchipexy-768x895.jpg',
    title: 'Orchipexy',
  },
];
const solidOrganSurgeries = [
  {
    desc: 'Elective laparoscopic splenectomy is a very feasible alternative to open splenectomy. It is usually done in patients of splenic enlargement caused by medical disorders.',
    img: '/Splenectomy.jpg',
    title: 'Splenectomy',
  },
  {
    desc: 'Laparoscopic removal of adrenal tumours is a safe and better procedure than open surgery where a large incision is necessary.',
    img: '/Adrenalectomy.jpg',
    title: 'Adrenalectomy',
  },
  {
    desc: 'Non-functioning kidneys are removed to prevent infections, tumors, or hypertension, often laparoscopically. Types include radical, donor, and partial nephrectomy.',
    img: '/Nephrectomy-1.png',
    title: 'Nephrectomy',
  },
];
const vats = [
  {
    desc: 'Lymphnodes from within the chest are removed for the purpose of arriving at an accurate diagnosis after histopathological examination.',
    img: '/19565.jpg',
    title: 'Mediastinal Lymphnode Biopsy',
  },
  {
    desc: 'Removal of thickened covering layer of lung to facilitate it’s expansion is called Decortication. Thoracoscopic decortications is a fairly commonly performed procedure and is a good alternative to open thoracotomy and decortications.',
    img: '/vats.jpg',
    title: 'Thoracoscopic Decortication',
  },
  {
    desc: 'VATS is now the method of choice for removal of thymus tumours.',
    img: '/Thymus-removal-768x870.png',
    title: 'Thymus removal',
  },
];
export default function LaparoscopicSurgery() {
  const [activeIndexGeneral, setActiveIndexGeneral] = React.useState(0);
  const [activeIndexHernia, setActiveIndexHernia] = React.useState(0);
  const [activeIndexUrology, setActiveIndexUrology] = React.useState(0);
  const [activeIndexPaediatric, setActiveIndexaPediatric] = React.useState(0);
  const [activeIndexSolid, setActiveIndexSolid] = React.useState(0);
  const [activeIndexVats, setActiveIndexVats] = React.useState(0);

  const prevGeneralRef = React.useRef(null);
  const nextGeneralRef = React.useRef(null);

  const prevHerniaRef = React.useRef(null);
  const nextHerniaRef = React.useRef(null);

  const prevUrologyRef = React.useRef(null);
  const nextUrologyRef = React.useRef(null);

  const prevPaediatricRef = React.useRef(null);
  const nextPaediatricRef = React.useRef(null);

  return (
    <React.Fragment>
      {/* Laparoscopic General Surgery  */}
      <div className="mt-30 p-8 bg-white relative mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[32px] font-semibold text-gray-900 mb-2 leading-normal md:tracking-wide">
              Laparoscopic General Surgery
            </h2>
            <p className="text-gray-600 md:leading-relaxed text-[20px] md:tracking-wide leading-tight">
              Commonly performed laparoscopic general surgery procedures:
            </p>
          </div>

          {/* ✅ Arrows only visible on desktop */}
          <div className="right-4 top-0 hidden md:flex flex-row gap-3 z-10">
            <Button
              className="bg-white border-2 border-[#1e3a8a] text-black rounded-full 
              w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all shadow-md"
              ref={prevGeneralRef}
            >
              <FaArrowLeft className="text-lg" />
            </Button>
            <Button
              className="bg-white border-2 border-[#1e3a8a] text-black rounded-full 
              w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all shadow-md"
              ref={nextGeneralRef}
            >
              <FaArrowRight className="text-lg" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            breakpoints={{
              768: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              // safely attach navigation buttons
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevGeneralRef.current!;
                swiper.params.navigation.nextEl = nextGeneralRef.current!;
              }
            }}
            autoplay={false} // ✅ no autoplay anywhere
            className="hidden md:flex"
            modules={[Navigation]} // ✅ no Autoplay module
            onSlideChange={(swiper) => setActiveIndexGeneral(swiper.realIndex)}
            slidesPerView={1}
            spaceBetween={20}
            autoHeight
            loop
          >
            {generalSurgeries.map((surgery, index) => (
              <SwiperSlide key={index}>
                <div className="m-2 flex flex-col justify-between min-h-[550px] overflow-hidden rounded-lg shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] hover:shadow-[0px_0px_0px_-1px_rgba(0,0,0,0.3),0px_2px_4px_0px_rgba(0,0,0,0.25),0px_3px_6px_0px_rgba(0,0,0,0.2)] transition-all duration-300 p-5 mt-10 mb-10">
                  <div>
                    <div className="relative w-full h-60 overflow-hidden rounded-lg mb-6">
                      <Image
                        alt={surgery.title}
                        className="object-fill rounded-lg"
                        src={surgery.img}
                        fill
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{surgery.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{surgery.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="flex justify-center mb-10 gap-3">
              {generalSurgeries.map((_, i) => (
                <div
                  className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                    activeIndexGeneral === i ? 'bg-black scale-150' : 'bg-gray-400'
                  }`}
                  key={i}
                />
              ))}
            </div>
          </Swiper>
        </div>
      </div>

      {/* Laparoscopic Hernia Surgery */}
      <div className=" bg-gray-300 relative w-full">
        <div className=" mx-auto max-w-[1200px] mt-10 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[32px] font-semibold text-gray-900 mb-2 leading-normal md:tracking-wide">
                Laparoscopic Hernia Surgery
              </h2>
              <p className="text-gray-600 md:leading-relaxed text-[20px] md:tracking-wide leading-tight">
                Commonly performed laparoscopic hernia surgery procedures:
              </p>
            </div>
            <div className="right-4 top-0 hidden md:flex flex-row gap-3 z-10">
              <Button
                className="bg-white border-2 border-[#1e3a8a] text-black rounded-full 
            w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all shadow-md"
                ref={prevHerniaRef}
              >
                <FaArrowLeft className="text-lg" />
              </Button>
              <Button
                className="bg-white border-2 border-[#1e3a8a] text-black rounded-full 
            w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all shadow-md"
                ref={nextHerniaRef}
              >
                <FaArrowRight className="text-lg" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: { autoplay: false, slidesPerView: 3 },
              }}
              onBeforeInit={(swiper) => {
                // cast to any to bypass TypeScript errors
                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                  swiper.params.navigation.prevEl = prevHerniaRef.current!;
                  swiper.params.navigation.nextEl = nextHerniaRef.current!;
                }
              }}
              className="hidden md:flex"
              modules={[Navigation]} // ✅ no Autoplay module
              onSlideChange={(swiper) => setActiveIndexHernia(swiper.realIndex)}
              slidesPerView={1}
              spaceBetween={20}
              autoHeight
              loop
            >
              {herniaSurgeries.map((surgery, index) => (
                <SwiperSlide key={index}>
                  <div className="m-2 flex flex-col justify-between min-h-[550px] overflow-hidden rounded-lg shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] hover:shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.3),0px_2px_4px_0px_rgba(0,0,0,0.25),0px_3px_6px_0px_rgba(0,0,0,0.2)] hover:rounded-lg  transition-all duration-300 p-5 mt-10 mb-10 bg-white">
                    <div>
                      <div className="relative w-full h-60 overflow-hidden rounded-lg mb-6">
                        <Image
                          alt={surgery.title}
                          className="object-fill rounded-lg"
                          src={surgery.img}
                          fill
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{surgery.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{surgery.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="flex justify-center mb-10 gap-3">
                {herniaSurgeries.map((_, i) => (
                  <div
                    className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                      activeIndexHernia === i ? 'bg-black scale-150' : 'bg-gray-400'
                    }`}
                    key={i}
                  />
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Single Incision Laparoscopic Surgery */}
      <div className="md:p-20 p-10 mx-auto max-w-[1200px]">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          {/* Left Side Text */}
          <div className="md:w-1/2">
            <h1 className="text-[32px] mb-5 font-semibold text-gray-900 md:tracking-wide md:whitespace-nowrap">
              Single Incision Laparoscopic Surgery
            </h1>

            {/*  Image between h1 and p only on mobile */}
            <div className="block md:hidden mb-5">
              <Image
                alt="Surgery"
                className="rounded-lg object-cover"
                height={600} // required
                src="/Single-Incision-Laparoscopic-Surgery.png"
                width={800} // required
              />
            </div>

            <p className="text-[20px] text-[#00000099] mb-5 leading-relaxed">
              Single Incision Laparoscopic surgery (SILS) is a further advancement in laparoscopic
              surgery. It is now possible to do almost all laparoscopic procedures through a single
              incision instead of the multiple incisions used in conventional multi-port
              laparoscopy. Special instruments are required for these procedures. The most commonly
              performed SILS procedures are:
            </p>

            <ul className="text-[#00000099] text-[16px] list-disc ml-6 md:ml-10 space-y-1">
              <li>Cholecystectomy</li>
              <li>Hysterectomy</li>
              <li>Ovarian Cystectomy</li>
              <li>Appendectomy</li>
            </ul>
          </div>

          {/* Right Side Image (Hidden on mobile, shown on desktop) */}
          <div className="hidden md:block md:w-1/2">
            <Image
              alt="Surgery"
              className="rounded-lg w-full h-auto object-cover"
              height={600}
              src="/Single-Incision-Laparoscopic-Surgery.png"
              width={800}
            />
          </div>
        </div>
      </div>

      {/* Laparoscopic uro Surgery */}
      <div className="bg-gray-300 relative w-full">
        <div className="mt-10 p-8  mx-auto max-w-[1200px]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[32px] font-semibold text-gray-900 mb-2 leading-normal md:tracking-wide">
                Laparoscopic Urology
              </h2>
              <p className="text-gray-600 md:leading-relaxed text-[20px] md:tracking-wide leading-tight">
                Commonly performed Laparoscopic Urology procedures:
              </p>
            </div>
            <div className="right-4 top-0 hidden md:flex flex-row gap-3 z-10">
              <Button
                className="bg-white border-2 border-[#1e3a8a] text-black rounded-full 
            w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all shadow-md"
                ref={prevUrologyRef}
              >
                <FaArrowLeft className="text-lg" />
              </Button>
              <Button
                className="bg-white border-2 border-[#1e3a8a] text-black rounded-full 
            w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all shadow-md"
                ref={nextUrologyRef}
              >
                <FaArrowRight className="text-lg" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: { autoplay: false, slidesPerView: 3 },
              }}
              onBeforeInit={(swiper) => {
                // cast to any to bypass TypeScript errors
                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                  swiper.params.navigation.prevEl = prevUrologyRef.current!;
                  swiper.params.navigation.nextEl = nextUrologyRef.current!;
                }
              }}
              className="hidden md:flex"
              modules={[Navigation]} // ✅ no Autoplay module
              onSlideChange={(swiper) => setActiveIndexUrology(swiper.realIndex)}
              slidesPerView={1}
              spaceBetween={20}
              autoHeight
              loop
            >
              {urologySurgeries.map((surgery, index) => (
                <SwiperSlide key={index}>
                  <div className="m-2 flex flex-col justify-between min-h-[550px] overflow-hidden rounded-lg shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] hover:shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.3),0px_2px_4px_0px_rgba(0,0,0,0.25),0px_3px_6px_0px_rgba(0,0,0,0.2)] hover:rounded-lg  transition-all duration-300 p-5 mt-10 mb-10 bg-white">
                    <div>
                      <div className="relative w-full h-60 overflow-hidden rounded-lg mb-6">
                        <Image
                          alt={surgery.title}
                          className="object-fill rounded-lg"
                          src={surgery.img}
                          fill
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{surgery.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{surgery.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="flex justify-center mb-10 gap-3">
                {urologySurgeries.map((_, i) => (
                  <div
                    className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                      activeIndexUrology === i ? 'bg-black scale-150' : 'bg-gray-400'
                    }`}
                    key={i}
                  />
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Paediatric Laparoscopic */}
      <div className="mt-10 p-8 bg-white relative mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[32px] font-semibold text-gray-900 mb-2 leading-normal md:tracking-wide">
              Paediatric Laparoscopic
            </h2>
            <p className="text-gray-600 md:leading-relaxed text-[20px] md:tracking-wide leading-tight">
              Commonly performed paediatric laparoscopic procedures:
            </p>
          </div>
          <div className="right-4 top-0 hidden md:flex flex-row gap-3 z-10">
            <Button
              className="bg-white border-2 border-[#1e3a8a] text-black rounded-full 
            w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all shadow-md"
              ref={prevPaediatricRef}
            >
              <FaArrowLeft className="text-lg" />
            </Button>
            <Button
              className="bg-white border-2 border-[#1e3a8a] text-black rounded-full 
            w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all shadow-md"
              ref={nextPaediatricRef}
            >
              <FaArrowRight className="text-lg" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { autoplay: false, slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              // cast to any to bypass TypeScript errors
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevPaediatricRef.current!;
                swiper.params.navigation.nextEl = nextPaediatricRef.current!;
              }
            }}
            className="hidden md:flex"
            modules={[Navigation]} // ✅ no Autoplay module
            onSlideChange={(swiper) => setActiveIndexaPediatric(swiper.realIndex)}
            slidesPerView={1}
            spaceBetween={20}
            autoHeight
            loop
          >
            {paediatric.map((surgery, index) => (
              <SwiperSlide key={index}>
                <div className="m-2 flex flex-col justify-between min-h-[550px] overflow-hidden rounded-lg shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] hover:shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.3),0px_2px_4px_0px_rgba(0,0,0,0.25),0px_3px_6px_0px_rgba(0,0,0,0.2)] hover:rounded-lg  transition-all duration-300 p-5 mt-10 mb-10 bg-white">
                  <div>
                    <div className="relative w-full h-60 overflow-hidden rounded-lg mb-6">
                      <Image
                        alt={surgery.title}
                        className="object-fill rounded-lg"
                        src={surgery.img}
                        fill
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{surgery.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{surgery.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="flex justify-center mb-10 gap-3">
              {paediatric.map((_, i) => (
                <div
                  className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                    activeIndexPaediatric === i ? 'bg-black scale-150' : 'bg-gray-400'
                  }`}
                  key={i}
                />
              ))}
            </div>
          </Swiper>
        </div>
      </div>

      {/* Laparoscopy in Trauma */}
      <div className="md:p-20 p-10 bg-gray-300">
        {/* ✅ Centered container for desktop */}
        <div className="max-w-[1200px] mx-auto">
          {/* Main Container */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-40">
            {/* Left Side Text */}
            <div className="md:w-1/2">
              <h1 className="text-[32px] mb-5 font-semibold text-gray-900 md:tracking-wide md:whitespace-nowrap">
                Laparoscopy in Trauma
              </h1>

              {/* Image between h1 and p only on mobile */}
              <div className="block md:hidden mb-5 bg-white rounded-2xl">
                <Image
                  alt="Surgery"
                  className="rounded-lg w-full h-auto object-cover"
                  height={768}
                  src="/Haematoma-_-Haemoperitonium-Drainage-768x768.png"
                  width={768}
                />
              </div>
              <p className="text-[20px] text-[#00000099] mb-5 leading-relaxed">
                Haematoma / Haemoperitonium Drainage
              </p>
              <p className="text-[20px] text-[#00000099] mb-5 md:w-[600px] text-justify">
                Laparoscopic surgery is emerging as an alternative in patients with abdominal
                injuries. It helps to quantify the injury correctly in haemodynamically stable
                patients with abdominal trauma. Blood in the abdominal cavity can be drained and
                bleeding controlled. In addition to this, damaged spleen can also be removed.
              </p>
            </div>

            {/* Right Side Image (Hidden on mobile, shown on desktop) */}
            <div className="hidden md:flex md:w-1/2 bg-white rounded-2xl justify-center">
              <Image
                alt="Surgery"
                className="rounded-2xl object-cover"
                height={300}
                src="/Haematoma-_-Haemoperitonium-Drainage-768x768.png"
                width={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Laparoscopic Solid Organ Surgery */}
      <div className="mt-10 p-8 bg-white relative mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[32px] font-semibold text-gray-900 mb-2 leading-normal md:tracking-wide">
              Laparoscopic Solid Organ Surgery
            </h2>
            <p className="text-gray-600 md:leading-relaxed text-[20px] md:tracking-wide leading-tight">
              Commonly performed Laparoscopic Solid Organ Surgery procedures:
            </p>
          </div>
          <div className="right-4 top-0 hidden md:flex flex-row gap-3 z-10">
            <Button
              className="bg-white border-2 border-[#1e3a8a] text-black rounded-full 
            w-12 h-12 flex items-center justify-center hover:bg-gray-0 transition-all shadow-md opacity-30"
            >
              <FaArrowLeft className="text-lg" />
            </Button>
            <Button
              className="bg-white border-2 border-[#1e3a8a] text-black rounded-full 
            w-12 h-12 flex items-center justify-center hover:bg-gray-0 transition-all shadow-md opacity-30"
            >
              <FaArrowRight className="text-lg" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { autoplay: false, slidesPerView: 3 },
            }}
            className="hidden md:flex"
            modules={[Navigation]} // ✅ no Autoplay module
            onSlideChange={(swiper) => setActiveIndexSolid(swiper.realIndex)}
            slidesPerView={1}
            spaceBetween={20}
            autoHeight
            loop
          >
            {solidOrganSurgeries.map((surgery, index) => (
              <SwiperSlide key={index}>
                <div className="m-2 flex flex-col justify-between min-h-[550px] overflow-hidden rounded-lg shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] hover:shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.3),0px_2px_4px_0px_rgba(0,0,0,0.25),0px_3px_6px_0px_rgba(0,0,0,0.2)] hover:rounded-lg  transition-all duration-300 p-5 mt-10 mb-10 bg-white">
                  <div>
                    <div className="relative w-full h-60 overflow-hidden rounded-lg mb-6">
                      <Image
                        alt={surgery.title}
                        className="object-fill rounded-lg"
                        src={surgery.img}
                        fill
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{surgery.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{surgery.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="flex justify-center mb-10 gap-3 md:hidden">
              {solidOrganSurgeries.map((_, i) => (
                <div
                  className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                    activeIndexSolid === i ? 'bg-black scale-150' : 'bg-gray-400'
                  }`}
                  key={i}
                />
              ))}
            </div>
          </Swiper>
        </div>
      </div>

      {/* Laparoscopy For Morbid Obesity */}
      <div className="md:p-20 p-10 bg-gray-300">
        {/* ✅ Centered container for desktop */}
        <div className="max-w-[1200px] mx-auto">
          {/* Main Container */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-20">
            {/* Left Side Text */}
            <div className="md:w-1/2">
              <h1 className="text-[32px] mb-5 font-semibold text-gray-900 md:tracking-wide md:whitespace-nowrap">
                Laparoscopy For Morbid Obesity
              </h1>
              {/* Image between h1 and p only on mobile */}
              <div className="block md:hidden mb-5 bg-white rounded-2xl">
                <Image
                  alt="Surgery"
                  className="rounded-lg w-full h-auto object-cover"
                  height={600}
                  src="/Laparoscopy_for_morbid_Obesity.png"
                  width={800}
                />
              </div>
              <p className="text-[20px] text-[#00000099] mb-5 leading-relaxed md:w-[600px] text-justify">
                The patients with morbid obesity or obesity with metabolic disorders like diabetes
                have a surgical option to help them overcome their problems. The diabetes goes into
                remission immediately after surgery.
              </p>
              <p className="text-[20px] text-[#00000099] mb-5">The procedures available are :-</p>
              <ul className="text-[16px] text-[#00000099] mb-5 list-disc ml-6">
                <li>Sleeve Gastrectomy</li>
                <li>Gastric Bypass</li>
                <li>Gastric Banding</li>
              </ul>
              <p className="text-[20px] text-[#00000099] mb-5">
                Surgery is reserved for patients who have exhausted all other options for weight
                loss. Proper counseling is done by the bariatric team to decide the best procedure
                for each patient.
              </p>
            </div>

            {/* Right Side Image (Hidden on mobile, shown on desktop) */}
            <div className="hidden md:flex md:w-1/2 justify-center">
              <Image
                alt="Surgery"
                className="rounded-2xl object-cover"
                height={300}
                src="/Laparoscopy_for_morbid_Obesity.png"
                width={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* vats */}
      <div className="mt-10 pt-8 px-8 bg-white relative mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[32px] font-semibold text-gray-900 mb-2 leading-normal md:tracking-wide">
              Laparoscopic Hernia Surgery
            </h2>
            <p className="text-gray-600 md:leading-relaxed text-[20px] md:tracking-wide leading-tight">
              Commonly performed laparoscopic hernia surgery procedures:
            </p>
          </div>
          <div className="right-4 top-0 hidden md:flex flex-row gap-3 z-10">
            <Button
              className="bg-white border-2 border-[#1e3a8a] text-black rounded-full 
            w-12 h-12 flex items-center justify-center hover:bg-gray-0 transition-all shadow-md opacity-30"
            >
              <FaArrowLeft className="text-lg" />
            </Button>
            <Button
              className="bg-white border-2 border-[#1e3a8a] text-black rounded-full 
            w-12 h-12 flex items-center justify-center hover:bg-gray-0 transition-all shadow-md opacity-30"
            >
              <FaArrowRight className="text-lg" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { autoplay: false, slidesPerView: 3 },
            }}
            className="hidden md:flex"
            modules={[Navigation]} // ✅ no Autoplay module
            onSlideChange={(swiper) => setActiveIndexVats(swiper.realIndex)}
            slidesPerView={1}
            spaceBetween={20}
            autoHeight
            loop
          >
            {vats.map((surgery, index) => (
              <SwiperSlide key={index}>
                <div className="m-2 flex flex-col justify-between min-h-[550px] overflow-hidden rounded-lg shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] hover:shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.3),0px_2px_4px_0px_rgba(0,0,0,0.25),0px_3px_6px_0px_rgba(0,0,0,0.2)] hover:rounded-lg  transition-all duration-300 p-5 mt-10 mb-10 bg-white">
                  <div>
                    <div className="relative w-full h-60 overflow-hidden rounded-lg mb-6">
                      <Image
                        alt={surgery.title}
                        className="object-fill rounded-lg"
                        src={surgery.img}
                        fill
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{surgery.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{surgery.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="flex justify-center mb-1 gap-3 md:hidden">
              {vats.map((_, i) => (
                <div
                  className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                    activeIndexVats === i ? 'bg-black scale-150' : 'bg-gray-400'
                  }`}
                  key={i}
                />
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
}
