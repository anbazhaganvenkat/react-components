import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Email extends React.Component {
  render() {
    const {
      email,
      className,
      linkClassName
    } = this.props;

    if (!email) {
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
      icon: faEnvelope
    })), /*#__PURE__*/React.createElement("a", {
      className: linkClassName,
      href: `mailto:${email}`
    }, email));
  }

}

Email.propTypes = {
  email: PropTypes.string,
  className: PropTypes.string,
  linkClassName: PropTypes.string
};
export default Email;