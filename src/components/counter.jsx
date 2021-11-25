import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    itemName: this.props.name,
    quantity: 1,
  };

  handleIncrement = (operation) => {
    let newCount =
      operation === "+" ? this.state.quantity + 1 : this.state.quantity - 1;
    this.setState({
      quantity: newCount,
    });
  };

  renderQuantity = () => {
    const { quantity } = this.state;
    return quantity === 0 ? "Empty" : quantity;
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary m-1"
          onClick={() => this.handleIncrement("+")}
        >
          +
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => this.handleIncrement("-")}
          disabled={this.state.quantity === 0}
        >
          -
        </button>
        <strong style={{ fontSize: 20 }} className="m-2">
          {this.state.itemName + ":"}
        </strong>
        <strong
          style={{ fontSize: 15 }}
          className={
            "m-1 badge badge-" +
            (this.state.quantity === 0 ? "warning" : "success")
          }
        >
          {this.renderQuantity()}
        </strong>
        {this.state.quantity === 0 ? (
          <button
            style={{ fontSize: 15, padding: 2 }}
            className="btn btn-danger"
          >
            Remove
          </button>
        ) : null}
      </div>
    );
  }
}

export default Counter;
