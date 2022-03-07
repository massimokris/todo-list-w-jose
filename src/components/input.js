import React, { useContext, useState } from "react";
import { Context } from "../App";
import "../App.css";

export default function Input() {
  const context = useContext(Context);
  const [task, setTask] = useState("");

  const checkTask = () => {
    const exist = context.lists.tasks.indexOf(task);

    if (exist === -1 && task !== "") {
      handleTask();
    } else {
      alert("Invalid task!");
    }
  };

  const handleTask = () => {
    const newLists = {
      ...context.lists,
      tasks: [...context.lists.tasks, task],
    };

    context.setLists(newLists);
    setTask("");
  };

  return (
    <div className="Input-div">
      <input
        className="Input"
        type="text"
        placeholder="Add new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button className="Input-button" onClick={() => checkTask()}>
        +
      </button>
    </div>
  );
}
