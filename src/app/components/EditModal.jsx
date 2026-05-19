"use client";

import {Envelope} from "@gravity-ui/icons";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

import {Button, FieldError, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { ListBox,Select, TextArea } from '@heroui/react';

export function EditModal({tutor}) {
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

  const router = useRouter();

const onSubmit =async (e)=>{
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const tutor = Object.fromEntries(formData.entries())
  console.log(tutor)





  const res = await fetch(`http://localhost:5000/tutor/${_id}`,{
        method:'PATCH',
    headers:{
        'content-type' : 'application/json'

    },
    body: JSON.stringify(tutor)

  })
  const data = await res.json()
    if (data.modifiedCount > 0) {
    router.refresh();
  }

  console.log(data)
 // toast
}

  return (
    <Modal>
      <Button className={'border-2 font-semibold rounded border-[#163161] text-[#163161] bg-white'}>Edit</Button>
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
                
                 <form onSubmit={onSubmit}
                            className="p-10 bg-white border border-gray-100 text-[#163161] space-y-8 w-full mx-auto pb-5 my-8 shadow-2xl rounded-2xl md:w- "
                          >
                            <p className='text-2xl text-[#163161] font-bold w-6/12 mx-auto pt-6 text-center'>Add Tutor</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {/* Destination Name */}
                              <div className="md:col-span-2 ">
                                <TextField defaultValue={TutorName}  name="TutorName" isRequired>
                                  <Label>Tutor Name</Label>
                                  <Input placeholder="Tutor Name" className="rounded-2xl border border-gray-100" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                
                              <div className="md:col-span-2">
                                <TextField  defaultValue={imageUrl} name="imageUrl" isRequired>
                                  <Label>Photo URL</Label>
                                  <Input
                                    type="url"
                                    placeholder="https://example.com/profile.jpg"
                                    className="rounded-2xl border border-gray-100"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                
                
                              <div className="md:col-span-2">
                                <TextField    name="Subject" isRequired>
                                <Select
                                defaultValue={Subject}
                                  name="Subject"
                                  isRequired
                                  className="w-full"
                                  placeholder="Select category"
                                >
                                  <Label>Subject</Label>
                                  <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                  </Select.Trigger>
                                  <Select.Popover>
                                    <ListBox>
                                      <ListBox.Item id="physics" textValue="physics">
                                        physics
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Chemistry" textValue="Chemistry">
                                        Chemistry
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Biology" textValue="Biology">
                                        Biology
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Math" textValue="Math">
                                        Math
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="English" textValue="English">
                                        English
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Ict" textValue="Ict">
                                        Ict
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                    </ListBox>
                                  </Select.Popover>
                                </Select>
                              </TextField>
                              </div>
                
                              {/* Category - Updated Select Component */}
                              <div className="md:col-span-2">
                                <Select
                                defaultValue={TeachingMode}
                                  name="TeachingMode"
                                  isRequired
                                  className="w-full"
                                  placeholder="Select category"
                                >
                                  <Label>Teaching Mode</Label>
                                  <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                  </Select.Trigger>
                                  <Select.Popover>
                                    <ListBox>
                                      <ListBox.Item id="Online" textValue="Online">
                                        Online
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Offline" textValue="Offline">
                                        Offline
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Both" textValue="Both">
                                        Both
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      
                                    </ListBox>
                                  </Select.Popover>
                                </Select>
                              </div>
                
                              {/* Price */}
                              <TextField defaultValue={TotalSlot} name="TotalSlot" type="number" isRequired>
                                <Label>Total Slot</Label>
                                <Input
                                  type="number"
                                  placeholder="Total slot"
                                  className="rounded-2xl border border-gray-100"
                                />
                                <FieldError />
                              </TextField>
                
                              {/* Duration */}
                              <TextField defaultValue={HourlyFee} name="HourlyFee" isRequired>
                                <Label>Hourly fee</Label>
                                <Input
                                type="number"
                                  placeholder="Hourly fee"
                                  className="rounded-2xl border border-gray-100"
                                />
                                <FieldError />
                              </TextField>
                
                              {/* Departure Date */}
                              <div className="md:col-span-2">
                                <TextField defaultValue={SessionStartingDate} name="SessionStartingDate" type="date" isRequired>
                                  <Label>Session Starting Date</Label>
                                  <Input type="date" className="rounded-2xl border border-gray-100" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                
                
                              {/* Description */}
                              <div className="md:col-span-2">
                               <TextField defaultValue={AvailableDaysTime} name="AvailableDaysTime" isRequired>
                                  <Label>Available Days and Available time slot</Label>
                                  <Input placeholder="Sun - Thu 5:00 PM - 8:00 PM" className="rounded-2xl border border-gray-100" />
                                  <FieldError />
                                </TextField>
                              </div>
                              <div className="md:col-span-2">
                               <TextField  defaultValue={Location} name="Location" isRequired>
                                  <Label>Location</Label>
                                  <Input placeholder="(Area/City)" className="rounded-2xl border border-gray-100" />
                                  <FieldError />
                                </TextField>
                              </div>
                              <div className="md:col-span-2">
                               <TextField defaultValue={InstitutionExperience} name="InstitutionExperience" isRequired>
                                  <Label>Institution & Experience</Label>
                                  <Input placeholder="BUET | 2 years" className="rounded-2xl border border-gray-100" />
                                  <FieldError />
                                </TextField>
                              </div>
                            </div>
                
                            {/* Buttons */}
                <Modal.Footer>
              <Button slot="close" className={'border border-[#163161] bg-white text-[#163161] rounded-none'}>
                Cancel
              </Button>
  <Button
  slot="close"
     type="submit"
     variant="outline"
     className=" rounded-none bg-[#163161] text-white">
       Save
                            </Button>            </Modal.Footer>
                          
                          </form>


              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}