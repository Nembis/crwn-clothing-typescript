import { FC, useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import { ProductCard } from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

interface ShopProps {}

export const Shop: FC<ShopProps> = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};