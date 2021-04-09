import React from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

export class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </>
    );
  }
}
