import React from "react";
import { useForm } from "react-hook-form";
import Modal from "../../../../../components/Modal";
import { activationFormJSON } from "../../../../../utils/constants";
import "./ActivationModal.scss";

const ActivationModal = (props) => {
  const { height, width, heading, planName, onDismiss, onSuccess } = props;
  const { register, handleSubmit } = useForm();

  const renderForm = () => {
    return activationFormJSON.map((field) => {
      switch (field.type) {
        case "select":
          const renderOptions = () => {
            return field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ));
          };

          return (
            <label
              key={field.formName}
              style={+field.columns === 2 ? { gridColumn: "1/3" } : {}}
              className="activationModal__form__label"
            >
              <span>{field.name}</span>
              <select
                type={field.type}
                ref={register}
                name={field.formName}
                required={!!field.isRequired}
                defaultValue={field.defaultValue}
              >
                {renderOptions()}
              </select>
            </label>
          );

        case "checkboxGroup":
          const renderCheckboxes = (formName) => {
            return field.options.map((option) => (
              <label key={option.formName}>
                <input
                  type="checkbox"
                  ref={register}
                  name={`${formName}.${option.formName}`}
                />
                <span>{option.name}</span>
              </label>
            ));
          };
          return (
            <div
              key={field.formName}
              className="activationModal__form__label"
              style={+field.columns === 2 ? { gridColumn: "1/3" } : {}}
            >
              <span>{field.name}</span>
              <div>{renderCheckboxes(field.formName)}</div>
            </div>
          );

        default:
          return (
            <label
              key={field.formName}
              style={+field.columns === 2 ? { gridColumn: "1/3" } : {}}
              className="activationModal__form__label"
            >
              <span>{field.name}</span>
              <input
                type={field.type}
                ref={register}
                name={field.formName}
                required={!!field.isRequired}
                defaultValue={field.defaultValue}
              />
            </label>
          );
      }
    });
  };

  return (
    <Modal height={height} width={width} onDismiss={onDismiss}>
      <div className="activationModal">
        <div className="activationModal__info">
          <div className="activationModal__close" onClick={onDismiss}>
            &#10005;
          </div>
          <h2>{heading}</h2>
          <div>
            <strong>Plan Selected: </strong>
            {planName}
          </div>
        </div>
        <form
          className="activationModal__form"
          onSubmit={handleSubmit(onSuccess)}
        >
          {renderForm()}
          <div className="activationModal__button-group">
            <button>{props.successButton}</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ActivationModal;
