import { useState } from "react";
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
  {
    id: 1,
    name: "About",
    link: "/#about-us",
  },
  {
    id: 2,
    name: "Business",
    link: "#",
  },
  {
    id: 3,
    name: "Services",
    link: "/#services",
  },
  {
    id: 4,
    name: "Resources",
    link: "/security",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const inactiveLink =
    "px-2 py-1 font-semibold transition ease-in-out duration-200 relative group max-w-fit hover:bg-gradient-to-r hover:from-rose-300 hover:to-[#D20420] hover:bg-clip-text hover:text-transparent";
  const activeLink =
    "px-2 py-1 font-semibold transition ease-in-out duration-200 scale:105 relative group max-w-fit bg-gradient-to-r from-[#D20420] to-rose-400 bg-clip-text text-transparent -b-2 -b-[#D20420]";

  return (
    <div className="fixed w-full z-50">

      <div className="w-full text-gray-300 bg-black bg-opacity-90 backdrop-blur-md py-2 hidden md:flex justify-between items-center px-[100px]">
        <div className="flex flex-row items-start gap-6 ">
          <div className="flex items-center gap-3">
            <MdLocationPin className="text-3xl ml-3" />
            <p className="text-sm">
              B1-114, Sector 11, Faridabad
            </p>
          </div>
          <div className="flex items-center gap-3">
            <MdAlternateEmail className="text-3xl" />
            <p className="text-sm">
              info@easemyprocess.com
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">


          <FaFacebookF className="text-2xl text-white" />
          <FaInstagram className="text-2xl text-white" />
          <FaLinkedinIn className="text-2xl text-white" />
          <PiXLogoDuotone className="text-2xl text-white" />
        </div>
      </div>
      <div
        className={`text-black bg-white border-b border-[#D20420] py-3 px-5 md:px-28 flex justify-between items-center flex-wrap bg-opacity-80 backdrop-blur-md ${poppins.className}`}
        style={{ display: "flex", justifyContent: "flex-start", gap: "15rem" }}
      >
        <Link className="flex items-center gap-2" href="/">
          <Image
            src="/navbarLogo.svg"
            width={1000}
            height={1000}
            alt="EaseMyProcess"
            className="w-32"
          />
        </Link>

        {/* Menu button for mobile devices */}
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

        {/* Desktop Menu */}
        <div
          className={`w-full md:w-auto ${isOpen ? "flex" : "hidden"
            } md:flex md:items-center md:gap-6 mx-2 md:ml-4`}
          style={{ justifyContent: "flex-start" }}
        >
          {navbarItems.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className={
                pathname.includes(item.link) ? activeLink : inactiveLink
              }
            >
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFF] to-[#D20420] rounded-full transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            } absolute top-full text-left left-0 right-0 md:hidden transition-all duration-300 transform origin-top ease-in-out bg-white bg-opacity-95 backdrop-blur-sm`}
        >
          {navbarItems.map((item) => (
            <div
              key={item.id}
              className={
                item.id === 1
                  ? "border-y-[1px] pl-10 py-2"
                  : "border-b-[1px] pl-10 py-2"
              }
            >
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
          {/* Mobile Sponsor Button */}
          <Link
            href="#contact-us"
            className="text-center flex justify-center my-2 md:mx-0 hidden "
          >
            <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-4 focus:ring-rose-600 focus:ring-offset-4 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#D20420_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 py-1 text-sm font-medium text-black backdrop-blur-3xl ">
                Contact Us
              </span>
            </button>
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
