

"use client";

import { useState } from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaGraduationCap } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export function Booking({ tutor }) {
  const { TutorName, _id } = tutor;

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [studentName, setStudentName] = useState("");
  const [phone, setPhone] = useState("");

  const handleBooking = async () => {
    if (!studentName.trim()) return toast.error("Student name is required");
    if (!phone.trim()) return toast.error("Phone number is required");

    try {
      // SLOT CHECK + DECREMENT
      const patchRes = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/slot/${_id}`,
        { method: "PATCH" }
      );

      const text = await patchRes.text();
      let patchData = {};

      try {
        patchData = text ? JSON.parse(text) : {};
      } catch {
        return toast.error("Server error");
      }

      if (!patchRes.ok) {
        return toast.error(patchData.message || "Slot update failed");
      }


      const {data : tokenData} = await authClient.token()
      console.log(tokenData)


      const bookingRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: { 'content-type': 'application/json',
                   authorization : `Bearer ${tokenData?.token}` 

        },


        body: JSON.stringify({
          studentName,
          phone,
          TutorName,
          tutorId: _id,
          userEmail: user?.email,
          userId: user?.id,
        }),
      });

      if (!bookingRes.ok) {
        return toast.error("Booking failed");
      }

      setStudentName("");
      setPhone("");

      window.location.reload();
      toast.success("Booking confirmed!");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <Modal>
      <Button
        variant="secondary"
        className="bg-[#163161] hover:bg-[#22427d] transition-all text-white px-10 py-3 rounded text-lg font-semibold cursor-pointer shadow-lg"
      >
        Book Session
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaGraduationCap />
              </Modal.Icon>

              <Modal.Heading>Book your session</Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below to finalize your booking.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full">
                    <Label>Student Name</Label>
                    <Input
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </TextField>

                  <TextField className="w-full">
                    <Label>Phone</Label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </TextField>

                  <TextField className="w-full">
                    <Label>Tutor Id</Label>
                    <Input value={_id} readOnly />
                  </TextField>

                  <TextField className="w-full">
                    <Label>Tutor Name</Label>
                    <Input value={TutorName} readOnly />
                  </TextField>

                  <TextField className="w-full">
                    <Label>Student Email</Label>
                    <Input value={user?.email || ""} readOnly />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary" className="text-[#163161]">
                Cancel
              </Button>

              <Button
                onClick={handleBooking}
                slot="close"
                className="bg-[#163161] text-white"
              >
                Confirm booking
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}