import React, { useState } from "react";
import Navigation from "../Navigation";
import { plansDetail } from "../../utils/constants";
import Plans from "../Navigation/Plans";
import "./App.scss";

const categoryNames = Object.keys(plansDetail);

const App = () => {
  const [activeStage, setActiveStage] = useState("$300K - $400K");

  return (
    <div
      className="app"
      style={{
        padding: "1rem 2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Navigation
        categories={categoryNames}
        activeCategory={activeStage}
        onCategoryChange={setActiveStage}
      />
      <Plans activeCategory={activeStage} />
    </div>
  );
};

export default App;
