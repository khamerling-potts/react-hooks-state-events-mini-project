import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  const taskArray = tasks.map((item) => (
    <Task
      text={item.text}
      category={item.category}
      key={item.text}
      onTaskDelete={onTaskDelete}
    />
  ));
  return <div className="tasks">{taskArray}</div>;
}

export default TaskList;
