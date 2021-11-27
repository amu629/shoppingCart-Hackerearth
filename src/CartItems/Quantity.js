import * as React from "react";
import { ShoppingCartStrings } from "../assets/strings";

export default class Quantity extends React.PureComponent {
  decreaseItemQuantity = () => {
    if (this.props.quantity > 1)
      this.props.handleDecreaseItemQuantity(this.props.id);
  };

  increaseItemQuantity = () => {
    this.props.handleIncreaseItemQuantity(this.props.id);
  };

  render() {
    return (
      <>
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            height: "40px",
            cursor: "pointer",
          }}
          onClick={this.decreaseItemQuantity}
        >
          {ShoppingCartStrings.DecreaseQuantityButtonText}
        </button>

        <span style={{ border: "1px solid", padding: "2px 6px" }}>
          {this.props.quantity}
        </span>

        <button
          style={{
            border: "none",
            backgroundColor: "white",
            height: "40px",
            cursor: "pointer",
          }}
          onClick={this.increaseItemQuantity}
        >
          {ShoppingCartStrings.IncreaseQuantityButtonText}
        </button>
      </>
    );
  }
}
