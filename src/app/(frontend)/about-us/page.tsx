'use client';
import * as React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <React.Fragment>
      {/* for video */}
      <div className="relative overflow-hidden mx-auto max-h-[700px] h-full w-full object-cover mt-20">
        <video
          className="w-full object-cover mx-auto object-[0%_80%] max-h-[700px]"
          poster="/video-capture-0.00seg-3815.png"
          src="/start-hospital.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="bg-[rgb(234,237,243)] mx-auto">
        <div className="max-w-[1200px] mx-auto py-8 px-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="grid justify-center">
                <h1 className="text-[32px] text-[#22426e] font-semibold align-center pt-5">
                  ABOUT US
                </h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="py-6">
                <p className="text-[16px] leading-[26px] text-[#00000099]">
                  Located in the heart of the city, Star Hospital is a state-of-the-art, 22-bed
                  facility spanning 6,000 sq. ft., offering comprehensive inpatient and outpatient
                  services. Established in 2002 for outpatient care and expanded in 2011 with a
                  fully operational indoor center, we are dedicated to providing exceptional care
                  for all patient categories.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="pb-8">
                <p className="text-[16px] leading-[26px] text-[#00000099]">
                  Welcome to Star Hospital, a premier healthcare facility specializing in minimally
                  invasive, endoscopic, microscopic, and cosmetic surgeries. At Star Hospital, we
                  combine advanced medical technology with compassionate care to deliver outstanding
                  outcomes for all our patients.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="grid text-[16px] leading-[26px] text-[#00000099]">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Accommodation Options</strong>
                    <p className="pl-5">
                      Deluxe rooms, ordinary rooms, semi-private rooms, and general wards.
                    </p>
                  </li>

                  <li>
                    <strong>Operation Theatres</strong>
                    <p className="pl-5">
                      Two cutting-edge operation theatres, including a state-of-the-art modular
                      suite with:
                    </p>
                  </li>

                  <li className="pl-5">
                    <strong>Integrated Digital Systems</strong>
                    <p className="pl-5">
                      Facilities for digital data management, procedure recording, video streaming,
                      and live webcasts.
                    </p>
                  </li>

                  <li className="pl-5">
                    <strong>Advanced Equipment</strong>
                    <p className="pl-5">
                      Karl Storz OR-1 HD integrated operating platform, Harmonic scalpel, Siemens
                      Multi-mobile 3C C-arm, multi-parameter monitors with ET-Co2 modules, and GE
                      workstation anesthesia trolley.
                    </p>
                  </li>

                  <li className="pl-5">
                    <strong>Uninterrupted Power Supply</strong>
                    <p className="pl-5">
                      Online UPS backup with dual generator systems and servo-controlled electrical
                      supply.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-[32px] text-[#000000ee] font-semibold text-center leading-[36px] py-8">
                Our Commitment to Excellence
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-[16px] text-[#00000099] text-center leading-[26px] pb-12">
                At Star Hospital, every aspect of our facility is designed with patient safety and
                comfort in mind. <br /> From fire safety compliance to staff accommodations, we
                focus on delivering world-class care. <br />
                Additional features include:
              </p>
            </motion.div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {/* Box 1 */}
                  <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl py-8 px-8 text-center flex flex-col justify-center items-center hover:scale-102">
                    <h2 className="text-[20px] font-[500] text-[#0f2239] mb-3">Chemist Shop</h2>
                    <p className="text-[#555] text-[15px] leading-[26px]">
                      Provide convenience for patients and staff by offering easy access to
                      essential medications on-site.
                    </p>
                  </div>

                  {/* Box 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl py-8 px-8 text-center flex flex-col justify-center items-center hover:scale-102">
                      <h2 className="text-[20px] font-[500] text-[#0f2239] mb-3">Auditorium</h2>
                      <p className="text-[#555] text-[15px] leading-[26px]">
                        Serves as a venue for training, conferences, and educational events,
                        enhancing professional development.
                      </p>
                    </div>
                  </motion.div>

                  {/* Box 3 - Centered only on md screens */}
                  <motion.div
                    className="md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0 md:w-1/2 lg:w-full"
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <div>
                      <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl py-8 px-8 text-center flex flex-col justify-center items-center hover:scale-102">
                        <h2 className="text-[20px] font-[500] text-[#0f2239] mb-3">
                          Staff Accommodations
                        </h2>
                        <p className="text-[#555] text-[15px] leading-[26px]">
                          Ensure smooth operations by providing comfortable living spaces for staff,
                          fostering a productive work environment.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-20 px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-[20px] leading-[26px] text-[#000000ee] font-semibold">
              Meet Our Team of Highly Skilled and Compassionate Doctors, Committed to Providing{' '}
              <br />
              Exceptional Care and Ensuring Your Health and Well-being
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="w-[150px] h-[2px] bg-black mx-auto mt-8 mb-15 " />
          </motion.div>
        </div>

        {/* Table Section using Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="border border-gray-300 rounded-lg bg-white overflow-x-auto shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),_0px_1px_1px_0px_rgba(0,0,0,0.14),_0px_1px_3px_0px_rgba(0,0,0,0.12)]">
            {/* Header */}
            <table className="w-full border-collapse text-left text-[16px] ">
              {/* Header */}
              <thead>
                <tr className="border-b border-gray-300 text-[#000000de]">
                  <th className="py-6 px-5 w-1/3 font-semibold">Doctor Name</th>
                  <th className="py-6 px-5 w-1/3 font-semibold">Qualification</th>
                  <th className="py-6 px-5 w-1/3 font-semibold">Specialization</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-gray-200 text-[#00000099]">
                {[
                  [
                    'Dr. Medhavi Tomar',
                    'M.B.B.S., M.S.',
                    'Gen. & Laparoscopic Surgery',
                    '/dr-boi-medhavi',
                  ],
                  ['Dr. Monika Singh', 'M.B.B.S., M.D.', 'Obs. & Gynae', '/dr-boi-monika'],
                  ['Dr. Subhash Yadav', 'M.B.B.S., M.S., M.Ch.', 'Urologist'],
                  ['Dr. Shaleen Sharma', 'M.B.B.S., M.S., M.Ch.', 'Urologist'],
                  ['Dr. Rahul Goel', 'M.B.B.S., M.S.', 'Urologist'],
                  ['Dr. Gagan Deep Singh', 'M.B.B.S., M.D.', 'Anesthesiologist'],
                  ['Dr. Pranav Gupta', 'M.B.B.S., D.N.B.', 'Anesthesiologist'],
                  ['Dr. Ambrish Kumar Gupta', 'M.B.B.S., D.A.', 'Anesthesiologist'],
                  ['Dr. Abhishek Rathi', 'M.B.B.S., M.D.', 'Anesthesiologist'],
                  ['Dr. Bhanu Pratap Singh', 'M.B.B.S., M.S., M.Ch.', 'Plastic Surgery'],
                  ['Dr. Sanjeev Saxena', 'M.B.B.S., M.D., D.M. (Cardiology)', 'Cardiologist'],
                  ['Dr. Neelima', 'M.B.B.S., M.D.', 'Paediatrician'],
                  ['Dr. Deepak Agarwal', 'M.B.B.S., M.D.', 'Paediatrician'],
                  ['Dr. Nikhil Wadera', 'M.B.B.S., M.D.', 'Medicine'],
                  ['Dr. Rohit Singh', 'M.B.B.S., M.S.', 'ENT'],
                  ['Dr. Atul Rastogi', 'M.B.B.S., M.S.', 'Orthopedics'],
                ].map(([name, qualification, specialization, link], i) => (
                  <tr className="hover:bg-gray-100" key={i}>
                    <td className=" align-top break-words py-[16px] px-[22px]">
                      {link ? (
                        <a
                          className="hover:underline underline-offset-1 hover:text-[#22426e]"
                          href={link}
                        >
                          {name}
                        </a>
                      ) : (
                        name
                      )}
                    </td>
                    <td className="py-[16px] px-[22px] align-top break-words">{qualification}</td>
                    <td className="py-[16px] px-[22px] align-top break-words">{specialization}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
}
