import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

class PhoneNumber extends React.Component {
  render() {
    const {
      phone,
      className,
      linkClassName
    } = this.props;

    if (!phone) {
      return null;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: className
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 25
      },
      className: "d-inline-block"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faPhone,
      rotation: 90
    })), /*#__PURE__*/React.createElement("a", {
      className: linkClassName,
      href: `tel:${phone}`
    }, phone));
  }

}

PhoneNumber.propTypes = {
  phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  linkClassName: PropTypes.string
};
export default PhoneNumber;