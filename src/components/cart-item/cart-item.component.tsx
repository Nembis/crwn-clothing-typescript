import { FC } from "react";
import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";

interface CartItemProps {
  cartItem: {
    name: string;
    quantity: number;
    imageUrl: string;
    price: number;
  };
}

export const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
