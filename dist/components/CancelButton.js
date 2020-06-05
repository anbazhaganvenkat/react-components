import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

class CancelButton extends React.Component {
  render() {
    const {
      onClick,
      className,
      style
    } = this.props;
    return /*#__PURE__*/React.createElement(Button, {
      outline: true,
      onClick: onClick,
      type: "button",
      className: className,
      style: style
    }, "Cancel");
  }

}

CancelButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};
export default CancelButton;