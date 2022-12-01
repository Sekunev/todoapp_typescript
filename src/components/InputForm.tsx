import React, { useState } from "react";

interface IInputForm {
  addTodo: AddFn;
}

const InputForm: React.FC<IInputForm> = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleClick = () => {
    if (task.trim() !== "") {
      addTodo(task);
      setTask("");
    } else {
      alert("fill input box");
      setTask("");
    }
  };

  return (
    <div className="input-form">
      <input
        className="input-task"
        placeholder="Enter the todo..."
        type="text"
        maxLength={40}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="btn-hover btn-color"
        type="submit"
        disabled={!task}
      >
        Add New Todo
      </button>
    </div>
  );
};

export default InputForm;