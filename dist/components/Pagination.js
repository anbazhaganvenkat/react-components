import React from "react";
import ReactPagination from "react-js-pagination";

class Pagination extends React.Component {
  render() {
    const {
      currentPage,
      totalCount,
      pageSize,
      onPageChange
    } = this.props;
    return /*#__PURE__*/React.createElement(ReactPagination, {
      activePage: currentPage,
      firstPageText: /*#__PURE__*/React.createElement("i", {
        className: "fa fa-angle-double-left"
      }),
      lastPageText: /*#__PURE__*/React.createElement("i", {
        className: "fa fa-angle-double-right"
      }),
      prevPageText: /*#__PURE__*/React.createElement("i", {
        className: "fa fa-angle-left"
      }),
      nextPageText: /*#__PURE__*/React.createElement("i", {
        className: "fa fa-angle-right"
      }),
      totalItemsCount: totalCount,
      itemsCountPerPage: pageSize,
      innerClass: "pagination justify-content-end",
      itemClass: "page-item",
      linkClass: "page-link",
      onChange: page => onPageChange(page)
    });
  }

}

export default Pagination;