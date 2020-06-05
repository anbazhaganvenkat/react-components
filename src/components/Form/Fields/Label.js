import React from "react";
import PropTypes from "prop-types";
import { Label } from "reactstrap";

class LabelComponent extends React.Component {
  render() {
    const { id, children, notify } = this.props;

    return (
      <Label for={id}>
        {children}
        {notify && <span className="text-danger ml-1">*</span>}
      </Label>
    );
  }
}

LabelComponent.propTypes = {
  id: PropTypes.string,
  notify: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default LabelComponent;
