import * as React from "react";
import { ShoppingCartStrings } from "../assets/strings";

export default class ItemName extends React.PureComponent {
  deleteItemFromCart = () => {
    this.props.handleDeleteItemFromCart(this.props.id);
  };

  render() {
    return (
      <div
        style={{ border: "1px solid black", padding: "5px", height: "40px" }}
      >
        <img
          style={{ float: "left" }}
          src={this.props.image}
          alt={ShoppingCartStrings.ItemImageAltText}
        />
        <span style={{ lineHeight: "40px", float: "left", marginLeft: "8px" }}>
          {this.props.itemName}
        </span>
        <button
          style={{
            float: "right",
            marginTop: "10px",
            border: "none",
            backgroundColor: "white",
            cursor: "pointer"
          }}
          onClick={this.deleteItemFromCart}
        >
          {ShoppingCartStrings.DeleteItemButtonText}
        </button>
      </div>
    );
  }
}
