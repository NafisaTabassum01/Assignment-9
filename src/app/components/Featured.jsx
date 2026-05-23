import Link from 'next/link';
import React from 'react';
import TutorCard from './TutorCard';

const Featured = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const tutors = await res.json()
    console.log(tutors)

    return (
        <div className='w-10/12 mx-auto my-10 mb-20 rounded'>
            <h1 className='text-[#163161] text-[32px] font-bold text-center'>Available Tutors</h1>
           <div className='text-right mt-4'> <Link href={"/allTutors"} className='bg-[#163161] text-white cursor-pointer p-3 text-[20px] rounded'>All Tutors</Link></div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
            {
                tutors.map(tutor=><TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
            }
           </div>

            
        </div>
    );
};

export default Featured;