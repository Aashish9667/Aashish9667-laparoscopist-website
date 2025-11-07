'use client';
import * as React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const services = [
  { name: 'Laparoscopy Surgery', url: '/services/laparoscopy-surgery' },
  { name: 'Laparoscopic Gynae', url: '/services/laparoscopic-gynae' },
  { name: 'Proctology', url: '/services/proctology' },
  { name: 'Endourology', url: '/services/endourology' },
];

const navigation = [
  { name: 'About Us', url: '/about-us' },
  { name: 'News & Media', url: '/news-media' },
  { name: 'Gallery', url: '/gallery' },
  { name: 'Dr. Medhavi Tomar', url: 'dr-medhavi-tomar' },
  { name: 'Dr. Monika Tomar', url: 'dr-monika-tomar' },
];

export default function Footer() {
  return (
    <footer className={`bg-white border-t border-gray-300 ${poppins.className}`}>
      {/*  Responsive Layout */}
      <div className={`py-8 px-6 md:mt-5 ${poppins.className} max-w-[1200px] mx-auto`}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 lg:gap-20 text-left">
          {/*  Left Section: Logo + Social Icons */}
          <div className="flex flex-col space-y-4 justify-start items-start">
            <div className="md:relative">
              <Link href="/">
                <Image
                  alt="Laparoscopic Surgeons Logo"
                  className="object-contain w-40 h-auto md:w-120 align-top md:-mt-8 md:-ml-6 -ml-4"
                  height={176}
                  src="/logo/Laparoscopic-Surgeons-Logo.webp.avif"
                  width={249}
                />
              </Link>
            </div>
            <div className="flex space-x-6 md:-mt-4 text-[20px] lg:ml-5">
              <a
                className="flex items-end justify-center w-5 h-5 rounded-full bg-[#2D2D2D] text-white hover:bg-[#2D5289] transition-colors"
                href="(#)"
              >
                <FaFacebookF size={16} />
              </a>
              <a className="text-[#000000de] hover:text-[#2D5289]" href="(#)">
                <FaInstagram size={20} />
              </a>
              <a className="text-[#000000de] hover:text-[#2D5289]" href="(#)">
                <FaYoutube size={22} />
              </a>
              <a
                className="flex items-center justify-center w-5 h-5 rounded-sm bg-[#2D2D2D] text-white hover:bg-[#2D5289] transition-colors"
                href="(#)"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/*  Right Section: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-6 w-full">
            {/* Column 1 */}
            <div className="flex flex-col space-y-1 space-x-1 items-start break-words">
              <h3 className="font-semibold text-[#000000de] text-[16px] mb-2">Our Services</h3>

              {services.map((item) => (
                <a
                  className="text-[#00000099] text-[14px] hover:underline hover:text-[#2D5289]"
                  href={item.url}
                  key={item.name}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-1 space-x-1 items-start break-words">
              <h3 className="font-semibold text-[#000000de] text-[16px] mb-2">Quick Links</h3>

              {navigation.map((item) => (
                <a
                  className="text-[#00000099] text-[14px] hover:underline hover:text-[#2D5289]"
                  href={item.url}
                  key={item.name}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-1 space-x-1 items-start">
              <h3 className="font-semibold text-[#000000de] text-[16px] mb-2">Address</h3>
              <Link href="https://maps.app.goo.gl/uPNkQhp6CxB9dpxp8" target="_blank">
                <p className="text-[#00000099] text-[14px] leading-5">
                  M-2, Jawahar Quarters,
                  <br />
                  Meerut, (U.P.) India. 250001.
                </p>
              </Link>

              <h4 className="font-semibold text-[#000000de] mt-3">Inquiries</h4>
              <div className="text-[#00000099] text-[14px] leading-6 break-all">
                {[
                  '+91-121-2665083',
                  '+91-121-4055009',
                  '+91-9837890905',
                  '+91-9358413237',
                  'info@laparoscopist.com',
                ].map((info) => (
                  <span
                    className="block hover:underline hover:text-[#2D5289] cursor-text"
                    key={info}
                  >
                    {info}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Footer Bottom */}
      <div className=" py-3 text-center text-[14px] text-[#00000099] flex justify-center">
        © Copyright Marketita and respective copyright holders
      </div>
    </footer>
  );
}
