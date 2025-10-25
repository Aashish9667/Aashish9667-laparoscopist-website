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
      className={`bg-white shadow-sm ${poppins.className} fixed top-0 left-0 w-full z-50 bg-white `}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-8 py-2">
        {/* Logo */}
        <div className="relative z-20 -mb-12">
          <Image
            alt="Logo"
            className="object-contain"
            height={50}
            src="/Laparoscopic-Surgeons-Logo.webp.avif"
            width={150}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
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
                        href="/genral"
                      >
                        Laparoscopy Surgery
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block px-5 py-4 hover:bg-gray-50 !text-[#22426e] text-[14px] font-medium "
                        href="/laparo-scopic-gynae-colposcopy"
                      >
                        Laparoscopic Gynae
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block px-5 py-4 hover:bg-gray-50 !text-[#22426e] text-[14px] font-medium "
                        href="/proctology"
                      >
                        Proctology
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block px-5 py-4 hover:bg-gray-50 !text-[#22426e] text-[14px] font-medium"
                        href="/endourology"
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
                    href="/news-and-media"
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
        <div className="flex md:hidden">
          <Button
            className=" bg-white text-[#000000dd] !size-[70px]"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            {isDrawerOpen ? (
              <FiX fontWeight={400} size={30} />
            ) : (
              <FiMenu fontWeight={400} size={30} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="absolute top-20 shadow-2xl right-10 w-[250px] bg-white rounded-sm py-4 px-5 flex flex-col gap-3 z-50 md:hidden text-left">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-2 items-start">
              {/* Services Dropdown */}
              <NavigationMenuItem className="w-full">
                <NavigationMenuTrigger
                  className="w-full flex items-center justify-between !text-[#22426e] text-[14px] px-2 gap-30"
                  onClick={() => setShowServices(!showServices)}
                >
                  <span className="text-left">Services</span>
                </NavigationMenuTrigger>

                {/* Render services text/content below the trigger */}
                {showServices && (
                  <div className="py-2 mt-2 flex flex-col gap-1 px-4 text-[14px] relative">
                    {/* vertical line */}
                    <div className="absolute left-2 top-1 bottom-0  w-[1px]  bg-gray-100" />
                    <Link
                      className="py-1 !text-[#22426e] ml-1 text-left hover:underline"
                      href="/genral"
                    >
                      Laparoscopy Surgery
                    </Link>

                    <Link
                      className="py-1 !text-[#22426e] ml-1 text-left hover:underline"
                      href="/laparo-scopic-gynae-colposcopy"
                    >
                      Laparoscopic Gynae
                    </Link>

                    <Link
                      className="py-1 !text-[#22426e] ml-1 text-left hover:underline"
                      href="/proctology"
                    >
                      Proctology
                    </Link>

                    <Link
                      className="py-1 !text-[#22426e] ml-1 text-left hover:underline"
                      href="/endourology"
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
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="w-full">
                <NavigationMenuLink asChild>
                  <Link
                    className="text-[#22426e] text-[14px] block w-full text-left"
                    href="/news-and-media"
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
                  >
                    Gallery
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="w-full bg-transparent hover:underline">
                <NavigationMenuLink asChild>
                  <Link className="text-[#22426e] text-[14px] block w-full text-left" href="/blogs">
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
