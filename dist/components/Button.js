import React from "react";
import { Button as ReactButton } from "reactstrap";

class Button extends React.Component {
  render() {
    const {
      size,
      active,
      disabled,
      outline,
      children,
      color,
      type,
      className,
      onClick,
      icon,
      hideTextInMobile,
      block
    } = this.props;
    return /*#__PURE__*/React.createElement(ReactButton, {
      color: color,
      size: size,
      active: active,
      disabled: disabled,
      outline: outline,
      onClick: onClick,
      type: type || "button",
      block: block,
      className: className
    }, icon && /*#__PURE__*/React.createElement("i", {
      className: icon
    }), /*#__PURE__*/React.createElement("span", {
      className: hideTextInMobile ? "d-none d-sm-none d-md-inline-block" : "",
      style: icon ? {
        marginLeft: 5
      } : {}
    }, children));
  }

}

export default Button;