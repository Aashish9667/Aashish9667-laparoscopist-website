'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [showServices, setShowServices] = React.useState(false);

  return (
    <nav
      className={`bg-white shadow-sm ${poppins.className} fixed top-0 left-0 w-full z-50 bg-white`}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-6 py-0 h-20 md:h-23  md:py-2">
        {/* Logo */}
        <div className="relative z-20 -mb-12 md:mx-10">
          <Link aria-label="Go to homepage" className="aspect-150/127 block" href="/">
            <Image
              alt="Logo"
              className="object-fill max-w-[150px] cursor-pointer  w-full"
              height={50}
              src="/Laparoscopic-Surgeons-Logo.webp.avif"
              width={150}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden [@media(min-width:986px)]:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 mx-10 md:mx-8">
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="!text-[#22426e] text-[14px] font-medium !bg-transparent !hover:bg-transparent hover:underline hover:decoration-[#22426e] hover:decoration-1 hover:underline-offset-4 hover:text-[#22426e]">
                  Services
                </NavigationMenuTrigger>
                <div className="rounded-none">
                  <NavigationMenuContent className="!bg-white data-[state=open]:!rounded-none data-[state=open]:!shadow-2xl !border-0 !p-0 min-w-[220px]">
                    <NavigationMenuLink asChild>
                      <Link
                        className="block px-5 py-4 hover:bg-gray-50 !text-[#22426e] text-[14px] font-medium "
                        href="/services/laparoscopy-surgery"
                      >
                        Laparoscopy Surgery
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block px-5 py-4 hover:bg-gray-50 !text-[#22426e] text-[14px] font-medium "
                        href="/services/laparoscopic-gynae"
                      >
                        Laparoscopic Gynae
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block px-5 py-4 hover:bg-gray-50 !text-[#22426e] text-[14px] font-medium "
                        href="/services/proctology"
                      >
                        Proctology
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block px-5 py-4 hover:bg-gray-50 !text-[#22426e] text-[14px] font-medium"
                        href="/services/endourology"
                      >
                        Endourology
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </div>
              </NavigationMenuItem>

              {/* Other Links */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    className=" text-[14px] font-medium  hover:text-[#22426e] !text-[#22426e]  hover:bg-transparent hover:underline hover:decoration-[#22426e] hover:decoration-1 hover:underline-offset-4"
                    href="/about-us"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    className="text-[14px] font-medium bg-transparent hover:text-[#22426e] !text-[#22426e]  hover:bg-transparent hover:underline hover:decoration-[#22426e] hover:decoration-1 hover:underline-offset-4"
                    href="/news-media"
                  >
                    News & Media
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    className=" text-[14px] font-medium bg-transparent hover:text-[#22426e] !text-[#22426e]  hover:bg-transparent hover:underline hover:decoration-[#22426e] hover:decoration-1 hover:underline-offset-4"
                    href="/gallery"
                  >
                    Gallery
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    className="text-[14px] font-medium bg-transparent hover:text-[#22426e] !text-[#22426e]  hover:bg-transparent hover:underline hover:decoration-[#22426e] hover:decoration-1 hover:underline-offset-4"
                    href="/blogs"
                  >
                    Blogs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu button */}
        <div className="flex [@media(min-width:986px)]:hidden">
          <Button
            className="bg-white text-[#000000ed] hover:bg-transparent focus-visible:ring-0 active:bg-transparent !text-xl !font-extrabold "
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            variant="ghost"
          >
            {isDrawerOpen ? <FiX size={34} /> : <FiMenu size={34} />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="absolute top-13 shadow-2xl right-6 w-[250px] bg-white rounded-sm py-4 px-5 flex flex-col gap-3 z-50 [@media(min-width:986px)]:hidden text-left">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-2 items-start">
              {/* Services Dropdown */}
              <NavigationMenuItem className="w-full">
                <NavigationMenuTrigger
                  className="w-full flex items-center justify-between !text-[#22426e] text-[14px] px-2 gap-30 !bg-transparent !hover:bg-transparent !focus:bg-transparent !ring-0 !shadow-none"
                  onClick={() => setShowServices(!showServices)}
                >
                  <span className="text-left !bg-transparent !hover:bg-transparent ">Services</span>
                </NavigationMenuTrigger>

                {/* Render services text/content below the trigger */}
                {showServices && (
                  <div className="py-2 mt-2 flex flex-col gap-1 px-4 text-[14px] relative">
                    {/* vertical line */}
                    <div className="absolute left-2 top-1 bottom-0  w-[1px]  bg-gray-100" />
                    <Link
                      className="py-1 !text-[#22426e] ml-1 text-left hover:underline"
                      href="/services/laparoscopy-surgery"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Laparoscopy Surgery
                    </Link>

                    <Link
                      className="py-1 !text-[#22426e] ml-1 text-left hover:underline"
                      href="/services/laparoscopic-gynae"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Laparoscopic Gynae
                    </Link>

                    <Link
                      className="py-1 !text-[#22426e] ml-1 text-left hover:underline"
                      href="/services/proctology"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Proctology
                    </Link>

                    <Link
                      className="py-1 !text-[#22426e] ml-1 text-left hover:underline"
                      href="/services/endourology"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Endourology
                    </Link>
                  </div>
                )}
              </NavigationMenuItem>

              {/* Other Links */}
              <NavigationMenuItem className="w-full">
                <NavigationMenuLink asChild>
                  <Link
                    className="text-[#22426e] text-[14px] block w-full text-left"
                    href="/about-us"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="w-full">
                <NavigationMenuLink asChild>
                  <Link
                    className="text-[#22426e] text-[14px] block w-full text-left"
                    href="/news-media"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    News & Media
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="w-full">
                <NavigationMenuLink asChild>
                  <Link
                    className="text-[#22426e] text-[14px] block w-full text-left"
                    href="/gallery"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Gallery
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="w-full bg-transparent hover:underline">
                <NavigationMenuLink asChild>
                  <Link
                    className="text-[#22426e] text-[14px] block w-full text-left"
                    href="/blogs"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Blogs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </nav>
  );
}
