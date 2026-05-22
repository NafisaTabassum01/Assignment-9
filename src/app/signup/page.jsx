"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";

import { FcGoogle } from "react-icons/fc";


import { Check } from "lucide-react";
import React, { useEffect } from "react";
import Image from "next/image";
import signup from "../../assets/download-signup.png";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUpPage = () => {
    const router = useRouter();

const onSubmit = async (e) =>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries())
    // console.log(user)

    const { data, error } = await authClient.signUp.email({
        email : user.email ,       
        password :user.password,
        name : user.name ,
        image : user.imageUrl
    })
console.log({data , error})


if(data){
    router.push('/login')
router.refresh()
}
if(error){
   
  alert(error.message || "Something went wrong");
} 
   
}

const handleGoogleSignin = async () => {
   await authClient.signIn.social({
    provider: "google",
  });
}
    useEffect(() => {
  document.title = "Register";
}, []);


  return (
    <div className=" max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-10 rounded-2xl my-16  shadow-2xl md:w-8/12" >

      {/* Left Side Form */}
      <div className="flex justify-center border-2  rounded-2xl border-gray-100">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl  p-8 md:ml-5 ">

          <h1 className="text-4xl font-bold mb-2 text-[#163161]">
            Create Account
          </h1>

          <p className="text-gray-500 mb-8">
            Join and start your learning journey today.
          </p>

          <Form onSubmit={onSubmit} className="flex flex-col gap-5">

            <TextField
              isRequired
              name="name"
              type="text"
            >
              <Label>Name</Label>
              <Input placeholder="Enter your name" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="abc@example.com" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="imageUrl"
              type="url"
            >
              <Label>Photo URL</Label>
              <Input placeholder="https://example.com/photo.png" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={6}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>

              <Input placeholder="Enter your password" />

              <Description>
                Must be at least 6 characters with 1 uppercase and 1 number
              </Description>

              <FieldError />
            </TextField>
            <Link href={'/login'} className="text-blue-600 text-[16px] underline underline-offset-2">Already habe an account?Login</Link>
            

            <div className="flex gap-3">

              <Button
                type="submit"
                className="bg-[#163161] text-white w-full rounded mb-2"
              >
                <Check size={18} />
                Register
              </Button>
            </div>
          </Form>
        
        <div className="flex justify-center items-center gap-3">
          <Separator  className="w-5/12"></Separator>
         <span className="whitespace-nowrap text-gray-400">or</span>
      <Separator className="w-5/12"></Separator>
        </div>


          <div>
            <Button onClick={handleGoogleSignin} className={'text-[#163161] border-2 border-[#163161] bg-white w-full rounded mt-2'}><FcGoogle /> Sign in with Google</Button>
          </div>



        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex justify-center">
        <Image
          src={signup}
          alt="Signup Illustration"
          className="w-full max-w-xl object-contain"
        />
      </div>

    </div>
  );
};

export default SignUpPage;