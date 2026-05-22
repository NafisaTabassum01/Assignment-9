
"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { EditModal } from "./EditModal";
import { DeleteAlert } from "./DeleteAlert";
import Image from "next/image";

const MyTutor = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log(user?.id)

  const [tutors, setTutors] = useState([]);

  // useEffect(() => {
  //   if (!user?.id) return;

  //     .then(res => res.json())
  //     .then(data => setTutors(data));
  // }, [user?.id]);

useEffect(() => {
  const fetchData = async () => {
    if (!user?.id) return;

const tokenData = await authClient.token();

const token = tokenData?.data?.token;

    console.log("TOKEN:", token);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/user/${user.id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await res.json();

      console.log(result);

      setTutors(Array.isArray(result) ? result : []);
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
}, [user]);

  return (
    <div className="w-10/12 mx-auto mt-10">
      {tutors.length === 0 ? (
        <p className="text-center text-gray-500">No tutors found</p>
      ) : (
        <div className="overflow-x-auto shadow mb-10">
          <table className="w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
            
            {/* TABLE HEAD */}
            <thead className="bg-[#163161] text-white">
              <tr>
                <th className="p-3 text-left">Tutor</th>
                <th className="p-3 text-left">Subject</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Teaching Mode</th>
                <th className="p-3 text-left">User Email</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {/* {tutors.map((t) => ( */}
              {Array.isArray(tutors) &&
                tutors.map((t) => (
                <tr key={t._id} className="border-b hover:bg-gray-50">

                  {/* Tutor Info */}
                  <td className="p-3 flex items-center gap-3">
                    <Image
                      src={t.imageUrl}
                      alt={t.TutorName}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <span className="font-medium">{t.TutorName}</span>
                  </td>

                  {/* Subject */}
                  <td className="p-3">{t.Subject}</td>
                  <td className="p-3">{t.Location}</td>
                  <td className="p-3">{t.TeachingMode}</td>

                  {/* User Email */}
                  <td className="p-3 text-gray-600">{t.userEmail}</td>

                  {/* Actions */}
                  <td className="p-3 flex gap-2 justify-center">
                    <EditModal tutor={t} />

                    <DeleteAlert tutor={t} />
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

export default MyTutor;