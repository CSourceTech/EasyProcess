import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { MdClose, MdLocationPin, MdAlternateEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiXLogoDuotone } from "react-icons/pi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const navbarItems = [
  { id: 1, name: "About", link: "/#about-us" },
  { id: 2, name: "Business", link: "#" },
  { id: 3, name: "Services", link: "/#services" },
  { id: 4, name: "Resources", link: "/security" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const inactiveLink = "px-2 py-1 font-semibold transition ease-in-out duration-200 relative group max-w-fit hover:bg-gradient-to-r hover:from-rose-300 hover:to-[#D20420] hover:bg-clip-text hover:text-transparent";
  const activeLink = "px-2 py-1 font-semibold transition ease-in-out duration-200 scale:105 relative group max-w-fit bg-gradient-to-r from-[#D20420] to-rose-400 bg-clip-text text-transparent -b-2 -b-[#D20420]";

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="w-full text-gray-300 bg-black bg-opacity-90 backdrop-blur-md py-2 hidden md:flex justify-between items-center px-4 lg:px-[100px]">
        <div className="flex flex-row items-start gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <MdLocationPin className="text-3xl ml-3" />
            <p className="text-sm">B1-114, Sector 11, Faridabad</p>
          </div>
          <div className="flex items-center gap-3">
            <MdAlternateEmail className="text-3xl" />
            <p className="text-sm">info@easemyprocess.com</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaFacebookF className="text-2xl text-white" />
          <FaInstagram className="text-2xl text-white" />
          <FaLinkedinIn className="text-2xl text-white" />
          <PiXLogoDuotone className="text-2xl text-white" />
        </div>
      </div>
      <div className={`text-black bg-white border-b border-[#D20420] py-3 px-4 md:px-6 lg:px-28 flex justify-between items-center flex-wrap bg-opacity-80 backdrop-blur-md ${poppins.className}`}>
        <Link className="flex items-center" href="/">
          <Image
            src="/navbarLogo.svg"
            width={128}
            height={40}
            alt="EaseMyProcess"
            className="w-32"
          />
        </Link>

        <div className="md:hidden">
          <button
            className="mobile-menu-button flex items-center justify-center transform hover:scale-105 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <MdClose className="w-6 h-6" />
            ) : (
              <RxHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className={`w-full md:w-auto ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-end mt-4 md:mt-0`}>
          {navbarItems.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className={`block md:inline-block ${pathname.includes(item.link) ? activeLink : inactiveLink} my-2 md:my-0 md:mx-2`}
              onClick={() => setIsOpen(false)}
            >
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFF] to-[#D20420] rounded-full transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;