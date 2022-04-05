import { FC, useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";

interface CheckoutProps {}

export const Checkout: FC<CheckoutProps> = () => {
  const { cartItems, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>I amthe checkout page</h1>
      {cartItems.map((item) => {
        const { id, name, quantity } = item;

        return (
          <div key={id}>
            <h1>{name}</h1>
            <span>{quantity}</span>
            <button onChange={() => removeItemFromCart(item)}>decrement</button>
            <button onClick={() => addItemToCart(item)}>increment</button>
          </div>
        );
      })}
    </div>
  );
};
