"use client";

import { Button, FieldError, Input, Label, ListBox, TextField,Select, TextArea } from '@heroui/react';
// import { headers } from 'next/headers';
import React from 'react';
import toast from 'react-hot-toast';
import { authClient } from "@/lib/auth-client";

const AddTutorPage =  () => {
  
const { data: session } = authClient.useSession();
const user = session?.user;



const onSubmit =async (e)=>{
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const tutor = Object.fromEntries(formData.entries())
  // console.log(tutor)



const tutorData = {
  ...tutor,
  TotalSlot: Number(tutor.TotalSlot),
  HourlyFee: Number(tutor.HourlyFee),
  userId: user?.id,
  userEmail: user?.email,
};

// console.log(tutorData)

  const {data : tokenData} = await authClient.token()
  console.log(tokenData)


  const res = await fetch('http://localhost:5000/tutor',{
        method:'POST',
    headers:{
        'content-type' : 'application/json',
        authorization : `Bearer ${tokenData?.token}`

    },
    // body: JSON.stringify(tutor)
    // body: JSON.stringify(tutor)
    body: JSON.stringify(tutorData)

  })
  const data = await res.json()
  
      window.location.reload();
     toast.success("Tutor added successfully!")


}

    return (
<div>
            <form onSubmit={onSubmit}
            className="p-10 bg-white border border-gray-100 text-[#163161] space-y-8 w-full mx-auto pb-5 my-12 shadow-2xl rounded-2xl md:w-6/12 "
          >
            <p className='text-2xl text-[#163161] font-bold w-6/12 mx-auto pt-6 text-center'>Add Tutor</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2 ">
                <TextField name="TutorName" isRequired>
                  <Label>Tutor Name</Label>
                  <Input placeholder="Tutor Name" className="rounded-2xl border border-gray-100 w-full shadow" />
                  <FieldError />
                </TextField>
              </div>


              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Photo URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/profile.jpg"
                    className="rounded-2xl border border-gray-100 w-full shadow"
                  />
                  <FieldError />
                </TextField>
              </div>



              {/* Country */}
              <TextField name="Subject" isRequired>
                <Select
                  name="Subject"
                  isRequired
                  className="w-full "
                  placeholder="Select category"
                >
                  <Label>Subject</Label>
                  <Select.Trigger className="rounded-2xl shadow">
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

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="TeachingMode"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Teaching Mode</Label>
                  <Select.Trigger className="rounded-2xl shadow">
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
              <TextField name="TotalSlot" type="number" isRequired>
                <Label>Total Slot</Label>
                <Input
                  type="number"
                  placeholder="Total slot"
                  className="rounded-2xl shadow border border-gray-100 w-full"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField name="HourlyFee" isRequired>
                <Label>Hourly fee</Label>
                <Input
                type="number"
                  placeholder="Hourly fee"
                  className="rounded-2xl border shadow border-gray-100 w-full"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="SessionStartingDate" type="date" isRequired>
                  <Label>Session Starting Date</Label>
                  <Input type="date" className="rounded-2xl border  shadow border-gray-100 w-full" />
                  <FieldError />
                </TextField>
              </div>



              {/* Description */}
              <div className="md:col-span-2">
               <TextField name="AvailableDaysTime" isRequired>
                  <Label>Available Days and Available time slot</Label>
                  <Input placeholder="Sun - Thu | 5:00 PM - 8:00 PM" className="rounded-2xl border border-gray-100 w-full shadow" />
                  <FieldError />
                </TextField>
              </div>
              <div className="md:col-span-2">
               <TextField name="Location" isRequired>
                  <Label>Location</Label>
                  <Input placeholder="(Area/City)" className="rounded-2xl border border-gray-100 w-full shadow" />
                  <FieldError />
                </TextField>
              </div>
              <div className="md:col-span-2">
               <TextField name="InstitutionExperience" isRequired>
                  <Label>Institution & Experience</Label>
                  <Input placeholder="BUET | 2 years" className="rounded-2xl border border-gray-100  w-full shadow" />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
              className=" rounded-none w-full bg-[#163161] text-white">
                Add Tutor
            </Button>
          </form>
        </div>

    );
};

export default AddTutorPage;