// import Image from 'next/image';
// import React from 'react';
// import TutorCard from '../components/TutorCard';

import SearchBar from "../components/SearchBar";
import TutorCard from "../components/TutorCard";


export const metadata = {
  title: "All Tutors",
};

// const AllTutorPage = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor`)
//     const tutors = await res.json()

// console.log("ENV URL:", process.env.NEXT_PUBLIC_SERVER_URL);

//     return (
//         <div >
//             <div className='w-10/12 mx-auto py-12'>
//           <p className='text-2xl font-bold text-[#163161] pb-4 text-center'>All Tutors</p>
//     <div className='grid grid-cols-1 gap-12 md:grid-cols-3 '>
//                 {
//                     tutors.map(tutor=><TutorCard key={tutor._id}  tutor={tutor}></TutorCard>)
//                 }
//             </div>
//             </div>

            
//         </div>
//     );
// };

// export default AllTutorPage;

const AllTutorPage = async ({ searchParams }) => {

  const params = await searchParams;

  const searchTerm = params?.tutorSearch || "";

  const url = searchTerm
    ? `${process.env.NEXT_PUBLIC_SERVER_URL}/tutor?search=${searchTerm}`
    : `${process.env.NEXT_PUBLIC_SERVER_URL}/tutor`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const tutors = await res.json();

  return (
    <div className="w-10/12 mx-auto py-12">

      <h1 className="text-3xl font-bold text-center text-[#163161] mb-6">
        All Tutors
      </h1>

      <div className="max-w-xl mx-auto mb-10">
        <SearchBar
          queryKey="tutorSearch"
          placeholder="Search tutors by name..."
        />
      </div>

      {tutors.length === 0 ? (
        <p className="text-center text-gray-500">
          No tutors found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tutors.map((tutor) => (
            <TutorCard
              key={tutor._id}
              tutor={tutor}
            />
          ))}
        </div>
      )}
    </div>
  );
};


export default AllTutorPage;