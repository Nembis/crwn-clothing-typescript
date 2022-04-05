import { FC, useContext, useState, useEffect } from "react";
import "./category.styles.scss";
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
      <h2 className="category-title">{category && category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};
