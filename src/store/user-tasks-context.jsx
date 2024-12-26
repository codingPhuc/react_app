import { createContext, useEffect, useState } from "react";
import { deleteUserTasks, fetchUserTasks, updateUserTasks } from "../http";
import { addUserTasks } from "../http";
export const taskContext = createContext({
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const [token, setToken] = useState("");

  useEffect(() => {
    function fetchToken() {
      try {
        const sessionToken = JSON.parse(sessionStorage.getItem("token"));
        const localToken = JSON.parse(localStorage.getItem("token"));
        const token = localToken || sessionToken;
        if (!token) {
          navigation.navigate("/");
        } else {
          setToken(token);
        }
      } catch (error) {
        console.log(error.message);
      }
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
  async function handleTaskAdd(task) {
    try {
      if (task !== "") {
        await addUserTasks(task, token);
        const updatedTasks = await fetchUserTasks(token);
        setTasks(updatedTasks);
      } else {
        throw new Error("Tasks cannot be empty");
      }
    } catch (e) {
      console.log(e.message);
    }
  }
  async function handleTaskUpdate(task) {
    try {
      await updateUserTasks(task, token);
      const updatedTasks = await fetchUserTasks(token);
      setTasks(updatedTasks);
    } catch (e) {
      console.log(e.message);
    }
  }
  async function handleTaskDelete(taskId) {
    try {
      await deleteUserTasks(taskId, token);
      const updatedTasks = await fetchUserTasks(token);
      setTasks(updatedTasks);
    } catch (e) {
      console.log(e.message);
    }
  }
  const ctxTasksValue = {
    tasks,
    addTask: handleTaskAdd,
    updateTask: handleTaskUpdate,
    deleteTask: handleTaskDelete,
  };
  return (
    <taskContext.Provider value={ctxTasksValue}>
      {children}
    </taskContext.Provider>
  );
}
