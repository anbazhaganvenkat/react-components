import React from "react";
import PropTypes from "prop-types";
import icon from "../../assets/thidiff-icon.png";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UncontrolledPopover, PopoverHeader, PopoverBody, UncontrolledTooltip } from "reactstrap";
const SidebarContainer = styled.div`
  background-color: #234a8b;
  bottom: 0;
  left: 0;
  position: fixed;
  text-align: center;
  top: 0;
  width: 60px;
  z-index: 1000;
`;
const SidebarNavItemStyle = styled.a`
  border-radius: 50%;
  color: #fff;
  display: block;
  height: 40px;
  line-height: 40px;
  margin: 20px auto 0;
  text-align: center;
  width: 40px;

  ${props => props.active === "true" && `
      color: #fff;
      background-color: #091e42;
      background-color: rgba(9, 30, 66, 0.42);
    `}

  &:hover {
    color: #fff;
    background-color: #091e42;
    background-color: rgba(9, 30, 66, 0.42);
  }
`;
const SidebarFooter = styled.span`
  bottom: 20px;
  cursor: pointer;
  display: inline-block;
  left: 10px;
  position: absolute;
  text-align: center;
`;
const UserNavToggle = styled.span`
  margin-top: 15px;
  display: block;
`;
const UserPopOver = styled.div`
  margin-left: 60px;
`;
const UserPopOverHeader = styled.div`
  color: #6b778c !important;
  font-size: 13px !important;
  padding: 8px 20px !important;
  text-transform: uppercase;
`;
const UserPopOverBody = styled.div`
  padding: 0 !important;
`;
const UserPopOverList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const UserPopOverLink = styled.a`
  border-bottom: 1px solid #ccc;
  color: #42526e;
  display: block;
  min-width: 150px;
  padding: 5px 20px;
  text-decoration: none;

  &:hover {
    background: #4d6ca4;
    color: #fff;
    text-decoration: none;
  }
`;
export class SidebarNavItem extends React.Component {
  render() {
    const {
      link,
      children,
      tooltip,
      currentPath,
      id
    } = this.props;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SidebarNavItemStyle, {
      as: Link,
      to: link || "#",
      id: id && `nav-${id}`,
      active: currentPath && currentPath === link ? "true" : "false"
    }, children), tooltip && id && /*#__PURE__*/React.createElement(UncontrolledTooltip, {
      placement: "right",
      target: `nav-${id}`
    }, tooltip));
  }

}

class Sidebar extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      profilePhoto,
      onLogout,
      children,
      currentPath,
      appName
    } = this.props;
    const profileLink = "http://app.thidiff.com";
    const appLinks = [{
      name: "Wiki",
      link: "http://wiki.thidiff.com"
    }, {
      name: "Accounts",
      link: "http://accounts.thidiff.com"
    }, {
      name: "Tickets",
      link: "http://tracker.thidiff.com"
    }];
    return /*#__PURE__*/React.createElement(SidebarContainer, {
      className: "sidebar-element"
    }, /*#__PURE__*/React.createElement(SidebarNavItem, {
      link: "/",
      currentPath: currentPath
    }, /*#__PURE__*/React.createElement("img", {
      src: icon,
      alt: "logo",
      style: {
        height: 24,
        width: 24
      }
    })), children, /*#__PURE__*/React.createElement(SidebarFooter, null, /*#__PURE__*/React.createElement(SidebarNavItem, {
      id: "categories-component"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-ellipsis-v"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-ellipsis-v"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-ellipsis-v"
    })), /*#__PURE__*/React.createElement(UserPopOver, {
      as: UncontrolledPopover,
      trigger: "hover",
      hideArrow: true,
      placement: "right",
      delay: 100,
      target: "nav-categories-component",
      boundariesElement: document.getElementsByClassName("sidebar-element")[0]
    }, /*#__PURE__*/React.createElement(UserPopOverHeader, {
      as: PopoverHeader
    }, "Switch to"), /*#__PURE__*/React.createElement(UserPopOverBody, {
      as: PopoverBody
    }, /*#__PURE__*/React.createElement(UserPopOverList, null, appLinks.map((appLink, key) => appLink.name !== appName && /*#__PURE__*/React.createElement("li", {
      key: key
    }, /*#__PURE__*/React.createElement(UserPopOverLink, {
      href: appLink.link,
      target: "_blank"
    }, appLink.name)))))), firstName && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(UserNavToggle, {
      id: "userNavComponent"
    }, /*#__PURE__*/React.createElement(Avatar, {
      customSize: 40,
      url: profilePhoto,
      firstName: firstName,
      lastName: lastName
    })), /*#__PURE__*/React.createElement(UserPopOver, {
      as: UncontrolledPopover,
      trigger: "hover",
      delay: 100,
      hideArrow: true,
      placement: "right",
      target: "userNavComponent",
      boundariesElement: document.getElementsByClassName("sidebar-element")[0]
    }, /*#__PURE__*/React.createElement(UserPopOverHeader, {
      as: PopoverHeader
    }, firstName), /*#__PURE__*/React.createElement(UserPopOverBody, {
      as: PopoverBody
    }, /*#__PURE__*/React.createElement(UserPopOverList, null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(UserPopOverLink, {
      href: profileLink,
      target: "_blank"
    }, "View Profile")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(UserPopOverLink, {
      as: Link,
      to: "#",
      onClick: onLogout.bind(this)
    }, "Logout"))))))));
  }

}

Sidebar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profilePhoto: PropTypes.string,
  onLogout: PropTypes.func,
  appName: PropTypes.string,
  children: PropTypes.element,
  currentPath: PropTypes.string
};
export default Sidebar;