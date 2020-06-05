import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { host } from "storybook-host";
import { Location } from "../index";
storiesOf("Location", module).addDecorator(host({
  align: "center middle"
})).add("Location", withInfo()(() => {
  return /*#__PURE__*/React.createElement(Location, {
    address1: "Uma Sree Dream World, B-Block, 6th Floor",
    address2: "Kudlu Gate Junction, Hosur Road",
    city: "Bangalore",
    state: "KA",
    zipcode: "560068",
    country: "India"
  });
})).add("Location with address1", withInfo()(() => {
  return /*#__PURE__*/React.createElement(Location, {
    address1: "Uma Sree Dream World, B-Block, 6th Floor"
  });
})).add("Location with address2", withInfo()(() => {
  return /*#__PURE__*/React.createElement(Location, {
    address2: "Kudlu Gate Junction, Hosur Road"
  });
})).add("Location with address1 and address2", withInfo()(() => {
  return /*#__PURE__*/React.createElement(Location, {
    address1: "Uma Sree Dream World, B-Block, 6th Floor",
    address2: "Kudlu Gate Junction, Hosur Road"
  });
})).add("Location with city", withInfo()(() => {
  return /*#__PURE__*/React.createElement(Location, {
    city: "Bangalore"
  });
})).add("Location with state", withInfo()(() => {
  return /*#__PURE__*/React.createElement(Location, {
    state: "KA"
  });
})).add("Location with zipCode", withInfo()(() => {
  return /*#__PURE__*/React.createElement(Location, {
    zipcode: "560068"
  });
})).add("Location with zipCode", withInfo()(() => {
  return /*#__PURE__*/React.createElement(Location, {
    zipcode: "560068"
  });
})).add("Location with country", withInfo()(() => {
  return /*#__PURE__*/React.createElement(Location, {
    country: "India"
  });
})).add("Location with state and zipCode", withInfo()(() => {
  return /*#__PURE__*/React.createElement(Location, {
    state: "KA",
    zipcode: "560068"
  });
})).add("Location with city, state and zipCode", withInfo()(() => {
  return /*#__PURE__*/React.createElement(Location, {
    city: "Bangalore",
    state: "KA",
    zipcode: "560068"
  });
})).add("Location with city, state, zipCode and country", withInfo()(() => {
  return /*#__PURE__*/React.createElement(Location, {
    city: "Bangalore",
    state: "KA",
    zipcode: "560068",
    country: "India"
  });
}));