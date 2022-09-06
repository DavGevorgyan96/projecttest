import React from "react";
import "./style.css";

const Category = ({navCategory}) => {
    
    return (
      <div className="category">
          {navCategory.map((item) => (
            <div className="item">
                <a href="/#">{item.name}</a>
            </div>
          ))}
      </div>
    );
  };
  
  export default Category;