// import React from 'react';

// const ExtraSection = () => {
//     return (
//         <div className='grid grid-cols-3 w-8/12 mx-auto gap-5 mb-4'>
            
//             <div className='bg-[#163161] text-white col-span-2 p-8 shadow-xl'>
//                 <p className='text-3xl text-gray-400'>01</p>

//                 <p className='text-2xl pt-3 pb-2 font-semibold'>Strategic Assessment</p>

//                 <p className='text-gray-400 text-[16px] pt-2 '>
//                     Our algorithm analyzes your academic performance and pairs you with mentors who specialize in addressing your specific knowledge gaps.
//                 </p>
//             </div>

            
//             <div className='bg-gray-300 text-[#163161] p-8 shadow-xl'>
//                 <p className='text-3xl'>02</p>

//                 <p className='text-2xl font-semibold'>Curated Mentorship</p>

//                 <p className='text-[16px] pt-2'>
//                     Engage in focused one-on-one sessions that prioritize critical thinking over rote memorization.
//                 </p>
//             </div>

            
//             <div className='bg-yellow-200 text-yellow-800 p-8 shadow-2xl'>
//                 <h2 className='text-3xl text-yellow-600'>03</h2>

//                 <h2 className='text-2xl font-semibold'>Interactive Learning</h2>

//                 <p  className='text-[16px] pt-2'>
//                     Apply theoretical knowledge through complex clinical simulations and peer-reviewed case studies.
//                 </p>
//             </div>

            
//             <div className='bg-white shadow-2xl col-span-2 p-8'>
//                 <p className='text-3xl text-gray-400 '>04</p>

//                 <h2 className='text-[#163161] text-2xl font-semibold pt-2'>
//                     Verified Achievement
//                 </h2>

//                 <p className='text-gray-500 text-[18px] pt-4'>
//                     Graduate with validated credentials and measurable academic growth.
//                 </p>
//             </div>

//         </div>
//     );
// };

// export default ExtraSection;
import React from 'react';

const ExtraSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 lg:w-8/12 mx-auto gap-5 mb-8'>
            
            {/* 01 */}
            <div className='bg-[#163161] text-white lg:col-span-2 p-6 sm:p-8 shadow-xl'>
                
                <p className='text-2xl sm:text-3xl text-gray-400'>
                    01
                </p>

                <h2 className='text-xl sm:text-2xl pt-3 pb-2 font-semibold leading-snug'>
                    Strategic Assessment
                </h2>

                <p className='text-gray-300 text-sm sm:text-base pt-2 leading-7'>
                    Our algorithm analyzes your academic performance and pairs you with mentors who specialize in addressing your specific knowledge gaps.
                </p>
            </div>

            
            {/* 02 */}
            <div className='bg-gray-300 text-[#163161] p-6 sm:p-8 shadow-xl'>
                
                <p className='text-2xl sm:text-3xl'>
                    02
                </p>

                <h2 className='text-xl sm:text-2xl font-semibold pt-3 pb-2 leading-snug'>
                    Curated Mentorship
                </h2>

                <p className='text-sm sm:text-base pt-2 leading-7'>
                    Engage in focused one-on-one sessions that prioritize critical thinking over rote memorization.
                </p>
            </div>

            
            {/* 03 */}
            <div className='bg-yellow-200 text-yellow-800 p-6 sm:p-8 shadow-2xl'>
                
                <p className='text-2xl sm:text-3xl text-yellow-600'>
                    03
                </p>

                <h2 className='text-xl sm:text-2xl font-semibold pt-3 pb-2 leading-snug'>
                    Interactive Learning
                </h2>

                <p className='text-sm sm:text-base pt-2 leading-7'>
                    Apply theoretical knowledge through complex clinical simulations and peer-reviewed case studies.
                </p>
            </div>

            
            {/* 04 */}
            <div className='bg-white shadow-2xl lg:col-span-2 p-6 sm:p-8'>
                
                <p className='text-2xl sm:text-3xl text-gray-400'>
                    04
                </p>

                <h2 className='text-[#163161] text-xl sm:text-2xl font-semibold pt-3 pb-2 '>
                    Verified Achievement
                </h2>

                <p className='text-gray-500 text-sm sm:text-[18PX] pt-2 leading-7'>
    Complete your learning journey with verified certifications that reflect real academic progress.  
    Each achievement is validated through structured assessments ensuring measurable growth and authenticity.
                </p>
            </div>

        </div>
    );
};

export default ExtraSection;