import React, { useContext, useEffect, useState } from "react";
import { Button } from "flowbite-react";
import TasksList from "./components/TasksList";
import ButtonLogOut from "../assets/ButtonLogOut.png";

import John from "../assets/john.png";
import InputFlied from "./components/InputFlied";
import TaskContextProvider from "../store/user-tasks-context";
import { fetchUserTasks } from "../http";
import TaskBar from "./components/TasksBar";
export default function MainPage() {
  const [tasks, setTasks] = useState([]);

  const [token, setToken] = useState("");

  useEffect(() => {
    function fetchToken() {
      const sessionToken = JSON.parse(sessionStorage.getItem("token"));
      const localToken = JSON.parse(localStorage.getItem("token"));
      localToken ? setToken(localToken) : setToken(sessionToken);
    }
    fetchToken();
  }, []);
  useEffect(() => {
    async function fetchTasks() {
      try {
        const fetchedTasks = await fetchUserTasks(token);
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    }
    fetchTasks();
  }, [token]);
  return (
    <TaskContextProvider tasks={tasks} token={token}>
      <div className="flex bg-green_lime flex-col items-center justify-center h-screen">
        <div className="bg-white w-[70%] h-[85%] rounded-3xl px-16  py-10">
          <div className=" bg-transparent px-6 w-full mb-5">
            <div className="flex flex-row h-[70%] w-full items-center mb-2">
              <img
                src={John}
                alt="picture"
                className="h-10 w-10 mr-[8px] rounded-3xl"
              ></img>
              <p>John holland</p>
              <button className="ml-auto">
                <img src={ButtonLogOut}></img>
              </button>
            </div>
            <p className="text-2xl font-semibold text-gray-900">Welcome</p>
            <p className="font-semibold text-xs  text-gray-800">
              You’ve no task to do. Let’s add a new task
            </p>
          </div>
          <TaskBar></TaskBar>
          <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <TasksList />
        </div>
      </div>
    </TaskContextProvider>
  );
}
