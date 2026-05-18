import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaGraduationCap } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";


const TutorCard = ({ tutor }) => {
  const {
    _id,
    TutorName,
    imageUrl,
    TeachingMode,
    Location,
    InstitutionExperience,
  } = tutor;

  const modeStyles = {
    Online: "bg-blue-100 text-blue-700 border border-blue-200",
    Offline: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    Both: "bg-purple-100 text-purple-700 border border-purple-200",
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 shadow-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="relative w-full text-center flex justify-center pt-4">
        <Image
          src={imageUrl}
          alt={TutorName}
          height={100}
          width={400}
          className="h-30 w-30 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        
        {/* Name + Badge */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-bold text-[#163161] line-clamp-1">
            {TutorName}
          </h2>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${
              modeStyles[TeachingMode] ||
              "bg-gray-100 text-gray-700 border border-gray-200"
            }`}
          >
            {TeachingMode}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaLocationDot className="text-[#163161]" />
          <p>{Location}</p>
        </div>

        {/* Institution & Experience */}
        <div className="flex items-start gap-2 text-sm text-gray-700">
          <FaGraduationCap className="mt-1 text-[#163161]" />
          <p className="line-clamp-2">
            {InstitutionExperience}
          </p>
        </div>
        <div className="text-right">
           <Link href={`/allTutors/${_id}`}> <Button type="submit" className=" rounded bg-[#163161] text-white"> Details<MdArrowOutward /> </Button></Link>

            
            </div>  
            
             </div>
    </div>
  );
};

export default TutorCard;