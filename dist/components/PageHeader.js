import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import AddButton from "./AddButton";
import UpdateButton from "./UpdateButton";

class PageHeader extends Component {
  render() {
    const {
      title,
      href,
      subTitle,
      subLink,
      onAddClick,
      onUpdateClick
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      className: "page-header"
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      links: [{
        title,
        link: href
      }, {
        title: subTitle,
        link: subLink
      }]
    }), /*#__PURE__*/React.createElement("h5", null, title, onUpdateClick && /*#__PURE__*/React.createElement(UpdateButton, {
      className: "float-right btn-sm",
      onClick: onUpdateClick,
      style: {
        marginTop: -20,
        marginRight: 10
      }
    }), onAddClick && /*#__PURE__*/React.createElement(AddButton, {
      className: "float-right btn-sm",
      onClick: onAddClick,
      style: {
        marginTop: -20,
        marginRight: 10
      }
    })));
  }

}

export default PageHeader;