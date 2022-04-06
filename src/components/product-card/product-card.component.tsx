import { FC, useContext } from "react";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";
import { Button } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  };
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};
