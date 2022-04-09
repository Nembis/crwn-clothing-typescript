import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";
import { CategoryItems } from "../../contexts/categories.context";
import { selectCategories } from "../../store/categories/category.selector";
import { CategoryContainer, CategoryTitle } from "./category.styles";

interface CategoryProps {}

export const Category: FC<CategoryProps> = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
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
