import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Email extends React.Component {
  render() {
    const { email, className, linkClassName } = this.props;

    if (!email) {
      return null;
    }

    return (
      <div className={className}>
        <span style={{ width: 25 }} className="d-inline-block">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <a className={linkClassName} href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    );
  }
}

Email.propTypes = {
  email: PropTypes.string,
  className: PropTypes.string,
  linkClassName: PropTypes.string
};

export default Email;
