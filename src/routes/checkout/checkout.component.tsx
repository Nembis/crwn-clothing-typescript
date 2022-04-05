import { FC, useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";

interface CheckoutProps {}

export const Checkout: FC<CheckoutProps> = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <h1>I amthe checkout page</h1>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};
