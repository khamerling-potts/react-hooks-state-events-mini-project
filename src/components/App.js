import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [currentCategory, setCurrentCategory] = useState("All");

  function handleTaskDelete(event, text) {
    const tasksAfterDelete = tasks.filter((item) => item.text !== text);
    setTasks(tasksAfterDelete);
  }

  function handleCategoryChange(category) {
    setCurrentCategory(category);
  }

  function handleTaskSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  const tasksToDisplay = tasks.filter((item) => {
    if (currentCategory === "All") return true;
    return item.category === currentCategory;
  });
  console.log(tasksToDisplay);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskSubmit}
      />
      <TaskList tasks={tasksToDisplay} onTaskDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
