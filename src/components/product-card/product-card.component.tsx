import { FC, useContext } from "react";
import "./product-card.styles.scss";
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
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};
