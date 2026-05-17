import Link from 'next/link';
import React from 'react';
import { FaGraduationCap } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className=' shadow'> 
            <div className='flex justify-between w-10/12 mx-auto  py-3'>

            <Link href={'/'}><div className=' font-extrabold flex text-[28px] text-[#163161]'><FaGraduationCap className='pt-1'/>MediQueue </div></Link>
            
            <div className='flex justify-around gap-5'>
            
            <Link href={'/'}> <p className='text-[18px] font-semibold pt-1 text-[#163161]'>Home</p></Link>
            <Link href={'/'}> <p className='text-[18px] font-semibold pt-1 text-[#163161]'>Tutor</p></Link>
            <Link href={'/'}> <p className='text-[18px] font-semibold pt-1 text-[#163161]'>Add Tutor</p></Link>
            <Link href={'/'}> <p className='text-[18px] font-semibold pt-1 text-[#163161]'>My Tutors</p></Link>
            
            </div>
            
            <div className='flex justify-around gap-5'>
                <div></div>
              <Link href={'/'}><p className='text-[18px] text-[#163161] font-semibold pt-1'>Login</p></Link>
                <Link href={'/'}><p className='text-[18px] text-[#163161] font-semibold pt-1'>Register</p></Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;