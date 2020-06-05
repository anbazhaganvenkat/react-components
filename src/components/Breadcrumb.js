import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component {
  render() {
    const { links } = this.props;
    return (
      <div className="header">
        <Link to="/">Home</Link>
        {links.map(
          (link, key) =>
            link.link &&
            link.title && (
              <span key={key}>
                <i className="fa fa-chevron-right breadcrumb-divider" />
                <Link to={link.link}>{link.title}</Link>
              </span>
            )
        )}
      </div>
    );
  }
}

export default Breadcrumb;
