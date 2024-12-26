import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
// import Link from "next/link";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div class="flex  h-screen w-screen ">
      <div className="flex-grow  text-white w-full bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 flex flex-col justify-center items-start pl-16">
        <h1 className="text-3xl">Todo App</h1>
        <p>Manage your work every day</p>
      </div>
      <div class="flex-grow  w-2/4  flex  flex-col justify-center items-center">
        <img src="src\assets\Error RIP 1.png"></img>
        <p></p>
        <Link to="/">
          <Button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</Button>
        </Link>
      </div>
    </div>
  );
}
