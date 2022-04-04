import { FC } from "react";
import { Button } from "../button/button.component";
import "./cart-dropdown.styles.scss";

interface CartDropdownProps {}

export const CartDropdowon: FC<CartDropdownProps> = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Go to Checkout</Button>
      </div>
    </div>
  );
};
