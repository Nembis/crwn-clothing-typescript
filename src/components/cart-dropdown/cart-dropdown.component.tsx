import { FC, useContext } from "react";
import { Button } from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { CartItem } from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

interface CartDropdownProps {}

export const CartDropdowon: FC<CartDropdownProps> = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button>Go to Checkout</Button>
      </div>
    </div>
  );
};
