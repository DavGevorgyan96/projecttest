import React from "react";
import "./style.css";

const Category = ({ navCategory }) => {
  return (
    <div className="category">
      <ul className="item">
        {navCategory.map((item) => (
          <li>
            <a href="/#">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
