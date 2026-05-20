"use client";

import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { FaGraduationCap } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";

export function Booking({tutor}) {

const {
    TutorName,
    _id,
  } = tutor;
  
const { data: session } = authClient.useSession();

const user = session?.user;

  return (
    <Modal>
      <Button variant="secondary" className="bg-[#163161] hover:bg-[#22427d] transition-all text-white px-10 py-3 rounded text-lg font-semibold cursor-pointer shadow-lg">Book Session</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                {/* <Envelope className="size-5" /> */}
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

      <TextField className="w-full" name="name" type="text" variant="secondary">
        <Label>Student Name</Label>
        <Input placeholder="Enter your name" />
      </TextField>

      <TextField className="w-full" name="phone" type="tel" variant="secondary">
            <Label>Phone</Label>
            <Input placeholder="Enter your phone number" />
          </TextField>

          <TextField className="w-full" name="id" variant="secondary">
            <Label>Tutor Id</Label>
            <Input  value={_id} placeholder="Id" />
          </TextField>
          <TextField className="w-full" name="tutorName" variant="secondary">
            <Label>Tutor name</Label>
            <Input  value={TutorName} placeholder="Tutor name" />
          </TextField>
          
          
          <TextField className="w-full" name="email" type="email" variant="secondary">
            <Label>Student email</Label>
          <Input
          value={user?.email || ""}
          isReadOnly/> 
         </TextField>


        </form>
      </Surface>
    </Modal.Body>
    <Modal.Footer>
      <Button slot="close" variant="secondary" className={'text-[#163161] rounded'}>
        Cancel
      </Button>
      <Button slot="close" className={'bg-[#163161] text-white rounded'}>Confirm booking</Button>
    </Modal.Footer>
  </Modal.Dialog>
    </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}