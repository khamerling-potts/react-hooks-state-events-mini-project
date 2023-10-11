import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [currentTask, setCurrentTask] = useState({
    text: "",
    category: "Code",
  });

  const options = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  function handleInputChange(event) {
    setCurrentTask({ ...currentTask, [event.target.name]: event.target.value });
  }

  return (
    <form
      className="new-task-form"
      onSubmit={(event) => {
        event.preventDefault();
        onTaskFormSubmit(currentTask);
      }}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          value={currentTask.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={currentTask.category}
          onChange={handleInputChange}
        >
          {options.filter((option) => option.key !== "All")}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
