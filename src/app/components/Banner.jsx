"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import onlineClass from "../../assets/study-download.png";
import time from "../../assets/time-download.png";
import data from "../../assets/download-data.png";

const slides = [
  {
    id: 1,
    title: "Book the Right Tutor, Learn Without Limits",
    description:
      "Find expert tutors, choose your preferred time slot, and book sessions easily with MediQueue.",
    button1: "Find Tutors",
    button2: "How It Works",
    image: onlineClass,
  },
  {
    id: 2,
    title: "Smart Scheduling, Zero Conflicts",
    description:
      "Advanced scheduling intelligence that prevents time conflicts and guarantees a smooth learning experience.",
    button1: "Book a Session",
    button2: "Explore Tutors",
    image: time,
  },
  {
    id: 3,
    title: "Manage Your Sessions, Track Your Progress",
    description:
      "Stay organized with a smart system to manage sessions, track progress, and optimize your learning experience.",
    button1: "View My Sessions",
    button2: "Get Started",
    image: data,
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      className="relative w-full h-[600px] md:h-[500px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex w-full h-full transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className=" w-full h-full shrink-0 flex flex-col md:flex-row items-center justify-center md:justify-around px-6 md:px-10 text-[#163161] gap-6 md:gap-0">
            {/* TEXT */}
            <div className="max-w-xl space-y-4 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">
                {slide.title}
              </h1>

              <p className="text-gray-600 text-[16px] md:text-[18px]">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <button className="bg-[#163161] text-white px-4 py-2 rounded">
                  {slide.button1}
                </button>

                <button className="border-2 border-[#163161] px-4 py-2 rounded text-[#163161] font-semibold">
                  {slide.button2}
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="w-full md:w-auto flex justify-center">
              <Image
                src={slide.image}
                alt={slide.title}
                width={350}
                height={250}
                className="w-[250px] sm:w-[300px] md:w-[400px] h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-2xl opacity-60 hover:opacity-100"
      >
        <IoIosArrowBack />
      </button>

      <button
        onClick={() =>
          setCurrent((prev) => (prev + 1) % slides.length)
        }
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-2xl opacity-60 hover:opacity-100"
      >
        <IoIosArrowForward />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              current === index ? "bg-blue-900" : "bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;