import { FC, useContext, useState, useEffect } from "react";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import { useParams } from "react-router-dom";
import {
  CategoryContext,
  CategoryItems,
} from "../../contexts/categories.context";
import { ProductCard } from "../../components/product-card/product-card.component";

interface CategoryProps {}

export const Category: FC<CategoryProps> = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoryContext);
  const [products, setProducts] = useState<CategoryItems[]>([]);

  useEffect(() => {
    if (category) {
      setProducts(() => categories[category]);
    }
  }, [category, categories]);

  return (
    <>
      <CategoryTitle>{category && category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};
