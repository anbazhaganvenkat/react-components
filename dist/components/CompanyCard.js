function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";

class CompanyCard extends React.Component {
  render() {
    const {
      name,
      description
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "table"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "table-cell",
        verticalAlign: "middle",
        paddingRight: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, _extends({}, this.props, {
      firstName: name
    }))), (name || description) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "table-cell",
        verticalAlign: "middle"
      }
    }, name && /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 14,
        margin: "0 0 2px"
      }
    }, name), description && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        margin: 0
      },
      className: "text-muted"
    }, description)));
  }

}

CompanyCard.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  defaultUrl: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  square: PropTypes.bool,
  customSize: PropTypes.number
};
export default CompanyCard;