import React from "react";
import { plansDetail } from "../../../utils/constants";
import Plan from "./Plan";
import "./Plans.scss";

const Plans = (props) => {
  const { activeCategory } = props;

  const details = plansDetail[activeCategory];

  const renderPlans = () => {
    return details.map((plan, index) => (
      <Plan key={index} planDetails={plan} />
    ));
  };

  return <ul className="plans">{renderPlans()}</ul>;
};

export default Plans;
