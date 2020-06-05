import React from "react";
import PropTypes from "prop-types";
import { Label } from "reactstrap";

class LabelComponent extends React.Component {
  render() {
    const {
      id,
      children,
      notify
    } = this.props;
    return /*#__PURE__*/React.createElement(Label, {
      for: id
    }, children, notify && /*#__PURE__*/React.createElement("span", {
      className: "text-danger ml-1"
    }, "*"));
  }

}

LabelComponent.propTypes = {
  id: PropTypes.string,
  notify: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
export default LabelComponent;