import React from "react";
import { Row, Col } from "reactstrap";
export const Tab = props => /*#__PURE__*/React.createElement("span", props, props.children);
export default class Tabs extends React.Component {
  render() {
    const {
      children,
      active,
      onToggle
    } = this.props;
    return /*#__PURE__*/React.createElement(Row, {
      className: "my-4"
    }, /*#__PURE__*/React.createElement(Col, {
      xs: "12",
      sm: "4",
      md: "3",
      lg: "3"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "tab-sidebar"
    }, React.Children.map(children, (child, key) => {
      return /*#__PURE__*/React.createElement("li", {
        key: key,
        className: child.props.id === active ? "active" : "",
        onClick: () => onToggle(child.props.id)
      }, child.props.title, " ", /*#__PURE__*/React.createElement("i", {
        className: "fa fa-angle-right"
      }));
    }))), /*#__PURE__*/React.createElement(Col, {
      xs: "12",
      sm: "8",
      md: "9",
      lg: "9"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tab-content"
    }, React.Children.map(children, child => child.props.id === active && child))));
  }

}