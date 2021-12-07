import React, { useRef, useState } from "react";
import Counter from "./counter";
const { v4: uuidv4 } = require("uuid");

function Cart() {
  const [items, setItems] = useState([
    { id: 1, itemName: "HDMI-Kabel" },
    { id: 2, itemName: "C-Kabel" },
    { id: 3, itemName: "USB-Kabel" },
    { id: 4, itemName: "Lightning-Kabel" },
  ]);
  const newItemRef = useRef();

  const handleAdd = () => {
    if (newItemRef.current.value) {
      const newItems = items;
      setItems([
        ...newItems,
        { id: uuidv4(), itemName: newItemRef.current.value },
      ]);
      newItemRef.current.value = null;
    }
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => !(item.id === id));
    setItems(newItems);
  };

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div>
      <h1>Your Shopping Cart!</h1>
      <div class="form-group">
        <input ref={newItemRef} class="form-control" placeholder="New Item" />
      </div>
      <button className="btn btn-primary m-1" onClick={handleAdd}>
        Add Item
      </button>
      <button className="btn btn-primary m-1" onClick={handleClear}>
        Clear List
      </button>
      <ol>
        {items.map((item) => (
          <Counter key={item.id} deleteItem={deleteItem} item={item} />
        ))}
      </ol>
    </div>
  );
}

export default Cart;
