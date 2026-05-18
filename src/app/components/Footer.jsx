import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGraduationCap,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#163161] text-[#bde8f5da]">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & About */}
          <div className="text-center sm:text-left">

<h2 className="relative text-3xl font-bold text-white mb-4 inline-block pl-3">
  
  <FaGraduationCap className="absolute -top-4 left-1 text-2xl text-white" />
  
  MediQueue
</h2>
            <p className="text-sm leading-7 max-w-sm mx-auto sm:mx-0">
              MediQueue is a modern tutor booking platform where students
              can easily find tutors, book sessions, and manage learning
              schedules efficiently.
            </p>
          </div>

          {/* Tutor Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-white mb-5">
              Tutor Services
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/tutors"
                  className="hover:text-white transition duration-300"
                >
                  Find Tutors
                </Link>
              </li>

              <li>
                <Link
                  href="/bookings"
                  className="hover:text-white transition duration-300"
                >
                  Book Sessions
                </Link>
              </li>

              <li>
                <Link
                  href="/subjects"
                  className="hover:text-white transition duration-300"
                >
                  Learning Subjects
                </Link>
              </li>

              <li>
                <Link
                  href="/online-class"
                  className="hover:text-white transition duration-300"
                >
                  Online Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Info
            </h3>

            <div className="space-y-3 text-sm">
              <p>Email: support@mediqueue.com</p>
              <p>Phone: +880 1234-567890</p>
              <p>Location: Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-white mb-5">
              Follow Us
            </h3>

            <div className="flex items-center justify-center sm:justify-start gap-4 flex-wrap">
              
              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-[#bde8f5da] flex items-center justify-center hover:bg-white hover:text-[#163161] transition duration-300"
              >
                <FaFacebookF />
              </Link>

              {/* YouTube */}
              <Link
                href="https://youtube.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-[#bde8f5da] flex items-center justify-center hover:bg-white hover:text-[#163161] transition duration-300"
              >
                <FaYoutube />
              </Link>

              {/* X / Twitter */}
              <Link
                href="https://x.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-[#bde8f5da] flex items-center justify-center hover:bg-white hover:text-[#163161] transition duration-300"
              >
                <FaXTwitter />
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-[#bde8f5da] flex items-center justify-center hover:bg-white hover:text-[#163161] transition duration-300"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#ffffff20] py-5 px-4 text-center text-xs sm:text-sm">
        © 2026 MediQueue. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;