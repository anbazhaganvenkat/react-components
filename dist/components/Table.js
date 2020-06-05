import React from "react";
import Pagination from "./Pagination";
import { Row, Col, Table, Input } from 'reactstrap';
import FilterMenu from './FilterMenu';
import AvatarCard from "./AvatarCard";

class TableComponent extends React.Component {
  render() {
    const {
      columns,
      data,
      totalCount,
      pageSize,
      page,
      onPageChange,
      onPageSizeChange,
      headerComponent,
      selectedFilterColumns,
      onFilterColumnsChange,
      onSort,
      sort,
      sortDir,
      onRowClick
    } = this.props;
    const pageSizes = [10, 25, 50, 100];
    const sortStyle = {
      position: "absolute",
      right: 10,
      top: "50%",
      marginTop: -7
    };
    const headerStyle = {
      whiteSpace: "noWrap",
      position: "relative",
      paddingRight: 27
    };
    const headers = [];
    columns.forEach((column, key) => {
      if (selectedFilterColumns.indexOf(column.column) >= 0 || !column.filter) {
        headers.push( /*#__PURE__*/React.createElement("th", {
          key: key,
          onClick: () => column.sort ? onSort(column.column) : null,
          style: Object.assign({}, headerStyle, {
            cursor: column.sort ? "pointer" : "default"
          }),
          className: column.className
        }, column.name, " ", sort === column.column && /*#__PURE__*/React.createElement("i", {
          style: sortStyle,
          className: `fa fa-arrow-${sortDir === "ASC" ? "down" : "up"}`
        })));
      }
    });
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Row, {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement(Col, {
      lg: 1
    }, /*#__PURE__*/React.createElement("div", {
      className: "level-left page-size-option"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "select",
      name: "size",
      defaultValue: pageSize,
      onChange: e => onPageSizeChange(e.target.value)
    }, pageSizes.map((pageSize, key) => /*#__PURE__*/React.createElement("option", {
      key: key,
      value: pageSize
    }, pageSize))))), /*#__PURE__*/React.createElement(Col, {
      lg: {
        offset: 8,
        size: 3
      },
      className: "text-right"
    }, headerComponent, /*#__PURE__*/React.createElement("div", {
      className: "text-left float-right ml-2"
    }, /*#__PURE__*/React.createElement(FilterMenu, {
      filters: columns.filter(column => column.filter === true).map(column => ({
        label: column.name,
        value: column.column
      })),
      selected: selectedFilterColumns,
      onChange: onFilterColumnsChange
    })))), /*#__PURE__*/React.createElement(Table, {
      bordered: true,
      responsive: true
    }, /*#__PURE__*/React.createElement("thead", {
      className: "thead-light"
    }, /*#__PURE__*/React.createElement("tr", null, headers)), /*#__PURE__*/React.createElement("tbody", null, data.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "text-center",
      colSpan: headers.length
    }, "No Results Found")), data.map((row, key) => /*#__PURE__*/React.createElement("tr", {
      key: key,
      onClick: () => onRowClick(row)
    }, columns.map((column, key) => {
      if (selectedFilterColumns.indexOf(column.column) >= 0 || !column.filter) {
        if (column.column === "avatarUrl") {
          //To render avatar image
          return /*#__PURE__*/React.createElement("td", {
            key: key,
            className: column.className
          }, " ", /*#__PURE__*/React.createElement(AvatarCard, {
            firstName: row.firstName,
            lastName: row.lastName,
            url: row.avatarUrl,
            square: true,
            customSize: "70px"
          }), " ");
        } else {
          //To render column values
          return /*#__PURE__*/React.createElement("td", {
            key: key,
            className: column.className
          }, column.render ? column.render(row[column.column], row) : row[column.column]);
        }
      }
    }))))), totalCount > 0 && /*#__PURE__*/React.createElement(Pagination, {
      currentPage: page,
      pageSize: pageSize,
      totalCount: totalCount,
      onPageChange: onPageChange
    }));
  }

}

export default TableComponent;