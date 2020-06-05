import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormGroup, Input, FormFeedback } from "reactstrap";
import Label from "./Label";

class Radio extends React.Component {
  validate(value) {
    const { label, placeholder, required } = this.props;

    let errorMessage;
    let inputLabel = label || placeholder;

    if ((!value || !value.trim()) && required) {
      errorMessage = inputLabel ? `${inputLabel} is required` : "Required";
    }

    return errorMessage;
  }

  renderInput({ field, form: { touched, errors, values } }) {
    const { name, id, label, notify, options, onRender } = this.props;

    const errorMessage = touched[name] && errors[name] ? errors[name] : null;
    const inputId = id || name;

    const fieldInput = (
      <FormGroup style={{ marginBottom: 22, position: "relative" }}>
        {label && (
          <Label id={inputId} notify={notify}>
            {label}
          </Label>
        )}

        {options.map((option, key) => (
          <FormGroup check key={key}>
            <Label check>
              <Input
                type="radio"
                {...field}
                name={inputId}
                defaultChecked={field.value === option.value}
                value={option.value}
              />
              {option.label}
            </Label>
          </FormGroup>
        ))}

        {errorMessage && (
          <FormFeedback style={{ position: "absolute", marginTop: 1 }}>
            {errorMessage}
          </FormFeedback>
        )}
      </FormGroup>
    );

    if (!onRender) {
      return fieldInput;
    }

    return onRender(values, (err, render) => (render ? fieldInput : null));
  }

  render() {
    const { name } = this.props;

    return (
      <Field
        validate={this.validate.bind(this)}
        name={name}
        render={this.renderInput.bind(this)}
      />
    );
  }
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  )
};

export default Radio;
