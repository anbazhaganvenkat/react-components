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
    const { search } = this.state;
    const { pageSize, onPageSizeChange, onSearch } = this.props;
    return (
      <div className="table-header">
        <Input
          type="select"
          defaultValue={pageSize}
          onChange={e => onPageSizeChange(e.target.value)}
        >
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </Input>

        <form
          onSubmit={e => {
            onSearch(search);
            e.preventDefault();
          }}
        >
          <InputGroup>
            <InputGroupAddon addonType="append">
              <Button color="primary" type="submit">
                <i className="fa fa-search" />
              </Button>
            </InputGroupAddon>
            <Input
              name="search"
              placeholder="Search"
              value={search}
              onChange={e => this.setState({ search: e.target.value })}
            />
          </InputGroup>
        </form>
      </div>
    );
  }
}

export default TableHeader;
