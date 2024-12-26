import React, { useEffect, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Outlet, Link } from "react-router-dom";
import { registerInToUserAccount } from "../../http";
export default function FormRegistor() {
  const [userInformation, setUserInformation] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const [errors, setErrors] = useState("");
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const handleSubmit = (e) =>
  async function handleSubmit(e) {
    {
      e.preventDefault();
      let errors = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
      if (!userInformation.username)
        errors.username = "This field can not be empty";
      if (!userInformation.email) {
        errors.email = "This field can not be empty";
      } else if (!userInformation.email.includes("@")) {
        errors.email = "Email must contain an '@' symbol";
      }
      if (!userInformation.password) {
        errors.password = "This field can not be empty";
      } else if (userInformation.password.length < 6) {
        errors.password =
          "Please enter a valid password. The password is required at least 6 characters";
      }
      if (!userInformation.confirmPassword) {
        errors.confirmPassword = "This field can not be empty";
      } else if (userInformation.password != userInformation.confirmPassword) {
        errors.confirmPassword = "Password does not match";
      }
      let isVaild = Object.values(errors).every((e) => e === "");

      if (isVaild) {
        try {
          const { confirmPassword, ...userData } = userInformation;
          await registerInToUserAccount(userData);
          navigation.navigate("/");
        } catch (error) {
          errors.email = error.message;
          setFormErrors(errors);
        }
      }
      setFormErrors(errors);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex   w-2/3 flex-col gap-4 bg-transparent"
    >
      <div>
        <h1 className="text-2xl font-bold">Hello!</h1>
        <h1 className="mb-4">Sign Up to Get Started</h1>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Full Name" />
        </div>
        <TextInput
          id="email2"
          type="text"
          placeholder="Enter your name"
          shadow
          onChange={(e) => {
            setUserInformation({
              ...userInformation,
              username: e.target.value,
            });
          }}
        />
        <p className="text-xs text-red_lime ">{formErrors.username}</p>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Email Address" />
        </div>
        <TextInput
          id="name"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => {
            setUserInformation({ ...userInformation, email: e.target.value });
          }}
          shadow
        />
        <p className="text-xs text-red_lime ">{formErrors.email}</p>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Password" />
        </div>
        <TextInput
          id="password2"
          type="password"
          shadow
          onChange={(e) => {
            setUserInformation({
              ...userInformation,
              password: e.target.value,
            });
          }}
          placeholder="Enter at least 6 characters"
        />
        <p className="text-xs text-red_lime ">{formErrors.password}</p>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Confirm Password" />
        </div>
        <TextInput
          id=""
          type="password"
          placeholder="Confirm password"
          onChange={(e) => {
            setUserInformation({
              ...userInformation,
              confirmPassword: e.target.value,
            });
          }}
          shadow
        />
        <p className="text-xs text-red_lime ">{formErrors.confirmPassword}</p>
      </div>

      <div className="inline-block">
        <Label htmlFor="register">Already have an account?</Label>
        <Link
          to="/"
          className="font-medium text-green-700 dark:text-green-800 hover:underline ml-1"
        >
          Login here
        </Link>
      </div>
      <Button
        type="submit"
        className="focus:outline-none w-auto px-4 py-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Register
      </Button>
    </form>
  );
}
