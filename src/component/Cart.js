import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/createSlice";
import { Container } from "react-bootstrap";

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <Container>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item?.img}</div>
          <span>
            {item.name} - {item.price}
          </span>
          <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              handleQuantityChange(item.id, parseInt(e.target.value))
            }
          />
          <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <div>
        합계: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </div>
    </Container>
  );
}

export default Cart;
