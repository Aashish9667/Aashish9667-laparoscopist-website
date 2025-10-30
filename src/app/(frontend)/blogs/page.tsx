'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

// 🧩 Step 1: All your data (22 posts with unique info)
const pressImages = [
  {
    date: 'September 26, 2025',
    description:
      'Laparoscopic surgery is a minimally invasive technique that typically offers faster recovery and less pain compared to traditional open surgery. However, proper care during the post-surgery recovery phase is crucial to ensure optimal healing and avoid complications. This article provides detailed recovery after laparoscopic surgery tips to help patients heal faster and return to normal…',
    link: '/press-release/recovery-tips',
    src: '/WhatsApp-Image-2025-09-29-at-2.06.35-PM.jpeg.avif',
    title: 'Post-Surgery Recovery Tips: How to Heal Faster After Laparoscopy',
  },
  {
    date: 'September 16, 2025',
    description:
      'Laparoscopic surgery has revolutionized modern surgical techniques, offering patients minimally invasive alternatives to traditional open surgery. Among its variants, two key types stand out: Single-Incision Laparoscopic Surgery (SILS) and Multi-Port Laparoscopic Surgery (MPL). Understanding the differences, benefits, and considerations of these options is essential for patients considering laparoscopic procedures. This article delves into single-incision vs multi-port…',
    link: '/press-release/laparoscopy-guide',
    src: '/WhatsApp-Image-2025-09-29-at-1.28.29-PM.jpeg.avif',
    title: 'Single-Incision vs. Multi-Port Laparoscopic Surgery: What Patients Should Know',
  },
  {
    date: 'August 20, 2025',
    description:
      'Rectal prolapse is a distressing condition where the rectum slips out of its normal position, leading to discomfort, pain, and sometimes even social embarrassment. Thankfully, modern surgical techniques like Laparoscopic Rectopexy offer an effective, safe, and minimally invasive solution for patients dealing with this condition. This article provides a complete guide to the procedure, its…',
    link: '/press-release/liver-treatment',
    src: '/How-Laparoscopic-Surgery-is-Transforming-Pancreatic-Cancer-Treatment-2.png',
    title: 'What is Laparoscopic Rectopexy? A Complete Guide to the Procedure',
  },
  {
    date: ' August 8, 2025',
    description:
      'Pancreatic cancer is one of the most challenging cancers to diagnose and treat due to its late presentation and complex location in the body. Traditional open surgery for pancreatic cancer often involves large incisions, significant blood loss, and prolonged recovery times. However, with the advancement of Laparoscopic Surgery, patients now have access to a safer,… ',
    link: '/press-release/single-vs-multi-port',
    src: '/How-Laparoscopic-Surgery-is-Transforming-Pancreatic-Cancer-Treatment.png',
    title: 'How Laparoscopic Surgery is Transforming Pancreatic Cancer Treatment',
  },
  {
    date: ' July 30, 2025',
    description:
      'When it comes to Liver Abscess Treatment, accuracy, safety, and rapid recovery are paramount. Traditional open surgeries are being replaced by minimally invasive techniques like laparoscopic surgery, setting new benchmarks for patient care. Understanding Liver Abscess and Its Challenges A liver abscess is a pus-filled cavity in the liver caused by bacterial, parasitic, or fungal infections. Typical symptoms…',
    link: '/press-release/pre-surgery-consultation',
    src: '/Blue-and-White-Simple-Medical-Center-Banner.jpg',
    title:
      'How Laparoscopic Surgery Offers a Safe and Effective Solution for Liver Abscess Treatment',
  },
  {
    date: 'July 7, 2025',
    description:
      'Cervical health is a critical aspect of a woman’s overall well-being. Early detection of cervical issues can make a life-saving difference, especially when it comes to preventing or managing serious conditions like cervical cancer. One advanced diagnostic technique gaining importance is Laparoscopic Gynae Colposcopy. In this blog, Dr. Medhavi Tomar and Dr. Monika Singh Tomar,…',
    link: '/press-release/gallbladder-removal',
    src: '/WhatsApp-Image-2025-07-09-at-8.01.50-PM.jpeg',
    title: 'How Laparoscopic Gynae Colposcopy Helps in Early Detection of Cervical Problems',
  },
  {
    date: 'June 29, 2025',
    description:
      'When your child needs surgery, it’s natural to feel anxious. One of the most common childhood emergencies is appendicitis, often requiring surgical removal of the appendix. Today, Laparoscopic Appendectomy, a form of Minimally Invasive Surgery, has become the preferred choice for children due to its safety and faster recovery. In this blog, Dr. Medhavi Tomar…',
    link: '/press-release/cancer-treatment',
    src: '/WhatsApp-Image-2025-07-09-at-7.51.02-PM-1.jpeg',
    title: 'Understanding Laparoscopic Appendectomy in Children: What Parents Should Expect',
  },
  {
    date: 'June 13, 2025',
    description:
      'Laparoscopic surgery, also called keyhole surgery or Minimally Invasive Surgery (MIS), has revolutionized patient care. With smaller cuts, faster healing, and less pain compared to traditional open surgery, it’s no surprise patients in Meerut are increasingly opting for this advanced technique. But before you proceed, it’s crucial to feel confident and fully informed. Whether it’s… ',
    link: '/press-release/hernia-repair',
    src: '/WhatsApp-Image-2025-07-09-at-7.51.20-PM.jpeg',
    title: '10 Questions to Ask Your Surgeon Before Laparoscopic Surgery',
  },
  {
    date: 'November 7, 2024',
    description:
      'In the rapidly advancing field of modern medicine, laparoscopy has emerged as a revolutionary surgical technique. Offering minimally…',
    link: '/press-release/diet-after-surgery',
    src: '/unlocking-the-benefits-of-laproscopy.webp',
    title:
      'Discover the Life-Changing Benefits of Laparoscopy: When to See a Doctor and Why It’s Revolutionising Surgery',
  },
  {
    date: 'November 7, 2024',
    description:
      'Introduction: Laparoscopic surgery, often referred to as minimally invasive surgery, has revolutionized the way surgeons approach a variety… ',
    link: '/press-release/exercise-routine',
    src: '/laproscopic-surgery-and-its-benifits-to-patients.webp',
    title: 'Common Conditions Treated with Laparoscopic Surgery and How It Benefits Patients',
  },
  {
    date: ' November 7, 2024',
    description:
      'In today’s fast-paced world, medical breakthroughs are transforming the way surgeries are performed, and leading the charge is Dr. Medhavi…',
    link: '/press-release/pain-management',
    src: '/advancing-healthcare-with-precision.webp',
    title:
      'Revolutionizing Surgery with Precision: Meet Dr. Medhavi Tomar, India’s Leading Laparoscopic Surgeon',
  },
  {
    date: ' November 7, 2024',
    description:
      'Hernias are a common condition affecting millions of people worldwide, causing discomfort, pain, and in some cases, complications that…',
    link: '/press-release/appendectomy',
    src: '/laproscopic-hernia-surgery.webp',
    title: 'The Best Option for Hernia Repair: Why Laparoscopic Surgery is Leading the Way',
  },
];

const ITEMS_PER_PAGE = 10;

export default function News() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = pressImages.slice(startIndex, endIndex);

  const totalPages = Math.ceil(pressImages.length / ITEMS_PER_PAGE);

  return (
    <div className="max-w-[1200px] mx-auto pt-5 pb-20 px-4 flex flex-wrap md:flex-nowrap justify-between gap-10 md:gap-12 mt-30 md:mt-35">
      {/* Left side (news list) */}
      <div className="md:w-[75%] w-full">
        {currentItems.map((item, i) => (
          <div className="mb-10" key={i}>
            <div className="mb-6">
              <h1 className="text-[#00000099] mb-2">Published on {item.date}</h1>
              <p className="text-[#000000dd] text-2xl font-semibold leading-[28px]">{item.title}</p>
            </div>

            <Image
              alt={`Press Release ${i + 1}`}
              className="object-cover rounded-sm"
              height={800}
              src={item.src}
              width={1200}
            />
            <p className="text-[#00000099] text-base leading-relaxed mt-3">
              {item.description}{' '}
              <Link className="text-sky-500 font-medium hover:underline" href={item.link}>
                Read more
              </Link>
            </p>
          </div>
        ))}

        {/* Pagination Controls */}
        <hr className="border-t border-gray-200 w-full max-w-5xl mx-auto mb-6" />
        <div className="flex justify-center mt-14">
          <Pagination>
            <PaginationContent className="flex gap-2 justify-center">
              {/* Page 2 par ho to sirf "Previous" dikhana */}
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    className="bg-gray-100 text-[#000000dd] hover:bg-gray-200 px-3 py-2 rounded-none"
                    href="#"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  />
                </PaginationItem>
              )}

              {/* Static page numbers 1 and 2 */}
              {[1, 2].map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    className={`px-3 py-2 rounded-none transition ${
                      currentPage === page
                        ? 'bg-gray-200 text-[#00000099] font-medium'
                        : 'bg-gray-100 text-[#000000dd] hover:bg-gray-200'
                    }`}
                    href="#"
                    isActive={currentPage === page}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {/* Agar first page pe ho to sirf "Next" dikhana */}
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext
                    className="bg-gray-100 text-[#000000dd] hover:bg-gray-200 px-3 py-2 rounded-none"
                    href="#"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
        <hr className="border-t border-gray-200 w-full max-w-5xl mx-auto mt-14" />
      </div>

      {/* Right side sidebar */}
      <div className="md:w-[25%] w-full">
        <div className="flex flex-col gap-6">
          {/* Search Box */}
          <div className="bg-[#22446b] rounded-lg p-4">
            <div className="relative">
              <input
                className="w-full p-2 rounded-md text-sm text-white placeholder-white focus:outline-none"
                placeholder="Search"
                type="text"
              />
              <FiSearch className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white rotate-90" />
            </div>
          </div>

          {/* Recent Post Box */}
          <div className="bg-[#22446b] rounded-lg p-4 text-white">
            <h2 className="text-lg font-semibold mb-3 text-center">Recent Post</h2>
            <ul className="space-y-2 text-[14px] leading-[22px]">
              <li>Post-Surgery Recovery Tips: How to Heal Faster After Laparoscopy</li>
              <li>
                Single-Incision vs. Multi-Port Laparoscopic Surgery: What Patients Should Know
              </li>
              <li>What Is Laparoscopic Hysterectomy: A Complete Guide to the Procedure</li>
              <li>How Laparoscopic Surgery Is Transforming Proctologic Cancer Treatment</li>
              <li>
                How Laparoscopic Surgery Offers a Safe and Effective Solution for Liver Abscess
                Treatment
              </li>
            </ul>
          </div>

          {/* Social Media Box */}
          <div className="bg-[#22446b] rounded-lg p-4 text-white text-center">
            <h2 className="text-lg font-semibold mb-3">Social Media</h2>
            <div className="flex justify-center gap-4 text-xl">
              <a className="text-[#22446b] hover:zoom-in rounded-full bg-white" href="(#)">
                <FaFacebookF className="  w-5 h-5 py-1" />
              </a>
              <a className="text-white hover:zoom-in" href="(#)">
                <FaInstagram />
              </a>
              <a className="text-white hover:zoom-in" href="(#)">
                <FaYoutube />
              </a>
              <a className="text-[#22446b] hover:zoom-in" href="(#)">
                <FaLinkedinIn className=" rounded-sm bg-white py-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
