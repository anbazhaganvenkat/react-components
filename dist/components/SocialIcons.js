import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class SocialIcons extends React.Component {
  render() {
    const {
      facebook,
      twitter,
      linkedIn,
      className
    } = this.props;

    if (!facebook && !twitter && !linkedIn) {
      return null;
    }

    const socialIcons = [];

    if (facebook) {
      socialIcons.push({
        icon: faFacebookSquare,
        color: "#3B5998",
        href: facebook
      });
    }

    if (twitter) {
      socialIcons.push({
        icon: faTwitterSquare,
        color: "#00ACED",
        href: twitter
      });
    }

    if (linkedIn) {
      socialIcons.push({
        icon: faLinkedin,
        color: "#4875B4",
        href: linkedIn
      });
    }

    return /*#__PURE__*/React.createElement("div", {
      className: className || ""
    }, socialIcons.map((socialIcon, key) => /*#__PURE__*/React.createElement("div", {
      key: key,
      className: "float-left",
      style: {
        fontSize: 24,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 0,
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: socialIcon.href,
      style: {
        color: socialIcon.color
      },
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: socialIcon.icon
    })))));
  }

}

SocialIcons.propTypes = {
  className: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  linkedIn: PropTypes.string
};
export default SocialIcons;