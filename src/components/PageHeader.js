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
    return (
      <div className="page-header">
        <Breadcrumb
          links={[{ title, link: href }, { title: subTitle, link: subLink }]}
        />
        <h5>
          {title}
          {onUpdateClick && (
            <UpdateButton
              className="float-right btn-sm"
              onClick={onUpdateClick}
              style={{ marginTop: -20, marginRight: 10 }}
            />
          )}
          {onAddClick && (
            <AddButton
              className="float-right btn-sm"
              onClick={onAddClick}
              style={{ marginTop: -20, marginRight: 10 }}
            />
          )}
        </h5>
      </div>
    );
  }
}

export default PageHeader;
