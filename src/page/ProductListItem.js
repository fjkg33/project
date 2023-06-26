// ProductListItem.js
import React from "react";

const ProductListItem = ({
  item,
  onAdd,
  onIncrease,
  showCount = false
}) => {
  return (
    <div>
      <div>{item.img}</div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <h4>Price: {item.price}</h4>
      <button onClick={() => onAdd(item)}>
        Add to Cart
      </button>
      {showCount && (
        <>
          <h5>Count: {item.quantity}</h5>
          <button onClick={() => onIncrease(item.id)}>
            Increase Count
          </button>
        </>
      )}
    </div>
  );
};

export default ProductListItem;
