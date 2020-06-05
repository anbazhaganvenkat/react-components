import React from "react";
import PropTypes from "prop-types";

import { Button } from "reactstrap";

class CancelButton extends React.Component {
  render() {
    const { onClick, className, style } = this.props;

    return (
      <Button
        outline
        onClick={onClick}
        type="button"
        className={className}
        style={style}
      >
        Cancel
      </Button>
    );
  }
}

CancelButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};

export default CancelButton;
