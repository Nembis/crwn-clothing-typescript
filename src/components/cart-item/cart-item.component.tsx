import { FC } from "react";
import "./cart-item.styles.scss";

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
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
