import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#163161] text-[#bde8f5da]">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        
        <div>

   <h2 className="relative text-2xl font-bold text-white mb-4 inline-block">
  <FaGraduationCap className="absolute -top-4 -left-2 text-" />MediQueue</h2>

          <p className="text-sm leading-7">
            MediQueue is a modern tutor booking platform where students
            can easily find tutors, book sessions, and manage learning
            schedules efficiently.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Tutor Services
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/tutors"
                className="hover:text-white transition"
              >
                Find Tutors
              </Link>
            </li>

            <li>
              <Link
                href="/bookings"
                className="hover:text-white transition"
              >
                Book Sessions
              </Link>
            </li>

            <li>
              <Link
                href="/subjects"
                className="hover:text-white transition"
              >
                Learning Subjects
              </Link>
            </li>

            <li>
              <Link
                href="/online-class"
                className="hover:text-white transition"
              >
                Online Classes
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
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
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Follow Us
          </h3>

          <div className="flex items-center gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 rounded-full border border-[#bde8f5da] flex items-center justify-center hover:bg-white hover:text-[#163161] transition"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 rounded-full border border-[#bde8f5da] flex items-center justify-center hover:bg-white hover:text-[#163161] transition"
            >
              <FaInstagram />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 rounded-full border border-[#bde8f5da] flex items-center justify-center hover:bg-white hover:text-[#163161] transition"
            >
              <FaLinkedinIn />
            </Link>

            <Link
              href="https://youtube.com"
              target="_blank"
              className="w-10 h-10 rounded-full border border-[#bde8f5da] flex items-center justify-center hover:bg-white hover:text-[#163161] transition"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#ffffff20] py-5 text-center text-sm">
        © 2026 MediQueue. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;