import { Button } from "flowbite-react";
export default function Task({ text, completed }) {
  return (
    <div className="bg-gray-50 justify-between  rounded-2xl  h-[17%] flex items-center  px-6 w-full ">
      <div className="flex space-x-2 flex-row items-center  ">
        <input
          type="checkbox"
          defaultChecked={completed ? "checked" : ""}
        ></input>
        <p className="font-semibold text-xs  text-gray-800">{text}</p>{" "}
      </div>
      <div className="space-x-2 flex">
        <Button outline color="success" size="sm">
          Edit
        </Button>
        <Button outline color="failure" size="sm">
          Delete
        </Button>
      </div>
    </div>
  );
}
