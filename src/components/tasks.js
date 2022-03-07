import { useContext } from "react";
import { Context } from "../App";
import "../App.css";
import Input from "./input";
import Task from "./task";

export default function Tasks() {
  const context = useContext(Context);

  return (
    <>
      <Input />
      <div className="Box">
        <h5>To be done</h5>
        {!context.lists.tasks.length
          ? "No tasks..."
          : context.lists.tasks.map((task, i) => <Task key={i} task={task} />)}
        <h5>Done</h5>
        {!context.lists.completedTasks.length
          ? "No tasks..."
          : context.lists.completedTasks.map((task, i) => (
              <Task key={i} task={task} check={true} />
            ))}
      </div>
    </>
  );
}
