import { useState } from "react";
import img from "../../assets/Navbar/menu.png";
import img2 from "../../assets/Navbar/NavbarImage.webp";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className="flex relative justify-around items-center w-full h-[150px]">
          <div className="container w-full h-[50px] flex items-center">
            <button className="rounded-lg w-7 " onClick={() => setIsOpen(true)}>
              <img src={img} alt="menu" />
            </button>
          </div>
          <img
            className="absolute left-1/2 transform -translate-x-1/2 w-[110px]"
            src={img2}
            alt="logo"
          />
          <div className="flex gap-x-4 text-[#0C3F40]">
            <FaSearch className="size-7" />
            <MdOutlineShoppingCart className="size-7" />
            <CgProfile className="size-7" />
          </div>
        </div>

        {/* Sidebar Drawer */}
        <div
          className={`fixed top-0 left-0 z-40 w-[20em] h-screen p-6 overflow-y-auto transition-transform bg-white dark:bg-gray-800 shadow-lg ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex justify-end">
            <button
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="font-medium mt-6 space-y-4">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="block p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/aboutus" onClick={() => setIsOpen(false)} className="block p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setIsOpen(false)} className="block p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/accountbook" onClick={() => setIsOpen(false)} className="block p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                ACCOUNTING & BOOKKEEPING
              </Link>
            </li>
            <li>
              <Link to="/stockmarket" onClick={() => setIsOpen(false)} className="block p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                STOCK MARKET
              </Link>
            </li>
            <li>
              <Link to="/consultation" onClick={() => setIsOpen(false)} className="block p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                BOOK A CONSULTATION
              </Link>
            </li>
            <li>
              <Link to="/clientportal" onClick={() => setIsOpen(false)} className="block p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                CLIENT PORTAL
              </Link>
            </li>
            <li>
              <Link to="/careers" onClick={() => setIsOpen(false)} className="block p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                CAREERS
              </Link>
            </li>
            <li>
              <Link to="/contactus" onClick={() => setIsOpen(false)} className="block p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                CONTACT US
              </Link>
            </li>
            <li>
              <Link to="/blogs" onClick={() => setIsOpen(false)} className="block p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                BLOGS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
