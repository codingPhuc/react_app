import { Button } from "flowbite-react";
import { useContext, useState } from "react";
import { taskContext } from "../../store/user-tasks-context";

export default function Task({ task }) {
  const { updateTask, deleteTask } = useContext(taskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState(task.text);
  const [check, setChecked] = useState(task.completed);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateTask({ ...task, text: taskText });
    setIsEditing(false);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  };
  function handleChecked() {
    setChecked(!check);
    updateTask({ ...task, completed: !check });
  }

  return (
    <div className="bg-gray-50 justify-between rounded-2xl h-[17%] flex items-center px-6 w-full">
      <div className="flex space-x-2 flex-row items-center">
        <input
          type="checkbox"
          defaultChecked={check}
          onChange={handleChecked}
        />
        {isEditing ? (
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="font-semibold text-xs text-gray-800"
          />
        ) : (
          <p className="font-semibold text-xs text-gray-800">{task.text}</p>
        )}
      </div>
      <div className="space-x-2 flex">
        {isEditing ? (
          <Button outline color="success" size="sm" onClick={handleSaveClick}>
            Save
          </Button>
        ) : (
          <Button outline color="success" size="sm" onClick={handleEditClick}>
            Edit
          </Button>
        )}
        {isEditing ? (
          <Button outline color="failure" size="sm" onClick={handleCancelClick}>
            Cancel
          </Button>
        ) : (
          <Button
            outline
            color="failure"
            size="sm"
            onClick={() => deleteTask(task._id)}
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
}
