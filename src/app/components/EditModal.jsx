"use client";

import { useRouter } from "next/navigation";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { ListBox, Select } from "@heroui/react";
import { FaEdit } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export function EditModal({ tutor }) {
  const router = useRouter();

  const {
    _id,
    TutorName,
    imageUrl,
    TeachingMode,
    Location,
    InstitutionExperience,
    Subject,
    TotalSlot,
    HourlyFee,
    SessionStartingDate,
    AvailableDaysTime,
  } = tutor;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // 🔥 type fix (IMPORTANT)
    const updatedTutor = {
      ...data,
      TotalSlot: Number(data.TotalSlot),
      HourlyFee: Number(data.HourlyFee),
    };


    const {data : tokenData} = await authClient.token()
    console.log(tokenData)
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization : `Bearer ${tokenData?.token}` 

      },
      body: JSON.stringify(updatedTutor),
    });

    const result = await res.json();

if (res.ok && result.modifiedCount > 0) {
  toast.success("Tutor details updated successfully!");

  
    window.location.reload();
}  };

  return (
    <Modal>
      <Button className="border-2 font-semibold rounded border-[#163161] text-[#163161] bg-white">
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaEdit />
              </Modal.Icon>

              <Modal.Heading>Edit Information</Modal.Heading>

              <p className="mt-1.5 text-sm text-gray-400">
                This modal allows you to quickly update a tutor’s existing information
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="space-y-4">

                  <TextField name="TutorName" defaultValue={TutorName} isRequired>
                    <Label>Tutor Name</Label>
                    <Input />
                  </TextField>

                  <TextField name="imageUrl" defaultValue={imageUrl} isRequired>
                    <Label>Photo URL</Label>
                    <Input />
                  </TextField>

                  <TextField name="Subject" defaultValue={Subject} isRequired>
                    <Label>Subject</Label>
                    <Input />
                  </TextField>

                  <TextField name="TeachingMode" defaultValue={TeachingMode} isRequired>
                    <Label>Teaching Mode</Label>
                    <Input />
                  </TextField>

                  <TextField name="TotalSlot" defaultValue={TotalSlot} isRequired>
                    <Label>Total Slot</Label>
                    <Input type="number" />
                  </TextField>

                  <TextField name="HourlyFee" defaultValue={HourlyFee} isRequired>
                    <Label>Hourly Fee</Label>
                    <Input type="number" />
                  </TextField>

                  <TextField
                    name="SessionStartingDate"
                    defaultValue={SessionStartingDate}
                    isRequired
                  >
                    <Label>Session Starting Date</Label>
                    <Input type="date" />
                  </TextField>

                  <TextField
                    name="AvailableDaysTime"
                    defaultValue={AvailableDaysTime}
                    isRequired
                  >
                    <Label>Available Days & Time</Label>
                    <Input />
                  </TextField>

                  <TextField name="Location" defaultValue={Location} isRequired>
                    <Label>Location</Label>
                    <Input />
                  </TextField>

                  <TextField
                    name="InstitutionExperience"
                    defaultValue={InstitutionExperience}
                    isRequired
                  >
                    <Label>Institution & Experience</Label>
                    <Input />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close">Cancel</Button>

                    <Button type="submit" className="bg-[#163161] text-white">
                      Save
                    </Button>
                  </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}


