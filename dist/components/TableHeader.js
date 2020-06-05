import React from "react";
import { Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

class TableHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: props.search
    };
  }

  render() {
    const {
      search
    } = this.state;
    const {
      pageSize,
      onPageSizeChange,
      onSearch
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      className: "table-header"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "select",
      defaultValue: pageSize,
      onChange: e => onPageSizeChange(e.target.value)
    }, /*#__PURE__*/React.createElement("option", {
      value: "25"
    }, "25"), /*#__PURE__*/React.createElement("option", {
      value: "50"
    }, "50"), /*#__PURE__*/React.createElement("option", {
      value: "100"
    }, "100"), /*#__PURE__*/React.createElement("option", {
      value: "200"
    }, "200")), /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        onSearch(search);
        e.preventDefault();
      }
    }, /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(InputGroupAddon, {
      addonType: "append"
    }, /*#__PURE__*/React.createElement(Button, {
      color: "primary",
      type: "submit"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-search"
    }))), /*#__PURE__*/React.createElement(Input, {
      name: "search",
      placeholder: "Search",
      value: search,
      onChange: e => this.setState({
        search: e.target.value
      })
    }))));
  }

}

export default TableHeader;