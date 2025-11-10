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
import { ChevronUp } from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const desktopServices = [
  { href: '/services/laparoscopy-surgery', label: 'Laparoscopy Surgery' },
  { href: '/services/laparoscopic-gynae', label: 'Laparoscopic Gynae' },
  { href: '/services/proctology', label: 'Proctology' },
  { href: '/services/endourology', label: 'Endourology' },
];
const desktopMainLinks = [
  { href: '/about-us', label: 'About Us' },
  { href: '/news-media', label: 'News & Media' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blogs', label: 'Blogs' },
];
const serviceLinksmobile = [
  { href: '/services/laparoscopy-surgery', label: 'Laparoscopy Surgery' },
  { href: '/services/laparoscopic-gynae', label: 'Laparoscopic Gynae' },
  { href: '/services/proctology', label: 'Proctology' },
  { href: '/services/endourology', label: 'Endourology' },
];
const othersLinksmobile = [
  { href: '/about-us', label: 'About Us' },
  { href: '/news-media', label: 'News & Media' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blogs', label: 'Blogs' },
];

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
              src="/logo/Laparoscopic-Surgeons-Logo.webp.avif"
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
                <NavigationMenuTrigger className="!text-[#22426e] text-[14px] font-medium !bg-transparent !hover:bg-transparent hover:underline hover:decoration-[#22426e] hover:decoration-1 hover:underline-offset-1 hover:text-[#22426e]">
                  Services
                </NavigationMenuTrigger>
                <div className="rounded-none">
                  <NavigationMenuContent className="!bg-white data-[state=open]:!rounded-none data-[state=open]:!shadow-2xl !border-0 !p-0 min-w-[220px]">
                    {desktopServices.map((item) => (
                      <NavigationMenuLink key={item.href} asChild>
                        <Link
                          className="block px-5 py-4 hover:bg-gray-50 !text-[#22426e] text-[14px] font-medium "
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </div>
              </NavigationMenuItem>

              {/* Other Links */}
              {desktopMainLinks.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      className="text-[14px] font-medium bg-transparent hover:text-[#22426e] !text-[#22426e]  hover:bg-transparent hover:underline hover:decoration-[#22426e] hover:decoration-1 hover:underline-offset-1"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Mobile menu button */}
        <div className="flex [@media(min-width:986px)]:hidden">
          <Button
            className="bg-white text-[#000000ed] hover:bg-transparent focus-visible:ring-0 active:bg-transparent !text-xl !font-light "
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            variant="ghost"
          >
            {isDrawerOpen ? (
              <FiX className="!font-light" size={34} strokeWidth={3} />
            ) : (
              <FiMenu className="!font-light" size={34} strokeWidth={3} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="absolute top-13 shadow-2xl right-6 w-[250px] bg-white rounded-sm py-4 px-4 flex flex-col gap-4 z-50 [@media(min-width:986px)]:hidden text-left">
          <button
            className="flex justify-between text-[#22426e] text-[14px] w-full bg-transparent hover:underline font-normal"
            onClick={() => setShowServices(!showServices)}
            type="button"
          >
            Services
            <ChevronUp
              className={`transition-transform duration-900 ${showServices ? 'rotate-180' : 'rotate-0'} text-[#22426e] size-3`}
              strokeWidth={4}
            />
          </button>

          {showServices && (
            <div className="flex flex-col gap-2 text-[14px] text-[#22426e] border-l border-gray-200 pl-3">
              {serviceLinksmobile.map((item) => (
                <Link href={item.href} key={item.href} onClick={() => setIsDrawerOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {othersLinksmobile.map((item) => (
            <Link
              className="text-[#22426e] text-[14px] hover:underline"
              href={item.href}
              key={item.href}
              onClick={() => setIsDrawerOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
