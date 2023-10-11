import React, { useState } from "react";
import CategoryButton from "./CategoryButton";

function CategoryFilter({ categories, onCategoryChange }) {
  const initialClasses = {};
  categories.forEach((category) => {
    initialClasses[category] = null;
  });

  //set initial classes of all categories to null
  const [categoryClasses, setCategoryClasses] = useState(initialClasses);

  function handleCategoryClick(event, category) {
    //all classes will be reverted to null except for the selected one
    setCategoryClasses({ ...initialClasses, [category]: "selected" });
    onCategoryChange(category);
  }

  const buttons = categories.map((category) => (
    <CategoryButton
      key={category}
      category={category}
      onCategorySelect={handleCategoryClick}
      categoryClasses={categoryClasses}
    />
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
