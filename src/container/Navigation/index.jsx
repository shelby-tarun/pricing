import React, { useState } from "react";

import { categories } from "../../utils/constants";
import Plans from "./Plans";
import "./Navigation.scss";

const categoryNames = Object.values(categories);

const Navigation = (props) => {
  const { defaultCategory = "$300K - $400K" } = props;

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const renderTabs = () => {
    return categoryNames.map((category) => (
      <li
        key={category}
        className={`navigation__tab${
          selectedCategory === category ? " navigation__tab--selected" : ""
        }`}
        onClick={() => {
          setSelectedCategory(category);
        }}
      >
        {category}
      </li>
    ));
  };

  return (
    <div
      className="container"
      style={{
        padding: "1rem 2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <ul className="navigation">{renderTabs()}</ul>
      <Plans activeCategory={selectedCategory} />
    </div>
  );
};

export default Navigation;
