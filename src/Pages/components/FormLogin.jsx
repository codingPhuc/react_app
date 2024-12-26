import React, { useEffect } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { signInToUserAccount } from "../../http";
export default function FormLogin() {
  useEffect(() => {
    function fetchToken() {
      const sessionToken = sessionStorage.getItem("token");
      const localToken = localStorage.getItem("token");
      if (localToken || sessionToken) {
        navigation.navigate("mainPage");
      }
    }
    fetchToken();
  }, []);

  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  // const [errors, setErrors] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  // const handleSubmit = (e) =>
  async function handleSubmit(e) {
    {
      e.preventDefault();
      let errors = {
        email: "",
        password: "",
      };

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
      let isVaild = Object.values(errors).every((e) => e === "");
      if (isVaild) {
        try {
          const userData = { rememberMe, ...userInformation };
          const token = await signInToUserAccount(userData);
          if (rememberMe) {
            localStorage.setItem("token", JSON.stringify(token));
          } else {
            sessionStorage.setItem("token", JSON.stringify(token));
          }

          navigation.navigate("mainPage");
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
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <h1 className="mb-4">Login to Get Started</h1>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Email Address" />
        </div>
        <TextInput
          id="email2"
          type="text"
          placeholder="Enter your email"
          shadow
          onChange={(e) => {
            setUserInformation((prevstate) => ({
              ...prevstate,
              email: e.target.value,
            }));
          }}
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
          placeholder="Enter password"
          onChange={(e) => {
            setUserInformation((prevstate) => ({
              ...prevstate,
              password: e.target.value,
            }));
          }}
        />
        <p className="text-xs text-red_lime ">{formErrors.password}</p>
      </div>

      <div className="inline-block">
        <Label htmlFor="register">Don't have an account?</Label>
        <Link
          to="/register"
          className="font-medium text-green-700 dark:text-green-800 hover:underline ml-1"
        >
          Register here
        </Link>
      </div>

      <Button
        type="submit"
        className="focus:outline-none w-auto px-4 py-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Login
      </Button>

      <div className="inline-block">
        <Checkbox
          id="remember"
          className="mr-3"
          onChange={(e) => {
            setRememberMe(e.target.checked);
          }}
        />
        <Label htmlFor="remember">Remember me</Label>
      </div>
    </form>
  );
}
