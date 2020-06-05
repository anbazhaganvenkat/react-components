import React from "react";
import Pagination from "./Pagination";
import {
  Row,
  Col,
  Table,
  Input
} from 'reactstrap';
import FilterMenu from './FilterMenu';
import AvatarCard from "./AvatarCard";


class TableComponent extends React.Component {
  render() {
    const { columns, data, totalCount, pageSize, page, onPageChange, onPageSizeChange, headerComponent, selectedFilterColumns, onFilterColumnsChange, onSort, sort, sortDir, onRowClick} = this.props;


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
        headers.push(
          <th
            key={key}
            onClick={() => column.sort ? onSort(column.column) : null}
            style={Object.assign({}, headerStyle, { cursor: column.sort ? "pointer": "default" })}
            className={column.className}
          >
            {column.name} {sort === column.column && <i style={sortStyle} className={`fa fa-arrow-${sortDir === "ASC" ? "down" : "up"}`} />}
          </th>
        );
      }
    });

    return (
      <div>
        <Row className="mb-3">
          <Col lg={1}>
            <div className="level-left page-size-option">
              <Input type="select" name="size" defaultValue={pageSize} onChange={(e) => onPageSizeChange(e.target.value)}>
                {pageSizes.map((pageSize, key) => <option key={key} value={pageSize}>{pageSize}</option>)}
              </Input>
            </div>
          </Col>
          <Col lg={{ offset: 8, size: 3 }} className="text-right">
            {headerComponent}
            <div className="text-left float-right ml-2">
              <FilterMenu filters={columns.filter((column) => column.filter === true).map((column) => ({ label: column.name, value: column.column }))} selected={selectedFilterColumns} onChange={onFilterColumnsChange}/>

          </div>
          </Col>
        </Row>

        <Table bordered responsive>
          <thead className="thead-light">
          <tr>{headers}</tr>
          </thead>
          <tbody>
          {data.length === 0 && <tr><td className="text-center" colSpan={headers.length}>No Results Found</td></tr>}

          {data.map((row, key) => <tr key={key} onClick={() => onRowClick(row)}>
            {columns.map((column, key) => {
              if (selectedFilterColumns.indexOf(column.column) >= 0 || !column.filter) {
                if (column.column === "avatarUrl") {
                  //To render avatar image
                  return( <td key={key} className={column.className}> <AvatarCard
                    firstName={row.firstName}
                    lastName={row.lastName}
                    url={row.avatarUrl}
                    square
                    customSize="70px"
                  /> </td>);
                } else {
                  //To render column values
                  return (<td key={key} className={column.className}>
                    {column.render ? column.render(row[column.column], row) : row[column.column]}
                  </td>);
                }
              }
            })}
          </tr>)}
          </tbody>
        </Table>

        {totalCount > 0 &&
        <Pagination
          currentPage={page}
          pageSize={pageSize}
          totalCount={totalCount}
          onPageChange={onPageChange}
        />
        }
      </div>
    );
  }
}

export default TableComponent;
