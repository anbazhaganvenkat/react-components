import React from "react";
import PropTypes from "prop-types";
import { Formik, Form as FormikForm } from "formik";

class Form extends React.Component {
  render() {
    const {
      initialValues,
      enableReinitialize,
      onSubmit,
      children
    } = this.props;
    return /*#__PURE__*/React.createElement(Formik, {
      initialValues: initialValues,
      enableReinitialize: enableReinitialize,
      onSubmit: values => onSubmit(values)
    }, () => /*#__PURE__*/React.createElement(FormikForm, null, children));
  }

}

Form.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func
};
export default Form;