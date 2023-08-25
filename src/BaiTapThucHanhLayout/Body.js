import React, { Component } from "react";
import Banner from "./Banner.js";
import Item from "./Item.js";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Item />
      </div>
    );
  }
}
