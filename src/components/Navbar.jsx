import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-zinc-200 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col cursor-default">
          <div className="text-3xl md:text-5xl font-normal text-black tracking-wider font-['Bebas_Neue'] leading-none">
            AI Mission @ SGSU
          </div>
          <div className="text-[10px] md:text-xs font-normal text-zinc-500 tracking-[0.2em] font-['Bebas_Neue'] mt-1">
            By Scope Global Skills University
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-zinc-900 focus:outline-none">
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
        <ul className="hidden md:flex md:items-center md:space-x-8">
          <li>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-zinc-600 font-semibold hover:text-black transition-colors duration-300 tracking-widest text-xs uppercase">
              Home
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} duration={500} className="cursor-pointer text-zinc-600 font-semibold hover:text-black transition-colors duration-300 tracking-widest text-xs uppercase">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="events" smooth={true} duration={500} className="cursor-pointer text-zinc-600 font-semibold hover:text-black transition-colors duration-300 tracking-widest text-xs uppercase">
              Events
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer px-6 py-2 bg-black text-white font-bold hover:bg-zinc-800 transition-all duration-300 tracking-widest text-[10px] uppercase">
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform ${isOpen ? 'translate-x-[0px]' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden border-l border-zinc-100`}>
        <button onClick={toggleMenu} className="text-zinc-900 focus:outline-none absolute top-4 right-8">
          <HiX className="w-6 h-6" />
        </button>
        <ul className="flex flex-col items-start p-8 space-y-6 mt-16 font-['Bebas_Neue'] tracking-widest text-2xl">
          <li>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-zinc-500 hover:text-black transition-colors" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} duration={500} className="cursor-pointer text-zinc-500 hover:text-black transition-colors" onClick={toggleMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="events" smooth={true} duration={500} className="cursor-pointer text-zinc-500 hover:text-black transition-colors" onClick={toggleMenu}>
              Events
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-black font-bold" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;