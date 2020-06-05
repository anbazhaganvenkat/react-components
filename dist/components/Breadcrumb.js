import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component {
  render() {
    const {
      links
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      className: "header"
    }, /*#__PURE__*/React.createElement(Link, {
      to: "/"
    }, "Home"), links.map((link, key) => link.link && link.title && /*#__PURE__*/React.createElement("span", {
      key: key
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-chevron-right breadcrumb-divider"
    }), /*#__PURE__*/React.createElement(Link, {
      to: link.link
    }, link.title))));
  }

}

export default Breadcrumb;