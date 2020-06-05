import React from "react";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { Button } from 'reactstrap';

class FilterMenu extends React.Component {
	render() {
		const { filters, selected, onChange } = this.props;

		const styles = {
			container: (style) => {
				return Object.assign({}, style, {
					border: "1px solid #ccc",
					boxShadow: "0 4px 8px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.08)",
					marginTop: -6
				});
			},

			menuList: (style) => {
				return Object.assign({}, style, {
					padding: 0,
					maxHeight: 250
				});
			},

			option: (style) => {
				return Object.assign({}, style, {
					maxWidth: 240,
					textOverflow: "ellipsis",
					whiteSpace: "nowrap",
					overflow: "hidden"
				});
			}
		};

		const DropdownButton = ({ onPress }) => <Button onClick={onPress} color="primary"><i className="fa fa-ellipsis-v"/></Button>;

		const value = selected && selected.length > 0 ? selected.sort().map((value) => filters.find((option) => option.value === value)) : [];

		return (
			<ReactMultiSelectCheckboxes
				rightAligned={true}
				styles={styles}
				components={{ DropdownButton }}
				hideSearch={true}
				options={filters}
				value={value}
				onChange={(values) => onChange(values.sort().map((selectedValue) => selectedValue.value))}
			/>
		);
	}
}

export default FilterMenu;
