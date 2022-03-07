import React, { useState, useContext } from "react";
import { Context } from "../App";
import Delete from "../icons/delete";
import Update from "../icons/update";
import "../App.css";

export default function Task(props) {
  const context = useContext(Context);
  const [check, setCheck] = useState(props.check ? props.check : false);

  const handleCheck = () => {
    const index = context.lists.tasks.indexOf(props.task);
    if (index !== -1) {
      const completedTask = context.lists.tasks[index];
      context.lists.tasks.splice(index, 1);

      const newLists = {
        ...context.lists,
        completedTasks: [...context.lists.completedTasks, completedTask],
      };

      context.setLists(newLists);
      setCheck(!check);
    } else {
      const index = context.lists.completedTasks.indexOf(props.task);
      const task = context.lists.completedTasks[index];
      context.lists.completedTasks.splice(index, 1);

      const newLists = {
        ...context.lists,
        tasks: [...context.lists.tasks, task],
      };

      context.setLists(newLists);
    }
  };

  const deleteTask = () => {
    let deletedTask;
    const index = context.lists.tasks.indexOf(props.task);
    if (index !== -1) {
      deletedTask = context.lists.tasks[index];
      context.lists.tasks.splice(index, 1);
    } else {
      const index = context.lists.completedTasks.indexOf(props.task);
      deletedTask = context.lists.completedTasks[index];
      context.lists.completedTasks.splice(index, 1);
    }

    const newLists = {
      ...context.lists,
      deletedTasks: [...context.lists.deletedTasks, deletedTask],
    };

    context.setLists(newLists);
  };

  return (
    <div className="Task-div">
      <label
        className="Task"
        style={{ textDecoration: check ? "line-through" : "none" }}
      >
        <input
          checked={check}
          className="Task-checkbox"
          type="checkbox"
          onChange={() => handleCheck()}
        ></input>
        {props.task}
      </label>

      <div className="Task-elements">
        <Update />
        <a onClick={() => deleteTask()}>
          <Delete />
        </a>
      </div>
    </div>
  );
}
