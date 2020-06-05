import React from "react";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

class MultiSelect extends React.Component {
  render() {
    const {
      selected,
      options,
      onChange,
      name
    } = this.props;
    const styles = {
      container: style => {
        return Object.assign({}, style, {
          border: "1px solid #ccc",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.08)"
        });
      },
      control: style => {
        return Object.assign({}, style, {
          right: 0,
          left: 0,
          marginTop: 10
        });
      },
      menuList: style => {
        return Object.assign({}, style, {
          padding: 0,
          maxHeight: 250
        });
      },
      option: style => {
        return Object.assign({}, style, {
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden"
        });
      },
      dropdownButton: style => {
        return Object.assign({}, style, {
          width: "100%",
          border: "0.5px solid #ccc"
        });
      }
    };
    const value = selected && selected.length > 0 ? selected.sort().map(value => options.find(option => option.value === value)) : [];
    return /*#__PURE__*/React.createElement("div", {
      className: "multiSelectInput"
    }, /*#__PURE__*/React.createElement(ReactMultiSelectCheckboxes, {
      styles: styles,
      hideSearch: true,
      value: value,
      options: options,
      onChange: values => onChange(name, values.sort().map(selectedValue => selectedValue.value))
    }));
  }

}

export default MultiSelect;