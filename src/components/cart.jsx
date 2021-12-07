import React, { Component, useState } from "react";
import Counter from "./counter";

function Cart() {
  const [items, setItems] = useState([
    { id: 1, itemName: "HDMI-Kabel" },
    { id: 2, itemName: "C-Kabel" },
    { id: 3, itemName: "USB-Kabel" },
    { id: 4, itemName: "Lightning-Kabel" },
  ]);

  const handleAdd = () => {
    setItems([...items, { id: items.length, itemName: items.length }]);
  };

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div>
      <h1>Your Shopping Cart!</h1>
      <input
        type="item"
        class="form-control"
        id="itemInput"
        placeholder="New Item"
      />
      <button className="btn btn-primary m-1" onClick={handleAdd}>
        Add Item
      </button>
      <button className="btn btn-primary m-1" onClick={handleClear}>
        Clear List
      </button>
      <ol>
        {items.map((item) => (
          <Counter key={item} name={item.itemName} />
        ))}
      </ol>
    </div>
  );
}

export default Cart;
