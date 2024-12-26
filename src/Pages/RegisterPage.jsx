import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
// import Link from "next/link";

import FormRegistor from "./components/FormRegistor";
export default function RegisterPage() {
  return (
    <div className="flex flex-row">
      <div className="text-white w-full h-screen  bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 flex flex-col justify-center items-start pl-16 ">
        <h1 className="bg-transparent">Todo App</h1>
        <p>Manage your work every day</p>
      </div>
      <div className="flex-grow  w-2/4  flex justify-center items-center">
        <FormRegistor></FormRegistor>
      </div>
    </div>
  );
}
