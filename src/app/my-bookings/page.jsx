import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';
import { BookingCancle } from '../components/BookingCancle';

const MyBookingPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
const user = session?.user


const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
const bookings = await res.json()
console.log(bookings)

    return (
        <div className=''>
            <h1>my boking sessions</h1>
            <table className='w-7/12 mx-auto my-10'>
                <thead>
                          <tr className="bg-gray-100">
        <th className="border border-gray-400 p-2">Tutor Name</th>
        <th className="border border-gray-400 p-2">Student Name</th>
        <th className="border border-gray-400 p-2">Student Email</th>
        <th className="border border-gray-400 p-2">Status</th>
        <th className="border border-gray-400 p-2">Cancel</th>
</tr>
</thead>
  
  <tbody>
    {bookings.map(booking=>
    
    <tr key={booking._id} className="text-center">
    <td className="border border-gray-400 p-2">{booking.TutorName}</td>
    <td className="border border-gray-400 p-2">{booking.studentName}</td>
    <td className="border border-gray-400 p-2">{booking.userEmail}</td>
    <td className="border p-2 border-gray-400"></td>
    <td className="border p-2 text-red-600 border-gray-400"><BookingCancle booking={booking}></BookingCancle></td>
      </tr>
    )}
  </tbody>

            </table>
        </div>
    );
};

export default MyBookingPage;