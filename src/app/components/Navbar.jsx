

"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
const isActive = (path) => {
  if (path === "/") return pathname === "/";
  return pathname.startsWith(path);
};


  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="shadow bg-[#bde8f550] sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-4 md:w-10/12 md:mx-auto py-4">

        {/* LOGO */}
        <Link href="/">
          <div className="relative font-extrabold flex text-[26px] md:text-[30px] text-[#163161]">
            <FaGraduationCap className="absolute -top-2 -left-2 text-[#163161]" />
            MediQueue
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-6">

<Link href="/">
  <p className={`text-[18px] font-semibold transition relative
    ${isActive("/") ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-[#163161]" : ""}
  `}>
    Home
  </p>
</Link>
<Link href="/allTutors">
  <p className={`text-[18px] font-semibold transition relative
    ${isActive("/allTutors") ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-[#163161]" : ""}
  `}>
    Tutors
  </p>
</Link>
          {user && (
            <>
<Link href="/add-tutor">
  <p className={`text-[18px] font-semibold transition relative
    ${isActive("/add-tutor") ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-[#163161]" : ""}
  `}>
    Add Tutor
  </p>
</Link>

<Link href="/my-tutors">
  <p className={`text-[18px] font-semibold transition relative
    ${isActive("/my-tutors") ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-[#163161]" : ""}
  `}>
    My Tutors
  </p>
</Link>
<Link href="/my-bookings">
  <p className={`text-[18px] font-semibold transition relative
    ${isActive("/my-bookings") ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-[#163161]" : ""}
  `}>
    My Booked Sessions
  </p>
</Link>            </>
          )}
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3">

          {/* THEME TOGGLE */}
          <label className="swap swap-rotate">

            <input
              type="checkbox"
              className="theme-controller"
              value="dark"
            />

            {/* SUN */}
            <svg
              className="swap-off h-8 w-8 fill-current text-[#163161]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Z" />
            </svg>

            {/* MOON */}
            <svg
              className="swap-on h-8 w-8 fill-current text-[#163161]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
            </svg>
          </label>

          {/* USER SECTION */}
{/* USER SECTION */}
{user ? (
  <>
    {/* DESKTOP USER */}
    <div className="hidden md:flex items-center gap-3">

      {/* PROFILE DROPDOWN */}
      <div className="dropdown dropdown-end">

        <div tabIndex={0} role="button" className="cursor-pointer">
          <Avatar>
            <Avatar.Image
              referrerPolicy="no-referrer"
              alt="user"
              src={user?.image}
            />
            <Avatar.Fallback>
              {user?.name?.charAt(0)}
            </Avatar.Fallback>
          </Avatar>
        </div>

        <ul className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-44 p-2 shadow z-50">
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>

      {/* ✅ DIRECT LOGOUT BUTTON (NOT DROPDOWN) */}
      <Button
        onClick={handleSignOut}
        className="bg-[#163161] text-white px-4 py-2 rounded-lg hover:bg-[#0f2447] transition"
      >
        Logout
      </Button>

    </div>

    {/* MOBILE USER */}
    <div className="dropdown dropdown-end md:hidden">

      <div tabIndex={0} role="button" className="cursor-pointer">
        <Avatar>
          <Avatar.Image
            referrerPolicy="no-referrer"
            alt="user"
            src={user?.image}
          />
          <Avatar.Fallback>
            {user?.name?.charAt(0)}
          </Avatar.Fallback>
        </Avatar>
      </div>

      <ul className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-56 p-2 shadow z-50">

        <li>
          <Link href="/profile">Profile</Link>
        </li>

        <li>
          <button onClick={handleSignOut} className="text-red-500">
            Logout
          </button>
        </li>


      </ul>
    </div>
  </>
) : (            <>
              {/* DESKTOP AUTH */}
              <div className="hidden lg:flex items-center gap-3">

                <Link href="/login">
                  <Button className="bg-[#163161] text-white px-4 py-2 rounded-lg">
                    Login
                  </Button>
                </Link>

                <Link href="/signup">
                  <Button className="border-2 border-[#163161] text-[#163161] bg-white font-semibold px-4 py-2 rounded-lg">
                    Register
                  </Button>
                </Link>
              </div>

              {/* MOBILE AUTH */}
              <div className="dropdown dropdown-end lg:hidden">

                <div
                  tabIndex={0}
                  role="button"
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#163161]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <ul className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-40 p-2 shadow z-50">
                  <li>
                    <Link href="/login">
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link href="/signup">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* MOBILE NAV MENU */}
          <div className="dropdown dropdown-end lg:hidden">

            <div tabIndex={0} role="button" className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-[#163161]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-56 p-2 shadow z-50">

              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/allTutors">
                  Tutors
                </Link>
              </li>

              {user && (
                <>
                  <li>
                    <Link href="/add-tutor">
                      Add Tutor
                    </Link>
                  </li>

                  <li>
                    <Link href="/my-tutors">
                      My Tutors
                    </Link>
                  </li>

                  <li>
                    <Link href="/my-bookings">
                      My Booked Sessions
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;