"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function BookingCancle({ booking }) {
  const { TutorName, _id } = booking;

const handleCancleBooking = async ()=>{

  const {data : tokenData} = await authClient.token()
  console.log(tokenData)
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`,{
        method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization : `Bearer ${tokenData?.token}` ,
      },

    })
    const data = await res.json()

     toast.success("Booking canceled successfully!")

    window.location.reload();

}

  return (
    <AlertDialog>
      <Button className="text-red-600 bg-red-100 border-none rounded-none text-[18px] font-semibold">
        cancel
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                Are you sure you want to cancel your session with <strong>{TutorName}</strong>?
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button
                slot="close"
                variant="danger"
                onClick={handleCancleBooking}
              >
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}