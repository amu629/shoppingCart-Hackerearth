import * as React from "react";
import "./BillSummary.css";
import { ShoppingCartStrings } from "../assets/strings";

const itemTypeDiscountValue = 15;

export default class BillSummary extends React.PureComponent {
  calculateDiscountPerItem = () => {
    var totalDiscount = 0;
    var totalPrice = 0;
    var typeDiscount = 0;
    this.props.itemList.forEach((item) => {
      totalDiscount =
        totalDiscount +
        (item.price * item.quantity * item.discount) / 100;
      totalPrice = totalPrice + (item.price * item.quantity);
      if (item.type === ShoppingCartStrings.FictionTypeItem ) {
        typeDiscount =
          typeDiscount + (item.price * item.quantity * itemTypeDiscountValue) / 100;
      }
    });

    return {
      displayPrice: totalPrice,
      displayDiscount: totalDiscount,
      displayTypeDiscount: typeDiscount,
    };
  };

  render() {
    const { displayPrice, displayDiscount, displayTypeDiscount } =
      this.calculateDiscountPerItem();
    const finalPrice = displayPrice - displayDiscount - displayTypeDiscount;
    const itemsDisplayText =
      ShoppingCartStrings.BillTotalTitleText +
      "(" +
      this.props.displayQuantity +
      "):";
    const displayPriceWithoutDiscount = ShoppingCartStrings.PriceUnitSymbol + displayPrice;
    const displayTotalDiscount = ShoppingCartStrings.PriceUnitSymbol + displayDiscount;
    const displayTotalTypeDiscount = ShoppingCartStrings.PriceUnitSymbol + displayTypeDiscount;
    const displayFinalPriceWithDiscount = ShoppingCartStrings.PriceUnitSymbol + finalPrice;

    return (
      <div className="billParentClass">
        <div className="priceDetailsClass">
          <p>
            <strong>{ShoppingCartStrings.BillTotalTitleText}</strong>
          </p>
          <p>
            {itemsDisplayText}
            <span className="finalPriceValueClass">
              {displayPriceWithoutDiscount}
            </span>
          </p>
          {ShoppingCartStrings.TotalDiscountText}
          <span className="finalPriceValueClass">{displayTotalDiscount}</span>
          <br />
          {ShoppingCartStrings.TotalTypeDiscountText}
          <span className="finalPriceValueClass">
            {displayTotalTypeDiscount}
          </span>
          <br />
        </div>
        <div className="finalBillPriceClass">
          <strong> {ShoppingCartStrings.TotalOrderText} </strong>
          <span className="finalPriceValueClass" style={{ color: "black" }}>
            <b>{displayFinalPriceWithDiscount}</b>
          </span>
        </div>
      </div>
    );
  }
}
