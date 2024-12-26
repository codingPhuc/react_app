import { createContext, useEffect } from "react";
import { fetchUserTasks } from "../http";
import { addUserTasks } from "../http";
export const taskContext = createContext({
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

export default function TaskContextProvider({ children, tasks, token }) {
  
  async function handleTaskAdd(task) {
    try {
      if (task !== "") {
        await addUserTasks(task, token);
      } else {
        throw new Error("Tasks cannot be empty");
      }
    } catch (e) {
      console.log(e.message);
    }
  }
  function handleTaskUpdate() {}
  function handleTaskDelete() {}
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
