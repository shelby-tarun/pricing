import React from "react";
import "./Navigation.scss";

const Navigation = (props) => {
  const { categories = [], activeCategory, onCategoryChange } = props;

  const renderTabs = () => {
    return categories.map((category) => (
      <li
        key={category}
        className={`navigation__tab${
          activeCategory === category ? " navigation__tab--selected" : ""
        }`}
        onClick={() => {
          onCategoryChange(category);
        }}
      >
        {category}
      </li>
    ));
  };

  return <ul className="navigation">{renderTabs()}</ul>;
};

export default Navigation;
