function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormGroup, Input, FormFeedback } from "reactstrap";
import Label from "./Label";

class File extends React.Component {
  validate(value) {
    const {
      label,
      required
    } = this.props;
    let errorMessage;
    let inputLabel = label;

    if ((!value || !value.trim()) && required) {
      errorMessage = inputLabel ? `${inputLabel} is required` : "Required";
    }

    return errorMessage;
  }

  renderInput({
    field,
    form: {
      touched,
      errors,
      setFieldValue
    }
  }) {
    const {
      name,
      id,
      label,
      notify,
      onChange
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
    }, label), /*#__PURE__*/React.createElement(Input, _extends({
      id: inputId
    }, field, {
      type: "file",
      invalid: !!errorMessage,
      onChange: e => {
        if (onChange) {
          onChange(e, setFieldValue);
        }

        field.onChange(e);
      }
    })), errorMessage && /*#__PURE__*/React.createElement(FormFeedback, {
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

File.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool
};
export default File;