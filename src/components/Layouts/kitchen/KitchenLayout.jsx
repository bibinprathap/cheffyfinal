import React from "react";
import KitchenHeader from "./KitchenHeader";
import KitchenFooter from "./KitchenFooter";

export class KitchenLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <KitchenHeader />
        <div className="mx-auto">{children}</div>
        <KitchenFooter />
      </>
    );
  }
}
