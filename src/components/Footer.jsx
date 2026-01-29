import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="text-gray-200 bg-black border-t border-zinc-900 py-12 mt-0">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wider font-['Outfit']">
              AI Mission @ SGSU
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white pl-4">
              Empowering individuals and institutions with AI literacy through comprehensive training programs, workshops, and hands-on experiences across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">Home</a>
              </li>
              <li>
                <a href="#workouts" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">Training Programs</a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">Events</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white tracking-wide">Connect With Us</h3>
            <div className="space-y-2 text-sm mb-4">
              <p className="text-gray-400">
                <span className="font-semibold text-white">Email:</span> info@sgsuniversity.ac.in
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Location:</span> BHOPAL, SCOPE Campus, NH-12
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Organization:</span> Scope Global Skills University (SGSU)
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FaFacebook size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FaLinkedin size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="mb-2 md:mb-0">
              © 2025 SGSU AI Mission @ SGSU. All rights reserved.
            </p>
            <p>
              Made with ❤️ for spreading AI literacy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;