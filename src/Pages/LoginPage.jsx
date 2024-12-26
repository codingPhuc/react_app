import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
// import Link from "next/link";
import FormLogin from "./components/FormLogin";
export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col  pl-[42px]  items-start text-white w-full bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 justify-center">
        <h1 className="text-3xl ">Todo App</h1>
        <p className="">Manage your work every day</p>
      </div>
      <div className="flex-grow w-2/4 flex justify-center items-center">
        <FormLogin />
      </div>
    </div>
  );
}
