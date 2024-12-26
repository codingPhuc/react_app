import { TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import Task from "./Task";
import { useContext, useState } from "react";
import { taskContext } from "../../store/user-tasks-context";
import errorContentContainer from "../../assets/errorContentContainer.png";
export default function TasksList() {
  const { tasks } = useContext(taskContext);
  const [filter, setFilter] = useState(undefined);
  return (
    <>
      {tasks.length === 0 && (
        <img
          src={errorContentContainer}
          alt="No tasks"
          className="w-3/4 h-3/4  object-contain mx-auto my-auto"
        />
      )}
      {tasks.length > 0 && (
        <div className="bg-transparent w-full h-[60%] space-y-2 overflow-y-auto">
          <div className="flex justify-center space-x-5 mt-2 mb-2">
            <p>Filter : </p>
            <div class="flex items-center me-4">
              <input
                // id="inline-radio"
                checked={filter == undefined && "checked"}
                type="radio"
                value=""
                name="inline-radio-group"
                onChange={() => setFilter(undefined)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="inline-radio"
                class="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
              >
                All
              </label>
            </div>
            <div class="flex items-center me-4">
              <input
                // id="inline-2-radio"
                checked={filter == false && "checked"}
                type="radio"
                value=""
                name="inline-radio-group"
                onChange={() => setFilter(false)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="inline-2-radio"
                class="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
              >
                Undone
              </label>
            </div>
            <div class="flex items-center me-4">
              <input
                checked={filter == true && "checked"}
                // id="inline-checked-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                onChange={() => setFilter(true)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="inline-checked-radio"
                class="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
              >
                Done
              </label>
            </div>
          </div>

          {tasks.map(
            (task) =>
              (task.completed === filter || filter === undefined) && (
                <Task key={task._id} task={task} />
              )
          )}
        </div>
      )}
    </>
  );
}
