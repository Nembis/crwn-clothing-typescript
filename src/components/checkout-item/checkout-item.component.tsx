import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

interface CheckoutItemProps {
  cartItem: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  };
}

export const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  const decrement = () => dispatch(removeItemFromCart(cartItems, cartItem));

  const increment = () => dispatch(addItemToCart(cartItems, cartItem));

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decrement}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increment}>&#10095;</Arrow>
      </Quantity>
      <span className="price">{price}</span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
