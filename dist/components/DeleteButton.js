import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class DeleteButton extends React.Component {
  render() {
    const {
      type,
      onClick,
      loading,
      className,
      style
    } = this.props;
    return /*#__PURE__*/React.createElement(Button, {
      color: "danger",
      disabled: loading,
      onClick: onClick,
      type: type || "button",
      className: className,
      style: style
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faTrashAlt
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 5
      }
    }, loading ? "Deleting..." : "Delete"));
  }

}

DeleteButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};
export default DeleteButton;