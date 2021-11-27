import * as React from "react";
import Quantity from "./Quantity";
import ItemName from "./ItemName";
import "./ItemsList.css";
import { ShoppingCartStrings } from "../assets/strings";

export default class ItemsList extends React.PureComponent {
  renderItemsInShoppingCart = () => {
    const itemArray = [];
    itemArray.push(
      <tr>
        <th>{ShoppingCartStrings.ItemsTitleText}({this.props.displayQuantity})</th>
        <th>{ShoppingCartStrings.QuantityTitleText}</th>
        <th>{ShoppingCartStrings.PriceTitleText}</th>
      </tr>
    );

    this.props.itemList.forEach((item) => {
      itemArray.push(
        <tr>
          <td>
            <ItemName
              image={item.image}
              itemName={item.name}
              id={item.id}
              handleDeleteItemFromCart={this.props.handleDeleteItemFromCart}
            />
          </td>
          <td>
            <Quantity
              quantity={item.quantity}
              id={item.id}
              handleDecreaseItemQuantity={this.props.handleDecreaseItemQuantity}
              handleIncreaseItemQuantity={this.props.handleIncreaseItemQuantity}
            />
          </td>
          <td>{ShoppingCartStrings.PriceUnitSymbol}{item.price}</td>
        </tr>
      );
    });

    return <table>{itemArray}</table>;
  };

  render() {
    return <div class="shoppingCartItemsClass">{this.renderItemsInShoppingCart()}</div>;
  }
}
