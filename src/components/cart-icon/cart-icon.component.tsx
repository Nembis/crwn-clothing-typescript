import { FC, useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

interface CartIconProps {}

export const CartIcon: FC<CartIconProps> = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsOpen = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
