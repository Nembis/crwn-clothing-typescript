import { FC, useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

interface CartIconProps {}

export const CartIcon: FC<CartIconProps> = () => {
  const { setIsCartOpen } = useContext(CartContext);

  const toggleIsOpen = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
