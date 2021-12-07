import React, { useState } from "react";

function Counter({ item, deleteItem }) {
  const [itemName] = useState(item.itemName);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = (operation) => {
    let newCount = operation === "+" ? quantity + 1 : quantity - 1;
    setQuantity(newCount);
  };

  const renderQuantity = () => {
    return quantity === 0 ? "Empty" : quantity;
  };

  const handleDelete = () => {
    deleteItem(item.id);
  };

  return (
    <div>
      <button
        className="btn btn-primary m-1"
        onClick={() => handleIncrement("+")}
      >
        +
      </button>
      <button
        className="btn btn-primary m-1"
        onClick={() => handleIncrement("-")}
        disabled={quantity === 0}
      >
        -
      </button>
      <strong style={{ fontSize: 20 }} className="m-2">
        {itemName + ":"}
      </strong>
      <strong
        style={{ fontSize: 15 }}
        className={
          "m-1 badge badge-" + (quantity === 0 ? "warning" : "success")
        }
      >
        {renderQuantity()}
      </strong>
      {quantity === 0 ? (
        <button
          onClick={handleDelete}
          style={{ fontSize: 15, padding: 2 }}
          className="btn btn-danger"
        >
          Remove
        </button>
      ) : null}
    </div>
  );
}

export default Counter;
