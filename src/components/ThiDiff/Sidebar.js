import React from "react";
import PropTypes from "prop-types";
import icon from "../../assets/thidiff-icon.png";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  UncontrolledTooltip
} from "reactstrap";

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

  ${props =>
    props.active === "true" &&
    `
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
    const { link, children, tooltip, currentPath, id } = this.props;
    return (
      <div>
        <SidebarNavItemStyle
          as={Link}
          to={link || "#"}
          id={id && `nav-${id}`}
          active={currentPath && currentPath === link ? "true" : "false"}
        >
          {children}
        </SidebarNavItemStyle>
        {tooltip && id && (
          <UncontrolledTooltip placement="right" target={`nav-${id}`}>
            {tooltip}
          </UncontrolledTooltip>
        )}
      </div>
    );
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
    const appLinks = [
      {
        name: "Wiki",
        link: "http://wiki.thidiff.com"
      },
      {
        name: "Accounts",
        link: "http://accounts.thidiff.com"
      },
      {
        name: "Tickets",
        link: "http://tracker.thidiff.com"
      }
    ];

    return (
      <SidebarContainer className="sidebar-element">
        <SidebarNavItem link="/" currentPath={currentPath}>
          <img src={icon} alt="logo" style={{ height: 24, width: 24 }} />
        </SidebarNavItem>

        {children}

        <SidebarFooter>
          <SidebarNavItem id="categories-component">
            <i className="fas fa-ellipsis-v" />
            <i className="fas fa-ellipsis-v" />
            <i className="fas fa-ellipsis-v" />
          </SidebarNavItem>

          <UserPopOver
            as={UncontrolledPopover}
            trigger="hover"
            hideArrow={true}
            placement="right"
            delay={100}
            target="nav-categories-component"
            boundariesElement={
              document.getElementsByClassName("sidebar-element")[0]
            }
          >
            <UserPopOverHeader as={PopoverHeader}>Switch to</UserPopOverHeader>
            <UserPopOverBody as={PopoverBody}>
              <UserPopOverList>
                {appLinks.map(
                  (appLink, key) =>
                    appLink.name !== appName && (
                      <li key={key}>
                        <UserPopOverLink href={appLink.link} target="_blank">
                          {appLink.name}
                        </UserPopOverLink>
                      </li>
                    )
                )}
              </UserPopOverList>
            </UserPopOverBody>
          </UserPopOver>

          {firstName && (
            <div>
              <UserNavToggle id="userNavComponent">
                <Avatar
                  customSize={40}
                  url={profilePhoto}
                  firstName={firstName}
                  lastName={lastName}
                />
              </UserNavToggle>
              <UserPopOver
                as={UncontrolledPopover}
                trigger="hover"
                delay={100}
                hideArrow={true}
                placement="right"
                target="userNavComponent"
                boundariesElement={
                  document.getElementsByClassName("sidebar-element")[0]
                }
              >
                <UserPopOverHeader as={PopoverHeader}>
                  {firstName}
                </UserPopOverHeader>
                <UserPopOverBody as={PopoverBody}>
                  <UserPopOverList>
                    <li>
                      <UserPopOverLink href={profileLink} target="_blank">
                        View Profile
                      </UserPopOverLink>
                    </li>
                    <li>
                      <UserPopOverLink
                        as={Link}
                        to="#"
                        onClick={onLogout.bind(this)}
                      >
                        Logout
                      </UserPopOverLink>
                    </li>
                  </UserPopOverList>
                </UserPopOverBody>
              </UserPopOver>
            </div>
          )}
        </SidebarFooter>
      </SidebarContainer>
    );
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
