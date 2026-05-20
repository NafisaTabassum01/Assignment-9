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

import { Check } from "lucide-react";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";


const LoginPage = () => {
  // const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    console.log({ data, error });

    if (data) {
        alert('login successfull')
      // router.push("/");
      // router.refresh();
      redirect("/")
    }

    if (error) {
      alert(error.message || "Something went wrong");
    }
  };


const handleGoogleSignin = async () => {
   await authClient.signIn.social({
    provider: "google",
  });
}



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md shadow-xl rounded-2xl p-8 bg-white">
        
        <h1 className="text-3xl font-bold mb-2 text-[#163161] text-center">
          Login
        </h1>

        <p className="text-gray-500 mb-6 text-[16px] text-center">
      Welcome back! Continue your learning journey.
        </p>

        <Form onSubmit={onSubmit} className="flex flex-col gap-5">


          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="abc@example.com" />
            <FieldError />
          </TextField>

          {/* password */}
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
                return "Must contain 1 uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Must contain 1 number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              6+ chars, 1 uppercase, 1 number
            </Description>
            <FieldError />
          </TextField>
          <p className="text-blue-500 text-right font-semibold text-[16px] underline-offset-2 underline">Forget Password?</p>

          <div className="flex gap-3 pt-2">
            <Button type="submit" className="bg-[#163161] text-white w-full rounded">
              <Check size={18} />
              Login
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
  );
};

export default LoginPage;