import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormGroup, FormFeedback } from "reactstrap";
import NumberFormat from "react-number-format";
import Label from "./Label";

class Number extends React.Component {
  validate(value) {
    const {
      label,
      placeholder,
      required
    } = this.props;
    let errorMessage;
    let inputLabel = label || placeholder;

    if (!value && required) {
      errorMessage = inputLabel ? `${inputLabel} is required` : "Required";
    }

    return errorMessage;
  }

  renderInput({
    field,
    form: {
      touched,
      errors,
      setFieldValue,
      values
    }
  }) {
    const {
      name,
      id,
      label,
      placeholder,
      onInputChange,
      notify
    } = this.props;
    const errorMessage = touched[name] && errors[name] ? errors[name] : null;
    const inputId = id || name;
    return /*#__PURE__*/React.createElement(FormGroup, {
      style: {
        marginBottom: 22,
        position: "relative"
      }
    }, label && /*#__PURE__*/React.createElement(Label, {
      id: inputId,
      notify: notify
    }, label), /*#__PURE__*/React.createElement(NumberFormat, {
      defaultValue: field.value,
      value: field.value,
      id: inputId,
      placeholder: placeholder || label,
      className: `form-control ${errorMessage ? "is-invalid" : ""}`,
      onValueChange: value => {
        setFieldValue(name, value.value);

        if (onInputChange) {
          values[name] = value.value;
          onInputChange({
            setFieldValue,
            values
          });
        }
      }
    }), errorMessage && /*#__PURE__*/React.createElement(FormFeedback, {
      style: {
        position: "absolute",
        marginTop: 1
      }
    }, errorMessage));
  }

  render() {
    const {
      name
    } = this.props;
    return /*#__PURE__*/React.createElement(Field, {
      validate: this.validate.bind(this),
      name: name,
      render: this.renderInput.bind(this)
    });
  }

}

Number.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onInputChange: PropTypes.func
};
export default Number;