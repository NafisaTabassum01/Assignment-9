import Link from 'next/link';
import React from 'react';
import { FaGraduationCap, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='shadow bg-[#bde8f550]'>
            <div className='flex justify-between items-center w-10/12 mx-auto py-3'>

                <Link href={'/'}>
                    <div className='relative inline-block font-extrabold flex text-[28px] text-[#163161]'>
                        <FaGraduationCap className="absolute -top-3 -left-2 text-[#163161]" />
                        MediQueue
                    </div>
                </Link>

                <div className='hidden lg:flex justify-around gap-5'>
                    <Link href={'/'}><p className='text-[18px] font-semibold text-[#163161]'>Home</p></Link>
                    <Link href={'/allTutors'}><p className='text-[18px] font-semibold text-[#163161]'>Tutor</p></Link>
                    <Link href={'/add-tutor'}><p className='text-[18px] font-semibold text-[#163161]'>Add Tutor</p></Link>
                    <Link href={'/'}><p className='text-[18px] font-semibold text-[#163161]'>My Tutors</p></Link>
                </div>

                <div className='flex items-center gap-4'>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button">
                            <FaUserCircle className="text-[32px] text-[#163161]" />
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-40 p-2 shadow z-50">
                            <li><Link href="/">Profile</Link></li>
                            <li><Link href="/login">Login</Link></li>
                            <li><Link href="/signup">Register</Link></li>
                        </ul>
                    </div>

                    <div className='hidden lg:flex gap-3'>
                        <Link href={'/'}>
                            <p className="border border-[#163161] px-2 py-1.5 rounded text-[#163161] font-semibold">
                                Login
                            </p>
                        </Link>

                        <Link href={'/'}>
                            <p className="bg-[#163161] text-white px-2 py-2 rounded">
                                Register
                            </p>
                        </Link>
                        <div></div>
                    </div>

<label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
<input type="checkbox" className="theme-controller" value="dark" />
  {/* sun icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>



                    <div className="dropdown dropdown-end lg:hidden">
                        <div tabIndex={0} role="button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-[#163161]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow z-50">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Tutor</Link></li>
                            <li><Link href="/">Add Tutor</Link></li>
                            <li><Link href="/">My Tutors</Link></li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;
