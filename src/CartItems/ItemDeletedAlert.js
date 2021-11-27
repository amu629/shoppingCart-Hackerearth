import * as React from "react";
import "./ItemDeletedAlert.css";
import { ShoppingCartStrings } from "../assets/strings";

export default class ItemDeletedAlert extends React.PureComponent {
  render() {
      const itemRemovedDetail = this.props.deletedItemName + ShoppingCartStrings.ItemRemovedText;
      return(
          <>
            <div className="backdrop"></div>
            <div className="itemRemovedAlertClass">
              <span
                className="alertCloseButtonClass"
                onClick={this.props.handleAlertClose}
              >
                {ShoppingCartStrings.DeleteItemButtonText}
              </span>
              {itemRemovedDetail}
            </div>
          </>
      )
  }
}
