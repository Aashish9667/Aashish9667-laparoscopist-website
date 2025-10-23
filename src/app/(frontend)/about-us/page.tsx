'use client';
import * as React from 'react';

export default function AboutUs() {
  return (
    <React.Fragment>
      {/* for video */}
      <div className="relative overflow-hidden mx-auto max-h-[700px] h-full w-full object-cover ">
        <video
          className="w-full object-cover mx-auto object-[0%_80%] max-h-[700px]"
          src="/start-hospital.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="bg-gray-300 mx-auto">
        <div className="max-w-[1200px] mx-auto py-8 px-8">
          <div>
            <div className="grid justify-center">
              <h1 className="text-[32px] leading-[39px] text-[#22426e] font-bold align-center">
                About Us
              </h1>
            </div>

            <div className="py-8">
              <p className="text-[16px] leading-[26px] text-[#00000099]">
                Located in the heart of the city, Star Hospital is a state-of-the-art, 22-bed
                facility spanning 6,000 sq. ft., offering comprehensive inpatient and outpatient
                services. Established in 2002 for outpatient care and expanded in 2011 with a fully
                operational indoor center, we are dedicated to providing exceptional care for all
                patient categories.
              </p>
            </div>

            <div className="pb-8">
              <p className="text-[16px] leading-[26px] text-[#00000099]">
                Welcome to Star Hospital, a premier healthcare facility specializing in minimally
                invasive, endoscopic, microscopic, and cosmetic surgeries. At Star Hospital, we
                combine advanced medical technology with compassionate care to deliver outstanding
                outcomes for all our patients.
              </p>
            </div>
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
                    Two cutting-edge operation theatres, including a state-of-the-art modular suite
                    with:
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
          </div>

          <div className="py-20">
            <h1 className="text-[32px] text-[#000000ee] font-bold text-center leading-[36px] py-8">
              Our Commitment to Excellence
            </h1>
            <p className="text-[16px] text-[#00000099] text-center leading-[26px] pb-12">
              At Star Hospital, every aspect of our facility is designed with patient safety and
              comfort in mind. <br /> From fire safety compliance to staff accommodations, we focus
              on delivering world-class care. <br />
              Additional features include:
            </p>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Box 1 */}
                <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl py-8 px-8 text-center flex flex-col justify-center items-center hover:scale-102">
                  <h2 className="text-[20px] font-semibold text-[#0f2239] mb-3">Chemist Shop</h2>
                  <p className="text-[#555] text-[15px] leading-[26px]">
                    Provide convenience for patients and staff by offering easy access to essential
                    medications on-site.
                  </p>
                </div>

                {/* Box 2 */}
                <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl py-8 px-8 text-center flex flex-col justify-center items-center hover:scale-102">
                  <h2 className="text-[20px] font-semibold text-[#0f2239] mb-3">Auditorium</h2>
                  <p className="text-[#555] text-[15px] leading-[26px]">
                    Serves as a venue for training, conferences, and educational events, enhancing
                    professional development.
                  </p>
                </div>

                {/* Box 3 - Centered only on md screens */}
                <div className="md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0 md:w-1/2 lg:w-full">
                  <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl py-8 px-8 text-center flex flex-col justify-center items-center hover:scale-102">
                    <h2 className="text-[20px] font-semibold text-[#0f2239] mb-3">
                      Staff Accommodations
                    </h2>
                    <p className="text-[#555] text-[15px] leading-[26px]">
                      Ensure smooth operations by providing comfortable living spaces for staff,
                      fostering a productive work environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-20 px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-[16px] leading-[26px] text-[#000000ee] font-bold">
            Meet Our Team of Highly Skilled and Compassionate Doctors, Committed to Providing <br />
            Exceptional Care and Ensuring Your Health and Well-being
          </p>
          <div className="w-[150px] h-[2px] bg-black mx-auto mt-8 mb-15 " />
        </div>

        {/* Table Section using Grid */}
        <div className="border border-gray-300 rounded-lg bg-white overflow-x-auto">
          {/* Header */}
          <table className="w-full border-collapse text-left text-[15px]">
            {/* Header */}
            <thead>
              <tr className="font-semibold border-b border-gray-300 text-[#000]">
                <th className="py-3 px-4 w-1/3">Doctor Name</th>
                <th className="py-3 px-4 w-1/3">Qualification</th>
                <th className="py-3 px-4 w-1/3">Specialization</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-gray-200 text-[#00000099] ">
              {[
                ['Dr. Medhavi Tomar', 'M.B.B.S., M.S.', 'Gen. & Laparoscopic Surgery'],
                ['Dr. Monika Singh', 'M.B.B.S., M.D.', 'Obs. & Gynae'],
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
              ].map(([name, qualification, specialization], i) => (
                <tr className="hover:bg-gray-100" key={i}>
                  <td className="py-3 px-4 align-top break-words">{name}</td>
                  <td className="py-3 px-4 align-top break-words">{qualification}</td>
                  <td className="py-3 px-4 align-top break-words">{specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}
