import React, { useState } from "react";

function CategoryButton({ category, categoryClasses, onCategorySelect }) {
  return (
    <button
      key={category}
      className={categoryClasses[category]}
      onClick={(event) => {
        onCategorySelect(event, category);
      }}
    >
      {category}
    </button>
  );
}

export default CategoryButton;
