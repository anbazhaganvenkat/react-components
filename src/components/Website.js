import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

class Website extends React.Component {
  render() {
    const { website, children, className, linkClassName } = this.props;

    if (!website) {
      return null;
    }

    return (
      <div className={className}>
        <span style={{ width: 25 }} className="d-inline-block">
          <FontAwesomeIcon icon={faGlobe} />
        </span>
        <a href={website} className={linkClassName} target={"_blank"}>
          {children || website}
        </a>
      </div>
    );
  }
}

Website.propTypes = {
  website: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  linkClassName: PropTypes.string
};

export default Website;
