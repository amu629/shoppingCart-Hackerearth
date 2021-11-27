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
    this.setState({
      shoppingCartData: this.parseShoppingCartData(),
      displayQuantity: Data.length,
      showItemRemovedAlert: false,
      deletedItemName: ""
    });
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
    var newItemList = [];
    this.state.shoppingCartData.forEach((el) => {
      if (el.id === itemId) {
        el.quantity = el.quantity - 1;
      }

      newItemList.push(el);
    });
    this.setState({
      shoppingCartData: newItemList,
      displayQuantity: this.state.displayQuantity - 1,
    });
  };

  handleIncreaseItemQuantity = (itemId) => {
    var newItemList = [];
    this.state.shoppingCartData.forEach((shoppingCartItem) => {
      if (shoppingCartItem.id === itemId) {
        shoppingCartItem.quantity = shoppingCartItem.quantity + 1;
      }

      newItemList.push(shoppingCartItem);
    });
    this.setState({
      shoppingCartData: newItemList,
      displayQuantity: this.state.displayQuantity + 1,
    });
  };

  handleDeleteItemFromCart = (itemId) => {
    var newItemList = [];
    var deletedItemQuantity = 0;
    var deletedItemName = "";
    this.state.shoppingCartData.forEach((shoppingCartItem) => {
      if (shoppingCartItem.id !== itemId) {
        newItemList.push(shoppingCartItem);
      } else {
        deletedItemQuantity = shoppingCartItem.quantity;
        deletedItemName = shoppingCartItem.name;
      }
    });
    this.setState({
      shoppingCartData: newItemList,
      displayQuantity: this.state.displayQuantity - deletedItemQuantity,
      showItemRemovedAlert: true,
      deletedItemName: deletedItemName
    });
  };

  handleAlertClose = () => {
    this.setState({
      showItemRemovedAlert: false,
      deletedItemName: ""
    });
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
            style={{
              padding: "10px 20px",
              backgroundColor: "powderblue",
              border: "1px solid",
              borderRadius: "4px",
              cursor: "pointer"
            }}
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
