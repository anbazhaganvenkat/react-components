import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";

class AvatarCard extends React.Component {
  render() {
    const {
      title,
      firstName,
      lastName
    } = this.props;
    const names = [];

    if (firstName) {
      names.push(firstName);
    }

    if (lastName) {
      names.push(lastName);
    }

    const name = names.join(" ");
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
    }, /*#__PURE__*/React.createElement(Avatar, this.props)), (name || title) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "table-cell",
        verticalAlign: "middle"
      }
    }, name && /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 14,
        margin: "0 0 2px"
      }
    }, name), title && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        margin: 0
      },
      className: "text-muted"
    }, title)));
  }

}

AvatarCard.propTypes = {
  url: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  defaultUrl: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  square: PropTypes.bool,
  customSize: PropTypes.number
};
export default AvatarCard;