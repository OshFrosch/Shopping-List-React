import React, { Component } from "react";
import Counter from "./counter";

class Cart extends React.Component {
  state = {
    items: [
      { id: 1, itemName: "HDMI-Kabel" },
      { id: 2, itemName: "C-Kabel" },
      { id: 3, itemName: "USB-Kabel" },
      { id: 4, itemName: "Lightning-Kabel" },
    ],
  };

  handleAdd = () => {
    this.setState({
      items: [
        ...this.state.items,
        { id: this.state.items.length, itemName: this.state.items.length },
      ],
    });
  };

  handleClear = () => {
    this.setState({
      items: [],
    });
  };

  render() {
    return (
      <div>
        <h1>Your Shopping Cart!</h1>
        <input
          type="item"
          class="form-control"
          id="itemInput"
          placeholder="New Item"
        />
        <button className="btn btn-primary m-1" onClick={this.handleAdd}>
          Add Item
        </button>
        <button className="btn btn-primary m-1" onClick={this.handleClear}>
          Clear List
        </button>
        <ol>
          {this.state.items.map((item) => (
            <Counter key={item} name={item.itemName} />
          ))}
        </ol>
      </div>
    );
  }
}

export default Cart;
