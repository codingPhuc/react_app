import { CgAddR } from "react-icons/cg";
import { Button } from "flowbite-react";
import { useContext, useState } from "react";
import { taskContext } from "../../store/user-tasks-context";
export default function TaskBar() {
  const { addTask } = useContext(taskContext);
  const [inputText, setIntputText] = useState("");
  return (
    <div className="flex items-center justify-between  h-[10%] px-[24px] ">
      <div className="w-[50%] flex flex-row space-x-2">
        <button>
          <CgAddR color="gray" className="w-6 h-6" />{" "}
        </button>
        <input
          type="search"
          id="search"
          className="block w-full h-[75%]  text-sm border-none text-gray-900 rounded-lg bg-transparent focus:border-b "
          placeholder="Add a new tasks"
          required
          onChange={(e) => {
            setIntputText(e.target.value);
          }}
        />
      </div>
      <Button
        color="success"
        onClick={() => {
          addTask(inputText);
        }}
        size="sm"
      >
        Add new
      </Button>
    </div>
  );
}
