import React, { useState } from 'react';
import B from '../assets/B.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 px-6 bg-transparent text-gray-300">
      <div className="container mx-auto flex items-center justify-between h-full">
        <div>
          <img src={B} alt="Logo Image" className="w-10 h-10" />
        </div>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              to="home"
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-white"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="work"
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-white"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden">
          {!nav ? (
            <FaBars className="text-white text-2xl" />
          ) : (
            <FaTimes className="text-white text-2xl" />
          )}
        </div>

        {/* Mobile menu */}
        <ul className={`${nav ? 'fixed top-20 left-0 w-full h-screen bg-[#0a192f]' : 'hidden'} md:hidden flex flex-col justify-center items-center`}>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="home"
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-white"
            >
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="about"
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-white"
            >
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-white"
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="work"
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-white"
            >
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/bryan-peens-558113204/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/BryanPeens"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
