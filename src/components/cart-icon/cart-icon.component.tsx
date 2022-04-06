import { FC, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

interface CartIconProps {}

export const CartIcon: FC<CartIconProps> = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsOpen = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
