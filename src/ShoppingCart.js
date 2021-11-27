import * as React from "react";
import "./ShoppingCart.css";
import BillSummary from "./Billing/BillSummary";
import ItemsList from "./CartItems/ItemsList";
import ItemDeletedAlert from "./CartItems/ItemDeletedAlert";
import { Data } from "./assets/data";
import { ShoppingCartStrings } from "./assets/strings";

export default class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCartData: this.parseShoppingCartData(),
      displayQuantity: Data.length,
      showItemRemovedAlert: false,
      deletedItemName: ""
    };
  }

  handleReload = () => {
  };

  parseShoppingCartData = () => {
    var itemList = [];
    Data.map((item) => {
      itemList.push({
        id: item.id,
        image: item.image_url,
        name: item.name,
        quantity: 1,
        price: item.price,
        discount: item.discount,
        type: item.type,
      });
    });

    return itemList;
  };

  handleDecreaseItemQuantity = (itemId) => {
  };

  handleIncreaseItemQuantity = (itemId) => {
  };

  handleDeleteItemFromCart = (itemId) => {
  };

  handleAlertClose = () => {
  };

  render() {
    return (
      <>
        {this.state.showItemRemovedAlert && (
          <ItemDeletedAlert handleAlertClose={this.handleAlertClose} deletedItemName={this.state.deletedItemName}/>
        )}

        {this.state.displayQuantity === 0 && (
          <button
            onClick={this.handleReload}
          >
            {ShoppingCartStrings.ReloadText}
          </button>
        )}

        <h2>{ShoppingCartStrings.OrderSummaryText}</h2>

        <div className="shoppingCartDetailsClass">
          <ItemsList
            displayQuantity={this.state.displayQuantity}
            itemList={this.state.shoppingCartData}
            handleDecreaseItemQuantity={this.handleDecreaseItemQuantity}
            handleIncreaseItemQuantity={this.handleIncreaseItemQuantity}
            handleDeleteItemFromCart={this.handleDeleteItemFromCart}
          />
          <BillSummary
            displayQuantity={this.state.displayQuantity}
            itemList={this.state.shoppingCartData}
          />
        </div>
      </>
    );
  }
}
