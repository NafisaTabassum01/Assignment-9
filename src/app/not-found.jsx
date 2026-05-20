"use client";

import Image from "next/image";
import notFound from "../assets/download.png";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4 ">

      <div className="text-center max-w-md space-y-6">

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={notFound}
            alt="404 not found"
            width={400}
            height={400}
            priority
          />
        </div>


        {/* Subtitle */}
        <p className="text-gray-600 text-[20px]">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
        href={'/'}
          className="px-6 py-3 rounded-full bg-[#163161] hover:bg-[#06327de0] transition shadow-lg mb-10"
        >
          Go to Home
        </Link>

      </div>
    </div>
  );
}