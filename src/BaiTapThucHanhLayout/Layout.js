import React, { Component } from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
