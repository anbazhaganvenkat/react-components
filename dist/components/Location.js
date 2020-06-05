import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

class Location extends React.Component {
  static joinArray(value1, value2, joiner = ", ") {
    const array = [];

    if (value1) {
      array.push(value1);
    }

    if (value2) {
      array.push(value2);
    }

    return array.join(joiner);
  }

  render() {
    const {
      address1,
      address2,
      city,
      state,
      zipcode,
      className,
      country
    } = this.props;
    const isAddressProvided = address1 || address2;
    const isRegionProvided = city || state || zipcode || country;

    if (!isAddressProvided && !isRegionProvided) {
      return null;
    }

    let region;

    if (isRegionProvided) {
      region = Location.joinArray(city, Location.joinArray(state, zipcode, " - "));
      region = Location.joinArray(region, country, " ");
    }

    return /*#__PURE__*/React.createElement("div", {
      className: className,
      style: {
        position: "relative",
        paddingLeft: 25
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0
      },
      className: "d-inline-block"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faMapMarker
    })), /*#__PURE__*/React.createElement("div", null, isAddressProvided && /*#__PURE__*/React.createElement("p", {
      className: "m-0"
    }, Location.joinArray(address1, address2)), isRegionProvided && /*#__PURE__*/React.createElement("p", {
      className: "text-muted m-0"
    }, region)));
  }

}

Location.propTypes = {
  address1: PropTypes.string,
  address2: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  country: PropTypes.string,
  className: PropTypes.string
};
export default Location;