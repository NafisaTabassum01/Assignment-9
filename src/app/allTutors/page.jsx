import Image from 'next/image';
import React from 'react';

const AllTutorPage = async () => {
    const res = await fetch('http://localhost:5000/tutor')
    const tutors = await res.json()


    return (
        <div >
            <div className='w-10/12 mx-1uto '>
                            <p>All Tutors</p>
            <div className='grid grid-cols-3'>
                {
                    tutors.map(tutor=><div key={tutor._id}>
                        <div className='rounded-2xl shadow-md'>
                     <Image
                     src={tutor.imageUrl} alt='' height={200} width={200}/>
<div className="grid grid-cols-1 gap-2 p-4 ">

  <h2 className="text-2xl font-bold text-[#163161]">
    {tutor.TutorName}
  </h2>

  <p>
    <span className="font-semibold text-[#163161]">
      Teaching Mode:
    </span>{" "}
    {tutor.TeachingMode}
  </p>

  <p>
    <span className="font-semibold text-[#163161]">
      Experience:
    </span>{" "}
    {tutor.InstitutionExperience}
  </p>

  <p>
    <span className="font-semibold text-[#163161]">
      Location:
    </span>{" "}
    {tutor.Location}
  </p>

</div>
                        </div>


                    </div>)
                }
            </div>
            </div>

            
        </div>
    );
};

export default AllTutorPage;