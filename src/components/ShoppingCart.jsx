import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProducts,
  selectCartItems,
  selectCartTotal,
} from "../redux/selectors";
import { addToCart } from "../redux/store";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => dispatch(addToCart(product.id))}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} x {product.quantity || 1}
          </li>
        ))}
      </ul>
      <h2>Total</h2>
      <p>{total}</p>
    </div>
  );
};

export default ShoppingCart;
