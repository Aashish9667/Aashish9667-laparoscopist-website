'use client';
import * as React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Footer() {
  return (
    <footer
      className={`bg-white border-t border-gray-300 py-8 mt-20 px-8 md:px-8 ${poppins.className}max-w-[1200px] mx-auto`}
    >
      {/*  Responsive Layout */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-50 text-left">
        {/*  Left Section: Logo + Social Icons */}
        <div className="flex flex-col space-y-4 justify-start items-start">
          <div className="md:relative">
            <Image
              alt="Laparoscopic Surgeons Logo"
              className="object-contain w-40 h-auto md:w-110 md:h-auto align-top md:-mt-8"
              height={176}
              src="/Laparoscopic-Surgeons-Logo.webp.avif"
              width={249}
            />
          </div>
          <div className="flex space-x-6 md:-mt-4 text-[20px] lg:ml-5">
            <a className="text-[#000000de] hover:text-[#132238]" href="(#)">
              <FaFacebookF />
            </a>
            <a className="text-[#000000de] hover:text-[#132238]" href="(#)">
              <FaInstagram />
            </a>
            <a className="text-[#000000de] hover:text-[#132238]" href="(#)">
              <FaYoutube />
            </a>
            <a className="text-[#000000de] hover:text-[#132238]" href="(#)">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/*  Right Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-6 w-full">
          {/* Column 1 */}
          <div className="flex flex-col space-y-1 items-start">
            <h3 className="font-semibold text-[#000000de] text-[16px] mb-2">Our Services</h3>

            {['Laparoscopy Surgery', 'Laparoscopic Gynae', 'Proctology', 'Endourology'].map(
              (service) => (
                <a
                  className="text-[#00000099] text-[14px] hover:underline hover:text-[#2D5289]"
                  href="(#)"
                  key={service}
                >
                  {service === 'Laparoscopy Surgery' ? (
                    <React.Fragment>
                      Laparoscopy
                      <br className="hidden md:block lg:hidden" />
                      Surgery
                    </React.Fragment>
                  ) : (
                    service
                  )}
                </a>
              ),
            )}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-1 items-start">
            <h3 className="font-semibold text-[#000000de] text-[16px] mb-2">Quick Links</h3>

            {['About Us', 'News & Media', 'Gallery', 'Dr. Medhavi Tomar', 'Dr. Monika Tomar'].map(
              (link) => (
                <a
                  className="text-[#00000099] text-[14px] hover:underline hover:text-[#2D5289]"
                  href="(#)"
                  key={link}
                >
                  {link === 'Dr. Medhavi Tomar' ? (
                    <React.Fragment>
                      Dr. Medhavi
                      <br className="hidden md:block lg:hidden" />
                      Tomar
                    </React.Fragment>
                  ) : (
                    link
                  )}
                </a>
              ),
            )}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-1 items-start">
            <h3 className="font-semibold text-[#000000de] text-[16px] mb-2">Address</h3>
            <p className="text-[#00000099] text-[14px] leading-5">
              M-2, Jawahar Quarters,
              <br />
              Meerut, (U.P.) India. 250001.
            </p>

            <h4 className="font-semibold text-[#000000de] mt-3">Inquiries</h4>
            <div className="text-[#00000099] text-[14px] leading-6">
              {[
                '+91-121-2665083',
                '+91-121-4055009',
                '+91-9837890905',
                '+91-9358413237',
                'info@laparoscopist.com',
              ].map((info) => (
                <span className="block hover:underline hover:text-[#2D5289] cursor-text" key={info}>
                  {info}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  Footer Bottom */}
      <div className="mt-8 pt-4 text-center text-[14px] text-[#00000099]">
        © Copyright Marketita and respective copyright holders
      </div>
    </footer>
  );
}
