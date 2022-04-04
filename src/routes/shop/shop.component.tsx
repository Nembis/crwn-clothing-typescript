import { FC, useContext } from "react";
import { ProductContext } from "../../contexts/products.context";

interface ShopProps {}

export const Shop: FC<ShopProps> = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      {products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};
