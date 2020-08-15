import React, { useState, Fragment } from "react";
import "./Plan.scss";
import ActivationModal from "./ActivationModal";

const PricingCard = (props) => {
  const { planDetails = {}, contactUsCard = false } = props;
  const [showActivationModal, setShowActivationModal] = useState(false);

  const isPopular = planDetails.isPopular;

  const handleActivation = (formData) => {
    console.log(formData);
    alert(JSON.stringify(formData));
    setShowActivationModal(false);
  };

  const renderPricingCard = () => (
    <Fragment>
      {isPopular ? (
        <div className="plan--most-popular consistent-padding">
          Most Popular!
        </div>
      ) : (
        ""
      )}
      <div className="plan__name consistent-padding">
        {planDetails.plan_name}
      </div>
      <div className="plan__price-per-lead">
        <h1>{planDetails.price_per_live_transfer}</h1>
        <p>Per Qualified Lead</p>
      </div>
      <div className="plan__leads-per-month">
        <p>Qualified Leads Per Month</p>
        <span>{planDetails.qualified_leads_per_month}</span>
      </div>
      <div className="plan__platform-per-month">
        <p>Platform Fee Per Month</p>
        <span>{planDetails.total_platform_price}</span>
      </div>
      <h4 className="plan__total consistent-padding">{`${planDetails.total_qualified_lead_price}/mo`}</h4>
      <button
        className={`consistent-padding${
          isPopular ? " plan--most-popular" : ""
        }`}
        onClick={() => setShowActivationModal(true)}
      >
        Start Your Trial
      </button>
    </Fragment>
  );

  const renderContactUsCard = () => (
    <Fragment>
      <div className="plan__name consistent-padding">
        {planDetails.plan_name}
      </div>
      <div className="consistent-padding">
        <h3>Want more than 80 qualified leads each month?</h3>
      </div>
      <button
        className={"consistent-padding"}
        onClick={() => setShowActivationModal(true)}
      >
        Get In Touch
      </button>
    </Fragment>
  );
  return (
    <div className={`plan ${contactUsCard ? "plan__more" : ""}`}>
      {showActivationModal && (
        <ActivationModal
          height="fit-content"
          width="530px"
          successButton="Submit"
          heading="Get Started with SquadVoice"
          planName={planDetails.plan_name}
          onDismiss={() => setShowActivationModal(false)}
          onSuccess={handleActivation}
        />
      )}
      {contactUsCard ? renderContactUsCard() : renderPricingCard()}
    </div>
  );
};

export default PricingCard;
