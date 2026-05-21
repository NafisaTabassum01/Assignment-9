"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";


export function DeleteAlert({tutor}) {
const router = useRouter();
     const {
    _id,
    TutorName,
  } = tutor;

  const handleDelete = async () =>{

const {data : tokenData} = await authClient.token()
console.log(tokenData)
    
    
    const res = await fetch(`http://localhost:5000/tutor/${_id}`,
        {
        method:'DELETE',
         headers:{
        'content-type' : 'application/json' ,
        authorization : `Bearer ${tokenData?.token}` 
    
     },
    })
       const data = await res.json()
router.push('/allTutors')
router.refresh()
       console.log(data)
  }


  return (
    <AlertDialog>
      <Button variant="danger" className={'text-red-600 rounded bg-white border-2 border-red-600 ml-2'}>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete the data of <strong>{TutorName} </strong>
                .This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                <MdDeleteOutline />Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}