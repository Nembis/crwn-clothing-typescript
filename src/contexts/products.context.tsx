import { FC, createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

interface ProductContextTypes {
  products: typeof PRODUCTS;
}

export const ProductContext = createContext<ProductContextTypes>({
  products: [],
});

export const ProductsProvider: FC<{}> = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
