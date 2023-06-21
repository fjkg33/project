import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../page/cartSlice';
import { Container } from 'react-bootstrap';

const Cart = () => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <Container>
      <h1>장바구니 페이지</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.img}</p>
          <h2>{item.name}</h2>
          <p>가격: {item.price}</p>
          <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
          <input
            type='number'
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => handleRemove(item.id)}>삭제</button>
        </div>
      ))}
    </Container>
  );
};

export default Cart;
