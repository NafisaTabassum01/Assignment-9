import Image from 'next/image';
import React from 'react';
import TutorCard from '../components/TutorCard';

const AllTutorPage = async () => {
    const res = await fetch('http://localhost:5000/tutor')
    const tutors = await res.json()


    return (
        <div >
            <div className='w-10/12 mx-auto py-12'>
          <p className='text-2xl font-bold text-[#163161] pb-4 text-center'>All Tutors</p>
    <div className='grid grid-cols-1 gap-12 md:grid-cols-3 '>
                {
                    tutors.map(tutor=><TutorCard key={tutor._id}  tutor={tutor}></TutorCard>)
                }
            </div>
            </div>

            
        </div>
    );
};

export default AllTutorPage;