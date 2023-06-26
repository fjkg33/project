import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/createSlice";

const products = [
  { id: 0, name: "스타브랜드", price: 2900 },
  { id: 1, name: "[뉴크롭]케냐AA키암부", price: 5800 },
  // ...
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.img}</div>
          <div>{product.name}</div>
          <div>{product.price} 원</div>
          <button onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
