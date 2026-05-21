

import { Booking } from "@/app/components/Booking";
import {DeleteAlert} from "@/app/components/DeleteAlert";
import { EditModal } from "@/app/components/EditModal";
import MyTutor from "@/app/components/MyTutor";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import {
  FaGraduationCap,
  FaLocationDot,
  FaBookOpen,
  FaMoneyBillWave,
  FaClock,
  FaCalendarDays,
} from "react-icons/fa6";

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

const {token} = await auth.api.getToken({
  headers : await headers()
})

const res = await fetch(`http://localhost:5000/tutor/${id}`, {
  
  headers: {
    authorization : `Bearer ${token}`
  },
});

  const tutor = await res.json();

  const {
    TutorName,
    imageUrl,
    TeachingMode,
    Location,
    InstitutionExperience,
    Subject,
    TotalSlot,
    HourlyFee,
    SessionStartingDate,
    AvailableDaysTime,
  } = tutor;
  

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-3 ">

      <div className="w-full lg:w-7/12 mx-auto bg-white shadow-2xl rounded-[30px] overflow-hidden">
        {/* Top Banner */}
        <div className="bg-linear-to-b from-[#163161] to-white h-40 relative">
          <div className="absolute left-1/2 -bottom-16 -translate-x-1/2">
            <div className="border-3 border-[#163161] rounded-full shadow-xl">
              <Image
                src={imageUrl}
                alt={TutorName}
                width={180}
                height={180}
                className="w-40 h-40 lg:w-50 lg:h-50 rounded-full object-"
              />
            </div>
          </div>
        </div>

        <div className="pt-24 pb-10 px-5 lg:px-10">

          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#163161]">
              {TutorName}
            </h1>

            <p className="text-gray-500 mt-2">
              Professional Tutor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="shadow-md rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <FaGraduationCap className="text-[#163161] text-xl" />
                <h3 className="font-semibold text-[#163161]">
                  Institution & Experience
                </h3>
              </div>

              <p className="text-gray-600">
                {InstitutionExperience}
              </p>
            </div>

            <div className="shadow-md rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <FaLocationDot className="text-[#163161] text-xl" />
                <h3 className="font-semibold text-[#163161]">
                  Location
                </h3>
              </div>

              <p className="text-gray-600">
                {Location}
              </p>
            </div>

            <div className="shadow-md rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <FaBookOpen className="text-[#163161] text-xl" />
                <h3 className="font-semibold text-[#163161]">
                  Subject
                </h3>
              </div>

              <p className="text-gray-600">
                {Subject}
              </p>
            </div>


            <div className="shadow-md rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <FaClock className="text-[#163161] text-xl" />
                <h3 className="font-semibold text-[#163161]">
                  Teaching Mode
                </h3>
              </div>

              <p className="text-gray-600">
                {TeachingMode}
              </p>
            </div>


            <div className="shadow-md rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <FaMoneyBillWave className="text-[#163161] text-xl" />
                <h3 className="font-semibold text-[#163161]">
                  Hourly Fee
                </h3>
              </div>

              <p className="text-gray-600">
                ৳ {HourlyFee}
              </p>
            </div>

            <div className="shadow-md rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <FaClock className="text-[#163161] text-xl" />
                <h3 className="font-semibold text-[#163161]">
                  Total Slot
                </h3>
              </div>

              <p className="text-gray-600">
                {TotalSlot}
              </p>
            </div>

            <div className="md:col-span-2 shadow-md rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <FaClock className="text-[#163161] text-xl" />
                <h3 className="font-semibold text-[#163161]">
                  Available Days & Time
                </h3>
              </div>

              <p className="text-gray-600">
                {AvailableDaysTime}
              </p>
            </div>

            <div className="md:col-span-2 shadow-md rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <FaCalendarDays className="text-[#163161] text-xl" />
                <h3 className="font-semibold text-[#163161]">
                  Session Starting Date
                </h3>
              </div>

              <p className="text-gray-600">
                {SessionStartingDate}
              </p>
            </div>

          </div>

          <div className="mt-10 text-center">
             <Booking tutor={tutor}></Booking>
            <div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;