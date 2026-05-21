
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import Image from 'next/image';
import { BookingCancle } from '../components/BookingCancle';

const MyBookingPage = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
    cache: "no-store",
  });

  const bookings = await res.json();

  return (
    <div className="w-10/12 mx-auto mt-10">

      <h1 className="text-2xl font-bold text-center mb-6 text-[#163161]">
        My Booking Sessions
      </h1>

      {/* EMPTY STATE */}
      {(!bookings || bookings.length === 0) ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No bookings yet!
          </p>
        </div>
      ) : (

        <div className="overflow-x-auto shadow mb-10">

          <table className="w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">

            {/* TABLE HEAD */}
            <thead className="bg-[#163161] text-white">
              <tr>
                <th className="p-3 text-left">Tutor</th>
                <th className="p-3 text-left">Student Name</th>
                <th className="p-3 text-left">Student Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-center">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="border-b hover:bg-gray-50">

                  <td className="p-3 ">
                    <span className="font-medium">
                      {booking.TutorName}
                    </span>
                  </td>

                  <td className="p-3">
                    {booking.studentName}
                  </td>

                  <td className="p-3 text-gray-600">
                    {booking.userEmail}
                  </td>

                  <td className="p-3">
                    {booking.phone}
                  </td>

                  <td className="p-3 text-center">
                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                      Confirmed
                    </span>
                  </td>

                  <td className="p-3 text-center text-red-600">
                    <BookingCancle booking={booking} />
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

    </div>
  );
};

export default MyBookingPage;